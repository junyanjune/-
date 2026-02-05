
import { Era, Discipline, Philosopher } from './types';

export const PHILOSOPHERS: Philosopher[] = [
  {
    id: "aristotle",
    name: "Aristotle",
    dates: "384 – 322 BC",
    location: "Stagira, Greece",
    era: Era.Antiquity,
    disciplines: [Discipline.Philosophy, Discipline.Science, Discipline.Ethics],
    description: "Regarded as the father of Western logic and biological taxonomy. He proposed that nature should be understood through 'Final Causes' (telos).",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWnDw2H4Owpj8aZSwIeIZ6mnO4UdAKdfp4tFScM4ksomZUOTXcQ_gUjBImWVODjPa_oSSpQARZMMq7d0-FjdSUG_ZzvfDHAg0Ii134v4H0Wcnmb2yPgiqcCu_1brnPV86wsxaeZPmrtUXpnwBZR7p-O4DTbXcFwkvB2wbcuiqQ5RjuEkqnq0Pjd-bpfiJAedfI-GTUW85PBdEyi0RLeECV35NIcPyDUjYU0HI4_mdEoep7dZKpQTNmQKfmxXHhMvVBQdO0MtS-6zAn",
    keyWorks: [
      { title: "Nicomachean Ethics", description: "The definitive study of character and virtue as the path to eudaimonia." },
      { title: "Metaphysics", description: "Inquiry into 'being qua being' and the principles of existence." },
      { title: "Organon", description: "The foundational collection of logical works on reasoning." }
    ],
    temporalConstraint: "Limited to knowledge available up to 322 BC. Modern scientific or historical events are unknown to him."
  },
  {
    id: "avicenna",
    name: "Avicenna",
    dates: "980 – 1037 AD",
    location: "Bukhara, Persia",
    era: Era.MiddleAges,
    disciplines: [Discipline.Philosophy, Discipline.Science],
    description: "Ibn Sīnā, the preeminent philosopher of the Islamic Golden Age, known for his 'Floating Man' argument on consciousness.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwIdSjKCJRvnf2eNWIcyyTIdJisHtldk802WJs3cikHfBWFtkA8pFcVw3OZ_C00dn1BM-TtqXfVyhybqGE7S9yKrjF_AAYDwudIFEbg26RINr-2RdvXP0KdCvp7aAlZcc3mdHxXApHTtE3y9c3xhsX5q7rPlLBriE-owkfNPUTScYyYZPSWZHCD00g3fmqX2urStlGje2IgQi0AzK5k7lFdY_mbHUIhdy0dffT9lL-WS_vOZw5VHHek150FgATaczui7_5rvyGUc2e",
    keyWorks: [
      { title: "The Book of Healing", description: "A vast scientific and philosophical encyclopedia covering the quadrivium." },
      { title: "The Canon of Medicine", description: "A systematization of medical knowledge used in universities for 600 years." }
    ],
    temporalConstraint: "Operates within late antiquity and medieval Aristotelianism. Unaware of germ theory or digital technology."
  },
  {
    id: "nietzsche",
    name: "Friedrich Nietzsche",
    dates: "1844 – 1900",
    location: "Röcken, Prussia",
    era: Era.IndustrialEra,
    disciplines: [Discipline.Philosophy, Discipline.Literature],
    description: "A cultural critic and philosopher whose work on the 'Will to Power' challenged traditional moral structures.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4taBgkB_cIJDqqe6IUt9TbPoIwTuZbjeVo6A5FcaOW28uWJ6AGtuNZzS2a48kwQzfgPLfmmC951Ei5kBzYpLSYGKHoRvAvkOy6DKmt96jjPDqWC6_jDaj5r8RKNLJa7aU7DChbdWFj51P7MMXBz-KbnOPJurOQZ_wT_4tWJK5ihc7En3Kkc3QgoTzkfiDHAyliNmzOEJebmYxOVK4po_YVopcXtgIeZ3Miy1j0uGVAZOIPioAbrVWr4E7M5CzKR-hJp5zqlsuiAm0",
    keyWorks: [
      { title: "Thus Spoke Zarathustra", description: "A philosophical novel outlining the Übermensch and Eternal Recurrence." },
      { title: "Beyond Good and Evil", description: "A critique of moral absolute and the 'prejudices of philosophers'." }
    ]
  },
  {
    id: "kant",
    name: "Immanuel Kant",
    dates: "1724 – 1804",
    location: "Königsberg, Prussia",
    era: Era.Enlightenment,
    disciplines: [Discipline.Philosophy, Discipline.Ethics],
    description: "Central figure of modern philosophy who synthesized rationalism and empiricism.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZu2xRQY0bWFhaV620VcTdb2ENX_LsaQz8uJEQcUKhEXApRyJXtme239u8HOgCkxTCXK73rTiFEcEAKAr8O3o3qoLe75D4PavBdjpM9nOyGUDV_LG54Oof-R8YVg1tZa_XOoBBWxgnNHcLxP2LoWRcPrRbN2GFmYNIFkUHSjkhd2BsnX2RnojKaqJ2S9lG6iuNdgQBDW77Yyq10JHR9JVlgw0aMJNDVXtfre_I36RZxQe1LXCEJewpEBp8nd0qEldlC7-yRFsmWUSw",
    keyWorks: [
      { title: "Critique of Pure Reason", description: "An investigation into the limits and scope of human understanding." },
      { title: "Groundwork of the Metaphysic of Morals", description: "Introduction of the Categorical Imperative." }
    ]
  }
];
