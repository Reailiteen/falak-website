"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

const CHIPS = [
  "Too many lists",
  "Forgot again",
  "Brain overload",
  "Everything slips",
  "Missed deadline",
  "Memory fog",
];

const CHIP_COLOR = { bg: "#EBEBEB", border: "#CCCCCC", text: "#555555" };

function drawRoundRect(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

export function ProblemCanvas({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRun.current) {
          hasRun.current = true;
          observer.disconnect();
          runSimulation(canvas, container);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 40 }}
    />
  );
}

function runSimulation(canvas: HTMLCanvasElement, container: HTMLDivElement) {
  const dpr = window.devicePixelRatio || 1;
  const W = container.offsetWidth;
  const H = container.offsetHeight;

  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";

  const ctx = canvas.getContext("2d")!;
  ctx.scale(dpr, dpr);

  const CHIP_H = 34;
  const FONT = `600 13px Inter, sans-serif`;
  ctx.font = FONT;

  // Build chip data with measured widths
  const chips = CHIPS.map((label) => {
    const tw = ctx.measureText(label).width;
    const w = tw + 28;
    return { label, w, h: CHIP_H, color: CHIP_COLOR };
  });

  // Setup Matter.js (no built-in renderer)
  const engine = Matter.Engine.create({ gravity: { y: 2.2 } });
  const world = engine.world;

  // Boundaries
  Matter.World.add(world, [
    Matter.Bodies.rectangle(W / 2, H + 30, W * 3, 60, { isStatic: true, label: "floor" }),
    Matter.Bodies.rectangle(-30, H / 2, 60, H * 3, { isStatic: true, label: "wallL" }),
    Matter.Bodies.rectangle(W + 30, H / 2, 60, H * 3, { isStatic: true, label: "wallR" }),
  ]);

  // Letter bodies — measure each letter span in the headline
  const containerRect = container.getBoundingClientRect();
  const letterSpans = container.querySelectorAll<HTMLElement>("h1 span span");

  letterSpans.forEach((el) => {
    const r = el.getBoundingClientRect();
    const x = r.left - containerRect.left + r.width / 2;
    const y = r.top - containerRect.top + r.height / 2;
    Matter.World.add(world, Matter.Bodies.rectangle(x, y, r.width * 0.82, r.height * 0.9, {
      isStatic: true,
      friction: 0.9,
      restitution: 0.15,
      label: "letter",
    }));
  });

  // Drop chips one by one with a stagger
  const chipBodies: Array<{ body: Matter.Body } & typeof chips[0]> = [];

  chips.forEach((chip, i) => {
    setTimeout(() => {
      const lo = W * 0.25 + chip.w / 2;
      const hi = W * 0.75 - chip.w / 2;
      const x = lo + Math.random() * Math.max(0, hi - lo);
      const body = Matter.Bodies.rectangle(x, -chip.h * 2, chip.w, chip.h, {
        friction: 0.65,
        restitution: 0.28,
        frictionAir: 0.012,
        angle: (Math.random() - 0.5) * 0.5,
        label: "chip",
      });
      Matter.World.add(world, body);
      chipBodies.push({ body, ...chip });
    }, i * 180);
  });

  // Render loop
  let raf: number;
  let settled = 0;

  function draw(chip: typeof chipBodies[0]) {
    const { x, y } = chip.body.position;
    const a = chip.body.angle;
    const hw = chip.w / 2;
    const hh = chip.h / 2;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(a);

    // Shadow
    ctx.shadowColor = "rgba(0,0,0,0.12)";
    ctx.shadowBlur = 6;
    ctx.shadowOffsetY = 2;

    drawRoundRect(ctx, -hw, -hh, chip.w, chip.h, 8);
    ctx.fillStyle = chip.color.bg;
    ctx.fill();

    ctx.shadowColor = "transparent";
    ctx.strokeStyle = chip.color.border;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = chip.color.text;
    ctx.font = FONT;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(chip.label, 0, 0);

    ctx.restore();
  }

  function tick() {
    Matter.Engine.update(engine, 1000 / 60);
    ctx.clearRect(0, 0, W, H);
    for (const chip of chipBodies) draw(chip);

    // Stop once all bodies are resting
    const atRest = chipBodies.length === CHIPS.length &&
      chipBodies.every(({ body }) =>
        Matter.Vector.magnitude(body.velocity) < 0.3 &&
        Math.abs(body.angularVelocity) < 0.02
      );

    if (atRest) {
      settled++;
      if (settled > 30) {
        cancelAnimationFrame(raf);
        // Final static draw
        ctx.clearRect(0, 0, W, H);
        for (const chip of chipBodies) draw(chip);
        return;
      }
    } else {
      settled = 0;
    }

    raf = requestAnimationFrame(tick);
  }

  raf = requestAnimationFrame(tick);
}
