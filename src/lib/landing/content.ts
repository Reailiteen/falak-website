import type {
  ChatDemoItem,
  FaqItem,
  PricingPlan,
  SupernovaFeature,
  SuperpowerItem,
  TestimonialItem,
} from "@/lib/landing/types";

export const STORE_LINKS = {
  ios: "https://apps.apple.com/app/id0000000000",
  android: "https://play.google.com/store/apps/details?id=com.memorae.app",
};

export const MEDIA = {
  heroDesktop: "https://cdn.memorae.ai/l3/Homepage-new-desktop.webp",
  heroMobile: "https://cdn.memorae.ai/l3/Mobile-2.webp",
  orb: "https://cdn.memorae.ai/assets/mm-1.webp",
  ring: "https://cdn.memorae.ai/l3/ring.webp",
  bubble: "https://cdn.memorae.ai/l3/bubble-home2.webp",
  sixNew: "https://cdn.memorae.ai/l3/6-new.webp",

  logoWhite: "https://cdn.memorae.ai/l3/MemoraeLogoWhite.png",
  logoHome: "https://cdn.memorae.ai/l3/Memorae_logo_home_white.png",
  memoraeLogo: "https://cdn.memorae.ai/l4/MemoraeLogo.webp",

  note1: "https://cdn.memorae.ai/l3/image%20290.png",
  note2: "https://cdn.memorae.ai/l3/image%20294.png",
  note3: "https://cdn.memorae.ai/l3/image%20293.png",

  mascot: "https://cdn.memorae.ai/l3/Gemini_Generated_Image_cy1cxhcy1cxhcy1c.webp",

  unlimitedReminders: "https://cdn.memorae.ai/l3/Recordatorios%20ilimitados.webp",
  memoryTrunk: "https://cdn.memorae.ai/l3/Bau%CC%81l%20de%20los%20recuerdos.webp",
  memoryEverywhere: "https://cdn.memorae.ai/l3/Memoria%20en%20todas%20partes.webp",
  createLists: "https://cdn.memorae.ai/l3/create%20and%20manage%20lists.webp",
  friendReminders: "https://cdn.memorae.ai/l3/friend%20to%20friend%20reminders.webp",
  imageIntelligence: "https://cdn.memorae.ai/l3/image%20intelligence%20(3).webp",
  googleWorkspace5: "https://cdn.memorae.ai/l3/Google%20Workspace%20integration-5.webp",
  googleWorkspace6: "https://cdn.memorae.ai/l3/Google%20Workspace%20integration-6.webp",
  googleWorkspace7: "https://cdn.memorae.ai/l3/Google%20Workspace%20integration-7.webp",
  prioritySupport3: "https://cdn.memorae.ai/l3/Priority%20support-3.webp",
  prioritySupport5: "https://cdn.memorae.ai/l3/Priority%20support-5.webp",
  prioritySupport6: "https://cdn.memorae.ai/l3/Priority%20support-6.webp",
  prioritySupport7: "https://cdn.memorae.ai/l3/Priority%20support-7.webp",

  forget2: "https://cdn.memorae.ai/l3/forget_card2_bg.webp",
  forget3: "https://cdn.memorae.ai/l3/forget_card3_bg.webp",
  forget4: "https://cdn.memorae.ai/l3/forget_card4_bg.webp",
  forget2Mob: "https://cdn.memorae.ai/l3/forget_card2_bg_mob.webp",
  forget3Mob: "https://cdn.memorae.ai/l3/forget_card3_bg_mob.webp",
  forget4Mob: "https://cdn.memorae.ai/l3/forget_card4_bg_mob.webp",
  multiCards: "https://cdn.memorae.ai/l3/multicards1_bg_2.webp",

  originThumb: "https://cdn.memorae.ai/l3/origin-thumbnail.webp",
  supernovaThumb: "https://cdn.memorae.ai/l3/supernova-thumbnail.webp",
  bigbangThumb: "https://cdn.memorae.ai/l3/bigbang-thumbnail.webp",
  originMascot: "https://cdn.memorae.ai/l3/origin-l5-memo-mascot.webp",
  supernovaMascot: "https://cdn.memorae.ai/l3/supernova-l5-memo-mascot.webp",
  bigbangMascot: "https://cdn.memorae.ai/l3/bigbanh-l5-memo-mascot.webp",
  supernovaRow: "https://cdn.memorae.ai/assets/supernova-row.webp",

  writingImage: "https://cdn.memorae.ai/l3/Writing_image.webp",
  brainImage: "https://cdn.memorae.ai/l3/Brain_image.webp",
  chaosDesk: "https://cdn.memorae.ai/l3/chaos_desk_bg.webp",
  chaosMem: "https://cdn.memorae.ai/l3/chaos_mem.webp",
  memoraeInspirational: "https://cdn.memorae.ai/l3/memorae_inspirational.webp",

  frame2147238407: "https://cdn.memorae.ai/l3/Frame%202147238407.webp",
  frame2147238144: "https://cdn.memorae.ai/l3/Frame%202147238144-2.webp",
  frame2147238145: "https://cdn.memorae.ai/l3/Frame%202147238145-2.webp",
  frame369458: "https://cdn.memorae.ai/l3/Frame%20369458-2.webp",

  appPromo: "https://cdn.memorae.ai/l3/Frame%2014.png",
  appStoreIcon: "https://cdn.memorae.ai/l3/Appstore%20Icon.png",
  appStoreBadge: "https://cdn.memorae.ai/l3/logos_apple-app-store.png",
  googlePlayBadge: "https://cdn.memorae.ai/l3/logos_google-play.png",
  videoPlaceholder: "https://www.youtube.com/embed/dQw4w9WgXcQ",

  human1: "https://cdn.memorae.ai/l3/human1_testimonial.webp",
  human2: "https://cdn.memorae.ai/l3/human2_testimonial.webp",
  human3: "https://cdn.memorae.ai/l3/human3_testimonial.webp",
  human4: "https://cdn.memorae.ai/l3/human4_testimonial.webp",
  human5: "https://cdn.memorae.ai/l3/human5_testimonial.webp",
  human6: "https://cdn.memorae.ai/l3/human6_testimonial.webp",
  human7: "https://cdn.memorae.ai/l3/human7_testimonial.webp",
  human8: "https://cdn.memorae.ai/l3/human8_testimonial.webp",
  human9: "https://cdn.memorae.ai/l3/human9_testimonial.webp",
  Human1: "https://cdn.memorae.ai/l3/Human1.webp",
  Human2: "https://cdn.memorae.ai/l3/Human2.webp",
  Human3: "https://cdn.memorae.ai/l3/Human3.webp",
  Human4: "https://cdn.memorae.ai/l3/Human4.webp",

  starHome: "https://cdn.memorae.ai/l3/star_home.png",
  menuIcon: "https://cdn.memorae.ai/l3/menu.png",
  groupIcon: "https://cdn.memorae.ai/l3/Group.png",
  guaranteeIcon: "https://cdn.memorae.ai/l3/Guarantee.png",
  image318: "https://cdn.memorae.ai/l3/image%20318.png",
  image10: "https://cdn.memorae.ai/l3/image%2010.png",
  notifIcon1: "https://cdn.memorae.ai/l3/_Notification-iconType.png",
  notifIcon2: "https://cdn.memorae.ai/l3/_Notification-iconType-2.png",

  footerBg: "https://cdn.memorae.ai/l3/MemoraeFooterbg.webp",

  videoThumb: "https://fast.vidalytics.com/video/ZIosmfug/tfJH1MSiCKkkNxaS/img/thumbnail/blob-69031b96c7a12.jpg",

  neurology: "https://cdn.memorae.ai/l3/neurology.png",
  treasureChest: "https://cdn.memorae.ai/l3/treasure-chest-outline%201-2.png",
  group37143: "https://cdn.memorae.ai/l3/Group%2037143.png",
  group37148: "https://cdn.memorae.ai/l3/Group%2037148-2.png",
  group37157: "https://cdn.memorae.ai/l3/Group%2037157.png",
  group37158: "https://cdn.memorae.ai/l3/Group%2037158.png",
  group2147203024: "https://cdn.memorae.ai/l3/Group%202147203024-2.png",
  group2147203025: "https://cdn.memorae.ai/l3/Group%202147203025.png",
  group2147203027: "https://cdn.memorae.ai/l3/Group%202147203027-2.png",
  group2147203028: "https://cdn.memorae.ai/l3/Group%202147203028.png",
};

