// Internationalization (i18n) engine
// Supports EN and RU languages with localStorage persistence

const translations = {
    en: {
        // Navigation
        'nav.journey': 'Journey',
        'nav.projects': 'Projects',
        'nav.blog': 'Blog',
        'nav.contact': 'Contact',

        // Footer
        'footer.copyright': '© 2026 Lev Kislyuk. All rights reserved.',

        // === INDEX PAGE ===

        // Hero
        'hero.badge': 'Open to new opportunities',
        'hero.heading': 'Bridging engineering <br class="hidden sm:block">with <span class="text-zinc-400 dark:text-zinc-500">user needs.</span>',
        'hero.description': 'Technical Product Leader & Analytics Engineer. I build data infrastructures and AI products that solve complex problems with engineering precision and product empathy.',
        'hero.cta_meeting': 'Schedule a meeting',
        'hero.cta_blog': 'Read my blog',

        // Stats
        'stats.years': 'Years Experience',
        'stats.products': 'Products Shipped',
        'stats.data': 'Data Processed',
        'stats.education': 'Computer Science',

        // Journey
        'journey.title': 'Career Roadmap',
        'journey.subtitle': 'Navigate through my professional evolution.',

        // Station 1 - Pupas AI
        'journey.s1.date': 'May 2025 - Dec 2025',
        'journey.s1.company': 'Pupas AI',
        'journey.s1.role': 'Technical Product',
        'journey.s1.subtitle': 'AI-Powered DeFi Protocol on Waves',
        'journey.s1.desc': 'Built autonomous liquidity optimization protocol from concept to production. Secured funding and led cross-functional team of 5, delivering AI agents that analyze market conditions and execute investment decisions without human intervention. Achieved 190% APY managing $200K TVL at peak, growing active user base to 60+.',

        // Station 2 - Pygma
        'journey.s2.date': 'Dec 2023 - May 2025',
        'journey.s2.company': 'Pygma.me',
        'journey.s2.role': 'Lead Analytics Engineer',
        'journey.s2.subtitle': 'AI Instagram Copilot',
        'journey.s2.desc': 'Owned end-to-end analytics and data infrastructure for AI product, building systems from scratch to enable product strategy and ML development. Processed 20TB of Instagram data via APIs for ML datasets, tracked product/marketing/business metrics, and implemented attribution system matching ads to product usage with 78% accuracy.',

        // Station 3 - Aero
        'journey.s3.date': 'Mar 2023 - Jun 2024',
        'journey.s3.company': 'Aero eCommerce',
        'journey.s3.role': 'Senior Data Engineer',
        'journey.s3.subtitle': 'High-Scale eCommerce Data Platform',
        'journey.s3.desc': 'Designed scalable data warehouses on Yandex Cloud and Google Cloud processing 50M daily records for eCommerce operations. Engineered automated ETL pipelines and built end-to-end infrastructure with data quality framework, achieving 95% accuracy. Reduced storage costs by 30% through optimization while maintaining sub-second query performance.',

        // Station 4 - Web3
        'journey.s4.date': 'Sep 2022 - Apr 2023',
        'journey.s4.company': 'Web3 Analytics',
        'journey.s4.role': 'Blockchain Data Engineer',
        'journey.s4.subtitle': 'Multi-Chain Blockchain Analytics',
        'journey.s4.desc': 'Designed and managed data warehousing for 6 blockchain networks (EVM, Tron, Near) to power real-time DeFi investment decisions. Deployed and maintained blockchain nodes, built ABI-aware pipelines for smart contract decoding, and developed analytical data marts that solved the challenge of large-scale smart contract labeling across 8+ on-chain and off-chain data sources.',

        // Station 5 - Glowbyte
        'journey.s5.date': 'Jun 2019 - Sep 2022',
        'journey.s5.company': 'Glowbyte Consulting',
        'journey.s5.role': 'Data Engineer',
        'journey.s5.subtitle': 'Enterprise Banking & Retail Systems',
        'journey.s5.desc': 'Created and maintained 13 enterprise data integrations managing 1500+ tables across banking and retail sectors. Integrated historical corporate data, developed real-time analytics tools reducing latency by 30%, and established CI/CD pipelines for seamless deployment across multiple client environments.',

        // My Works section
        'works.title': 'My Works',
        'works.subtitle': 'Engineering infrastructure and product logic.',
        'works.viewall': 'View all',

        // Works cards
        'works.pygma.title': 'Pygma Analytics Infrastructure',
        'works.pygma.desc': 'Complete analytics infrastructure for AI-powered Instagram copilot. Built from scratch: 20TB data processed, 78% attribution accuracy connecting Meta/Google Ads to product usage, serving thousands of users with BigQuery and dbt.',
        'works.web3.title': 'Web3 Analytics',
        'works.web3.desc': 'Cross-chain data warehouse for 6 blockchain networks (EVM, Tron, Near) enabling real-time DeFi investment decisions.',
        'works.pupas.title': 'Pupas AI',
        'works.pupas.desc': 'Autonomous AI agents managing $200K TVL at 190% APY. Built with LangChain/RAG on Waves blockchain for DeFi yield optimization.',
        'works.aero.title': 'Aero Data Platform',
        'works.aero.desc': 'High-performance Clickhouse warehouse processing 50M daily records for eCommerce. Automated ETL with 95% data accuracy, 30% cost reduction through optimization.',

        // Technical Expertise
        'expertise.label': 'Technical Expertise',
        'expertise.data_eng': 'Data Engineering',
        'expertise.data_orch': 'Data Orchestration',
        'expertise.ai_ml': 'AI & Machine Learning',
        'expertise.product_analytics': 'Product Analytics',
        'expertise.automation': 'Automation & Integration',
        'expertise.product_leadership': 'Product & Leadership',

        // Blog section (index)
        'blog.title': 'Recent Thinking',
        'blog.article1': 'Optimizing dbt pipelines for scale',
        'blog.article2': 'Bridging the gap: Engineering vs. Product needs',
        'blog.article3': 'Building autonomous agents with LangGraph',

        // CTA section
        'cta.heading': 'Let\'s build something <span class="relative inline-block">together<span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span></span>',
        'cta.desc': 'I bridge technical engineering with product thinking. Whether you need analytics infrastructure, AI systems, or someone who can translate user needs into scalable solutions.',
        'cta.meeting': 'Schedule a meeting',
        'cta.touch': 'Get in touch',

        // === PROJECTS PAGE ===
        'projects.heading': 'Selected <span class="text-zinc-400 dark:text-zinc-500">Projects</span>',
        'projects.subtitle': 'A collection of production systems I\'ve built — from data infrastructure to AI applications.',

        // Interactive CV Game
        'projects.game.title': 'Interactive CV Game',
        'projects.game.badge': 'New',
        'projects.game.subtitle': '3D open-world portfolio experience',
        'projects.game.desc': 'Drive through a cyberpunk city and explore interactive zones representing different aspects of my career. Built with Three.js for smooth 3D rendering and interactive gameplay.',
        'projects.game.play': 'Play Interactive CV',
        'projects.game.hint': 'Use WASD to drive',

        // Pupas project
        'projects.pupas.title': 'Pupas AI Protocol',
        'projects.pupas.subtitle': 'Technical Product &middot; Autonomous DeFi Yield Optimization',
        'projects.pupas.challenge_label': 'The Challenge',
        'projects.pupas.challenge': 'Crypto investors lacked tools to automatically optimize yield across DeFi protocols — manual strategies were slow, risky, and left money on the table. I set out to build an AI-driven protocol that could autonomously manage liquidity and maximize returns on Waves blockchain.',
        'projects.pupas.did_label': 'What I Did',
        'projects.pupas.did1': 'Took the product from idea to production — secured funding, assembled and led a cross-functional team of 5',
        'projects.pupas.did2': 'Architected end-to-end infrastructure: Ride smart contracts, AI agents (LangChain/LangGraph with RAG), Telegram bots, and web frontend',
        'projects.pupas.did3': 'Drove product strategy through user research and iterative testing, prioritizing features based on real DeFi market demands',
        'projects.pupas.did4': 'Grew the active user base to 60+ investors through community building and product-led growth',
        'projects.pupas.metric1': 'APY achieved',
        'projects.pupas.metric2': 'TVL at peak',
        'projects.pupas.metric3': 'active investors',

        // Pygma project
        'projects.pygma.title': 'Pygma Analytics Infrastructure',
        'projects.pygma.subtitle': 'Lead Analytics Engineer &middot; AI-Powered Instagram Copilot',
        'projects.pygma.challenge_label': 'The Challenge',
        'projects.pygma.challenge': 'Pygma, an AI-powered Instagram growth tool, had zero data infrastructure — no analytics, no attribution, no way to measure what drove product growth or inform ML model training. I was brought in as the first data hire to build everything from scratch.',
        'projects.pygma.did_label': 'What I Did',
        'projects.pygma.did1': 'Built the entire analytics stack from zero: BigQuery warehouse, Airflow orchestration, dbt transformations, Mixpanel product analytics, GTM and GA4 event tracking',
        'projects.pygma.did2': 'Collected and processed 20TB of Instagram profile data via APIs to power ML model training datasets',
        'projects.pygma.did3': 'Designed and shipped an attribution system matching user events to Meta/Google Ads campaigns — gave the growth team clear visibility into marketing ROI',
        'projects.pygma.did4': 'Created executive dashboards that became the primary decision-making tool for product, growth, and operations teams',
        'projects.pygma.metric1': 'data processed',
        'projects.pygma.metric2': 'attribution accuracy',
        'projects.pygma.metric3': 'analytics built from scratch',

        // Multi-Chain project
        'projects.chain.title': 'Multi-Chain Analytics Platform',
        'projects.chain.subtitle': 'Analytics Engineer in Web3 &middot; Private Investment Infrastructure',
        'projects.chain.challenge_label': 'The Challenge',
        'projects.chain.challenge': 'DeFi investment decisions across multiple blockchains required pulling fragmented data from dozens of sources — there was no unified view. I built a private analytics platform to aggregate cross-chain data and enable real-time investment analysis.',
        'projects.chain.did_label': 'What I Did',
        'projects.chain.did1': 'Designed and managed data warehousing for 6 blockchain networks (EVM chains, Tron, Near) with real-time analytical data marts',
        'projects.chain.did2': 'Deployed and maintained the full infrastructure stack: Clickhouse, Airflow, Grafana, and multiple blockchain nodes',
        'projects.chain.did3': 'Built ETL pipelines ingesting data from 8+ sources for smart contract labeling and cross-chain opportunity analysis',
        'projects.chain.metric1': 'blockchains unified',
        'projects.chain.metric2': 'data sources integrated',
        'projects.chain.metric3': 'analytics updates',

        // Aero project
        'projects.aero.title': 'Aero Data Platform',
        'projects.aero.subtitle': 'Senior Data Engineer &middot; eCommerce Data Warehouse',
        'projects.aero.challenge_label': 'The Challenge',
        'projects.aero.challenge': 'A fast-growing eCommerce agency needed a data warehouse that could handle massive daily volumes across orders, inventory, and user analytics — while keeping queries fast and storage costs under control. The existing infrastructure couldn\'t scale.',
        'projects.aero.did_label': 'What I Did',
        'projects.aero.did1': 'Designed scalable data warehouses on Yandex Cloud processing 50M records daily with sub-second query performance',
        'projects.aero.did2': 'Engineered automated ETL pipelines (Airflow, dbt, Nifi) and built a data quality framework with Great Expectations',
        'projects.aero.did3': 'Optimized storage architecture, cutting costs by 30% without sacrificing query speed',
        'projects.aero.did4': 'Scaled the data engineering team — ran training sessions and conducted technical interviews',
        'projects.aero.metric1': 'records/day',
        'projects.aero.metric2': 'data accuracy',
        'projects.aero.metric3': 'storage costs',

        // Glowbyte project
        'projects.glowbyte.title': 'Enterprise Data Integration Platform',
        'projects.glowbyte.subtitle': 'Data Engineer &middot; Glowbyte Consulting &middot; Banking & Retail',
        'projects.glowbyte.challenge_label': 'The Challenge',
        'projects.glowbyte.challenge': 'Enterprise clients in banking and retail needed reliable, high-throughput data integrations across hundreds of database tables — with strict SLAs, complex data lineage, and zero tolerance for downtime. I joined as part of Glowbyte\'s consulting team and grew from junior to a key contributor on major client engagements.',
        'projects.glowbyte.did_label': 'What I Did',
        'projects.glowbyte.did1': 'Built and maintained 13 enterprise data integrations managing 1,500+ database tables across banking and retail clients',
        'projects.glowbyte.did2': 'Developed real-time analytics tools and custom dashboards, reducing data processing latency by 30%',
        'projects.glowbyte.did3': 'Established CI/CD pipelines for seamless deployment across multiple client environments',
        'projects.glowbyte.did4': 'Contributed to high-profile projects: SIBUR\'s data-driven transformation and Lemana PRO\'s AI-powered demand forecasting',
        'projects.glowbyte.metric1': 'tables managed',
        'projects.glowbyte.metric2': 'integrations built',
        'projects.glowbyte.metric3': 'processing latency',

        // === BLOG PAGE ===
        'blogpage.heading': 'Writing & <span class="text-zinc-400 dark:text-zinc-500">Thinking</span>',
        'blogpage.subtitle': 'Thoughts on data engineering, product development, and the intersection of technology and human needs.',
        'blogpage.coming_soon': 'Coming soon',

        'blogpage.a1.title': 'Optimizing dbt pipelines for scale',
        'blogpage.a1.desc': 'How we reduced our data transformation time by 60% while processing 50M daily records. Lessons learned from optimizing incremental models, leveraging BigQuery partitioning, and implementing effective testing strategies.',

        'blogpage.a2.title': 'Bridging the gap: Engineering vs. Product needs',
        'blogpage.a2.desc': 'Reflections on building products that balance technical excellence with user value. Why the best technical solution isn\'t always the right product decision.',

        'blogpage.a3.title': 'Building autonomous agents with LangGraph',
        'blogpage.a3.desc': 'A deep dive into creating reliable AI agents for DeFi yield optimization. From RAG implementation to handling blockchain state transitions.',

        'blogpage.a4.title': 'The analytics engineer\'s toolkit for 2025',
        'blogpage.a4.desc': 'Modern data stack essentials: dbt, Airflow, Great Expectations, and the tools that matter for building reliable data pipelines.',

        'blogpage.a5.title': 'Data quality at scale: Beyond unit tests',
        'blogpage.a5.desc': 'How we achieved 95% data accuracy processing 20TB of Instagram data. Implementing Great Expectations and building trust in your data.',

        'blogpage.a6.title': 'From Greenplum to Clickhouse: A migration story',
        'blogpage.a6.desc': 'Lessons learned migrating 1500 tables from Greenplum to Clickhouse while maintaining zero downtime for critical business operations.',

        // === CONTACTS PAGE ===
        'contacts.heading': 'Let\'s <span class="text-zinc-400 dark:text-zinc-500">Connect</span>',
        'contacts.subtitle': 'Open to discussing new opportunities, projects, or conversations about data, product, and technology.',

        'contacts.email': 'Email',
        'contacts.email_desc': 'For formal inquiries and opportunities',
        'contacts.telegram': 'Telegram',
        'contacts.telegram_desc': 'Quick chats and casual discussions',
        'contacts.linkedin': 'LinkedIn',
        'contacts.linkedin_desc': 'Professional network and career history',
        'contacts.github': 'GitHub',
        'contacts.github_desc': 'Code repositories and open source work',
        'contacts.calendly': 'Schedule a Meeting',
        'contacts.calendly_desc': 'Book a time to chat via Calendly',
    },

    ru: {
        // Navigation
        'nav.journey': 'Опыт',
        'nav.projects': 'Проекты',
        'nav.blog': 'Блог',
        'nav.contact': 'Контакты',

        // Footer
        'footer.copyright': '© 2026 Лев Кислюк. Все права защищены.',

        // === INDEX PAGE ===

        // Hero
        'hero.badge': 'Открыт к предложениям',
        'hero.heading': 'Технические решения <br class="hidden sm:block">для <span class="text-zinc-400 dark:text-zinc-500">бизнес-задач.</span>',
        'hero.description': 'Technical Product Leader & Analytics Engineer. Строю data-инфраструктуру и AI-продукты — от сырых данных до готовых решений.',
        'hero.cta_meeting': 'Назначить встречу',
        'hero.cta_blog': 'Читать блог',

        // Stats
        'stats.years': 'Лет опыта',
        'stats.products': 'Продуктов в проде',
        'stats.data': 'Данных обработано',
        'stats.education': 'Computer Science',

        // Journey
        'journey.title': 'Карьерный путь',
        'journey.subtitle': 'Ключевые этапы профессионального развития.',

        // Station 1 - Pupas AI
        'journey.s1.date': 'Май 2025 – Дек 2025',
        'journey.s1.company': 'Pupas AI',
        'journey.s1.role': 'Technical Product',
        'journey.s1.subtitle': 'AI-протокол DeFi на Waves',
        'journey.s1.desc': 'Запустил автономный протокол оптимизации ликвидности с нуля. Привлёк финансирование, собрал команду из 5 человек. AI-агенты самостоятельно анализируют рынок и принимают инвестиционные решения. На пике — 190% APY, $200K TVL, 60+ активных пользователей.',

        // Station 2 - Pygma
        'journey.s2.date': 'Дек 2023 – Май 2025',
        'journey.s2.company': 'Pygma.me',
        'journey.s2.role': 'Lead Analytics Engineer',
        'journey.s2.subtitle': 'AI-копилот для Instagram',
        'journey.s2.desc': 'Первый дата-специалист в компании — построил всю аналитику и инфраструктуру данных с нуля. Обработал 20TB данных Instagram для ML-моделей, настроил трекинг продуктовых и маркетинговых метрик, внедрил систему атрибуции с точностью 78%.',

        // Station 3 - Aero
        'journey.s3.date': 'Мар 2023 – Июн 2024',
        'journey.s3.company': 'Aero eCommerce',
        'journey.s3.role': 'Senior Data Engineer',
        'journey.s3.subtitle': 'Highload-платформа данных для eCommerce',
        'journey.s3.desc': 'Спроектировал хранилища на Yandex Cloud и Google Cloud под нагрузку 50M записей в день. Автоматизировал ETL-процессы, внедрил контроль качества данных (95% точность), сократил расходы на хранение на 30% без потери производительности.',

        // Station 4 - Web3
        'journey.s4.date': 'Сен 2022 – Апр 2023',
        'journey.s4.company': 'Web3 Analytics',
        'journey.s4.role': 'Blockchain Data Engineer',
        'journey.s4.subtitle': 'Мультичейн блокчейн-аналитика',
        'journey.s4.desc': 'Проектировал хранилища данных для 6 блокчейн-сетей (EVM, Tron, Near). Развернул и обслуживал ноды, построил пайплайны декодирования смарт-контрактов через ABI, собрал аналитические витрины из 8+ on-chain и off-chain источников.',

        // Station 5 - Glowbyte
        'journey.s5.date': 'Июн 2019 – Сен 2022',
        'journey.s5.company': 'Glowbyte Consulting',
        'journey.s5.role': 'Data Engineer',
        'journey.s5.subtitle': 'Enterprise-системы для банков и ритейла',
        'journey.s5.desc': 'Создал и сопровождал 13 интеграций данных на 1500+ таблиц в банковском и розничном секторах. Разработал инструменты аналитики реального времени, сократив задержку обработки на 30%. Выстроил CI/CD для развёртывания в клиентских средах.',

        // My Works section
        'works.title': 'Проекты',
        'works.subtitle': 'Инфраструктура данных и продуктовая логика.',
        'works.viewall': 'Все проекты',

        // Works cards
        'works.pygma.title': 'Pygma Analytics',
        'works.pygma.desc': 'Аналитика для AI-копилота Instagram с нуля: 20TB данных, атрибуция Meta/Google Ads с точностью 78%, тысячи пользователей на BigQuery и dbt.',
        'works.web3.title': 'Web3 Analytics',
        'works.web3.desc': 'Кросс-чейн хранилище для 6 блокчейн-сетей (EVM, Tron, Near) — инвестиционная аналитика в реальном времени.',
        'works.pupas.title': 'Pupas AI',
        'works.pupas.desc': 'Автономные AI-агенты для DeFi: $200K TVL, 190% APY. LangChain/RAG на блокчейне Waves для оптимизации доходности.',
        'works.aero.title': 'Aero Data Platform',
        'works.aero.desc': 'Highload-хранилище на Clickhouse: 50M записей в день для eCommerce. Автоматизация ETL, 95% точность данных, снижение расходов на 30%.',

        // Technical Expertise
        'expertise.label': 'Технический стек',
        'expertise.data_eng': 'Data Engineering',
        'expertise.data_orch': 'Оркестрация данных',
        'expertise.ai_ml': 'AI & Machine Learning',
        'expertise.product_analytics': 'Продуктовая аналитика',
        'expertise.automation': 'Автоматизация и интеграции',
        'expertise.product_leadership': 'Продукт и управление',

        // Blog section (index)
        'blog.title': 'Свежие публикации',
        'blog.article1': 'Оптимизация dbt-пайплайнов под высокие нагрузки',
        'blog.article2': 'Инженерия vs. продукт: как найти баланс',
        'blog.article3': 'Автономные агенты на LangGraph',

        // CTA section
        'cta.heading': 'Давайте сделаем что-то <span class="relative inline-block">вместе<span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span></span>',
        'cta.desc': 'Соединяю инженерный подход с продуктовым мышлением. Аналитическая инфраструктура, AI-системы или перевод бизнес-задач в масштабируемые решения — готов обсудить.',
        'cta.meeting': 'Назначить встречу',
        'cta.touch': 'Написать',

        // === PROJECTS PAGE ===
        'projects.heading': 'Избранные <span class="text-zinc-400 dark:text-zinc-500">проекты</span>',
        'projects.subtitle': 'Боевые системы, которые я строил — от инфраструктуры данных до AI-продуктов.',

        // Interactive CV Game
        'projects.game.title': 'Интерактивное CV',
        'projects.game.badge': 'Новое',
        'projects.game.subtitle': '3D open-world портфолио',
        'projects.game.desc': 'Прокатитесь по киберпанк-городу и изучите зоны, посвящённые разным этапам карьеры. Построено на Three.js — плавный 3D-рендеринг и интерактивный геймплей.',
        'projects.game.play': 'Запустить',
        'projects.game.hint': 'Управление — WASD',

        // Pupas project
        'projects.pupas.title': 'Pupas AI Protocol',
        'projects.pupas.subtitle': 'Technical Product &middot; Автономная DeFi-оптимизация',
        'projects.pupas.challenge_label': 'Задача',
        'projects.pupas.challenge': 'Крипто-инвесторам не хватало инструментов для автоматической оптимизации доходности в DeFi — ручные стратегии были медленными и рискованными. Я поставил цель создать AI-протокол, который сам управляет ликвидностью и максимизирует доход на блокчейне Waves.',
        'projects.pupas.did_label': 'Что сделал',
        'projects.pupas.did1': 'Довёл продукт от идеи до продакшна — привлёк финансирование, собрал и возглавил команду из 5 человек',
        'projects.pupas.did2': 'Спроектировал всю инфраструктуру: смарт-контракты на Ride, AI-агенты (LangChain/LangGraph + RAG), Telegram-боты, веб-фронтенд',
        'projects.pupas.did3': 'Определял продуктовую стратегию через custdev и итеративное тестирование, расставляя приоритеты по реальному спросу рынка',
        'projects.pupas.did4': 'Привлёк 60+ активных инвесторов через развитие комьюнити и органический рост продукта',
        'projects.pupas.metric1': 'APY',
        'projects.pupas.metric2': 'TVL на пике',
        'projects.pupas.metric3': 'активных инвесторов',

        // Pygma project
        'projects.pygma.title': 'Pygma Analytics',
        'projects.pygma.subtitle': 'Lead Analytics Engineer &middot; AI-копилот для Instagram',
        'projects.pygma.challenge_label': 'Задача',
        'projects.pygma.challenge': 'У Pygma — AI-инструмента для продвижения в Instagram — не было никакой инфраструктуры данных: ни аналитики, ни атрибуции, ни понимания, что влияет на рост продукта. Я пришёл первым дата-специалистом и строил всё с чистого листа.',
        'projects.pygma.did_label': 'Что сделал',
        'projects.pygma.did1': 'Поднял весь аналитический стек с нуля: BigQuery, Airflow, dbt, Mixpanel, GTM, GA4',
        'projects.pygma.did2': 'Собрал и обработал 20TB данных Instagram-профилей через API для обучения ML-моделей',
        'projects.pygma.did3': 'Внедрил систему атрибуции, связавшую действия пользователей с рекламными кампаниями Meta/Google Ads — маркетинг получил понятную картину по ROI',
        'projects.pygma.did4': 'Создал дашборды для руководства, которые стали главным инструментом принятия решений в командах продукта, маркетинга и операций',
        'projects.pygma.metric1': 'данных обработано',
        'projects.pygma.metric2': 'точность атрибуции',
        'projects.pygma.metric3': 'аналитика с нуля',

        // Multi-Chain project
        'projects.chain.title': 'Multi-Chain Analytics',
        'projects.chain.subtitle': 'Analytics Engineer в Web3 &middot; Приватная инвестиционная платформа',
        'projects.chain.challenge_label': 'Задача',
        'projects.chain.challenge': 'Для принятия инвестиционных решений в DeFi нужно было собирать разрозненные данные из десятков источников по разным блокчейнам — единой картины не было. Я построил приватную аналитическую платформу для агрегации кросс-чейн данных.',
        'projects.chain.did_label': 'Что сделал',
        'projects.chain.did1': 'Спроектировал хранилища данных для 6 блокчейн-сетей (EVM, Tron, Near) с аналитическими витринами реального времени',
        'projects.chain.did2': 'Развернул и обслуживал полный стек: Clickhouse, Airflow, Grafana, блокчейн-ноды',
        'projects.chain.did3': 'Построил ETL-пайплайны из 8+ источников для маркировки смарт-контрактов и анализа кросс-чейн возможностей',
        'projects.chain.metric1': 'блокчейнов',
        'projects.chain.metric2': 'источников данных',
        'projects.chain.metric3': 'аналитика в реальном времени',

        // Aero project
        'projects.aero.title': 'Aero Data Platform',
        'projects.aero.subtitle': 'Senior Data Engineer &middot; eCommerce-хранилище данных',
        'projects.aero.challenge_label': 'Задача',
        'projects.aero.challenge': 'Быстрорастущему eCommerce-агентству нужно было хранилище под большие объёмы данных — заказы, складские остатки, пользовательская аналитика — с быстрыми запросами и контролем расходов. Существующая инфраструктура не справлялась с нагрузкой.',
        'projects.aero.did_label': 'Что сделал',
        'projects.aero.did1': 'Спроектировал хранилища на Yandex Cloud под нагрузку 50M записей в день с ответом запросов менее секунды',
        'projects.aero.did2': 'Автоматизировал ETL-процессы (Airflow, dbt, Nifi) и внедрил контроль качества данных через Great Expectations',
        'projects.aero.did3': 'Оптимизировал архитектуру хранения — сократил расходы на 30% без потери производительности',
        'projects.aero.did4': 'Развивал команду data engineering — проводил обучение и технические собеседования',
        'projects.aero.metric1': 'записей/день',
        'projects.aero.metric2': 'точность данных',
        'projects.aero.metric3': 'расходы на хранение',

        // Glowbyte project
        'projects.glowbyte.title': 'Enterprise Data Integration',
        'projects.glowbyte.subtitle': 'Data Engineer &middot; Glowbyte Consulting &middot; Банки и ритейл',
        'projects.glowbyte.challenge_label': 'Задача',
        'projects.glowbyte.challenge': 'Крупным клиентам в банковском и розничном секторах были нужны надёжные высоконагруженные интеграции на сотни таблиц — жёсткие SLA, сложные зависимости между данными, простои недопустимы. Начинал в Glowbyte джуниором и дорос до ключевого участника крупных проектов.',
        'projects.glowbyte.did_label': 'Что сделал',
        'projects.glowbyte.did1': 'Создал и сопровождал 13 интеграций данных на 1 500+ таблиц в банковском и розничном секторах',
        'projects.glowbyte.did2': 'Разработал инструменты аналитики реального времени и дашборды, сократив задержку обработки на 30%',
        'projects.glowbyte.did3': 'Выстроил CI/CD-процессы для развёртывания в клиентских средах',
        'projects.glowbyte.did4': 'Работал на крупных проектах: цифровая трансформация СИБУРа и AI-прогнозирование спроса для Лемана ПРО',
        'projects.glowbyte.metric1': 'таблиц',
        'projects.glowbyte.metric2': 'интеграций',
        'projects.glowbyte.metric3': 'задержка обработки',

        // === BLOG PAGE ===
        'blogpage.heading': 'Статьи и <span class="text-zinc-400 dark:text-zinc-500">заметки</span>',
        'blogpage.subtitle': 'Про data engineering, разработку продуктов и технологии на стыке с реальными задачами бизнеса.',
        'blogpage.coming_soon': 'Скоро',

        'blogpage.a1.title': 'Оптимизация dbt-пайплайнов под высокие нагрузки',
        'blogpage.a1.desc': 'Как мы ускорили трансформации данных на 60% при 50M записей в день. Инкрементальные модели, партиционирование в BigQuery и подходы к тестированию.',

        'blogpage.a2.title': 'Инженерия vs. продукт: как найти баланс',
        'blogpage.a2.desc': 'Почему лучшее техническое решение — не всегда правильное продуктовое. О балансе между технической глубиной и ценностью для пользователя.',

        'blogpage.a3.title': 'Автономные агенты на LangGraph',
        'blogpage.a3.desc': 'Как строить надёжных AI-агентов для DeFi: от RAG до работы с состояниями блокчейна.',

        'blogpage.a4.title': 'Набор инструментов analytics engineer в 2025',
        'blogpage.a4.desc': 'Современный data-стек: dbt, Airflow, Great Expectations — что действительно нужно для надёжных пайплайнов.',

        'blogpage.a5.title': 'Качество данных в масштабе',
        'blogpage.a5.desc': 'Как мы добились 95% точности при обработке 20TB данных Instagram. Опыт внедрения Great Expectations.',

        'blogpage.a6.title': 'Миграция с Greenplum на Clickhouse',
        'blogpage.a6.desc': 'Опыт переноса 1500 таблиц без простоев для критичных бизнес-процессов.',

        // === CONTACTS PAGE ===
        'contacts.heading': 'Давайте <span class="text-zinc-400 dark:text-zinc-500">свяжемся</span>',
        'contacts.subtitle': 'Открыт к обсуждению проектов, вакансий и идей в области данных, продукта и технологий.',

        'contacts.email': 'Email',
        'contacts.email_desc': 'Деловые предложения и вакансии',
        'contacts.telegram': 'Telegram',
        'contacts.telegram_desc': 'Быстрые вопросы и неформальное общение',
        'contacts.linkedin': 'LinkedIn',
        'contacts.linkedin_desc': 'Профессиональная сеть и карьера',
        'contacts.github': 'GitHub',
        'contacts.github_desc': 'Репозитории и open source',
        'contacts.calendly': 'Назначить встречу',
        'contacts.calendly_desc': 'Забронировать время для звонка',
    }
};

