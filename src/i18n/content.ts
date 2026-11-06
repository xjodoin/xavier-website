import type { Locale } from './config';

type L<T> = Record<Locale, T>;

/* ------------------------------------------------------------------ */
/* Interface strings                                                  */
/* ------------------------------------------------------------------ */

export const ui = {
  en: {
    skip: 'Skip to content',
    nav: [
      { href: '/#services', label: 'Services' },
      { href: '/#process', label: 'Process' },
      { href: '/#work', label: 'Work' },
      { href: '/#about', label: 'About' },
      { href: '/blog/', label: 'Writing' }
    ],
    navCta: 'Book a call',
    menu: 'Menu',
    theme: 'Toggle dark mode',
    switchLang: 'Français',
    switchLangLabel: 'Voir cette page en français',
    footerTagline: 'AI consultant and engineer in Montréal, Québec. AI agents, workflow automation and custom models for small and mid-sized businesses.',
    footerServices: 'Services',
    footerElsewhere: 'Elsewhere',
    footerArea: 'Serving Montréal, Laval, Longueuil, Québec City and clients across Québec and Canada — in English and French.',
    rights: 'All rights reserved.',
    readMore: 'Learn more',
    backHome: 'Back to home',
    visit: 'Visit',
    source: 'Source'
  },
  fr: {
    skip: 'Aller au contenu',
    nav: [
      { href: '/fr/#services', label: 'Services' },
      { href: '/fr/#process', label: 'Démarche' },
      { href: '/fr/#work', label: 'Réalisations' },
      { href: '/fr/#about', label: 'À propos' },
      { href: '/blog/', label: 'Blogue' }
    ],
    navCta: 'Prendre rendez-vous',
    menu: 'Menu',
    theme: 'Activer ou désactiver le mode sombre',
    switchLang: 'English',
    switchLangLabel: 'View this page in English',
    footerTagline: "Consultant et ingénieur en intelligence artificielle à Montréal, Québec. Agents IA, automatisation des processus et modèles sur mesure pour les PME.",
    footerServices: 'Services',
    footerElsewhere: 'Ailleurs',
    footerArea: 'Au service de Montréal, Laval, Longueuil, la ville de Québec et des entreprises partout au Québec et au Canada — en français et en anglais.',
    rights: 'Tous droits réservés.',
    readMore: 'En savoir plus',
    backHome: "Retour à l'accueil",
    visit: 'Visiter',
    source: 'Code source'
  }
} as const;

/* ------------------------------------------------------------------ */
/* Services (each has a dedicated, locally targeted landing page)      */
/* ------------------------------------------------------------------ */

export type ServiceId = 'agents' | 'consulting' | 'models';

export type Service = {
  id: ServiceId;
  slug: L<string>;
  icon: 'agent' | 'compass' | 'model';
  name: L<string>;
  tagline: L<string>;
  summary: L<string>;
  bullets: L<string[]>;
  seo: L<{ title: string; description: string }>;
  h1: L<string>;
  intro: L<string>;
  problemTitle: L<string>;
  problems: L<string[]>;
  useCasesTitle: L<string>;
  useCases: L<{ title: string; body: string }[]>;
  deliverablesTitle: L<string>;
  deliverables: L<string[]>;
  proofTitle: L<string>;
  proof: L<{ title: string; body: string; href?: string }[]>;
  faq: L<{ q: string; a: string }[]>;
};

