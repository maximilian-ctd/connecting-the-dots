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
    performanceMarketing: {
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
  
  // About Us
  aboutUs: {
    title: string;
    teamMission: string;
    maximilian: {
      heading: string;
      intro: string;
      experience: {
        title: string;
        paragraph1: string;
        paragraph2: string;
        paragraph3: string;
      };
      mission: {
        title: string;
        paragraph1: string;
        paragraph2: string;
      };
      linkedin: string;
      linkedinUrl: string;
    };
    juliane: {
      heading: string;
      intro: string;
      experience: {
        title: string;
        paragraph1: string;
        paragraph2: string;
        paragraph3?: string;
      };
      linkedin: string;
      linkedinUrl: string;
    };
    ella: {
      heading: string;
      intro: string;
      description: string;
    };
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
    consentLabel: {
      prefix: string;
      linkText: string;
      suffix: string;
      linkHref: string;
    };
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
    errorMessage: string;
  };
  
  // Cookie Banner
  cookieBanner: {
    title: string;
    description: string;
    acceptAll: string;
    acceptNecessary: string;
    customize: string;
    privacyPolicy: string;
    necessary: string;
    necessaryDescription: string;
    analytics: string;
    analyticsDescription: string;
    save: string;
  };
}

export const translations: Record<Language, Translations> = {
  de: {
    header: {
      howItWorks: 'Wie es funktioniert',
      services: 'Services',
      caseStudy: 'Use Case',
      faq: 'Häufige Fragen',
      bookACall: 'Termin buchen',
    },
    footer: {
      description: 'Von der Idee bis zur Umsetzung — ConnectingTheDots hilft dir dabei, dein Unternehmen schneller und sicherer aufzubauen.',
      company: 'Unternehmen',
      aboutUs: 'Unser Team',
      blog: 'Blog',
      legal: 'Rechtliches',
      impressum: 'Impressum',
      datenschutz: 'Datenschutz',
      contact: 'Kontakt',
      copyright: '© 2025 ConnectingTheDots. Alle Rechte vorbehalten.',
      linkedin: 'LinkedIn',
      email: 'E-Mail',
    },
    hero: {
      title1: 'Von der Idee',
      title2: 'zum erfolgreichen Unternehmen.',
      subtitle: 'Wir helfen dir, deine Idee zu testen oder weiterzuwachsen – mit echten Ergebnissen statt leeren Versprechen.',
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
        description: 'Baue dein Unternehmen auf. Wir unterstützen dich mit Experten für Marketing, Design und technische Entwicklung, damit du schnell starten kannst.',
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
        title: 'E-Commerce Vertrieb (durch Online-Shop) oder Marktplatzexpansion',
        description: 'Wir helfen dir dabei, deinen Online-Shop aufzubauen und zu betreiben — mit bewährten Tools und klaren Prozessen.',
      },
      performanceMarketing: {
        title: 'Performance Marketing',
        description: 'Wir optimieren deine Marketing-Kampagnen für maximale Performance und ROI — datenbasiert und ergebnisorientiert.',
      },
      interimManagement: {
        title: 'Interim Management',
        description: 'Wir unterstützen dich vorübergehend bei Marketing, Vertrieb oder digitalen Projekten — bis dein Team bereit ist.',
      },
      whyConnectingTheDots: 'Warum ConnectingTheDots?',
      benefit1: '<strong class="text-foreground font-semibold">Schnelle Ergebnisse</strong> — innerhalb von Wochen erfährst du, ob deine Idee funktioniert.',
      benefit2: '<strong class="text-foreground font-semibold">Weniger Risiko</strong> — wir testen vorher, damit du keine teuren Fehler machst.',
      benefit3: '<strong class="text-foreground font-semibold">Zugang zu Experten</strong> — wir haben ein Netzwerk aus Spezialisten für Design, technische Entwicklung und Marketing.',
      benefit4: '<strong class="text-foreground font-semibold">Keine eigenen Ressourcen nötig</strong> — wir übernehmen die Arbeit, die du nicht selbst machen kannst.',
      benefit5: '<strong class="text-foreground font-semibold">Bewährter Ablauf</strong> — unser 3-Schritte-Modell: Testen · Umsetzen · Wachsen.',
      benefit6: '<strong class="text-foreground font-semibold">Klare Umsetzung</strong> — von der getesteten Idee bis zum laufenden Unternehmen.',
    },
    caseStudy: {
      title: 'Use Case: DACH-Marktexpansion',
      subtitle: '',
      heading: 'Vom Markteintritt zum regionalen Wachstum',
      description1: 'ConnectingTheDots unterstützte GenesysAI beim Aufbau einer starken Marktposition in der DACH-Region.',
      description2: 'Innerhalb von 6 Monaten halfen wir dabei, ihr Vertriebsnetzwerk von 1 auf 4 aktive Kanäle zu erweitern und Partnerschaften mit 4 neuen Lieferanten in Deutschland, Österreich und der Schweiz aufzubauen — was zusätzliche €1M Umsatz generierte.',
      kpi1: 'Vertriebskanäle',
      kpi2: 'Neue DACH-Lieferanten',
      kpi3: 'Zusätzlicher Umsatz',
      testimonial: 'CTD unterstützte GenesysAI dabei, sein Angebot im EU-Markt zu testen und zu starten — innerhalb von Monaten entstanden starke Partnerschaften und funktionierende Vertriebskanäle.',
    },
    aboutUs: {
      title: 'Unser Team',
      teamMission: '„Wir verwandeln digitale Ideen effizient in marktreife Lösungen – mit klarer Strategie, belastbaren Markttests und präziser operativer Umsetzung."',
      maximilian: {
        heading: 'Maximilian',
        intro: 'Senior Consultant – Strategy & Market Validation',
        experience: {
          title: 'Erfahrung',
          paragraph1: 'Maximilian Rebensburg verfügt über mehr als 15 Jahre Erfahrung in Digitalisierung, E-Commerce, Marktplatzstrategien und SaaS. Bei Unternehmen wie Tradebyte und Gute Marken verantwortete er den Aufbau neuer Märkte und Segmente und erzielte dabei signifikante Wachstumsraten.',
          paragraph2: 'Er kombiniert strategische Marktentwicklung mit operativer Umsetzung – von Positionierung und Zielgruppendefinition über MVP-Tests bis hin zur Go-to-Market-Strategie. Sein Fokus liegt darauf, Unternehmen zu befähigen, neue Ideen und Produkte schnell, risikoarm und datenbasiert im Echtmarkt zu validieren.',
          paragraph3: '',
        },
        mission: {
          title: 'Mission',
          paragraph1: 'In zahlreichen Projekten hat er festgestellt, dass insbesondere mittelständische Unternehmen den Markteintritt häufig unterschätzen: Produkte werden ohne ausreichend getesteten Message-Market-Fit, falscher Zielgruppe oder unklarer Preisstrategie gelauncht – was unnötig Zeit, Budget und interne Ressourcen bindet.',
          paragraph2: 'Mit ConnectingTheDots verfolgt er daher die Mission, Unternehmen dabei zu unterstützen, ihre Ideen oder neuen Produkte schnell, risikoarm und datenbasiert im Echtmarkt zu validieren. Sein breites Netzwerk im DACH-Raum und Europa ermöglicht dabei nicht nur strategische Beratung, sondern auch operative Umsetzung – vom ersten Markttest bis zum strukturierten Rollout.',
        },
        linkedin: 'LinkedIn Profil',
        linkedinUrl: 'https://www.linkedin.com/in/maximilianrebensburg/',
      },
      juliane: {
        heading: 'Juliane',
        intro: 'Senior Consultant – Brand, Commerce & Integration',
        experience: {
          title: 'Erfahrung',
          paragraph1: 'Juliane Kissau bringt langjährige Erfahrung in E-Commerce, Markenaufbau und technischer Integration mit. Ihre Stationen bei Tradebyte, Spryker, GROSSE LIEBE, onQuality und X-Trade haben ihr ein tiefes Verständnis für digitale Wachstumsprozesse vermittelt.',
          paragraph2: 'Sie unterstützt Unternehmen beim Aufbau und der Optimierung digitaler Vertriebskanäle, der Umsetzung technischer Integrationen sowie der Entwicklung klarer Marken- und Kommunikationsstrukturen. Ihr Schwerpunkt liegt darauf, digitale Produkte und Prozesse effizient marktreif zu machen und operativ sauber umzusetzen.',
        },
        linkedin: 'LinkedIn Profil',
        linkedinUrl: 'https://www.linkedin.com/in/juliane-kissau-9ba29b180/',
      },
      ella: {
        heading: 'Ella',
        intro: 'Junior Feelgood Manager',
        description: 'Ella ist unsere gute Seele im Team und sorgt jeden Tag für positive Stimmung im Büro. Als Feelgood Managerin achtet sie darauf, dass Pausen eingehalten, Snacks geteilt und gemeinsame Aktivitäten nicht zu kurz kommen. Mit ihrer offenen, fröhlichen Art bringt sie Wärme ins Team – und freut sich über jede zusätzliche Streicheleinheit.',
      },
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
      consentLabel: {
        prefix: 'Ich stimme zu, kontaktiert zu werden und akzeptiere die ',
        linkText: 'Datenschutzerklärung',
        suffix: '.',
        linkHref: '/datenschutz',
      },
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
      successTitle: 'Anfrage eingegangen',
      successMessage: 'Wir melden uns zeitnah mit konkreten Terminvorschlägen für dein Beratungsgespräch.',
      errorMessage: 'Etwas ist schiefgelaufen. Bitte versuche es später erneut oder schreib an maximilian@connectingthe.de.',
    },
    cookieBanner: {
      title: 'Cookie-Einstellungen',
      description: 'Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten. Einige Cookies sind für den Betrieb der Website notwendig, während andere uns helfen, diese Website und die Nutzererfahrung zu verbessern (Tracking-Cookies). Sie können selbst entscheiden, ob Sie die Cookies zulassen möchten.',
      acceptAll: 'Alle akzeptieren',
      acceptNecessary: 'Nur notwendige',
      customize: 'Anpassen',
      privacyPolicy: 'Datenschutzerklärung',
      necessary: 'Notwendige Cookies',
      necessaryDescription: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.',
      analytics: 'Analyse-Cookies',
      analyticsDescription: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem Informationen anonym gesammelt und gemeldet werden.',
      save: 'Einstellungen speichern',
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
      aboutUs: 'Our Team',
      blog: 'Blog',
      legal: 'Legal',
      impressum: 'Impressum',
      datenschutz: 'Privacy Policy',
      contact: 'Contact',
      copyright: '© 2025 ConnectingTheDots. All rights reserved.',
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
        title: 'E-Commerce Sales (via Online Shop) or Marketplace Expansion',
        description: 'Validate, build, and scale your digital sales infrastructure with proven tools and automation.',
      },
      performanceMarketing: {
        title: 'Performance Marketing',
        description: 'We optimize your marketing campaigns for maximum performance and ROI — data-driven and results-oriented.',
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
    aboutUs: {
      title: 'Our Team',
      teamMission: '"We efficiently transform digital ideas into market-ready solutions – with clear strategy, reliable market tests, and precise operational implementation."',
      maximilian: {
        heading: 'Maximilian',
        intro: 'Senior Consultant – Strategy & Market Validation',
        experience: {
          title: 'Experience',
          paragraph1: 'Maximilian Rebensburg has over 15 years of experience in digitalization, e-commerce, marketplace strategies, and SaaS. At companies like Tradebyte and Gute Marken, he was responsible for building new markets and segments, achieving significant growth rates.',
          paragraph2: 'He combines strategic market development with operational implementation – from positioning and target group definition to MVP testing and go-to-market strategies. His focus is on enabling companies to validate new ideas and products quickly, with low risk, and data-driven in the real market.',
          paragraph3: '',
        },
        mission: {
          title: 'Mission',
          paragraph1: 'In numerous projects, he has found that especially medium-sized companies often underestimate market entry: products are launched without sufficiently tested message-market fit, wrong target groups, or unclear pricing strategies – which unnecessarily ties up time, budget, and internal resources.',
          paragraph2: 'With ConnectingTheDots, he therefore pursues the mission of helping companies validate their ideas or new products quickly, with low risk, and data-driven in the real market. His broad network in the DACH region and Europe enables not only strategic consulting but also operational implementation – from the first market test to structured rollout.',
        },
        linkedin: 'LinkedIn Profile',
        linkedinUrl: 'https://www.linkedin.com/in/maximilianrebensburg/',
      },
      juliane: {
        heading: 'Juliane',
        intro: 'Senior Consultant – Brand, Commerce & Integration',
        experience: {
          title: 'Experience',
          paragraph1: 'Juliane Kissau brings extensive experience in e-commerce, brand building, and technical integration. Her roles at Tradebyte, Spryker, GROSSE LIEBE, onQuality, and X-Trade have given her a deep understanding of digital growth processes.',
          paragraph2: 'She supports companies in building and optimizing digital sales channels, implementing technical integrations, and developing clear brand and communication structures. Her focus is on efficiently making digital products and processes market-ready and implementing them operationally cleanly.',
        },
        linkedin: 'LinkedIn Profile',
        linkedinUrl: 'https://www.linkedin.com/in/juliane-kissau-9ba29b180/',
      },
      ella: {
        heading: 'Ella',
        intro: 'Junior Feelgood Manager',
        description: 'Ella is our team\'s good soul and ensures a positive atmosphere in the office every day. As Feelgood Manager, she makes sure that breaks are taken, snacks are shared, and joint activities are not neglected. With her open, cheerful nature, she brings warmth to the team – and enjoys every extra cuddle.',
      },
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
      consentLabel: {
        prefix: 'I agree to be contacted and accept the ',
        linkText: 'privacy policy',
        suffix: '.',
        linkHref: '/en/datenschutz',
      },
      submit: 'Submit request',
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
      successTitle: 'Request received',
      successMessage: 'We will get back to you shortly with concrete times for your free consultation.',
      errorMessage: 'Something went wrong. Please try again or email maximilian@connectingthe.de.',
    },
    cookieBanner: {
      title: 'Cookie Settings',
      description: 'We use cookies to provide you with the best possible experience. Some cookies are necessary for the website to function, while others help us improve this website and the user experience (tracking cookies). You can choose whether to allow cookies.',
      acceptAll: 'Accept All',
      acceptNecessary: 'Necessary Only',
      customize: 'Customize',
      privacyPolicy: 'Privacy Policy',
      necessary: 'Necessary Cookies',
      necessaryDescription: 'These cookies are required for the basic functions of the website and cannot be disabled.',
      analytics: 'Analytics Cookies',
      analyticsDescription: 'These cookies help us understand how visitors interact with the website by collecting and reporting information anonymously.',
      save: 'Save Settings',
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