// Get current language from localStorage or default to 'en'
function getCurrentLang() {
    return localStorage.getItem('lang') || 'en';
}

// Apply translations to all elements with data-i18n attributes
function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;

    // Handle data-i18n (textContent)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

    // Handle data-i18n-html (innerHTML - for elements with nested HTML)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    // Update html lang attribute
    document.documentElement.lang = lang === 'ru' ? 'ru' : 'en';

    // Update active state on language switcher buttons
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
        const btnLang = btn.getAttribute('data-lang-btn');
        if (btnLang === lang) {
            btn.classList.add('text-zinc-900', 'dark:text-zinc-100');
            btn.classList.remove('text-zinc-400', 'dark:text-zinc-500');
        } else {
            btn.classList.remove('text-zinc-900', 'dark:text-zinc-100');
            btn.classList.add('text-zinc-400', 'dark:text-zinc-500');
        }
    });
}

// Set language, save to localStorage, and apply
function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    applyTranslations(lang);
}

// Initialize i18n — apply stored language
function initI18n() {
    applyTranslations(getCurrentLang());
}

// Initialize language switcher click handlers
function initLangSwitcher() {
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang-btn');
            setLanguage(lang);
        });
    });
}

// Auto-apply on page load after a brief delay (to allow components to inject)
// Also use MutationObserver to re-apply when header/footer are injected
(() => {
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.addedNodes.length) {
                // Re-apply translations when new content is injected
                applyTranslations(getCurrentLang());
                // Re-init switcher if header was just injected
                initLangSwitcher();
            }
        }
    });

    const startObserving = () => {
        const headerPlaceholder = document.getElementById('header-placeholder');
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (headerPlaceholder) observer.observe(headerPlaceholder, { childList: true });
        if (footerPlaceholder) observer.observe(footerPlaceholder, { childList: true });
        // Apply to existing content immediately
        initI18n();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startObserving);
    } else {
        startObserving();
    }
})();