export const services: Service[] = [
  {
    id: 'agents',
    slug: { en: 'ai-agents', fr: 'agents-ia' },
    icon: 'agent',
    name: { en: 'Custom AI agents', fr: 'Agents IA sur mesure' },
    tagline: {
      en: 'Agents that handle the busywork',
      fr: 'Des agents qui prennent en charge les tâches répétitives'
    },
    summary: {
      en: 'AI agents built around your tools, your documents and your rules. They draft, sort, look things up and fill in forms, and a person approves anything that matters.',
      fr: 'Des agents IA conçus autour de vos outils, de vos documents et de vos règles. Ils rédigent, trient, recherchent et remplissent les formulaires, et une personne approuve tout ce qui compte.'
    },
    bullets: {
      en: ['Email and request triage with drafted replies', 'Assistants that answer from your own documents', 'Data entry from PDFs, invoices and forms'],
      fr: ['Tri des courriels et des demandes, avec réponses préparées', 'Assistants qui répondent à partir de vos propres documents', 'Saisie de données à partir de PDF, de factures et de formulaires']
    },
    seo: {
      en: {
        title: "AI Agent Development for SMBs in Montréal & Québec",
        description:
          "Custom AI agents for Montréal and Québec SMBs: email triage, document assistants, data entry and quotes, wired to your tools, with human approval."
      },
      fr: {
        title: "Développement d’agents IA pour PME à Montréal et au Québec",
        description:
          "Agents IA sur mesure pour les PME de Montréal et du Québec : tri des courriels, assistants documentaires, saisie et soumissions, avec approbation humaine."
      }
    },
    h1: {
      en: 'Custom AI agents for small businesses in Montréal and Québec',
      fr: 'Agents IA sur mesure pour les PME de Montréal et du Québec'
    },
    intro: {
      en: 'An AI agent is software that reads, decides and acts on a task the way a careful assistant would: it gathers context from your systems, prepares the work and hands it to a person for approval. I design, build and maintain agents for small and mid-sized teams that do not have an in-house AI group.',
      fr: "Un agent IA est un logiciel qui lit, décide et agit sur une tâche comme le ferait un adjoint attentif : il rassemble le contexte dans vos systèmes, prépare le travail et le soumet à une personne pour approbation. Je conçois, développe et maintiens des agents pour les PME qui n'ont pas d'équipe IA à l'interne."
    },
    problemTitle: { en: 'Signs you are ready for an agent', fr: 'Signes que vous êtes prêt pour un agent' },
    problems: {
      en: [
        'Someone spends hours a week copying information between email, spreadsheets and your CRM.',
        'The same customer questions get answered by hand, from documents that already exist.',
        'Quotes, reports or follow-ups wait in a queue because only one person knows how to prepare them.'
      ],
      fr: [
        "Quelqu'un passe des heures chaque semaine à copier de l'information entre les courriels, les chiffriers et votre CRM.",
        'Les mêmes questions de clients reçoivent des réponses manuelles, à partir de documents qui existent déjà.',
        "Les soumissions, rapports ou suivis attendent parce qu'une seule personne sait les préparer."
      ]
    },
    useCasesTitle: { en: 'What an agent can take off your plate', fr: "Ce qu'un agent peut vous enlever des mains" },
    useCases: {
      en: [
        { title: 'Inbox and request triage', body: 'Classifies incoming email and forms, pulls the customer record and drafts a reply or a ticket for review.' },
        { title: 'Document assistant', body: 'Answers staff or customer questions from your policies, contracts and manuals, with links to the source passage.' },
        { title: 'Quotes and estimates', body: 'Turns a request into a draft quote using your price list, past jobs and business rules.' },
        { title: 'Data entry from documents', body: 'Extracts fields from invoices, PDFs and photos and posts them to your accounting or ERP system.' },
        { title: 'Reporting', body: 'Assembles the weekly report from your tools and writes the summary, so the meeting starts with the numbers.' },
        { title: 'Internal tools via MCP', body: 'Exposes your systems (SharePoint, CRM, databases) to AI assistants through secure Model Context Protocol servers.' }
      ],
      fr: [
        { title: 'Tri des courriels et des demandes', body: 'Classe les courriels et formulaires entrants, retrouve la fiche client et prépare une réponse ou un billet à valider.' },
        { title: 'Assistant documentaire', body: 'Répond aux questions des employés ou des clients à partir de vos politiques, contrats et guides, avec un lien vers la source.' },
        { title: 'Soumissions et estimations', body: 'Transforme une demande en soumission préliminaire à partir de votre liste de prix, de vos projets passés et de vos règles.' },
        { title: 'Saisie à partir de documents', body: 'Extrait les champs des factures, PDF et photos et les inscrit dans votre logiciel comptable ou votre ERP.' },
        { title: 'Rapports', body: 'Compile le rapport hebdomadaire à partir de vos outils et en rédige le résumé, pour que la réunion commence avec les chiffres.' },
        { title: 'Outils internes via MCP', body: 'Rend vos systèmes (SharePoint, CRM, bases de données) accessibles aux assistants IA grâce à des serveurs Model Context Protocol sécurisés.' }
      ]
    },
    deliverablesTitle: { en: 'What you get', fr: 'Ce que vous obtenez' },
    deliverables: {
      en: [
        'A working agent connected to your real tools, not a demo',
        'Human approval steps wherever money, customers or data are involved',
        'A log of every action so you can see what the agent did and why',
        'Cost and quality monitoring, plus a plain-language runbook for your team',
        'Hosting in Canada or in your own cloud account when required'
      ],
      fr: [
        'Un agent fonctionnel branché sur vos vrais outils, pas une démo',
        "Des étapes d'approbation humaine partout où il est question d'argent, de clients ou de données",
        "Un journal de chaque action pour savoir ce que l'agent a fait et pourquoi",
        "Un suivi des coûts et de la qualité, et un guide d'utilisation en langage clair pour votre équipe",
        "Un hébergement au Canada ou dans votre propre compte infonuagique au besoin"
      ]
    },
    proofTitle: { en: 'Built in production', fr: 'Déjà en production' },
    proof: {
      en: [
        { title: 'Finley, AI Aquarium Doctor', body: 'A streaming assistant grounded in each user’s own tank data: water tests, livestock and care schedules.', href: 'https://aiaquariumdoctor.com' },
        { title: 'Sellaroo', body: 'Turns a photo into a priced, ready-to-post marketplace listing with Gemini, vector search and PostGIS.', href: 'https://sellaroo.app' },
        { title: 'MCP servers', body: 'Open-source and private MCP servers for app-store listings, compliance documents and SharePoint.', href: 'https://github.com/xjodoin/perfectdeckcli' }
      ],
      fr: [
        { title: 'Finley, AI Aquarium Doctor', body: "Un assistant conversationnel ancré dans les données de chaque utilisateur : tests d'eau, poissons et calendrier d'entretien.", href: 'https://aiaquariumdoctor.com' },
        { title: 'Sellaroo', body: 'Transforme une photo en annonce prête à publier, avec prix suggéré, grâce à Gemini, la recherche vectorielle et PostGIS.', href: 'https://sellaroo.app' },
        { title: 'Serveurs MCP', body: 'Serveurs MCP libres et privés pour les fiches des magasins d’applications, les documents de conformité et SharePoint.', href: 'https://github.com/xjodoin/perfectdeckcli' }
      ]
    },
    faq: {
      en: [
        { q: 'Will the agent act on its own?', a: 'Only where you decide it should. Most first agents prepare work and a person approves it. Autonomy is widened step by step, once the logs show it is reliable.' },
        { q: 'Which tools can it connect to?', a: 'Anything with an API or an export: Microsoft 365 and SharePoint, Google Workspace, common CRMs and accounting tools, databases and internal web apps.' },
        { q: 'Where is our data processed?', a: 'We choose together. Options include Canadian cloud regions, your own cloud account, or local models when data must not leave your network.' }
      ],
      fr: [
        { q: "L'agent agit-il seul?", a: "Seulement là où vous le décidez. La plupart des premiers agents préparent le travail et une personne l'approuve. L'autonomie s'élargit graduellement, quand les journaux montrent qu'il est fiable." },
        { q: 'À quels outils peut-il se brancher?', a: "À tout ce qui offre une API ou une exportation : Microsoft 365 et SharePoint, Google Workspace, les CRM et logiciels comptables courants, les bases de données et vos applications internes." },
        { q: 'Où nos données sont-elles traitées?', a: 'On le choisit ensemble : régions infonuagiques canadiennes, votre propre compte infonuagique, ou des modèles locaux quand les données ne doivent pas quitter votre réseau.' }
      ]
    }
  },
  {
    id: 'consulting',
    slug: { en: 'ai-consulting', fr: 'consultation-ia' },
    icon: 'compass',
    name: { en: 'AI workflow consulting', fr: 'Consultation en intégration de l’IA' },
    tagline: {
      en: 'Find where AI actually pays off',
      fr: "Trouver où l'IA rapporte vraiment"
    },
    summary: {
      en: 'A practical review of how work flows through your company, then a ranked plan of where AI saves time or money, what it costs, and what to leave alone.',
      fr: "Une analyse concrète du cheminement du travail dans votre entreprise, suivie d'un plan priorisé : où l'IA fait gagner du temps ou de l'argent, à quel coût, et ce qu'il vaut mieux laisser tel quel."
    },
    bullets: {
      en: ['Workflow mapping with the people who do the work', 'Ranked opportunities with effort and payback', 'Privacy and Law 25 considerations up front'],
      fr: ['Cartographie des processus avec les personnes qui font le travail', 'Occasions priorisées selon l’effort et le rendement', 'Confidentialité et Loi 25 prises en compte dès le départ']
    },
    seo: {
      en: {
        title: "AI Consultant in Montréal: AI Integration for SMBs",
        description:
          "Independent Montréal AI consultant: map your workflows, rank AI automation opportunities, choose tools, plan for Law 25 and get a clear roadmap."
      },
      fr: {
        title: "Consultant en IA à Montréal : intégration de l’IA en PME",
        description:
          "Consultant IA indépendant à Montréal : cartographie des processus, occasions d’automatisation priorisées, choix d’outils, Loi 25 et feuille de route."
      }
    },
    h1: {
      en: 'AI consulting for Montréal and Québec businesses',
      fr: 'Consultation en intelligence artificielle pour les entreprises de Montréal et du Québec'
    },
    intro: {
      en: 'Most companies do not need an AI strategy deck. They need someone who understands both the technology and the day-to-day work to point at the three or four places where AI will make a measurable difference, and to say plainly where it will not. That is what this engagement delivers.',
      fr: "La plupart des entreprises n'ont pas besoin d'une présentation sur la stratégie IA. Elles ont besoin de quelqu'un qui comprend à la fois la technologie et le travail au quotidien, capable de pointer les trois ou quatre endroits où l'IA fera une différence mesurable, et de dire franchement où elle n'en fera pas. C'est ce que propose ce mandat."
    },
    problemTitle: { en: 'Good reasons to start here', fr: 'De bonnes raisons de commencer ici' },
    problems: {
      en: [
        'Your team already uses ChatGPT or Copilot informally and you want it done safely and on purpose.',
        'You have heard a dozen vendor pitches and want an independent opinion before you buy.',
        'You know a few processes are slow but not which ones are worth automating first.'
      ],
      fr: [
        'Votre équipe utilise déjà ChatGPT ou Copilot de façon informelle et vous voulez encadrer cet usage.',
        "Vous avez entendu une douzaine de vendeurs et voulez un avis indépendant avant d'acheter.",
        'Vous savez que certains processus sont lents, sans savoir lesquels automatiser en premier.'
      ]
    },
    useCasesTitle: { en: 'How the engagement works', fr: 'Déroulement du mandat' },
    useCases: {
      en: [
        { title: '1. Discovery interviews', body: 'Short conversations with the people who do the work, to see where time and errors actually go.' },
        { title: '2. Workflow map', body: 'A simple map of your key processes, the tools involved and the hand-offs between people.' },
        { title: '3. Opportunity ranking', body: 'Each idea scored on time saved, risk, cost and effort, so the first project is an easy yes.' },
        { title: '4. Tool and build decisions', body: 'Buy, configure or build: which existing products fit, and where custom work is justified.' },
        { title: '5. Data and privacy review', body: 'What data each idea touches, where it would be processed, and what Québec’s Law 25 requires.' },
        { title: '6. Roadmap and pilot', body: 'A sequenced plan, and the option to build the first pilot with me or with your own team.' }
      ],
      fr: [
        { title: '1. Entrevues de découverte', body: 'De courtes conversations avec les personnes qui font le travail, pour voir où vont vraiment le temps et les erreurs.' },
        { title: '2. Carte des processus', body: 'Une carte simple de vos processus clés, des outils utilisés et des transferts entre les personnes.' },
        { title: '3. Priorisation des occasions', body: 'Chaque idée est évaluée selon le temps gagné, le risque, le coût et l’effort, pour que le premier projet soit une évidence.' },
        { title: '4. Choix des outils', body: 'Acheter, configurer ou développer : quels produits existants conviennent, et où un développement sur mesure se justifie.' },
        { title: '5. Données et confidentialité', body: 'Les données touchées par chaque idée, où elles seraient traitées et ce qu’exige la Loi 25 du Québec.' },
        { title: '6. Feuille de route et projet pilote', body: 'Un plan séquencé, avec la possibilité de réaliser le premier projet pilote avec moi ou avec votre équipe.' }
      ]
    },
    deliverablesTitle: { en: 'What you get', fr: 'Ce que vous obtenez' },
    deliverables: {
      en: [
        'A written report your leadership team can read in twenty minutes',
        'A ranked list of AI opportunities with estimated effort and payback',
        'Recommendations on tools, vendors and what to build',
        'A usage policy for generative AI tools adapted to your team',
        'A concrete pilot proposal with success criteria'
      ],
      fr: [
        'Un rapport écrit que votre direction peut lire en vingt minutes',
        "Une liste priorisée d'occasions IA avec l'effort et le rendement estimés",
        'Des recommandations sur les outils, les fournisseurs et ce qui doit être développé',
        "Une politique d'utilisation des outils d'IA générative adaptée à votre équipe",
        'Une proposition de projet pilote concrète avec des critères de réussite'
      ]
    },
    proofTitle: { en: 'Why my advice is practical', fr: 'Pourquoi mes conseils sont concrets' },
    proof: {
      en: [
        { title: 'I ship what I recommend', body: 'Six AI products in production on iOS, Android and the web, built and operated end to end.' },
        { title: 'Regulated environments', body: 'Years of work on production healthcare software, where privacy, audit trails and uptime are not optional.' },
        { title: 'Independent', body: 'No reseller agreements. The recommendation is whatever fits your team, including “don’t use AI for this”.' }
      ],
      fr: [
        { title: 'Je livre ce que je recommande', body: 'Six produits IA en production sur iOS, Android et le Web, conçus et exploités de bout en bout.' },
        { title: 'Milieux réglementés', body: "Des années de travail sur des logiciels de santé en production, où la confidentialité, la traçabilité et la disponibilité ne sont pas optionnelles." },
        { title: 'Indépendant', body: "Aucune entente de revente. La recommandation est ce qui convient à votre équipe, y compris « n'utilisez pas l'IA pour ceci »." }
      ]
    },
    faq: {
      en: [
        { q: 'Do we need to be technical?', a: 'No. The engagement is designed for owners and managers. The report explains every recommendation in plain language.' },
        { q: 'Is this only for large companies?', a: 'No. It is designed for small and mid-sized businesses, from a handful of employees to a few hundred.' },
        { q: 'Can you work on site?', a: 'Yes, in the Greater Montréal area. Elsewhere in Québec and Canada the work is done remotely, with on-site visits when useful.' }
      ],
      fr: [
        { q: 'Faut-il avoir des connaissances techniques?', a: 'Non. Le mandat est pensé pour les propriétaires et gestionnaires. Le rapport explique chaque recommandation en langage clair.' },
        { q: 'Est-ce seulement pour les grandes entreprises?', a: "Non. C'est conçu pour les PME, de quelques employés à quelques centaines." },
        { q: 'Pouvez-vous travailler sur place?', a: 'Oui, dans le Grand Montréal. Ailleurs au Québec et au Canada, le travail se fait à distance, avec des visites au besoin.' }
      ]
    }
  },
  {
    id: 'models',
    slug: { en: 'ai-model-development', fr: 'developpement-modeles-ia' },
    icon: 'model',
    name: { en: 'AI model development', fr: 'Développement de modèles d’IA' },
    tagline: {
      en: 'Custom models when off-the-shelf falls short',
      fr: 'Des modèles sur mesure quand les solutions toutes faites ne suffisent pas'
    },
    summary: {
      en: 'Computer vision and language models trained, evaluated and deployed for your data: on a server, in the browser or directly on the phone.',
      fr: 'Des modèles de vision par ordinateur et de langage entraînés, évalués et déployés pour vos données : sur serveur, dans le navigateur ou directement sur le téléphone.'
    },
    bullets: {
      en: ['Image classification and visual inspection', 'Fine-tuning and evaluation of language models', 'On-device and in-browser inference'],
      fr: ["Classification d'images et inspection visuelle", 'Ajustement et évaluation de modèles de langage', 'Inférence sur appareil et dans le navigateur']
    },
    seo: {
      en: {
        title: "Custom AI & ML Model Development in Montréal",
        description:
          "Custom AI models built in Montréal: computer vision, LLM fine-tuning and evaluation, on-device and WebGPU deployment, with safe rollout and monitoring."
      },
      fr: {
        title: "Développement de modèles d’IA sur mesure à Montréal",
        description:
          "Modèles d’IA sur mesure à Montréal : vision par ordinateur, ajustement de LLM, déploiement sur appareil et WebGPU, mise en production prudente."
      }
    },
    h1: {
      en: 'Custom AI model development in Montréal',
      fr: "Développement de modèles d'IA sur mesure à Montréal"
    },
    intro: {
      en: 'General-purpose AI models are a great start, but some problems need a model that knows your products, your images or your vocabulary, runs without an internet connection, or costs a fraction per request. I take models from dataset to production: training, honest evaluation, compact export and a careful rollout.',
      fr: "Les modèles d'IA généralistes sont un excellent point de départ, mais certains problèmes exigent un modèle qui connaît vos produits, vos images ou votre vocabulaire, qui fonctionne sans connexion Internet ou qui coûte une fraction du prix par requête. J'accompagne les modèles du jeu de données jusqu'à la production : entraînement, évaluation rigoureuse, exportation compacte et déploiement prudent."
    },
    problemTitle: { en: 'When a custom model makes sense', fr: 'Quand un modèle sur mesure a du sens' },
    problems: {
      en: [
        'A general model is close but keeps getting your specific cases wrong.',
        'Per-request API costs grow faster than the value of each prediction.',
        'Images or data cannot leave the device, the plant floor or the country.'
      ],
      fr: [
        "Un modèle généraliste s'en approche, mais se trompe souvent sur vos cas particuliers.",
        "Les coûts d'API par requête augmentent plus vite que la valeur de chaque prédiction.",
        "Les images ou les données ne peuvent pas quitter l'appareil, l'usine ou le pays."
      ]
    },
    useCasesTitle: { en: 'What I build', fr: 'Ce que je développe' },
    useCases: {
      en: [
        { title: 'Computer vision', body: 'Classification, detection and visual inspection trained on your images, with confidence scores you can act on.' },
        { title: 'Language model fine-tuning', body: 'Smaller models tuned on your documents and tasks, often matching larger models at a fraction of the cost.' },
        { title: 'Evaluation sets', body: 'Test sets built from real cases, so you know how good a model is before customers find out.' },
        { title: 'On-device and in-browser', body: 'Compact exports for iOS, Android and WebGPU, validated for numerical parity with the original model.' },
        { title: 'Hybrid pipelines', body: 'A fast local model first, a large model as fallback, and shadow testing before anything is promoted.' },
        { title: 'Monitoring and retraining', body: 'Drift tracking and a reviewed loop for turning verified corrections into better models.' }
      ],
      fr: [
        { title: 'Vision par ordinateur', body: 'Classification, détection et inspection visuelle entraînées sur vos images, avec des scores de confiance utilisables.' },
        { title: 'Ajustement de modèles de langage', body: 'Des modèles plus petits, ajustés à vos documents et à vos tâches, souvent aussi bons que les grands modèles pour une fraction du coût.' },
        { title: "Jeux d'évaluation", body: "Des jeux de test bâtis à partir de cas réels, pour connaître la qualité d'un modèle avant que vos clients la découvrent." },
        { title: 'Sur appareil et dans le navigateur', body: "Des exportations compactes pour iOS, Android et WebGPU, validées pour donner les mêmes résultats que le modèle d'origine." },
        { title: 'Pipelines hybrides', body: "Un modèle local rapide d'abord, un grand modèle en relève, et des tests en parallèle avant toute mise en production." },
        { title: 'Suivi et réentraînement', body: 'Un suivi de la dérive et une boucle révisée pour transformer les corrections vérifiées en meilleurs modèles.' }
      ]
    },
    deliverablesTitle: { en: 'What you get', fr: 'Ce que vous obtenez' },
    deliverables: {
      en: [
        'A trained model and the reproducible pipeline that produced it',
        'An evaluation report on your real cases, including where it fails',
        'Exports for your target: server, mobile or browser',
        'A staged rollout plan with fallback and monitoring',
        'Your data and weights stay yours'
      ],
      fr: [
        "Un modèle entraîné et le pipeline reproductible qui l'a produit",
        "Un rapport d'évaluation sur vos cas réels, y compris là où il échoue",
        'Des exportations pour votre cible : serveur, mobile ou navigateur',
        'Un plan de déploiement par étapes avec relève et suivi',
        'Vos données et vos poids de modèle vous appartiennent'
      ]
    },
    proofTitle: { en: 'Models I have shipped', fr: 'Modèles déjà livrés' },
    proof: {
      en: [
        { title: 'Plant identification for AI Plant Doctor', body: 'Proprietary vision models with out-of-distribution rejection, calibrated confidence, on-device export and a Gemini fallback with shadow auditing.', href: 'https://theaiplantdoctor.com' },
        { title: 'MoGe-3 on WebGPU', body: 'An open-source browser port of Microsoft’s MoGe-3 ViT-L: single-photo 3D reconstruction on the visitor’s own GPU, with no upload.', href: 'https://huggingface.co/spaces/xjodoin/moge3-webgpu' },
        { title: 'Local-first video AI', body: 'clipcli plans video clips with an on-device Gemma model: no upload and no API key.', href: 'https://github.com/xjodoin/clipcli' }
      ],
      fr: [
        { title: 'Identification de plantes pour AI Plant Doctor', body: 'Modèles de vision exclusifs avec rejet des cas hors distribution, confiance calibrée, exportation sur appareil et relève Gemini avec audit en parallèle.', href: 'https://theaiplantdoctor.com' },
        { title: 'MoGe-3 sur WebGPU', body: 'Un portage libre de MoGe-3 ViT-L de Microsoft dans le navigateur : reconstruction 3D à partir d’une seule photo, sur le GPU du visiteur, sans téléversement.', href: 'https://huggingface.co/spaces/xjodoin/moge3-webgpu' },
        { title: 'IA vidéo locale', body: 'clipcli planifie des extraits vidéo avec un modèle Gemma exécuté sur l’appareil : aucun téléversement, aucune clé d’API.', href: 'https://github.com/xjodoin/clipcli' }
      ]
    },
    faq: {
      en: [
        { q: 'How much data do we need?', a: 'Less than most people think when we start from a strong pretrained model. A few hundred labelled examples per class is often enough to know whether a custom model is worth it.' },
        { q: 'Who owns the model?', a: 'You do: the weights, the training code and the evaluation set are delivered to you.' },
        { q: 'Can it run without the cloud?', a: 'Yes. Models can be exported for phones, browsers (WebGPU) or a local server on your premises.' }
      ],
      fr: [
        { q: 'Combien de données faut-il?', a: "Moins qu'on le pense, quand on part d'un bon modèle préentraîné. Quelques centaines d'exemples étiquetés par catégorie suffisent souvent pour savoir si un modèle sur mesure en vaut la peine." },
        { q: 'À qui appartient le modèle?', a: "À vous : les poids, le code d'entraînement et le jeu d'évaluation vous sont remis." },
        { q: 'Peut-il fonctionner sans le nuage?', a: 'Oui. Les modèles peuvent être exportés pour téléphone, navigateur (WebGPU) ou un serveur local dans vos locaux.' }
      ]
    }
  }
];

