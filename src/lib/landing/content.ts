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
  android: "https://play.google.com/store/apps/details?id=com.falak.app",
};

export const MEDIA = {
  heroDesktop: "https://cdn.memorae.ai/l3/Homepage-new-desktop.webp",
  heroMobile: "https://cdn.memorae.ai/l3/Mobile-2.webp",
  orb: "https://cdn.memorae.ai/assets/mm-1.webp",
  ring: "https://cdn.memorae.ai/l3/ring.webp",
  bubble: "https://cdn.memorae.ai/l3/bubble-home2.webp",
  sixNew: "https://cdn.memorae.ai/l3/6-new.webp",

  logoWhite: "https://cdn.memorae.ai/l3/MemoraeLogoWhite.png",
  logoHome: "/images/branding/logo-white.png",
  logoDark: "https://cdn.memorae.ai/l3/Memorae_logo_home_dark.png",
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
  originMascot: "/images/pricing/plan-orbit.png",
  supernovaMascot: "/images/pricing/plan-constellation.png",
  bigbangMascot: "/images/pricing/plan-sanctuary.png",
  supernovaRow: "https://cdn.memorae.ai/assets/supernova-row.webp",

  writingImage: "https://cdn.memorae.ai/l3/Writing_image.webp",
  brainImage: "https://cdn.memorae.ai/l3/Brain_image.webp",
  chaosDesk: "https://cdn.memorae.ai/l3/chaos_desk_bg.webp",
  chaosMem: "/images/mascots/falak-mascot-chaos.png",
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
  human10: "https://cdn.memorae.ai/l3/human10_testimonial.webp",
  human11: "https://cdn.memorae.ai/l3/human11_testimonial.webp",
  human12: "https://cdn.memorae.ai/l3/human12_testimonial.webp",
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

  // Local mascots
  mascotDefault: "/images/mascots/falak-mascot.png",
  mascotCrying: "/images/mascots/falak-mascot-crying.png",
  mascotNoBg: "/images/mascots/falak-mascot-no-bg.png",

  // Local UI
  questsBg: "/images/ui/quests-calm-bg.png",
  footerLocalBg: "/images/ui/footer-bg.png",

  // Local hero
  familyHeroMobile: "/images/hero/family-hero-mobile.png",
  familyHeroDesktop: "/images/hero/family-hero-desktop.png",

  // Local portals
  portalMobile: "/images/ui/portal-mobile.png",
  portalDesktop: "/images/ui/portal-desktop.png",
};

export const HERO = {
  badge: "200k+ already forgot to forget",
  rating: "4.8",
  title: "Raising children shouldn't mean nagging. Falak brings clarity.",
  ctaTryFree: "Try for Free",
  ctaTalk: "Guide with Falak",
};

export const MESSAGE_LINES = [
  "Your mind never stops. And yet, you still forget things.",
  "It's not a lack of discipline.",
];

