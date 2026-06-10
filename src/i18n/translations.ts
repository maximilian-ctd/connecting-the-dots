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
    bafaBadge: string;
  };

  // Hero Section
  hero: {
    title1: string;
    title2: string;
    subtitle: string;
    cta: string;
    bafaBadge: string;
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
    marketplaceManagement: {
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
    benefit7: string;
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
    sonnet: {
      heading: string;
      intro: string;
      description: string;
      badge: string;
    };
    opus: {
      heading: string;
      intro: string;
      description: string;
      badge: string;
    };
    aiDisclaimer: string;
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
    bafaHint: string;
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
  
  // Blog
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    readTime: string;
    publishedOn: string;
    updatedOn: string;
    category: {
      project: string;
      news: string;
      insights: string;
    };
    noPosts: string;
    backToBlog: string;
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
      description: 'ConnectingTheDots bringt Startups und KMU schnell in neue Märkte – über Marktplätze, Social Commerce und Live Shopping. Einfach machen, testen, skalieren.',
      company: 'Unternehmen',
      aboutUs: 'Unser Team',
      blog: 'Blog',
      legal: 'Rechtliches',
      impressum: 'Impressum',
      datenschutz: 'Datenschutz',
      contact: 'Kontakt',
      copyright: '© 2026 ConnectingTheDots. Alle Rechte vorbehalten.',
      linkedin: 'LinkedIn',
      email: 'E-Mail',
      bafaBadge: 'BAFA-gelisteter Berater',
    },
    hero: {
      title1: 'Von der Idee',
      title2: 'zum nachhaltigen Erfolg.',
      subtitle: 'Wir bringen Startups und KMU schnell in neue Märkte – ob Marktplätze, Social Commerce über TikTok Shop oder Live Shopping auf Whatnot und eBay Live. Einfach machen, testen, skalieren – statt ewig planen.',
      cta: 'Jetzt verbinden',
      bafaBadge: 'BAFA-gelisteter Berater',
    },
    customerReferences: {
      title: 'Unsere Kunden',
    },
    howItWorks: {
      title: 'Wie es funktioniert',
      subtitle: 'In drei Schritten von der Idee zum laufenden Vertriebskanal – schnell, pragmatisch, ergebnisorientiert.',
      step1: {
        title: '1. Machen',
        description: 'Keine endlosen Strategiepapiere. Wir starten direkt: Marktplatz-Listing, TikTok Shop, Live Shopping auf Whatnot oder eBay Live – innerhalb von Tagen, nicht Monaten.',
      },
      step2: {
        title: '2. Testen',
        description: 'Echte Kunden, echtes Feedback, echte Verkäufe. Wir messen, was funktioniert – AI-gestützte Auswertung liefert Ergebnisse in Tagen statt Wochen.',
      },
      step3: {
        title: '3. Skalieren',
        description: 'Was funktioniert, wird ausgebaut. Neue Kanäle, neue Märkte, neue Segmente – schnell und datenbasiert, ohne Abstimmungsschleifen.',
      },
      videoPlaceholder: 'Video: So arbeiten wir',
    },
    services: {
      title: 'Unsere Leistungen & Netzwerk',
      subtitle: 'Growth, Business Development und neue Märkte erschließen – schnell, hands-on und ohne ewige Abstimmungsrunden.',
      whatWeOffer: 'Was wir anbieten',
      leadGeneration: {
        title: 'Social Commerce & Live Shopping',
        description: 'TikTok Shop, Whatnot, eBay Live – wir bringen deine Produkte auf die Kanäle, die gerade boomen. Setup, Onboarding und erste Verkäufe innerhalb weniger Tage.',
      },
      rapidPrototyping: {
        title: 'Rapid Go-to-Market',
        description: 'Einfach machen statt ewig planen. Wir bringen dein Produkt innerhalb von Tagen in den Markt – ob Marktplatz, Social Commerce oder B2B-Direktvertrieb.',
      },
      ecommerceSetup: {
        title: 'Neue Märkte & Segmente erschließen',
        description: 'Wir identifizieren und erschließen neue Zielmärkte für dein Produkt: neue Plattformen, neue Länder, neue Kundengruppen. Hands-on, ohne Strategiepapiere.',
      },
      marketplaceManagement: {
        title: 'Operatives Marktplatz-Management',
        description: 'Wir übernehmen den laufenden Betrieb auf Marktplätzen: Listings, Preise, Bestandssteuerung, Performance-Optimierung und das komplette Tagesgeschäft.',
      },
      performanceMarketing: {
        title: 'Growth & Business Development',
        description: 'Wir bauen neue Vertriebskanäle auf, verhandeln Partnerschaften und treiben dein Wachstum operativ voran – mit einem Netzwerk, das Türen öffnet.',
      },
      interimManagement: {
        title: 'Interim Management',
        description: 'Vorübergehende operative Führung für Vertrieb, E-Commerce oder Go-to-Market-Projekte – bis dein Team bereit ist.',
      },
      whyConnectingTheDots: 'Warum ConnectingTheDots?',
      benefit1: '<strong class="text-foreground font-semibold">Machen statt planen</strong>, keine Strategiepapiere, keine endlosen Abstimmungsrunden – wir starten direkt mit echten Verkäufen.',
      benefit2: '<strong class="text-foreground font-semibold">Social Commerce & Live Shopping</strong>, TikTok Shop, Whatnot, eBay Live – wir erschließen die Kanäle, die gerade am stärksten wachsen.',
      benefit3: '<strong class="text-foreground font-semibold">AI-gestützte Auswertung</strong>, Marktdaten, Wettbewerber und Testverkäufe analysieren wir mit modernster AI – DSGVO-konform und in einem Bruchteil der üblichen Zeit.',
      benefit4: '<strong class="text-foreground font-semibold">Neue Märkte in Tagen</strong>, ob neue Plattform, neues Land oder neues Segment – wir sind in Tagen live, nicht in Monaten.',
      benefit5: '<strong class="text-foreground font-semibold">Machen · Testen · Skalieren</strong>, unser bewährtes 3-Schritte-Modell für schnelles Wachstum.',
      benefit6: '<strong class="text-foreground font-semibold">End-to-End Umsetzung</strong>, von der ersten Idee bis zum laufenden Betrieb – Strategie und Hands-on aus einer Hand.',
      benefit7: '<strong class="text-foreground font-semibold">15 Jahre Erfahrung</strong>, Growth, Business Development und Markterschließung im DACH-Raum und Europa.',
    },
    caseStudy: {
      title: 'Use Case: Marktvalidierung & Skalierung im DACH-Raum',
      subtitle: '',
      heading: 'Vom ersten Marktexperiment zum skalierbaren Vertriebserfolg',
      description1: 'ConnectingTheDots unterstützte das Startup GenesysAI bei der Validierung und dem Aufbau von Vertriebskanälen in der DACH-Region – mit Marktplätzen als zentralem Experiment.',
      description2: 'Innerhalb von 6 Monaten: Vertriebsnetzwerk von 1 auf 4 aktive Kanäle erweitert, erfolgreicher Breuninger-Launch, 4 neue DACH-Lieferanten und über €1M zusätzlicher Umsatz.',
      kpi1: 'Vertriebskanäle',
      kpi2: 'Neue DACH-Lieferanten',
      kpi3: 'Zusätzlicher Umsatz',
      testimonial: 'CTD unterstützte GenesysAI beim Markteintritt in der EU – innerhalb von Monaten entstanden starke Partnerschaften und skalierbare Vertriebskanäle.',
    },
    aboutUs: {
      title: 'Unser Team',
      teamMission: '„Wir verwandeln digitale Ideen effizient in marktreife Lösungen, mit klarer Strategie, belastbaren Markttests und präziser operativer Umsetzung."',
      maximilian: {
        heading: 'Maximilian',
        intro: 'Senior Consultant, Strategy & Market Validation',
        experience: {
          title: 'Erfahrung',
          paragraph1: 'Maximilian Rebensburg verfügt über mehr als 15 Jahre Erfahrung in Digitalisierung, E-Commerce, Marktplatzstrategien und SaaS. Bei Unternehmen wie Tradebyte und Gute Marken verantwortete er den Aufbau neuer Märkte und Segmente und erzielte dabei signifikante Wachstumsraten.',
          paragraph2: 'Er kombiniert strategische Marktentwicklung mit operativer Umsetzung, von Positionierung und Zielgruppendefinition über MVP-Tests bis hin zur Go-to-Market-Strategie. Sein Fokus liegt darauf, Unternehmen zu befähigen, neue Ideen und Produkte schnell, risikoarm und datenbasiert im Echtmarkt zu validieren.',
          paragraph3: '',
        },
        mission: {
          title: 'Mission',
          paragraph1: 'In zahlreichen Projekten hat er festgestellt, dass insbesondere mittelständische Unternehmen den Markteintritt häufig unterschätzen: Produkte werden ohne ausreichend getesteten Message-Market-Fit, falscher Zielgruppe oder unklarer Preisstrategie gelauncht, was unnötig Zeit, Budget und interne Ressourcen bindet.',
          paragraph2: 'Mit ConnectingTheDots verfolgt er daher die Mission, Unternehmen dabei zu unterstützen, ihre Ideen oder neuen Produkte schnell, risikoarm und datenbasiert im Echtmarkt zu validieren. Sein breites Netzwerk im DACH-Raum und Europa ermöglicht dabei nicht nur strategische Beratung, sondern auch operative Umsetzung, vom ersten Markttest bis zum strukturierten Rollout.',
        },
        linkedin: 'LinkedIn Profil',
        linkedinUrl: 'https://www.linkedin.com/in/maximilianrebensburg/',
      },
      juliane: {
        heading: 'Juliane',
        intro: 'Senior Consultant, Brand, Commerce & Integration',
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
        description: 'Ella ist unsere gute Seele im Team und sorgt jeden Tag für positive Stimmung im Büro. Als Feelgood Managerin achtet sie darauf, dass Pausen eingehalten, Snacks geteilt und gemeinsame Aktivitäten nicht zu kurz kommen. Mit ihrer offenen, fröhlichen Art bringt sie Wärme ins Team, und freut sich über jede zusätzliche Streicheleinheit.',
      },
      sonnet: {
        heading: 'Sonnet',
        intro: 'AI Analyst – Schnelle Datenauswertung & Marktrecherche',
        description: 'Sonnet ist unser schnellstes Teammitglied und spezialisiert auf die Auswertung großer Datenmengen in Rekordzeit. Ob Wettbewerbsanalysen, Marktrecherchen oder die Auswertung von Testverkaufsdaten – Sonnet liefert strukturierte Ergebnisse in Minuten statt Tagen. So können wir unseren Kunden schneller fundierte Empfehlungen geben.',
        badge: 'AI-gestützt',
      },
      opus: {
        heading: 'Opus',
        intro: 'AI Strategist – Tiefenanalyse & komplexe Strategieentwicklung',
        description: 'Opus ist unser Denker für die großen Fragen. Wo Sonnet Geschwindigkeit bringt, liefert Opus Tiefgang: komplexe Marktanalysen, strategische Szenarien und die Synthese aus quantitativen Daten und qualitativen Insights. Opus hilft uns, aus Rohdaten belastbare Strategien zu entwickeln – gründlich, strukturiert und nachvollziehbar.',
        badge: 'AI-gestützt',
      },
      aiDisclaimer: 'Sonnet und Opus sind AI-Modelle von Anthropic (Claude). Wir setzen sie unter strikter Einhaltung der EU-DSGVO ein: Keine personenbezogenen Kundendaten werden an AI-Systeme übermittelt. Alle Analysen laufen auf anonymisierten bzw. aggregierten Daten. Verantwortung und finale Entscheidungen liegen immer beim menschlichen Team.',
    },
    leadForm: {
      title: 'Validiere deine Geschäftsidee',
      subtitle: 'Ob Startup oder KMU – wir helfen dir, deine Idee durch praktische Experimente im echten Markt zu testen.',
      getStarted: 'Jetzt starten',
      firstName: 'Vorname',
      lastName: 'Nachname',
      company: 'Firma',
      email: 'E-Mail-Adresse',
      goals: 'Dein Projekt & deine Ziele',
      goalsPlaceholder: 'Erzähl uns von deiner Geschäftsidee, deinen Zielen und wie du sie am liebsten validieren möchtest...',
      consentLabel: {
        prefix: 'Ich stimme zu, kontaktiert zu werden und akzeptiere die ',
        linkText: 'Datenschutzerklärung',
        suffix: '.',
        linkHref: '/datenschutz',
      },
      submit: 'Anfrage absenden',
      whatYouGet: 'Was du kostenlos erhältst',
      benefit1: 'Kostenloses Beratungsgespräch zur Validierung',
      benefit2: 'Individuelle Experiment- und Kanalstrategie',
      benefit3: 'Zugang zu unserem Expertennetzwerk',
      benefit4: 'Klare Roadmap für deinen Markteintritt',
      benefit5: 'Risiko- und Markteinschätzung',
      bafaHint: 'BAFA-gelistet – Fördermöglichkeiten für Beratungsleistungen',
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
      description: 'Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten. Einige Cookies sind für den Betrieb der Website notwendig, während andere uns helfen, diese Website und die Nutzererfahrung zu verbessern (z. B. Google Analytics und HubSpot). Sie können selbst entscheiden, ob Sie die Cookies zulassen möchten.',
      acceptAll: 'Alle akzeptieren',
      acceptNecessary: 'Nur notwendige',
      customize: 'Anpassen',
      privacyPolicy: 'Datenschutzerklärung',
      necessary: 'Notwendige Cookies',
      necessaryDescription: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.',
      analytics: 'Analyse-Cookies',
      analyticsDescription: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren. Wir nutzen hierfür unter anderem Google Analytics und HubSpot.',
      save: 'Einstellungen speichern',
    },
    blog: {
      title: 'Blog',
      subtitle: 'Validierungsstrategien, Go-to-Market-Insights und Startup-Erfolgsgeschichten',
      readMore: 'Weiterlesen',
      readTime: 'Min. Lesezeit',
      publishedOn: 'Veröffentlicht am',
      updatedOn: 'Aktualisiert am',
      category: {
        project: 'Projekt',
        news: 'News',
        insights: 'Insights',
      },
      noPosts: 'Noch keine Blog-Posts verfügbar.',
      backToBlog: 'Zurück zum Blog',
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
      description: 'ConnectingTheDots gets startups and SMEs into new markets fast – via marketplaces, social commerce, and live shopping. Do it, test it, scale it.',
      company: 'Company',
      aboutUs: 'Our Team',
      blog: 'Blog',
      legal: 'Legal',
      impressum: 'Impressum',
      datenschutz: 'Privacy Policy',
      contact: 'Contact',
      copyright: '© 2026 ConnectingTheDots. All rights reserved.',
      linkedin: 'LinkedIn',
      email: 'Email',
      bafaBadge: 'BAFA-listed consultant',
    },
    hero: {
      title1: 'From idea',
      title2: 'to lasting success.',
      subtitle: 'We get startups and SMEs into new markets fast – whether marketplaces, social commerce via TikTok Shop, or live shopping on Whatnot and eBay Live. Just do it, test it, scale it – instead of planning forever.',
      cta: "Let's connect",
      bafaBadge: 'BAFA-listed consultant',
    },
    customerReferences: {
      title: 'Trusted by innovative companies',
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Three steps from idea to running sales channel – fast, pragmatic, results-driven.',
      step1: {
        title: '1. Do It',
        description: 'No endless strategy papers. We launch directly: marketplace listing, TikTok Shop, live shopping on Whatnot or eBay Live – within days, not months.',
      },
      step2: {
        title: '2. Test It',
        description: 'Real customers, real feedback, real sales. We measure what works – AI-powered analysis delivers results in days, not weeks.',
      },
      step3: {
        title: '3. Scale It',
        description: 'What works gets scaled. New channels, new markets, new segments – fast and data-driven, without endless alignment rounds.',
      },
      videoPlaceholder: 'Video: See our methodology in action',
    },
    services: {
      title: 'Our Services & Network',
      subtitle: 'Growth, business development, and new market entry – fast, hands-on, and without endless alignment rounds.',
      whatWeOffer: 'What We Offer',
      leadGeneration: {
        title: 'Social Commerce & Live Shopping',
        description: 'TikTok Shop, Whatnot, eBay Live – we get your products on the channels that are booming right now. Setup, onboarding, and first sales within days.',
      },
      rapidPrototyping: {
        title: 'Rapid Go-to-Market',
        description: 'Just do it instead of planning forever. We get your product to market within days – whether marketplace, social commerce, or direct B2B sales.',
      },
      ecommerceSetup: {
        title: 'New Markets & Segments',
        description: 'We identify and open new target markets for your product: new platforms, new countries, new customer segments. Hands-on, no strategy papers.',
      },
      marketplaceManagement: {
        title: 'Operational Marketplace Management',
        description: 'We handle day-to-day marketplace operations: listings, pricing, inventory control, performance optimization, and the complete operational workflow.',
      },
      performanceMarketing: {
        title: 'Growth & Business Development',
        description: 'We build new sales channels, negotiate partnerships, and drive your growth operationally – with a network that opens doors.',
      },
      interimManagement: {
        title: 'Interim Management',
        description: 'Temporary operational leadership for sales, e-commerce, or go-to-market projects – until your team is ready.',
      },
      whyConnectingTheDots: 'Why ConnectingTheDots?',
      benefit1: '<strong class="text-foreground font-semibold">Do it, don\'t just plan it</strong>, no strategy papers, no endless meetings – we start with real sales right away.',
      benefit2: '<strong class="text-foreground font-semibold">Social Commerce & Live Shopping</strong>, TikTok Shop, Whatnot, eBay Live – we open the channels that are growing fastest right now.',
      benefit3: '<strong class="text-foreground font-semibold">AI-powered analysis</strong>, we analyze market data, competitors, and test sales with cutting-edge AI – GDPR-compliant and in a fraction of the usual time.',
      benefit4: '<strong class="text-foreground font-semibold">New markets in days</strong>, whether new platform, new country, or new segment – we go live in days, not months.',
      benefit5: '<strong class="text-foreground font-semibold">Do It · Test It · Scale It</strong>, our proven 3-step model for fast growth.',
      benefit6: '<strong class="text-foreground font-semibold">End-to-end execution</strong>, from first idea to running operations – strategy and hands-on from one source.',
      benefit7: '<strong class="text-foreground font-semibold">15 years of experience</strong>, growth, business development, and market entry across the DACH region and Europe.',
    },
    caseStudy: {
      title: 'Use Case: Market Validation & Scaling in DACH',
      subtitle: '',
      heading: 'From first market experiment to scalable sales success',
      description1: 'ConnectingTheDots helped startup GenesysAI validate and build sales channels in the DACH region – with marketplaces as the central experiment.',
      description2: 'Within 6 months: sales network expanded from 1 to 4 active channels, successful Breuninger launch, 4 new DACH suppliers, and over €1M in additional revenue.',
      kpi1: 'Sales Channels',
      kpi2: 'New DACH Suppliers',
      kpi3: 'Additional Revenue',
      testimonial: 'CTD helped GenesysAI enter the EU market – building strong partnerships and scalable sales channels within months.',
    },
    aboutUs: {
      title: 'Our Team',
      teamMission: '"We efficiently transform digital ideas into market-ready solutions, with clear strategy, reliable market tests, and precise operational implementation."',
      maximilian: {
        heading: 'Maximilian',
        intro: 'Senior Consultant, Strategy & Market Validation',
        experience: {
          title: 'Experience',
          paragraph1: 'Maximilian Rebensburg has over 15 years of experience in digitalization, e-commerce, marketplace strategies, and SaaS. At companies like Tradebyte and Gute Marken, he was responsible for building new markets and segments, achieving significant growth rates.',
          paragraph2: 'He combines strategic market development with operational implementation, from positioning and target group definition to MVP testing and go-to-market strategies. His focus is on enabling companies to validate new ideas and products quickly, with low risk, and data-driven in the real market.',
          paragraph3: '',
        },
        mission: {
          title: 'Mission',
          paragraph1: 'In numerous projects, he has found that especially medium-sized companies often underestimate market entry: products are launched without sufficiently tested message-market fit, wrong target groups, or unclear pricing strategies, which unnecessarily ties up time, budget, and internal resources.',
          paragraph2: 'With ConnectingTheDots, he therefore pursues the mission of helping companies validate their ideas or new products quickly, with low risk, and data-driven in the real market. His broad network in the DACH region and Europe enables not only strategic consulting but also operational implementation, from the first market test to structured rollout.',
        },
        linkedin: 'LinkedIn Profile',
        linkedinUrl: 'https://www.linkedin.com/in/maximilianrebensburg/',
      },
      juliane: {
        heading: 'Juliane',
        intro: 'Senior Consultant, Brand, Commerce & Integration',
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
        description: 'Ella is our team\'s good soul and ensures a positive atmosphere in the office every day. As Feelgood Manager, she makes sure that breaks are taken, snacks are shared, and joint activities are not neglected. With her open, cheerful nature, she brings warmth to the team, and enjoys every extra cuddle.',
      },
      sonnet: {
        heading: 'Sonnet',
        intro: 'AI Analyst – Fast Data Analysis & Market Research',
        description: 'Sonnet is our fastest team member, specialized in processing large amounts of data in record time. Whether competitive analyses, market research, or evaluating test sales data – Sonnet delivers structured results in minutes instead of days. This allows us to provide our clients with faster, data-backed recommendations.',
        badge: 'AI-powered',
      },
      opus: {
        heading: 'Opus',
        intro: 'AI Strategist – Deep Analysis & Complex Strategy Development',
        description: 'Opus is our deep thinker for the big questions. Where Sonnet brings speed, Opus delivers depth: complex market analyses, strategic scenarios, and the synthesis of quantitative data with qualitative insights. Opus helps us turn raw data into robust strategies – thorough, structured, and transparent.',
        badge: 'AI-powered',
      },
      aiDisclaimer: 'Sonnet and Opus are AI models by Anthropic (Claude). We use them in strict compliance with EU GDPR: No personal customer data is shared with AI systems. All analyses run on anonymized or aggregated data. Responsibility and final decisions always rest with our human team.',
    },
    leadForm: {
      title: 'Validate Your Business Idea',
      subtitle: 'Whether startup or SME – we help you test your idea through practical real-market experiments.',
      getStarted: 'Get Started Today',
      firstName: 'First Name',
      lastName: 'Last Name',
      company: 'Company',
      email: 'Email Address',
      goals: 'Project Goals & Challenges',
      goalsPlaceholder: "Tell us about your business idea, your goals, and how you'd like to validate it...",
      consentLabel: {
        prefix: 'I agree to be contacted and accept the ',
        linkText: 'privacy policy',
        suffix: '.',
        linkHref: '/en/datenschutz',
      },
      submit: 'Submit request',
      whatYouGet: 'What you get for free',
      benefit1: 'Free validation consultation',
      benefit2: 'Custom experiment & channel strategy',
      benefit3: 'Expert network access',
      benefit4: 'Clear go-to-market roadmap',
      benefit5: 'Market & risk assessment',
      bafaHint: 'BAFA-listed – funding options for consulting services',
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
      description: 'We use cookies to provide you with the best possible experience. Some cookies are necessary for the website to function, while others help us improve this website and the user experience (e.g., Google Analytics and HubSpot). You can choose whether to allow cookies.',
      acceptAll: 'Accept All',
      acceptNecessary: 'Necessary Only',
      customize: 'Customize',
      privacyPolicy: 'Privacy Policy',
      necessary: 'Necessary Cookies',
      necessaryDescription: 'These cookies are required for the basic functions of the website and cannot be disabled.',
      analytics: 'Analytics Cookies',
      analyticsDescription: 'These cookies help us understand how visitors interact with the website. We use tools such as Google Analytics and HubSpot for this purpose.',
      save: 'Save Settings',
    },
    blog: {
      title: 'Blog',
      subtitle: 'Validation strategies, go-to-market insights, and startup success stories',
      readMore: 'Read More',
      readTime: 'min read',
      publishedOn: 'Published on',
      updatedOn: 'Updated on',
      category: {
        project: 'Project',
        news: 'News',
        insights: 'Insights',
      },
      noPosts: 'No blog posts available yet.',
      backToBlog: 'Back to Blog',
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