export const serviceById = (id: ServiceId) => services.find((s) => s.id === id)!;
export const servicePath = (s: Service, locale: Locale) =>
  locale === 'fr' ? `/fr/services/${s.slug.fr}/` : `/services/${s.slug.en}/`;

/* ------------------------------------------------------------------ */
/* Products and open source                                           */
/* ------------------------------------------------------------------ */

export type ProductImage = { src: string; width: number; height: number; alt: L<string>; kind: 'phone' | 'wide' };

export type Product = {
  name: string;
  href: string;
  body: L<string>;
  stack: string[];
  featured?: boolean;
  images?: ProductImage[];
};

export const products: Product[] = [
  {
    name: 'AI Plant Doctor',
    href: 'https://theaiplantdoctor.com',
    featured: true,
    body: {
      en: 'Identify a plant and diagnose what is wrong from one photo, then get a treatment plan and care reminders. Runs on custom vision models with a Gemini fallback.',
      fr: "Identifiez une plante et diagnostiquez son problème à partir d'une seule photo, puis recevez un plan de traitement et des rappels d'entretien. Propulsé par des modèles de vision maison avec relève Gemini."
    },
    stack: ['Flutter', 'Firebase', 'Custom vision models', 'Gemini'],
    images: [
      {
        src: '/images/products/aiplantdoctor-dashboard.webp',
        width: 560,
        height: 1216,
        kind: 'phone',
        alt: { en: 'AI Plant Doctor “My Plants” screen with a health score for each plant', fr: 'Écran « Mes plantes » d’AI Plant Doctor avec un score de santé par plante' }
      },
      {
        src: '/images/products/aiplantdoctor-diagnosis.webp',
        width: 560,
        height: 1216,
        kind: 'phone',
        alt: { en: 'AI Plant Doctor diagnosis result with health score, AI analysis and treatment plan', fr: 'Résultat de diagnostic d’AI Plant Doctor avec score de santé, analyse IA et plan de traitement' }
      }
    ]
  },
  {
    name: 'PlantMatch',
    href: 'https://plantmatchapp.com',
    body: {
      en: 'Snap a room and see it restyled with plants matched to its light, your style and your pets. Built on the AI Plant Doctor platform.',
      fr: 'Photographiez une pièce et voyez-la transformée avec des plantes adaptées à sa luminosité, à votre style et à vos animaux. Bâtie sur la plateforme d’AI Plant Doctor.'
    },
    stack: ['Flutter', 'Image generation', 'Gemini'],
    images: [
      {
        src: '/images/products/plantmatch.webp',
        width: 640,
        height: 1391,
        kind: 'phone',
        alt: { en: 'PlantMatch before-and-after: an empty living room restyled with plants', fr: 'PlantMatch avant-après : un salon vide transformé avec des plantes' }
      }
    ]
  },
  {
    name: 'AI Aquarium Doctor',
    href: 'https://aiaquariumdoctor.com',
    body: {
      en: 'Fish health checkups from symptoms and photos, water-chemistry tracking and Finley, an assistant grounded in your own tanks.',
      fr: "Bilans de santé des poissons à partir de symptômes et de photos, suivi de la qualité de l'eau et Finley, un assistant qui connaît vos aquariums."
    },
    stack: ['Flutter', 'Vertex AI', 'Agents'],
    images: [
      {
        src: '/images/products/aiaquariumdoctor.webp',
        width: 640,
        height: 1391,
        kind: 'phone',
        alt: { en: 'AI Aquarium Doctor dashboard with tank health scores and check-ins', fr: 'Tableau de bord d’AI Aquarium Doctor avec score de santé des aquariums et suivis' }
      }
    ]
  },
  {
    name: 'Sellaroo',
    href: 'https://sellaroo.app',
    body: {
      en: 'Snap a photo of anything around the house and get a priced, ready-to-post marketplace listing.',
      fr: "Prenez en photo n'importe quel objet de la maison et obtenez une annonce prête à publier, avec un prix suggéré."
    },
    stack: ['Flutter', 'FastAPI', 'pgvector', 'Gemini'],
    images: [
      {
        src: '/images/products/sellaroo.webp',
        width: 640,
        height: 1138,
        kind: 'phone',
        alt: { en: 'Sellaroo home screen showing weekly earnings and live listings', fr: 'Écran d’accueil de Sellaroo avec les gains de la semaine et les annonces actives' }
      }
    ]
  },
  {
    name: 'PerfectDeck',
    href: 'https://perfectdeck.ai',
    body: {
      en: 'Photo-first backyard deck design: start from a picture of your house, describe a change and see it in 3D.',
      fr: "Conception de terrasses à partir d'une photo : partez d'une image de votre maison, décrivez un changement et voyez-le en 3D."
    },
    stack: ['Three.js', 'Vertex AI', '3D reconstruction'],
    images: [
      {
        src: '/images/products/perfectdeck.webp',
        width: 900,
        height: 675,
        kind: 'wide',
        alt: { en: '3D model of a house with a designed wooden deck and pergola', fr: 'Modèle 3D d’une maison avec une terrasse en bois et une pergola' }
      }
    ]
  },
  {
    name: 'Rangefind',
    href: 'https://rangefind.dev',
    body: {
      en: 'Static search for large sites with no search server: the browser queries a packed index over HTTP range requests. Powers a planet-scale OpenStreetMap index.',
      fr: "Recherche statique pour les grands sites, sans serveur de recherche : le navigateur interroge un index compact par requêtes HTTP Range. Propulse un index OpenStreetMap à l'échelle planétaire."
    },
    stack: ['JavaScript', 'Cloudflare R2', 'Search']
  }
];