export const HERO = {
  badge: "200k+ already forgot to forget",
  rating: "4.8",
  title: "You are not designed to remember everything. Memorae is.",
  ctaTryFree: "Try for Free",
  ctaTalk: "Talk to Memorae",
};

export const MESSAGE_LINES = [
  "Your mind never stops. And yet, you still forget things.",
  "It's not a lack of discipline.",
];

export const MEMORY_SYSTEM = {
  heading: "Memorae takes care of remembering, organizing, and executing for you.",
  line1: "You write what you need.",
  line2: "Memorae saves it, organizes it, and acts when it is time.",
};

export const SUPERPOWERS: SuperpowerItem[] = [
  {
    id: "unlimited-reminders",
    title: "Unlimited reminders",
    description: "Set as many reminders as you need. No limits.",
    image: MEDIA.unlimitedReminders,
    icon: MEDIA.neurology,
  },
  {
    id: "memory-trunk",
    title: "Memory trunk",
    description: "Store everything you want to remember in one place.",
    image: MEDIA.memoryTrunk,
    icon: MEDIA.treasureChest,
  },
  {
    id: "memory-everywhere",
    title: "Memory everywhere",
    description: "Access your memory from any channel, anywhere.",
    image: MEDIA.memoryEverywhere,
    icon: MEDIA.group37143,
  },
  {
    id: "create-lists",
    title: "Create & manage lists",
    description: "Organize your thoughts into actionable lists.",
    image: MEDIA.createLists,
    icon: MEDIA.group37148,
  },
  {
    id: "friend-reminders",
    title: "Friend-to-friend reminders",
    description: "Send reminders to friends and family.",
    image: MEDIA.friendReminders,
    icon: MEDIA.group37157,
  },
  {
    id: "daily-briefing",
    title: "Daily briefing",
    description: "Get a summary of your day, every morning.",
    image: MEDIA.prioritySupport3,
    icon: MEDIA.group37158,
  },
  {
    id: "image-intelligence",
    title: "Action from Image",
    description: "Take a photo and Memorae will extract action items.",
    image: MEDIA.imageIntelligence,
    icon: MEDIA.group2147203024,
    isNew: true,
  },
  {
    id: "google-workspace",
    title: "Google Workspace integration",
    description: "Connect Gmail, Calendar, and Drive seamlessly.",
    image: MEDIA.googleWorkspace5,
    icon: MEDIA.group2147203025,
  },
  {
    id: "long-term-memory",
    title: "Long-term memory",
    description: "Memorae remembers context from past conversations.",
    image: MEDIA.prioritySupport5,
    icon: MEDIA.neurology,
  },
  {
    id: "dashboard",
    title: "Full Control Dashboard",
    description: "Manage everything from a single, powerful dashboard.",
    image: MEDIA.prioritySupport6,
    icon: MEDIA.group2147203027,
    isNew: true,
  },
  {
    id: "inbox-organizer",
    title: "Automatic Inbox Organizer",
    description: "Memorae categorizes and prioritizes your inbox automatically.",
    image: MEDIA.googleWorkspace6,
    icon: MEDIA.group2147203028,
    isNew: true,
  },
  {
    id: "autopilot-email",
    title: "Autopilot Email Drafting",
    description: "Let Memorae draft email responses for you.",
    image: MEDIA.googleWorkspace7,
    icon: MEDIA.group2147203025,
  },
  {
    id: "multi-calendar",
    title: "Multi-calendar integration",
    description: "Sync with multiple calendars at once.",
    image: MEDIA.prioritySupport7,
    icon: MEDIA.group37143,
  },
];

