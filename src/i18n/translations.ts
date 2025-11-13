// Übersetzungen für ConnectingTheDots Website

export type Language = 'de' | 'en';

export interface Translations {
  // Header
  header: {
    howItWorks: string;
    services: string;
    caseStudy: string;
    faq: string;
    bookACall: string;
  };
  
  // Footer
  footer: {
    description: string;
    company: string;
    aboutUs: string;
    blog: string;
    legal: string;
    impressum: string;
    datenschutz: string;
    contact: string;
    copyright: string;
    linkedin: string;
    email: string;
  };
  
  // Hero Section
  hero: {
    title1: string;
    title2: string;
    subtitle: string;
    cta: string;
  };
  
  // Customer References
  customerReferences: {
    title: string;
  };
  
  // How It Works
  howItWorks: {
    title: string;
    subtitle: string;
    step1: {
      title: string;
      description: string;
    };
    step2: {
      title: string;
      description: string;
    };
    step3: {
      title: string;
      description: string;
    };
    videoPlaceholder: string;
  };
  
  // Services
  services: {
    title: string;
    subtitle: string;
    whatWeOffer: string;
    leadGeneration: {
      title: string;
      description: string;
    };
    rapidPrototyping: {
      title: string;
      description: string;
    };
    ecommerceSetup: {
      title: string;
      description: string;
    };
    interimManagement: {
      title: string;
      description: string;
    };
    whyConnectingTheDots: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
    benefit4: string;
    benefit5: string;
    benefit6: string;
  };
  
  // Case Study
  caseStudy: {
    title: string;
    subtitle: string;
    heading: string;
    description1: string;
    description2: string;
    kpi1: string;
    kpi2: string;
    kpi3: string;
    testimonial: string;
  };
  
  // Lead Form
  leadForm: {
    title: string;
    subtitle: string;
    getStarted: string;
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    goals: string;
    goalsPlaceholder: string;
    consent: string;
    submit: string;
    whatYouGet: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
    benefit4: string;
    benefit5: string;
    timeline: string;
    timeline1: string;
    timeline2: string;
    timeline3: string;
    timeline4: string;
    successTitle: string;
    successMessage: string;
    bookAppointment: string;
    close: string;
  };
}