export type OssProject = { name: string; href: string; lang: string; body: L<string> };

export const openSource: OssProject[] = [
  {
    name: 'TorpedoQuery',
    href: 'https://github.com/xjodoin/torpedoquery',
    lang: 'Java',
    body: { en: 'Type-safe Hibernate query builder.', fr: 'Générateur de requêtes Hibernate typé.' }
  },
  {
    name: 'node-quartz',
    href: 'https://github.com/xjodoin/node-quartz',
    lang: 'TypeScript',
    body: { en: 'Distributed, Redis-backed job scheduler for Node.js.', fr: 'Planificateur de tâches distribué pour Node.js, basé sur Redis.' }
  },
  {
    name: 'perfectdeckcli',
    href: 'https://github.com/xjodoin/perfectdeckcli',
    lang: 'Python · MCP',
    body: { en: 'CLI and MCP server for App Store and Google Play listings.', fr: 'CLI et serveur MCP pour les fiches App Store et Google Play.' }
  },
  {
    name: 'gptchangelog',
    href: 'https://github.com/xjodoin/gptchangelog',
    lang: 'Python',
    body: { en: 'Validated changelogs generated from Git history with LLMs.', fr: "Journaux des modifications validés, générés à partir de l'historique Git avec des LLM." }
  },
  {
    name: 'clipcli',
    href: 'https://github.com/xjodoin/clipcli',
    lang: 'Python',
    body: { en: 'Local-first AI video clipping and promo pipeline.', fr: 'Pipeline local de découpage vidéo et de montage promotionnel par IA.' }
  },
  {
    name: 'moge3-webgpu',
    href: 'https://github.com/xjodoin/moge3-webgpu',
    lang: 'WebGPU',
    body: { en: 'MoGe-3 3D reconstruction running in the browser.', fr: 'Reconstruction 3D MoGe-3 exécutée dans le navigateur.' }
  }
];