export const CHAT_DEMOS: ChatDemoItem[] = [
  {
    id: "add-on-go",
    title: "Add things on the go",
    userMessage: "Remind me to buy flowers for Mom on Saturday at 10am",
    botReply: "Done! I'll remind you Saturday at 10:00 AM to buy flowers for Mom.",
  },
  {
    id: "see-pending",
    title: "See only what's pending",
    userMessage: "What do I have pending today?",
    botReply: "You have 3 pending items for today: Call dentist, Send report, Pick up groceries.",
  },
  {
    id: "review-ideas",
    title: "Review ideas later",
    userMessage: "Save this idea: launch a weekend cooking class for beginners",
    botReply: "Idea saved to your memory trunk! You can review it anytime.",
  },
  {
    id: "convert-list",
    title: "Convert list to reminder",
    userMessage: "Turn my shopping list into a reminder for tomorrow at 5pm",
    botReply: "Your shopping list is now a reminder set for tomorrow at 5:00 PM.",
  },
  {
    id: "clear-done",
    title: "Clear done items",
    userMessage: "Remove all completed items from my to-do list",
    botReply: "Done! 4 completed items have been cleared from your to-do list.",
  },
  {
    id: "reorder-priorities",
    title: "Reorder priorities",
    userMessage: "Move 'Finish presentation' to the top of my list",
    botReply: "'Finish presentation' is now your top priority.",
  },
  {
    id: "draft-emails",
    title: "Draft emails",
    userMessage: "Draft an email to my team about the Monday meeting",
    botReply: "Here's a draft: 'Hi team, just a reminder about our Monday meeting at 10 AM...'",
  },
  {
    id: "sync-schedule",
    title: "Sync schedule",
    userMessage: "What does my calendar look like this week?",
    botReply: "This week you have 5 meetings, 2 deadlines, and a dentist appointment on Thursday.",
  },
  {
    id: "store-files",
    title: "Store files",
    userMessage: "Save this PDF to my project folder",
    botReply: "PDF saved to your 'Project' folder in the memory trunk.",
  },
  {
    id: "remind-others",
    title: "Remind others",
    userMessage: "Remind Sarah to send me the contract by Friday",
    botReply: "I'll send Sarah a reminder about the contract, due Friday.",
  },
  {
    id: "action-from-image",
    title: "Action from images",
    userMessage: "Extract the action items from this whiteboard photo",
    botReply: "Found 3 action items: 1. Update wireframes 2. Schedule review 3. Send client proposal",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "origin",
    name: "Origin",
    tier: "OPERATIONAL MEMORY",
    monthlyPrice: "$6",
    annualPrice: "$3",
    mascotImage: MEDIA.originMascot,
    thumbnailImage: MEDIA.originThumb,
    features: [
      "Unlimited reminders",
      "Memory trunk",
      "Daily briefing",
      "WhatsApp & Telegram",
      "Basic lists",
      "Email support",
    ],
  },
  {
    id: "supernova",
    name: "Supernova",
    tier: "STRATEGIC MEMORY",
    monthlyPrice: "$12",
    annualPrice: "$6",
    mascotImage: MEDIA.supernovaMascot,
    thumbnailImage: MEDIA.supernovaThumb,
    popular: true,
    features: [
      "Everything in Origin",
      "Friend-to-friend reminders",
      "Google Workspace integration",
      "Long-term memory",
      "Action from Image",
      "Priority support",
    ],
  },
  {
    id: "bigbang",
    name: "Big Bang",
    tier: "EXECUTIVE MEMORY",
    monthlyPrice: "$36",
    annualPrice: "$18",
    mascotImage: MEDIA.bigbangMascot,
    thumbnailImage: MEDIA.bigbangThumb,
    features: [
      "Everything in Supernova",
      "Full Control Dashboard",
      "Autopilot Email Drafting",
      "Automatic Inbox Organizer",
      "Multi-calendar integration",
      "Dedicated account manager",
    ],
  },
];

