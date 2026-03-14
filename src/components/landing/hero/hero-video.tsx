export function HeroVideo() {
  return (
    <section className="w-full py-[15px] md:px-8 md:py-32 rounded-[2rem] md:rounded-3xl md:min-h-[400px] flex justify-center items-center bg-center bg-cover bg-no-repeat">
      <div
        className="w-[95%] md:w-full max-w-5xl aspect-video rounded-2xl relative border-4 border-white overflow-hidden"
        style={{ boxShadow: "rgba(0, 0, 0, 0.06) 0px 4px 32px 0px, rgba(255, 255, 255, 0.3) 0px 20px 40px" }}
      >
        <div className="w-full h-full rounded-2xl">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Falak Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