/* ------------------------------------------------------------------ */
/* Home page copy                                                     */
/* ------------------------------------------------------------------ */

export const home = {
  en: {
    seo: {
      title: "Montréal AI Consultant & AI Agent Developer | Xavier Jodoin",
        description:
          "Montréal AI consultant helping Québec SMBs put AI to work: custom AI agents, workflow automation and custom models. Bilingual. Free 30-minute call."
    },
    hero: {
      eyebrow: 'AI consultant · Montréal, Québec',
      titleA: 'AI that does',
      titleEm: 'real work',
      titleB: 'for small teams.',
      lead: 'I help small and mid-sized businesses in Montréal and across Québec put AI to work: finding where it pays off, building agents that plug into the tools you already use, and training custom models when off-the-shelf won’t do.',
      primary: 'Book a free 30-minute call',
      secondary: 'Explore services',
      portraitAlt: 'Xavier Jodoin, AI consultant in Montréal',
      facts: [
        { value: '6', label: 'AI products in production' },
        { value: '100+', label: 'open-source repositories' },
        { value: 'EN · FR', label: 'bilingual service' },
        { value: 'MTL', label: 'on site in Greater Montréal' }
      ]
    },
    services: {
      eyebrow: 'Services',
      title: 'Three ways to bring AI into your business',
      lead: 'Start with advice, start with a build, or start with a model. Every engagement ends with something your team can use on Monday.',
      principlesTitle: 'How I work',
      principles: [
        'A person approves anything that matters',
        'Your data stays yours, hosted in Canada when needed',
        'Measured against time and money saved, not hype'
      ]
    },
    flow: {
      eyebrow: 'What an agent looks like',
      title: 'A supplier request arrives. Ten minutes of work becomes one click.',
      lead: 'Agents are not magic. They are a short, visible sequence of steps, with a human checkpoint where it counts.',
      steps: [
        { tag: 'Trigger', title: 'Email arrives', body: 'A customer asks for a quote on 40 units.' },
        { tag: 'Context', title: 'Agent looks things up', body: 'Customer history, price list, stock levels.' },
        { tag: 'Draft', title: 'Agent prepares the quote', body: 'Line items, discount rules, delivery date.' },
        { tag: 'Approve', title: 'You review in one click', body: 'Edit if needed, then approve.', human: true },
        { tag: 'Done', title: 'Sent and logged', body: 'Quote sent, CRM updated, action recorded.' }
      ]
    },
    process: {
      eyebrow: 'Process',
      title: 'From first conversation to a tool your team uses',
      steps: [
        { title: 'Discover', body: 'A free 30-minute call, then a short review of the workflows that eat the most time.' },
        { title: 'Prototype', body: 'A working prototype on your real data within weeks, so you judge results, not slides.' },
        { title: 'Deploy', body: 'Connected to your tools, with approvals, logging, cost tracking and security in place.' },
        { title: 'Hand off', body: 'Documentation and training for your team, plus optional ongoing support.' }
      ]
    },
    work: {
      eyebrow: 'Work',
      title: 'I build and run my own AI products',
      lead: 'The best way to give practical AI advice is to ship it. These products are live, used daily and maintained by me end to end: mobile apps, backends, models and infrastructure.'
    },
    models: {
      eyebrow: 'Model development',
      title: 'Custom models, from dataset to device'
    },
    oss: {
      eyebrow: 'Open source',
      title: 'Tools other developers rely on'
    },
    about: {
      eyebrow: 'About',
      title: 'Hi, I’m Xavier.',
      body: [
        'I’m a software architect and AI engineer based in Montréal. I’ve spent years building production systems, from healthcare platforms where privacy and uptime are non-negotiable, to open-source libraries used by other developers.',
        'Today I build AI products of my own and help other businesses do the same. I work in English and French, on site in Greater Montréal and remotely across Québec and Canada.'
      ],
      stackTitle: 'Comfortable with',
      stack: ['Python', 'TypeScript', 'Flutter', 'Java · Kotlin', 'Gemini · Vertex AI', 'OpenAI', 'MCP', 'PyTorch', 'WebGPU', 'PostgreSQL · pgvector', 'Kubernetes', 'Firebase']
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Common questions',
      items: [
        { q: 'Do you work with small businesses?', a: 'Yes, that is the focus: small and mid-sized businesses in Montréal and across Québec that want results from AI without hiring an AI team.' },
        { q: 'Where are you located?', a: 'In Montréal. I meet clients on site across Greater Montréal (including Laval and Longueuil) and work remotely with companies elsewhere in Québec and Canada.' },
        { q: 'Do you offer services in French?', a: 'Yes. Meetings, documentation and the agents themselves can be in French, English or both.' },
        { q: 'How do you handle privacy and Law 25?', a: 'Every project starts by identifying the personal information involved and where it will be processed. Options include Canadian hosting, your own cloud account and local models.' },
        { q: 'How do we start?', a: 'Book a free 30-minute call. We look at one workflow together and I tell you honestly whether AI is worth it there.' }
      ]
    },
    writing: { eyebrow: 'Writing', title: 'Notes from the build log', all: 'All posts' },
    contact: {
      eyebrow: 'Contact',
      title: 'Tell me about one workflow that eats your week.',
      lead: 'A free 30-minute call, in English or French. You leave with an honest opinion on whether AI can help, and where to start.',
      primary: 'Book a free call',
      email: 'Or email'
    }
  },
  fr: {
    seo: {
      title: "Consultant en IA à Montréal | Agents IA pour PME",
        description:
          "Consultant en intelligence artificielle à Montréal : agents IA, automatisation des processus et modèles sur mesure pour les PME du Québec. Appel gratuit."
    },
    hero: {
      eyebrow: 'Consultant en IA · Montréal, Québec',
      titleA: "De l'IA qui fait",
      titleEm: 'du vrai travail',
      titleB: 'pour les PME.',
      lead: "J'aide les PME de Montréal et de partout au Québec à mettre l'IA au travail : trouver où elle rapporte, créer des agents qui se branchent sur vos outils actuels et entraîner des modèles sur mesure quand les solutions toutes faites ne suffisent pas.",
      primary: 'Réserver un appel gratuit de 30 minutes',
      secondary: 'Voir les services',
      portraitAlt: 'Xavier Jodoin, consultant en intelligence artificielle à Montréal',
      facts: [
        { value: '6', label: 'produits IA en production' },
        { value: '100+', label: 'dépôts de code libre' },
        { value: 'FR · EN', label: 'service bilingue' },
        { value: 'MTL', label: 'sur place dans le Grand Montréal' }
      ]
    },
    services: {
      eyebrow: 'Services',
      title: "Trois façons d'intégrer l'IA dans votre entreprise",
      lead: 'Commencez par des conseils, par un développement ou par un modèle. Chaque mandat se termine par un outil que votre équipe peut utiliser dès lundi.',
      principlesTitle: 'Ma façon de travailler',
      principles: [
        'Une personne approuve tout ce qui compte',
        'Vos données restent les vôtres, hébergées au Canada au besoin',
        "Mesuré en temps et en argent économisés, pas en effet de mode"
      ]
    },
    flow: {
      eyebrow: "À quoi ressemble un agent",
      title: 'Une demande de fournisseur arrive. Dix minutes de travail deviennent un clic.',
      lead: "Un agent n'a rien de magique. C'est une courte suite d'étapes visibles, avec un point de contrôle humain là où ça compte.",
      steps: [
        { tag: 'Déclencheur', title: 'Un courriel arrive', body: 'Un client demande une soumission pour 40 unités.' },
        { tag: 'Contexte', title: "L'agent s'informe", body: 'Historique du client, liste de prix, inventaire.' },
        { tag: 'Ébauche', title: "L'agent prépare la soumission", body: 'Articles, règles de rabais, date de livraison.' },
        { tag: 'Approbation', title: 'Vous validez en un clic', body: 'Vous modifiez au besoin, puis approuvez.', human: true },
        { tag: 'Terminé', title: 'Envoyé et consigné', body: 'Soumission envoyée, CRM à jour, action journalisée.' }
      ]
    },
    process: {
      eyebrow: 'Démarche',
      title: "De la première conversation à un outil que votre équipe utilise",
      steps: [
        { title: 'Découvrir', body: "Un appel gratuit de 30 minutes, puis une courte analyse des processus qui prennent le plus de temps." },
        { title: 'Prototyper', body: "Un prototype fonctionnel sur vos vraies données en quelques semaines, pour juger des résultats et non des diapositives." },
        { title: 'Déployer', body: 'Branché sur vos outils, avec approbations, journalisation, suivi des coûts et sécurité.' },
        { title: 'Transférer', body: "Documentation et formation pour votre équipe, avec un soutien continu en option." }
      ]
    },
    work: {
      eyebrow: 'Réalisations',
      title: 'Je conçois et exploite mes propres produits IA',
      lead: "La meilleure façon de donner des conseils concrets en IA, c'est d'en livrer. Ces produits sont en ligne, utilisés chaque jour et maintenus par moi de bout en bout : applications mobiles, serveurs, modèles et infrastructure."
    },
    models: {
      eyebrow: 'Développement de modèles',
      title: "Des modèles sur mesure, du jeu de données à l'appareil"
    },
    oss: {
      eyebrow: 'Code libre',
      title: "Des outils sur lesquels d'autres développeurs comptent"
    },
    about: {
      eyebrow: 'À propos',
      title: 'Bonjour, je suis Xavier.',
      body: [
        "Je suis architecte logiciel et ingénieur en IA à Montréal. Depuis des années, je conçois des systèmes en production, des plateformes de santé où la confidentialité et la disponibilité sont essentielles jusqu'aux bibliothèques libres utilisées par d'autres développeurs.",
        "Aujourd'hui, je crée mes propres produits IA et j'aide d'autres entreprises à faire de même. Je travaille en français et en anglais, sur place dans le Grand Montréal et à distance partout au Québec et au Canada."
      ],
      stackTitle: 'Technologies',
      stack: ['Python', 'TypeScript', 'Flutter', 'Java · Kotlin', 'Gemini · Vertex AI', 'OpenAI', 'MCP', 'PyTorch', 'WebGPU', 'PostgreSQL · pgvector', 'Kubernetes', 'Firebase']
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions fréquentes',
      items: [
        { q: 'Travaillez-vous avec les petites entreprises?', a: "Oui, c'est ma spécialité : les PME de Montréal et du Québec qui veulent des résultats concrets avec l'IA sans embaucher une équipe spécialisée." },
        { q: 'Où êtes-vous situé?', a: "À Montréal. Je rencontre mes clients sur place dans le Grand Montréal (y compris Laval et Longueuil) et je travaille à distance avec les entreprises ailleurs au Québec et au Canada." },
        { q: 'Offrez-vous vos services en français?', a: 'Oui. Les rencontres, la documentation et les agents eux-mêmes peuvent être en français, en anglais ou dans les deux langues.' },
        { q: 'Comment gérez-vous la confidentialité et la Loi 25?', a: "Chaque projet commence par l'identification des renseignements personnels en jeu et de l'endroit où ils seront traités. Les options incluent l'hébergement au Canada, votre propre compte infonuagique et des modèles locaux." },
        { q: 'Comment commencer?', a: "Réservez un appel gratuit de 30 minutes. On examine un processus ensemble et je vous dis franchement si l'IA en vaut la peine." }
      ]
    },
    writing: { eyebrow: 'Blogue', title: 'Notes de chantier (en anglais)', all: 'Tous les articles' },
    contact: {
      eyebrow: 'Contact',
      title: 'Parlez-moi d’un processus qui gruge votre semaine.',
      lead: "Un appel gratuit de 30 minutes, en français ou en anglais. Vous repartez avec un avis franc sur ce que l'IA peut faire pour vous, et par où commencer.",
      primary: 'Réserver un appel gratuit',
      email: 'Ou écrivez à'
    }
  }
} as const;

export type HomeCopy = (typeof home)['en'] | (typeof home)['fr'];