export const SUPERNOVA_FEATURES: SupernovaFeature[] = [
  { icon: MEDIA.neurology, title: "Unlimited reminders", description: "Set all the reminders you need" },
  { icon: MEDIA.treasureChest, title: "Memory trunk", description: "Store everything safely" },
  { icon: MEDIA.group37143, title: "Memory everywhere", description: "Access from any channel" },
  { icon: MEDIA.group37148, title: "Create & manage lists", description: "Organize your tasks" },
  { icon: MEDIA.group37157, title: "Friend-to-friend reminders", description: "Remind your people" },
  { icon: MEDIA.group37158, title: "Daily briefing", description: "Start every day informed" },
  { icon: MEDIA.group2147203024, title: "Action from Image", description: "Extract actions from photos" },
  { icon: MEDIA.group2147203025, title: "Google Workspace", description: "Gmail, Calendar, Drive" },
  { icon: MEDIA.neurology, title: "Long-term memory", description: "Context that persists" },
  { icon: MEDIA.group2147203027, title: "Full Control Dashboard", description: "Manage everything" },
  { icon: MEDIA.group2147203028, title: "Inbox Organizer", description: "Auto-categorize email" },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Christopher Fox",
    role: "Founder",
    quote: "Memorae has completely changed the way I manage my day. I no longer worry about forgetting important things.",
    photo: MEDIA.human1,
  },
  {
    name: "Robbie Lockie",
    role: "Founder",
    quote: "The integration with WhatsApp makes it incredibly natural to use. It fits right into my workflow.",
    photo: MEDIA.human2,
  },
  {
    name: "Yukari Aotani",
    role: "Violinist",
    quote: "As a musician with a hectic schedule, Memorae keeps me on track without adding more stress.",
    photo: MEDIA.human3,
  },
  {
    name: "Sergio Arguero",
    role: "Financial advisor",
    quote: "I recommend Memorae to all my clients. It helps them stay on top of deadlines and commitments.",
    photo: MEDIA.human4,
  },
  {
    name: "Fabiola Perez",
    role: "Dentist",
    quote: "Managing a clinic is chaotic. Memorae helps me remember every follow-up and patient note.",
    photo: MEDIA.human5,
  },
  {
    name: "Santiago Nicolas",
    role: "Student",
    quote: "I use Memorae for all my university deadlines. It's like having a personal assistant in my pocket.",
    photo: MEDIA.human6,
  },
  {
    name: "Check Eng Mok",
    role: "Marketing Head",
    quote: "Our team's productivity improved significantly since we started using Memorae for project tracking.",
    photo: MEDIA.human7,
  },
  {
    name: "Pablo Lopez",
    role: "Student",
    quote: "Memorae helped me organize my thesis research. I never lose an idea anymore.",
    photo: MEDIA.human8,
  },
  {
    name: "Lassi Paasi",
    role: "Carpenter",
    quote: "I use it for material lists and client follow-ups. Simple, effective, and always there when I need it.",
    photo: MEDIA.human9,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is Memorae and how can it help me?",
    answer: "Memorae is your personal memory assistant. It helps you remember, organize, and act on everything that matters -- from daily reminders to long-term goals. Just tell Memorae what you need, and it takes care of the rest.",
  },
  {
    question: "What types of reminders and features does Memorae offer?",
    answer: "Memorae offers unlimited reminders, smart lists, daily briefings, friend-to-friend reminders, Google Workspace integration, action from images, inbox organization, and much more depending on your plan.",
  },
  {
    question: "Can I set recurring reminders?",
    answer: "Yes! You can set reminders that repeat daily, weekly, monthly, or on custom schedules. Memorae will keep reminding you until you mark them as done.",
  },
  {
    question: "Does Memorae spy on me or can I sleep peacefully knowing my data is safe?",
    answer: "Your privacy is our top priority. Memorae does not read, analyze, or sell your personal data. All communications are encrypted, and you remain in full control of your information at all times.",
  },
  {
    question: "How does Memorae protect my privacy and data security?",
    answer: "We use end-to-end encryption for all messages, store data on secure servers, and follow strict data protection regulations. Your data is never shared with third parties.",
  },
  {
    question: "What advantages does Memorae offer compared to other tools?",
    answer: "Memorae integrates directly into the channels you already use (WhatsApp, Telegram, email), understands natural language, remembers context from past conversations, and acts proactively on your behalf.",
  },
  {
    question: "Is Memorae available 24/7?",
    answer: "Yes, Memorae is available around the clock, 365 days a year. Your memory assistant never sleeps, so you can rely on it anytime.",
  },
  {
    question: "Does Memorae sync with calendars like Google Calendar?",
    answer: "Absolutely! Memorae syncs with Google Calendar and other calendar services, so your reminders and events are always up to date across all your devices.",
  },
  {
    question: "Are there limits to the number of reminders I can set up?",
    answer: "With any paid plan, you get unlimited reminders. There are no caps on how many reminders, lists, or memory items you can create.",
  },
];