export const translations: Record<Language, Translations> = {
  de: {
    header: {
      howItWorks: 'Wie es funktioniert',
      services: 'Services',
      caseStudy: 'Erfolgsgeschichte',
      faq: 'Häufige Fragen',
      bookACall: 'Termin buchen',
    },
    footer: {
      description: 'Von der Idee bis zur Umsetzung — ConnectingTheDots hilft dir dabei, dein Unternehmen schneller und sicherer aufzubauen.',
      company: 'Unternehmen',
      aboutUs: 'Über uns',
      blog: 'Blog',
      legal: 'Rechtliches',
      impressum: 'Impressum',
      datenschutz: 'Datenschutz',
      contact: 'Kontakt',
      copyright: '© 2024 ConnectingTheDots. Alle Rechte vorbehalten.',
      linkedin: 'LinkedIn',
      email: 'E-Mail',
    },
    hero: {
      title1: 'Von der Idee',
      title2: 'zum erfolgreichen Unternehmen.',
      subtitle: 'Wir helfen dir dabei, deine Unternehmensidee zu testen, umzusetzen und zu wachsen — mit konkreten Ergebnissen statt leeren Versprechungen.',
      cta: 'Jetzt verbinden',
    },
    customerReferences: {
      title: 'Unsere Kunden',
    },
    howItWorks: {
      title: 'Wie es funktioniert',
      subtitle: 'Drei Schritte von der Idee zum erfolgreichen Unternehmen.',
      step1: {
        title: '1. Testen',
        description: 'Finde heraus, ob deine Idee wirklich funktioniert. Wir helfen dir dabei, deine Annahmen mit echten Kunden zu prüfen — schnell und ohne große Investitionen.',
      },
      step2: {
        title: '2. Umsetzen',
        description: 'Baue dein Unternehmen auf. Wir unterstützen dich mit Experten für Marketing, Design und Technik, damit du schnell starten kannst.',
      },
      step3: {
        title: '3. Wachsen',
        description: 'Erweitere dein Unternehmen gezielt. Mit den Erkenntnissen aus den Tests und unserer Unterstützung kannst du sicher wachsen und deine Ziele erreichen.',
      },
      videoPlaceholder: 'Video: So arbeiten wir',
    },
    services: {
      title: 'Unsere Leistungen & Netzwerk',
      subtitle: 'Wir helfen dir dabei, deine Idee zu testen und dein Unternehmen aufzubauen — schneller und mit weniger Risiko.',
      whatWeOffer: 'Was wir anbieten',
      leadGeneration: {
        title: 'Kundenakquise',
        description: 'Wir helfen dir dabei, die richtigen Kunden zu finden und zu erreichen — mit gezielten Tests und bewährten Methoden.',
      },
      rapidPrototyping: {
        title: 'Schnelle Umsetzung',
        description: 'Wir verwandeln deine Idee innerhalb von Tagen in etwas Testbares — schnell und ohne großen Aufwand.',
      },
      ecommerceSetup: {
        title: 'Online-Shop Aufbau',
        description: 'Wir helfen dir dabei, deinen Online-Shop aufzubauen und zu betreiben — mit bewährten Tools und klaren Prozessen.',
      },
      interimManagement: {
        title: 'Interim Management',
        description: 'Wir unterstützen dich vorübergehend bei Marketing, Vertrieb oder digitalen Projekten — bis dein Team bereit ist.',
      },
      whyConnectingTheDots: 'Warum ConnectingTheDots?',
      benefit1: '<strong class="text-foreground font-semibold">Schnelle Ergebnisse</strong> — innerhalb von Wochen erfährst du, ob deine Idee funktioniert.',
      benefit2: '<strong class="text-foreground font-semibold">Weniger Risiko</strong> — wir testen vorher, damit du keine teuren Fehler machst.',
      benefit3: '<strong class="text-foreground font-semibold">Zugang zu Experten</strong> — wir haben ein Netzwerk aus Spezialisten für Design, Technik und Marketing.',
      benefit4: '<strong class="text-foreground font-semibold">Keine eigenen Ressourcen nötig</strong> — wir übernehmen die Arbeit, die du nicht selbst machen kannst.',
      benefit5: '<strong class="text-foreground font-semibold">Bewährter Ablauf</strong> — unser 3-Schritte-Modell: Testen · Umsetzen · Wachsen.',
      benefit6: '<strong class="text-foreground font-semibold">Klare Umsetzung</strong> — von der getesteten Idee bis zum laufenden Unternehmen.',
    },
    caseStudy: {
      title: 'Erfolgsgeschichte: DACH-Marktexpansion',
      subtitle: '',
      heading: 'Vom Markteintritt zum regionalen Wachstum',
      description1: 'ConnectingTheDots unterstützte GenesysAI beim Aufbau einer starken Marktposition in der DACH-Region.',
      description2: 'Innerhalb von 6 Monaten halfen wir dabei, ihr Vertriebsnetzwerk von 1 auf 4 aktive Kanäle zu erweitern und Partnerschaften mit 4 neuen Lieferanten in Deutschland, Österreich und der Schweiz aufzubauen — was zusätzliche €1M Umsatz generierte.',
      kpi1: 'Vertriebskanäle',
      kpi2: 'Neue DACH-Lieferanten',
      kpi3: 'Zusätzlicher Umsatz',
      testimonial: 'CTD unterstützte GenesysAI dabei, sein Angebot im EU-Markt zu testen und zu starten — innerhalb von Monaten entstanden starke Partnerschaften und funktionierende Vertriebskanäle.',
    },
    leadForm: {
      title: 'Erzähl uns von deinem Projekt',
      subtitle: 'Wir helfen dir dabei, deine Idee zu testen und umzusetzen.',
      getStarted: 'Jetzt starten',
      firstName: 'Vorname',
      lastName: 'Nachname',
      company: 'Firma',
      email: 'E-Mail-Adresse',
      goals: 'Dein Projekt & deine Ziele',
      goalsPlaceholder: 'Erzähl uns von deiner Idee, deinem Unternehmensmodell und was du erreichen möchtest...',
      consent: 'Ich stimme zu, kontaktiert zu werden und akzeptiere die Datenschutzerklärung.',
      submit: 'Anfrage absenden',
      whatYouGet: 'Was du erhältst',
      benefit1: 'Kostenloses Beratungsgespräch',
      benefit2: 'Individueller Plan für dein Projekt',
      benefit3: 'Zugang zu unserem Expertennetzwerk',
      benefit4: 'Klarer Fahrplan',
      benefit5: 'Einschätzung der Risiken',
      timeline: 'Typischer Ablauf',
      timeline1: 'Erstgespräch: 1-2 Tage',
      timeline2: 'Planung: 3-5 Tage',
      timeline3: 'Umsetzung: 2-4 Wochen',
      timeline4: 'Ergebnisse & Empfehlungen: 2-3 Tage',
      successTitle: 'Vielen Dank!',
      successMessage: 'Wir haben deine Anfrage erhalten.',
      bookAppointment: '📅 Termin im Kalender buchen',
      close: 'Schließen',
    },
  },
  en: {
    header: {
      howItWorks: 'How It Works',
      services: 'Services',
      caseStudy: 'Case Study',
      faq: 'FAQ',
      bookACall: 'Book a Call',
    },
    footer: {
      description: 'From market validation to operational execution — ConnectingTheDots bridges the gap between strategy and real market success.',
      company: 'Company',
      aboutUs: 'About Us',
      blog: 'Blog',
      legal: 'Legal',
      impressum: 'Impressum',
      datenschutz: 'Privacy Policy',
      contact: 'Contact',
      copyright: '© 2024 ConnectingTheDots. All rights reserved.',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
    hero: {
      title1: 'From validation',
      title2: 'to market domination.',
      subtitle: 'Grow faster with data-driven validation, operational support, and access to our trusted ecosystem.',
      cta: "Let's connect",
    },
    customerReferences: {
      title: 'Trusted by innovative companies',
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'From Idea to Market Success – Fast, Data-Driven, and Network-Supported.',
      step1: {
        title: '1. Validate',
        description: 'Find real market fit. Define key assumptions and test them with real customers through rapid, data-driven experiments.',
      },
      step2: {
        title: '2. Build',
        description: 'Turn validation into action. Execute go-to-market strategies with our network of performance experts, UX designers, and tech partners.',
      },
      step3: {
        title: '3. Scale',
        description: 'Grow with confidence. Use validated insights and operational support to expand, optimize, and dominate your market.',
      },
      videoPlaceholder: 'Video: See our methodology in action',
    },
    services: {
      title: 'Our Services & Network',
      subtitle: 'From validation to growth — we combine data, people, and execution to help your business scale faster with less risk.',
      whatWeOffer: 'What We Offer',
      leadGeneration: {
        title: 'Lead Generation',
        description: 'Identify and reach your ideal customers through targeted digital experiments and performance channels.',
      },
      rapidPrototyping: {
        title: 'Rapid Prototyping',
        description: 'Turn ideas into testable MVPs within days — fast, lean, and data-driven.',
      },
      ecommerceSetup: {
        title: 'E-Commerce Setup',
        description: 'Validate, build, and scale your digital sales infrastructure with proven tools and automation.',
      },
      interimManagement: {
        title: 'Interim Management',
        description: 'Temporary leadership support for marketing, sales, or digital transformation — until your internal teams are ready.',
      },
      whyConnectingTheDots: 'Why ConnectingTheDots?',
      benefit1: '<strong class="text-foreground font-semibold">Market insights within weeks</strong> — get real customer feedback instead of assumptions.',
      benefit2: '<strong class="text-foreground font-semibold">Reduced risk through data</strong> — every decision is based on measurable evidence.',
      benefit3: '<strong class="text-foreground font-semibold">Access to an expert network</strong> — from UX and frontend to performance and e-commerce.',
      benefit4: '<strong class="text-foreground font-semibold">No internal resources needed</strong> — we act as your external validation and growth team.',
      benefit5: '<strong class="text-foreground font-semibold">Proven methodology</strong> — our 3-step model: Validate · Build · Scale.',
      benefit6: '<strong class="text-foreground font-semibold">Scalable implementation</strong> — move from validated idea to operational growth seamlessly.',
    },
    caseStudy: {
      title: 'Success Story: DACH Market Expansion',
      subtitle: '',
      heading: 'From Market Entry to Regional Growth',
      description1: 'ConnectingTheDots supported GenesysAI in establishing a strong market position in the DACH region.',
      description2: 'Within 6 months, we helped expand their sales network from 1 to 4 active channels and built partnerships with 4 new suppliers across Germany, Austria, and Switzerland — generating €1M in additional revenue.',
      kpi1: 'Sales Channels',
      kpi2: 'New DACH Suppliers',
      kpi3: 'Additional Revenue',
      testimonial: 'CTD supported GenesysAI in validating and launching its offering in the EU market — building strong partnerships and scalable sales channels within months.',
    },
    leadForm: {
      title: 'Request Your Use Case',
      subtitle: 'Ready to validate? Tell us about your project.',
      getStarted: 'Get Started Today',
      firstName: 'First Name',
      lastName: 'Last Name',
      company: 'Company',
      email: 'Email Address',
      goals: 'Project Goals & Challenges',
      goalsPlaceholder: "Tell us about your business model, target market, and what you'd like to validate...",
      consent: 'I agree to be contacted and accept the privacy policy.',
      submit: 'Submit Request',
      whatYouGet: 'What You Get',
      benefit1: 'Free consultation call',
      benefit2: 'Custom validation strategy',
      benefit3: 'Expert network access',
      benefit4: 'Clear roadmap',
      benefit5: 'Risk assessment',
      timeline: 'Typical Timeline',
      timeline1: 'Initial consultation: 1-2 days',
      timeline2: 'Strategy development: 3-5 days',
      timeline3: 'Validation execution: 2-4 weeks',
      timeline4: 'Results & recommendations: 2-3 days',
      successTitle: 'Thank you!',
      successMessage: 'We have received your request.',
      bookAppointment: '📅 Book appointment in calendar',
      close: 'Close',
    },
  },
};

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations.en;
}

export function getLanguageFromPath(pathname: string): Language {
  if (pathname.startsWith('/de')) return 'de';
  if (pathname.startsWith('/en')) return 'en';
  return 'de'; // Default to German
}

export function getPathForLanguage(lang: Language, currentPath: string): string {
  const pathWithoutLang = currentPath.replace(/^\/(de|en)/, '') || '/';
  return `/${lang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
}