export const MEMORY_SYSTEM = {
  heading: "Falak guides your child's growth, one day at a time.",
  line1: "You set the intention.",
  line2: "Falak builds the routine, tracks progress, and nudges you when it counts.",
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
    description: "Take a photo and Falak will extract action items.",
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
    description: "Falak remembers context from past conversations.",
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
    description: "Falak categorizes and prioritizes your inbox automatically.",
    image: MEDIA.googleWorkspace6,
    icon: MEDIA.group2147203028,
    isNew: true,
  },
  {
    id: "autopilot-email",
    title: "Autopilot Email Drafting",
    description: "Let Falak draft email responses for you.",
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
    id: "orbit",
    name: "Orbit",
    tier: "FOUNDATION FOR FAMILIES",
    monthlyPrice: "$6",
    annualPrice: "$3",
    mascotImage: MEDIA.originMascot,
    thumbnailImage: MEDIA.originThumb,
    features: [
      "Quest-based responsibility system",
      "Star rewards & streak tracking",
      "Effortless Quest Management",
      "Family Hub (multi-child support)",
      "Weekly Growth Summaries",
    ],
  },
  {
    id: "constellation",
    name: "Constellation",
    tier: "ADVANCED GUIDANCE & INSIGHTS",
    monthlyPrice: "$12",
    annualPrice: "$6",
    mascotImage: MEDIA.supernovaMascot,
    thumbnailImage: MEDIA.supernovaThumb,
    popular: true,
    features: [
      "Everything in Orbit",
      "Tarbiyah Insights Dashboard",
      "Smart Quest Suggestions",
      "Advanced Reward Economy",
      "Parent–Child Progress Feed",
      "Communication Bridge",
    ],
  },
  {
    id: "sanctuary",
    name: "Sanctuary",
    tier: "INSTITUTIONS & COMMUNITY",
    monthlyPrice: "$36",
    annualPrice: "$18",
    mascotImage: MEDIA.bigbangMascot,
    thumbnailImage: MEDIA.bigbangThumb,
    contactUs: true,
    features: [
      "Everything in Constellation",
      "Classroom & Group Quest Systems",
      "Parent–Teacher Shared Dashboards",
      "Institutional Growth Analytics",
      "Custom Program Builder",
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
    title: "Tool of the year",
    quote: "Without a doubt, it's the best tool I've subscribed to this year. Keep up the good work!",
    photo: MEDIA.human1,
  },
  {
    name: "Robbie Lockie",
    role: "Founder",
    title: "Game-changer",
    quote: "I have ADHD and this tool has completely changed my life. It's like having a second brain! 🧠",
    photo: MEDIA.human2,
  },
  {
    name: "Yukari Aotani",
    role: "Violinist",
    title: "It's a lifesaver",
    quote: "Thanks to Falak! It's something that has changed my life and saved it. Yesterday I discovered the family reminders feature and it was like: wooooooooooooooooooow!",
    photo: MEDIA.human3,
  },
  {
    name: "Sergio Argüero",
    role: "Financial advisor",
    title: "A miracle!",
    quote: "A marvel. Now my memory has a name, and it's called Falak.",
    photo: MEDIA.human4,
  },
  {
    name: "Fabiola Pérez",
    role: "Dentist",
    title: "The best invention of the century",
    quote: "Since I started using it, it's impossible for me to forget anything. Imagine now that I can also make sure others don't forget! The best invention of the century for people who live life at 200 km/h.",
    photo: MEDIA.human5,
  },
  {
    name: "Santiago Nicolás",
    role: "Student",
    title: "The best thing that ever happened to me",
    quote: "The best tool I've ever subscribed to. I haven't forgotten a task or a gift since. It's been one of the best investments of my life.",
    photo: MEDIA.human6,
  },
  {
    name: "Check Eng Mok",
    role: "Marketing Head",
    title: "I love it!",
    quote: "Finally, a new version of the Asian saying: 'Remind me to remind you so you remember to do such and such.' I love it! 😄",
    photo: MEDIA.human7,
  },
  {
    name: "Pablo Lopez",
    role: "Student",
    title: "Finally my mind is free",
    quote: "Falak has been a game-changer for me! It helps my family stay on top of everything from important tasks to the smallest daily details. Now my mind is free to focus on what really matters, because Falak remembers everything for me. I've even noticed I'm much less stressed!",
    photo: MEDIA.human8,
  },
  {
    name: "Lassi Paasi",
    role: "Carpenter",
    title: "This is brilliant!",
    quote: "At first I was a little hesitant, and in fact my first real test was asking Falak to remind me to cancel my subscription the day before the trial period ended. Obviously, that was the most useless reminder ever. This is brilliant!",
    photo: MEDIA.human9,
  },
  {
    name: "Vineet Relia",
    role: "Crisis Manager",
    title: "Speechless",
    quote: "I used to keep sending text and voice notes to myself all the time. This has really changed that for me and also a lot of embarrassment asking her to remind me personal things.",
    photo: MEDIA.human10,
  },
  {
    name: "Chuks Dibigbo",
    role: "Photographer",
    title: "How could I live without it?",
    quote: "Gosh, this tool has been incredible. It's been such a lifesaver in a short space of time.",
    photo: MEDIA.human11,
  },
  {
    name: "Shayrah Phillips",
    role: "Doctor",
    title: "Simply phenomenal",
    quote: "Life changer. It just makes my family's life so much easier. Forever grateful to the creators. I even call it 'Falak' now, that's how close we are. And with everything new that's coming... it's simply phenomenal 🤩",
    photo: MEDIA.human12,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is Falak and how can it help my family?",
    answer: "Falak is your family's quest and responsibility companion. It helps children build good habits through quests, star rewards, and streak tracking — while giving parents full visibility and control. Just set up a quest and Falak takes care of the rest.",
  },
  {
    question: "What types of features does Falak offer?",
    answer: "Falak offers quest-based responsibility systems, star rewards, streak tracking, a Family Hub for multi-child support, weekly growth summaries, Tarbiyah insights, smart quest suggestions, and much more depending on your plan.",
  },
  {
    question: "Can I set recurring quests for my children?",
    answer: "Yes! You can set quests that repeat daily, weekly, or on custom schedules. Falak will keep tracking progress until the quest is completed.",
  },
  {
    question: "Does Falak spy on my family or is our data safe?",
    answer: "Your privacy is our top priority. Falak does not read, analyze, or sell your personal data. All communications are encrypted, and you remain in full control of your family's information at all times.",
  },
  {
    question: "How does Falak protect my privacy and data security?",
    answer: "We use end-to-end encryption for all data, store it on secure servers, and follow strict data protection regulations. Your family's data is never shared with third parties.",
  },
  {
    question: "What advantages does Falak offer compared to other parenting tools?",
    answer: "Falak combines Islamic values with modern gamification, making responsibility-building fun and meaningful for children. It gives parents real insights through the Tarbiyah dashboard and works seamlessly across the whole family.",
  },
  {
    question: "Is Falak available 24/7?",
    answer: "Yes, Falak is available around the clock, 365 days a year. Your family's companion never sleeps, so you can rely on it anytime.",
  },
  {
    question: "How many children can I add to my family account?",
    answer: "The Orbit plan supports multiple children through the Family Hub. All plans include multi-child support so every member of your family can have their own quests and progress tracking.",
  },
  {
    question: "Are there limits to the number of quests I can set up?",
    answer: "With any paid plan, you get unlimited quests and reminders. There are no caps on how many quests, rewards, or family members you can add.",
  },
];

