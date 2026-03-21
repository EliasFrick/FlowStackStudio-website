export type Lang = "en" | "de";

export const translations = {
  en: {
    site: {
      name: "FlowStack.Studio",
      tagline: "We build intelligent AI agents",
      description:
        "An AI studio building voice bots and chatbots that scale your business.",
    },
    nav: {
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    hero: {
      scroll: "Scroll",
    },
    header: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    services: {
      label: "001 / Services",
      heading: "What We Do",
      items: [
        {
          title: "AI Voice Bots",
          description:
            "AI voice agents that handle inbound customer support and outbound calls on your phone number — available 24/7.",
        },
        {
          title: "AI Chatbots",
          description:
            "Intelligent chat agents for customer support and engagement, integrated into your website or platform.",
        },
      ],
    },
    tryBot: {
      label: "002 / Try It",
      heading: "Try It Yourself",
      subtitle:
        "Call our demo voice bot right now and experience AI-powered conversations firsthand.",
      callNow: "Call Now",
    },
    about: {
      label: "003 / About",
      heading: "Why FlowStack",
      paragraphs: [
        "We build AI systems that work for your business — voice bots that pick up the phone and chatbots that engage your customers.",
        "Every solution is tailored to your workflows. We don't do one-size-fits-all. We listen, build, and iterate until the system runs like it's part of your team.",
      ],
    },
    marquee:
      "AUTOMATE \u2014 INTEGRATE \u2014 SCALE \u2014 AUTOMATE \u2014 INTEGRATE \u2014 SCALE \u2014 ",
    contact: {
      label: "004 / Contact",
      heading: "Let\u2019s Build Something",
      subtitle:
        "Have a project in mind? Tell us about it and we\u2019ll get back to you within 24 hours.",
      success: "Thank you. We\u2019ll be in touch.",
      name: "Name",
      email: "Email",
      messageLabel: "Message",
      message: "Tell us about your project",
      submit: "Start a Project",
    },
    footer: {
      rights: "All rights reserved",
    },
  },
  de: {
    site: {
      name: "FlowStack.Studio",
      tagline: "Wir bauen intelligente KI-Agenten",
      description:
        "Ein KI-Studio, das Voice Bots und Chatbots entwickelt, die Ihr Unternehmen skalieren.",
    },
    nav: {
      services: "Leistungen",
      about: "\u00DCber uns",
      contact: "Kontakt",
    },
    hero: {
      scroll: "Scrollen",
    },
    header: {
      openMenu: "Men\u00FC \u00F6ffnen",
      closeMenu: "Men\u00FC schlie\u00DFen",
    },
    services: {
      label: "001 / Leistungen",
      heading: "Was wir tun",
      items: [
        {
          title: "KI-Voice Bots",
          description:
            "KI-Sprachagenten, die eingehende Kundenanfragen und ausgehende Anrufe \u00FCber Ihre Telefonnummer bearbeiten \u2014 rund um die Uhr verf\u00FCgbar.",
        },
        {
          title: "KI-Chatbots",
          description:
            "Intelligente Chat-Agenten f\u00FCr Kundensupport und Engagement, integriert in Ihre Website oder Plattform.",
        },
      ],
    },
    tryBot: {
      label: "002 / Ausprobieren",
      heading: "Probieren Sie es aus",
      subtitle:
        "Rufen Sie jetzt unseren Demo-Voice-Bot an und erleben Sie KI-gest\u00FCtzte Gespr\u00E4che aus erster Hand.",
      callNow: "Jetzt anrufen",
    },
    about: {
      label: "003 / \u00DCber uns",
      heading: "Warum FlowStack",
      paragraphs: [
        "Wir bauen KI-Systeme, die f\u00FCr Ihr Unternehmen arbeiten \u2014 Voice Bots, die ans Telefon gehen, und Chatbots, die Ihre Kunden begeistern.",
        "Jede L\u00F6sung ist auf Ihre Abl\u00E4ufe zugeschnitten. Wir machen kein Einheitsprogramm. Wir h\u00F6ren zu, bauen und optimieren, bis das System wie ein Teil Ihres Teams funktioniert.",
      ],
    },
    marquee:
      "AUTOMATISIEREN \u2014 INTEGRIEREN \u2014 SKALIEREN \u2014 AUTOMATISIEREN \u2014 INTEGRIEREN \u2014 SKALIEREN \u2014 ",
    contact: {
      label: "004 / Kontakt",
      heading: "Lassen Sie uns etwas aufbauen",
      subtitle:
        "Haben Sie ein Projekt im Kopf? Erz\u00E4hlen Sie uns davon und wir melden uns innerhalb von 24 Stunden.",
      success: "Vielen Dank. Wir melden uns bei Ihnen.",
      name: "Name",
      email: "E-Mail",
      messageLabel: "Nachricht",
      message: "Erz\u00E4hlen Sie uns von Ihrem Projekt",
      submit: "Projekt starten",
    },
    footer: {
      rights: "Alle Rechte vorbehalten",
    },
  },
} as const;

type TranslationEntry = {
  site: { name: string; tagline: string; description: string };
  nav: { services: string; about: string; contact: string };
  hero: { scroll: string };
  header: { openMenu: string; closeMenu: string };
  services: {
    label: string;
    heading: string;
    items: readonly { title: string; description: string }[];
  };
  tryBot: {
    label: string;
    heading: string;
    subtitle: string;
    callNow: string;
  };
  about: { label: string; heading: string; paragraphs: readonly string[] };
  marquee: string;
  contact: {
    label: string;
    heading: string;
    subtitle: string;
    success: string;
    name: string;
    email: string;
    messageLabel: string;
    message: string;
    submit: string;
  };
  footer: { rights: string };
};

export function t(lang: Lang): TranslationEntry {
  return translations[lang];
}
