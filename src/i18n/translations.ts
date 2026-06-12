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
      description: 'Wir helfen Startups und KMU, Produkte dort zu verkaufen, wo gerade Nachfrage ist. Marktplätze, TikTok Shop, Whatnot, eBay Live. Ausprobieren, messen, ausbauen.',
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
      title2: 'zu echten Verkäufen.',
      subtitle: 'Du hast ein Produkt und brauchst Kunden? Wir bringen dich auf Marktplätze, TikTok Shop oder ins Live Shopping. Dann schauen wir, was wirklich läuft. Lieber in Tagen starten als in Monaten planen.',
      cta: 'Jetzt verbinden',
      bafaBadge: 'BAFA-gelisteter Berater',
    },
    customerReferences: {
      title: 'Unsere Kunden',
    },
    howItWorks: {
      title: 'Wie es funktioniert',
      subtitle: 'Drei Schritte und du verkaufst nicht mehr nur auf dem Papier.',
      step1: {
        title: '1. Anfangen',
        description: 'Keine 40-seitigen Konzepte. Wir machen dich auf Marktplätzen live, richten TikTok Shop ein oder bringen dich auf Whatnot und eBay Live. Meist dauert das Tage, nicht Quartale.',
      },
      step2: {
        title: '2. Schauen, was läuft',
        description: 'Verkäufe sagen mehr als Meinungen. Wir messen, was ankommt und werten die Daten mit AI aus. Schneller, als die meisten das manuell schaffen.',
      },
      step3: {
        title: '3. Ausbauen',
        description: 'Was funktioniert, wird größer. Neuer Kanal, neues Land, andere Zielgruppe. Wir helfen dir beim nächsten Schritt, wenn die Zahlen es hergeben.',
      },
      videoPlaceholder: 'Video: So arbeiten wir',
    },
    services: {
      title: 'Unsere Leistungen & Netzwerk',
      subtitle: 'Vertrieb und Markterschließung, aber ohne die endlosen Workshop-Runden.',
      whatWeOffer: 'Was wir anbieten',
      leadGeneration: {
        title: 'Social Commerce & Live Shopping',
        description: 'TikTok Shop, Whatnot, eBay Live. Da passiert gerade viel. Wir richten alles ein und kümmern uns, dass die ersten Bestellungen reinkommen.',
      },
      rapidPrototyping: {
        title: 'Schnell in den Markt',
        description: 'Lieber nächste Woche live als nächstes Quartal fertig geplant. Marktplatz, Social Commerce oder B2B. Hauptsache, echte Käufer sehen dein Produkt.',
      },
      ecommerceSetup: {
        title: 'Neue Märkte & Segmente',
        description: 'Andere Plattform, anderes Land, andere Kunden? Wir finden raus, wo dein Angebot hinkommt und gehen da hin.',
      },
      marketplaceManagement: {
        title: 'Marktplatz-Betrieb',
        description: 'Listings pflegen, Preise anpassen, Bestand im Blick. Den Marktplatz-Alltag übernehmen wir, damit du dich aufs Wesentliche konzentrieren kannst.',
      },
      performanceMarketing: {
        title: 'Vertrieb & Partnerschaften',
        description: 'Neuer Kanal, neuer Partner, neuer Deal. Unser Netzwerk hilft, wenn es mal schnell gehen soll. Wir verhandeln, bauen auf und schieben bei.',
      },
      interimManagement: {
        title: 'Interim Management',
        description: 'Kurz kein Team am Start? Wir übernehmen vorübergehend Vertrieb oder E-Commerce, bis du jemanden fest drin hast.',
      },
      whyConnectingTheDots: 'Warum ConnectingTheDots?',
      benefit1: '<strong class="text-foreground font-semibold">Anfangen statt Monate planen.</strong> Wir starten mit echten Verkäufen, nicht mit Folien.',
      benefit2: '<strong class="text-foreground font-semibold">Social Commerce & Live Shopping.</strong> TikTok Shop, Whatnot, eBay Live. Kanäle, die gerade richtig ziehen.',
      benefit3: '<strong class="text-foreground font-semibold">Schnelle Auswertung mit AI.</strong> Marktdaten, Wettbewerber, Testverkäufe. DSGVO-konform und deutlich schneller als klassische Analysen.',
      benefit4: '<strong class="text-foreground font-semibold">In Tagen live.</strong> Neue Plattform, neues Land, neues Segment. Kein halbjähriges Vorlaufprogramm.',
      benefit5: '<strong class="text-foreground font-semibold">Anfangen, messen, ausbauen.</strong> So arbeiten wir. Kein Framework, einfach unser roter Faden.',
      benefit6: '<strong class="text-foreground font-semibold">Von Anfang bis Betrieb.</strong> Strategie und Umsetzung aus einer Hand. Kein Berater, der danach verschwindet.',
      benefit7: '<strong class="text-foreground font-semibold">15 Jahre im Geschäft.</strong> Vertrieb und Markterschließung in DACH und Europa. Wir kennen die Stolpersteine.',
    },
    caseStudy: {
      title: 'Use Case: GenesysAI im DACH-Raum',
      subtitle: '',
      heading: 'Vom Testlisting zum Millionen-Umsatz',
      description1: 'GenesysAI wollte in der DACH-Region Fuß fassen, wusste aber noch nicht, welcher Kanal zieht. Wir haben mit Marktplätzen als Experiment angefangen und von dort aus aufgebaut.',
      description2: 'Nach sechs Monaten vier aktive Vertriebskanäle statt einem. Launch bei Breuninger. Vier neue Lieferanten in DACH. Über eine Million Euro zusätzlicher Umsatz.',
      kpi1: 'Vertriebskanäle',
      kpi2: 'Neue DACH-Lieferanten',
      kpi3: 'Zusätzlicher Umsatz',
      testimonial: 'CTD hat uns beim EU-Markteintritt geholfen. In wenigen Monaten hatten wir Partnerschaften und Kanäle, die wir vorher nicht auf dem Schirm hatten.',
    },
    aboutUs: {
      title: 'Unser Team',
      teamMission: '„Ideen sind schnell da. Kunden zu finden dauert länger. Wir kürzen den Weg mit echten Tests und echter Umsetzung."',
      maximilian: {
        heading: 'Maximilian',
        intro: 'Senior Consultant, Strategy & Market Validation',
        experience: {
          title: 'Erfahrung',
          paragraph1: 'Seit über 15 Jahren beschäftigt sich Maximilian mit E-Commerce, Marktplätzen und SaaS, unter anderem bei Tradebyte und Gute Marken. Neue Märkte aufbauen und Wachstum organisieren war da meist sein Job.',
          paragraph2: 'Strategie und Umsetzung hängt er nicht auseinander. Ob Positionierung, MVP-Test oder Go-to-Market. Er will sehen, dass es im echten Markt funktioniert, nicht nur auf Papier.',
          paragraph3: '',
        },
        mission: {
          title: 'Mission',
          paragraph1: 'Was ihm immer wieder auffällt: gerade im Mittelstand wird Markteintritt unterschätzt. Produkte gehen live ohne getestete Zielgruppe, ohne klare Preise und dann wundert man sich über verschwendetes Budget.',
          paragraph2: 'ConnectingTheDots ist seine Antwort darauf: schnell testen, wenig riskieren, auf echte Daten schauen. Sein Netzwerk in DACH und Europa hilft dabei nicht nur beim Denken, sondern auch beim Machen.',
        },
        linkedin: 'LinkedIn Profil',
        linkedinUrl: 'https://www.linkedin.com/in/maximilianrebensburg/',
      },
      juliane: {
        heading: 'Juliane',
        intro: 'Senior Consultant, Brand, Commerce & Integration',
        experience: {
          title: 'Erfahrung',
          paragraph1: 'Juliane kommt aus E-Commerce, Markenaufbau und Integration, mit Stationen bei Tradebyte, Spryker, GROSSE LIEBE, onQuality und X-Trade. Sie kennt die Stellen, an denen Technik und Vertrieb sich in die Haare bekommen.',
          paragraph2: 'Sie hilft Unternehmen, digitale Kanäle aufzubauen, Integrationen sauber hinzubekommen und Marken so zu kommunizieren, dass Kunden verstehen, was sie kaufen. Marktreif heißt für sie: es funktioniert auch operativ.',
        },
        linkedin: 'LinkedIn Profil',
        linkedinUrl: 'https://www.linkedin.com/in/juliane-kissau-9ba29b180/',
      },
      ella: {
        heading: 'Ella',
        intro: 'Junior Feelgood Manager',
        description: 'Ella ist die gute Seele im Büro. Sie sorgt dafür, dass Pausen nicht untergehen, Snacks geteilt werden und das Team auch mal lachen kann. Und ja, Streicheleinheiten nimmt sie gerne an.',
      },
      sonnet: {
        heading: 'Sonnet',
        intro: 'AI Analyst, schnelle Datenauswertung & Marktrecherche',
        description: 'Sonnet wertet bei uns große Datenmengen in Minuten aus. Wettbewerbsanalyse, Marktrecherche, Auswertung von Testverkäufen. Dinge, für die sonst Tage draufgehen. So können wir schneller sagen, was wir empfehlen und warum.',
        badge: 'AI-gestützt',
      },
      opus: {
        heading: 'Opus',
        intro: 'AI Strategist, Tiefenanalyse & komplexe Strategieentwicklung',
        description: 'Opus ist das Gegenstück: langsamer, gründlicher. Für komplexe Marktanalysen, Strategiefragen und wenn aus vielen Datenpunkten ein klares Bild werden soll. Geschwindigkeit und Tiefe, beides braucht man.',
        badge: 'AI-gestützt',
      },
      aiDisclaimer: 'Sonnet und Opus sind AI-Modelle von Anthropic (Claude). Wir nutzen sie DSGVO-konform: keine personenbezogenen Kundendaten gehen an AI-Systeme. Analysen laufen auf anonymisierten oder aggregierten Daten. Die Entscheidungen treffen immer wir, nicht die Maschine.',
    },
    leadForm: {
      title: 'Lass uns reden',
      subtitle: 'Startup oder KMU, egal. Wenn du wissen willst, ob deine Idee Kunden findet, probieren wir es im echten Markt aus. Nicht in einer Theorie-Session.',
      getStarted: 'Jetzt starten',
      firstName: 'Vorname',
      lastName: 'Nachname',
      company: 'Firma',
      email: 'E-Mail-Adresse',
      goals: 'Dein Projekt & deine Ziele',
      goalsPlaceholder: 'Was machst du? Was willst du erreichen? Wo hängst du gerade fest?',
      consentLabel: {
        prefix: 'Ich stimme zu, kontaktiert zu werden und akzeptiere die ',
        linkText: 'Datenschutzerklärung',
        suffix: '.',
        linkHref: '/datenschutz',
      },
      submit: 'Anfrage absenden',
      whatYouGet: 'Was du kostenlos bekommst',
      benefit1: 'Ein ehrliches Erstgespräch, ohne Verkaufsdruck',
      benefit2: 'Konkrete Idee, welcher Kanal für dich Sinn macht',
      benefit3: 'Zugang zu unserem Netzwerk, wenn du jemanden brauchst',
      benefit4: 'Ein klarer Plan, wie der Markteintritt aussehen könnte',
      benefit5: 'Eine Einschätzung, wo die Risiken liegen',
      bafaHint: 'BAFA-gelistet. Beratung kann gefördert werden',
      timeline: 'So läuft es meist ab',
      timeline1: 'Erstgespräch: 1 bis 2 Tage',
      timeline2: 'Plan zusammenstellen: 3 bis 5 Tage',
      timeline3: 'Umsetzung: 2 bis 4 Wochen',
      timeline4: 'Auswertung & nächste Schritte: 2 bis 3 Tage',
      successTitle: 'Anfrage ist da',
      successMessage: 'Wir melden uns mit Terminvorschlägen für ein erstes Gespräch.',
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
      subtitle: 'Was wir lernen, wenn wir Produkte auf den Markt bringen',
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
      description: 'We help startups and SMEs sell where demand actually is. Marketplaces, TikTok Shop, Whatnot, eBay Live. Try it, measure it, grow it.',
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
      title2: 'to real sales.',
      subtitle: "Got a product and need customers? We get you on marketplaces, TikTok Shop or into live shopping. Then we see what actually works. Better to start in days than plan for months.",
      cta: "Let's connect",
      bafaBadge: 'BAFA-listed consultant',
    },
    customerReferences: {
      title: 'Trusted by innovative companies',
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Three steps and you\'re not just selling on paper anymore.',
      step1: {
        title: '1. Start',
        description: 'No 40-page concepts. We get you live on marketplaces, set up TikTok Shop, or bring you to Whatnot and eBay Live. Usually takes days, not quarters.',
      },
      step2: {
        title: '2. See what works',
        description: 'Sales tell you more than opinions. We measure what lands and analyze the data with AI. Faster than most people can do it by hand.',
      },
      step3: {
        title: '3. Grow it',
        description: 'What works gets bigger. New channel, new country, different audience. We help you take the next step when the numbers support it.',
      },
      videoPlaceholder: 'Video: See our methodology in action',
    },
    services: {
      title: 'Our Services & Network',
      subtitle: 'Sales and market entry, without the endless workshop rounds.',
      whatWeOffer: 'What We Offer',
      leadGeneration: {
        title: 'Social Commerce & Live Shopping',
        description: 'TikTok Shop, Whatnot, eBay Live. A lot is happening there right now. We set everything up and make sure the first orders come in.',
      },
      rapidPrototyping: {
        title: 'Get to market fast',
        description: 'Better live next week than fully planned next quarter. Marketplace, social commerce or B2B. What matters is that real buyers see your product.',
      },
      ecommerceSetup: {
        title: 'New Markets & Segments',
        description: 'Different platform, different country, different customers? We find out where your offer fits and go there.',
      },
      marketplaceManagement: {
        title: 'Marketplace operations',
        description: 'Listings, pricing, inventory. We handle the day-to-day on marketplaces so you can focus on what matters.',
      },
      performanceMarketing: {
        title: 'Sales & partnerships',
        description: 'New channel, new partner, new deal. Our network helps when things need to move fast. We negotiate, build and push things forward.',
      },
      interimManagement: {
        title: 'Interim Management',
        description: 'No team in place yet? We temporarily take over sales or e-commerce until you have someone permanent.',
      },
      whyConnectingTheDots: 'Why ConnectingTheDots?',
      benefit1: '<strong class="text-foreground font-semibold">Start instead of planning for months.</strong> We begin with real sales, not slides.',
      benefit2: '<strong class="text-foreground font-semibold">Social Commerce & Live Shopping.</strong> TikTok Shop, Whatnot, eBay Live. Channels that are actually growing right now.',
      benefit3: '<strong class="text-foreground font-semibold">Fast analysis with AI.</strong> Market data, competitors, test sales. GDPR-compliant and much faster than classic analysis.',
      benefit4: '<strong class="text-foreground font-semibold">Live in days.</strong> New platform, new country, new segment. No six-month ramp-up program.',
      benefit5: '<strong class="text-foreground font-semibold">Start, measure, grow.</strong> That\'s how we work. Not a framework, just our approach.',
      benefit6: '<strong class="text-foreground font-semibold">From start to operations.</strong> Strategy and execution from one team. No consultant who disappears afterward.',
      benefit7: '<strong class="text-foreground font-semibold">15 years in the business.</strong> Sales and market entry across DACH and Europe. We know where people trip up.',
    },
    caseStudy: {
      title: 'Use Case: GenesysAI in DACH',
      subtitle: '',
      heading: 'From test listing to seven-figure revenue',
      description1: 'GenesysAI wanted a foothold in DACH but wasn\'t sure which channel would work. We started with marketplaces as an experiment and built from there.',
      description2: 'Six months later: from one to four active sales channels, a successful Breuninger launch, four new suppliers in DACH and over a million euros in additional revenue.',
      kpi1: 'Sales Channels',
      kpi2: 'New DACH Suppliers',
      kpi3: 'Additional Revenue',
      testimonial: 'CTD helped us enter the EU market. Within months we had partnerships and channels we hadn\'t even considered before.',
    },
    aboutUs: {
      title: 'Our Team',
      teamMission: '"Ideas come fast. Finding customers takes longer. We shorten the path with real tests and real execution."',
      maximilian: {
        heading: 'Maximilian',
        intro: 'Senior Consultant, Strategy & Market Validation',
        experience: {
          title: 'Experience',
          paragraph1: 'For over 15 years, Maximilian has worked in e-commerce, marketplaces, and SaaS, including at Tradebyte and Gute Marken. Building new markets and driving growth was usually his job.',
          paragraph2: 'He doesn\'t separate strategy from execution. Positioning, MVP testing, go-to-market. He wants to see it work in the real market, not just on paper.',
          paragraph3: '',
        },
        mission: {
          title: 'Mission',
          paragraph1: 'What keeps coming up: especially mid-sized companies underestimate market entry. Products go live without a tested audience, without clear pricing and then everyone wonders where the budget went.',
          paragraph2: 'ConnectingTheDots is his answer: test fast, keep risk low, look at real data. His network across DACH and Europe helps with thinking and with doing.',
        },
        linkedin: 'LinkedIn Profile',
        linkedinUrl: 'https://www.linkedin.com/in/maximilianrebensburg/',
      },
      juliane: {
        heading: 'Juliane',
        intro: 'Senior Consultant, Brand, Commerce & Integration',
        experience: {
          title: 'Experience',
          paragraph1: 'Juliane comes from e-commerce, brand building, and integration, with roles at Tradebyte, Spryker, GROSSE LIEBE, onQuality, and X-Trade. She knows where tech and sales tend to clash.',
          paragraph2: 'She helps companies build digital channels, get integrations right, and communicate brands so customers understand what they\'re buying. Market-ready, to her, means it works operationally too.',
        },
        linkedin: 'LinkedIn Profile',
        linkedinUrl: 'https://www.linkedin.com/in/juliane-kissau-9ba29b180/',
      },
      ella: {
        heading: 'Ella',
        intro: 'Junior Feelgood Manager',
        description: 'Ella is the good soul of the office. She makes sure breaks actually happen, snacks get shared, and the team laughs once in a while. And yes, she happily accepts extra pets.',
      },
      sonnet: {
        heading: 'Sonnet',
        intro: 'AI Analyst, fast data analysis & market research',
        description: 'Sonnet crunches large datasets in minutes. Competitive analysis, market research, test sales evaluation, things that usually take days. That way we can tell you faster what we recommend and why.',
        badge: 'AI-powered',
      },
      opus: {
        heading: 'Opus',
        intro: 'AI Strategist, deep analysis & complex strategy development',
        description: 'Opus is the counterpart: slower, more thorough. For complex market analysis, strategy questions, and when many data points need to become a clear picture. You need both, speed and depth.',
        badge: 'AI-powered',
      },
      aiDisclaimer: 'Sonnet and Opus are AI models by Anthropic (Claude). We use them in a GDPR-compliant way: no personal customer data goes to AI systems. Analyses run on anonymized or aggregated data. We make the decisions, not the machine.',
    },
    leadForm: {
      title: 'Let\'s talk',
      subtitle: 'Startup or SME, doesn\'t matter. If you want to know whether your idea finds customers, we test it in the real market. Not in a theory session.',
      getStarted: 'Get Started Today',
      firstName: 'First Name',
      lastName: 'Last Name',
      company: 'Company',
      email: 'Email Address',
      goals: 'Project Goals & Challenges',
      goalsPlaceholder: 'What do you do? What do you want to achieve? Where are you stuck right now?',
      consentLabel: {
        prefix: 'I agree to be contacted and accept the ',
        linkText: 'privacy policy',
        suffix: '.',
        linkHref: '/en/datenschutz',
      },
      submit: 'Submit request',
      whatYouGet: 'What you get for free',
      benefit1: 'An honest first conversation, no sales pressure',
      benefit2: 'A concrete idea of which channel makes sense for you',
      benefit3: 'Access to our network when you need someone',
      benefit4: 'A clear plan for what market entry could look like',
      benefit5: 'An honest read on where the risks are',
      bafaHint: 'BAFA-listed. Consulting may be eligible for funding',
      timeline: 'How it usually goes',
      timeline1: 'First call: 1 to 2 days',
      timeline2: 'Putting a plan together: 3 to 5 days',
      timeline3: 'Execution: 2 to 4 weeks',
      timeline4: 'Review & next steps: 2 to 3 days',
      successTitle: 'Request received',
      successMessage: 'We\'ll get back to you with times for a first conversation.',
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
      subtitle: 'What we learn when we bring products to market',
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