export const CHAOS_SECTION = {
  heading: "Chaos won't win twice.",
  subheading: "We're not here to create just another app.",
  paragraphs: [
    "We believe the real problem isn't organization -- it's mental overload. Every notification, every to-do list, every sticky note adds weight to your mind.",
    "Falak was built to lift that weight. To take the noise of parenting and turn it into clarity.",
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
  tagline: "Raise them right. Falak lights the way.",
  subtitle: "Your children deserve the best upbringing. We built Falak for that.",
  links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms and Conditions", href: "/terms" },
    { label: "Cookie Settings", href: "#" },
    { label: "Legal Notice", href: "#" },
    { label: "Communication Channels", href: "#" },
    { label: "Refunds and Returns Policy", href: "#" },
  ],
  copyright: "© 2026 Falak. All rights reserved.",
};

export const SEO = {
  title: "Falak | Raise children with clarity and purpose",
  description: "Falak helps families build strong habits, meaningful routines, and lasting values — through quests, rewards, and Tarbiyah insights.",
};

export const SUPERPOWER_CARDS = [
  { id: "prayer",    label: "Daily Prayer Habits",     navTitle: "Peaceful Prayer",     image: "/images/superpowers/falak-praying-peacefully.png" },
  { id: "learning",  label: "Smart Learning Path",     navTitle: "Study Time",          image: "/images/superpowers/falak-learning.png" },
  { id: "quests",    label: "Daily Challenges",        navTitle: "Quests",              image: "/images/superpowers/falak-quests.png" },
  { id: "treasure",  label: "Discover Hidden Rewards", navTitle: "Discover Rewards",    image: "/images/superpowers/falak-treasure.png" },
  { id: "rewards",   label: "Earn Amazing Rewards",    navTitle: "Rewards",             image: "/images/superpowers/falak-rewards.png" },
  { id: "detective", label: "Mystery Quests",          navTitle: "Detective Mode",      image: "/images/superpowers/falak-detective.png" },
  { id: "cinema",    label: "Fun Story Adventures",    navTitle: "Cinema Night",        image: "/images/superpowers/falak-cinema.png" },
  { id: "space",     label: "Limitless Growth",        navTitle: "Space Explorer",      image: "/images/superpowers/falak-space.png" },
  { id: "values",    label: "Build Core Values",       navTitle: "Family Values",       image: "/images/superpowers/falak-values.png" },
  { id: "tarbiya",   label: "Tarbiya Insights",        navTitle: "Tarbiya Insights",    image: "/images/superpowers/tarbiya-insights.png", isNew: true },
] as const;