export const CHAOS_SECTION = {
  heading: "Chaos won't win twice.",
  subheading: "We're not here to create just another app.",
  paragraphs: [
    "We believe the real problem isn't organization -- it's mental overload. Every notification, every to-do list, every sticky note adds weight to your mind.",
    "Memorae was built to decompress that weight. To take the noise and turn it into clarity.",
  ],
  cards: [
    { title: "We don't organize lives: we decompress them.", bg: MEDIA.forget2 },
    { title: "Chaos is our enemy.", bg: MEDIA.forget3 },
    { title: "We're not just an app. We're a shift in logic.", bg: MEDIA.forget4 },
    { title: "What we are creating doesn't exist.", bg: MEDIA.chaosDesk },
  ],
};

export const STATS = {
  peacefulMinds: "200k+",
  remindersSent: "1.2M+",
  forgotToForget: "200k+",
};

export const FOOTER = {
  tagline: "You just live. Memorae remembers for you.",
  subtitle: "Your to-do list asked us for help. Here we are.",
  links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Cookie Settings", href: "#" },
    { label: "Legal Notice", href: "#" },
    { label: "Communication Channels", href: "#" },
    { label: "Refunds and Returns Policy", href: "#" },
  ],
  copyright: "2026 Memorae Inc. All rights reserved.",
};

export const SEO = {
  title: "Memorae | Your personal memory assistant",
  description: "Memorae helps you remember, organize, and act. Unlimited reminders, smart lists, and AI-powered memory -- across WhatsApp, Telegram, email, and the Memorae App.",
};
