if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}

TrondheimDC.timeslots = [
    {
        starts: new Date(2013, 10, 28, 09, 00, 00),
        ends: new Date(2013, 10, 28, 09, 10, 00),
        title: "Introduksjon"
    },
    {
        starts: new Date(2013, 10, 28, 09, 10, 00),
        ends: new Date(2013, 10, 28, 10, 00, 00)
    },
    {
        starts: new Date(2013, 10, 28, 10, 00, 00),
        ends: new Date(2013, 10, 28, 10, 15, 00),
        title: "Pause"
    },
    {
        starts: new Date(2013, 10, 28, 10, 15, 00),
        ends: new Date(2013, 10, 28, 10, 45, 00)
    },
    {
        starts: new Date(2013, 10, 28, 10, 45, 00),
        ends: new Date(2013, 10, 28, 11, 00, 00),
        title: "Pause"
    },
    {
        starts: new Date(2013, 10, 28, 11, 00, 00),
        ends: new Date(2013, 10, 28, 11, 30, 00)
    },
    {
        starts: new Date(2013, 10, 28, 11, 30, 00),
        ends: new Date(2013, 10, 28, 11, 45, 00),
        title: "Pause"
    },
    {
        starts: new Date(2013, 10, 28, 11, 45, 00),
        ends: new Date(2013, 10, 28, 12, 15, 00),
    },
    {
        starts: new Date(2013, 10, 28, 12, 15, 00),
        ends: new Date(2013, 10, 28, 12, 30, 00),
        title: "Pause"
    },
    {
        starts: new Date(2013, 10, 28, 12, 30, 00),
        ends: new Date(2013, 10, 28, 13, 00, 00)
    },
    {
        starts: new Date(2013, 10, 28, 13, 00, 00),
        ends: new Date(2013, 10, 28, 14, 00, 00),
        title: "Lunsj"
    },
    {
        starts: new Date(2013, 10, 28, 14, 00, 00),
        ends: new Date(2013, 10, 28, 14, 30, 00)
    },
    {
        starts: new Date(2013, 10, 28, 14, 30, 00),
        ends: new Date(2013, 10, 28, 14, 45, 00),
        title: "Lunsj"
    },
    {
        starts: new Date(2013, 10, 28, 14, 45, 00),
        ends: new Date(2013, 10, 28, 15, 15, 00)
    },
    {
        starts: new Date(2013, 10, 28, 15, 15, 00),
        ends: new Date(2013, 10, 28, 15, 30, 00),
        title: "Pause"
    },
    {
        starts: new Date(2013, 10, 28, 15, 30, 00),
        ends: new Date(2013, 10, 28, 16, 00, 00)
    },
    {
        starts: new Date(2013, 10, 28, 16, 00, 00),
        ends: new Date(2013, 10, 28, 16, 15, 00),
        title: "Pause"
    },
    {
        starts: new Date(2013, 10, 28, 16, 15, 00),
        ends: new Date(2013, 10, 28, 16, 45, 00)
    },
    {
        starts: new Date(2013, 10, 28, 16, 45, 00),
        ends: new Date(2013, 10, 28, 17, 00, 00),
        title: "Pause"
    },
    {
        starts: new Date(2013, 10, 28, 17, 00, 00),
        ends: new Date(2013, 10, 28, 17, 50, 00)
    },
    {
        starts: new Date(2013, 10, 28, 17, 50, 00),
        ends: new Date(2013, 10, 28, 18, 00, 00),
        title: "Takk for i dag"
    }
]

TrondheimDC.sessions = [
    {
        id: 1,
        title: "A Question of Craftsmanship",
        abstract: "Although a great deal of the enthusiasm for Agile development initially grew from software developers, much of the current focus in Agile circles has moved to on organisational aspects, product management and soft skills. Craftsmanship has long been a quality and a metaphor applied to software development, but more recently software craftsmanship has emerged as a more explicit movement and branding focused on reclaiming and re-emphasising the importance of the detail, of how to code and how to do it well. There are many different perspectives on what the craftsmanship metaphor implies and what benefits and liabilities it may have. This keynote lays out and explores the motivation, implications, pros and cons of a craftsmanship view of software development.",
        speakerIds: [1],
        tags: ["Craftsmanship", "Smidig", "Motiverende", "Utvikling"],
        starts: new Date(2013, 10, 28, 09, 00, 00),
        ends: new Date(2013, 10, 28, 09, 55, 00),
        track: 1
    }, 
    {
        id: 2,
        title: "Meldingsbasert integrasjon i skyen og i eget hus",
        abstract: "Meldinger er en fleksibel, sikker og interoperatibel mÃ¥te Ã¥ integrere distribuerte lÃ¸sninger pÃ¥. Med skyen hengende over oss trenger vi mekanismer og teknologi som fungerer pÃ¥ tvers av tradisjonelle og nye muligheter Ã¥ sette sammen lÃ¸sninger pÃ¥. I dette foredraget vil vi vise hva .NET, Windows og Windows Azure har Ã¥ by pÃ¥ i sÃ¥ henseende.",
        speakerIds: [10],
        tags: [ "Arkitektur", "Back-end", "Cloud", "Azure", "Integrasjon" ],
        starts: new Date(2013, 09, 28, 11, 30, 00),
        ends: new Date(2013, 09, 28, 12, 00, 00),
        track: 1
    },
    {
        id: 3,
        title: "Eclipse â€“ ikke bare en Java IDE",
        abstract: "Eclipse er blant verdens stÃ¸rste Ã¥pen-kildekode-prosjekter. NÃ¦rmere to hundre store og smÃ¥ bedrifter, derav industriledere, bidrar med til sammen 650 aktive utviklere. Hvordan henger organisasjonen sammen og hvordan kan titalls millioner linjer kode leveres pÃ¥ dato - hvert Ã¥r?",
        speakerIds: [17],
        tags: [ "VerktÃ¸y", "Smidig", "Team", "Organisasjon", "Java"],
        starts: new Date(2013, 09, 28, 14, 00, 00),
        ends: new Date(2013, 09, 28, 14, 30, 00),
        track: 1
    },
    {
        id: 4,
        title: ".NET utenfor Windows",
        abstract: "Alle vet at .NET er en Microsoft-teknologi som kjÃ¸rer pÃ¥ Windows. Men ikke alle vet at .NET ogsÃ¥ kjÃ¸rer pÃ¥ en mengde andre plattformer! Vi snakker om MacOS, Linux, iOS, Android, spillkonsoller og embedded platformer. I dette foredraget vil jeg fortelle om de mulighetene som finnes og hva som gjÃ¸r de interessante.",
        speakerIds: [16],
        tags: [ ".NET", "Mobil", "Kryss-plattform" ],
        starts: new Date(2013, 09, 28, 14, 30, 00),
        ends: new Date(2013, 09, 28, 15, 00, 00),
        track: 1
    },
    {
        id: 5,
        title: "Hands-on with ASP.NET Web API",
        abstract: "Er du nysgjerrig pÃ¥ ASP.NET Web API sÃ¥ er dette presentasjonen for deg. Vi kommer etter en kort bakgrundspresentasjon ha en praktisk gjennomgang pÃ¥ hvor enkelt det er Ã¥ begynne med ASP.NET Web API.",
        speakerIds: [8],
        tags: [".NET", "Web", "API", "Arkitektur"],
        starts: new Date(2013, 09, 28, 12, 30, 00),
        ends: new Date(2013, 09, 28, 13, 00, 00),
        track: 1
    },
    {
        id: 6,
        title: "MV(C) i browseren med Backbone.js og REST.",
        abstract: "Webprogrammering pÃ¥ klientsiden har vÃ¦rt plaget av manglende struktur og en uheldig sammenblanding av domenemodell og presentasjonslogikk. Dette gir lite testbar kode, og dermed et smertefullt vedlikehold. Kristian presenterer backbone.js kombinert med et REST-api som en mulig vei ut av kaoset.",
        speakerIds: [5],
        tags: [ "JavaScript", "MVC", "Rest", "Backbone", "Kodekvalitet", "Klientside" ],
        starts: new Date(2013, 09, 28, 15, 15, 00),
        ends: new Date(2013, 09, 28, 15, 45, 00),
        track: 1
    },
    {
        id: 7,
        title: "Architecture with Agility",
        abstract: "The word Agile has passed into the wider buzzwordsphere familiar to all in development. But that does not mean its concepts, culture, associated processes and practices or implications are as widely understood. Agile development involves more than a passing familiarity with Scrum terminology, more than the occasional use of an automated testing framework and more than simply rebranding either a chaotic or bureaucratic in-house process and proclaiming 'We're Agile!'' Architecture is often placed falsely in conflict with Agile approaches, and vice versa. Architecture is not something that is completed and set in stone in a design phase, caught and trapped in a document, administered and policed by a select few. Architecture defines the significant decisions that characterise a system, decisions that are discovered and made at different times during the process of development, and by different roles. This session explores the practical relationship between Agile process and Agile architecture.",
        speakerIds: [1],
        tags: [ "Lyntale", "Arkitektur", "Smidig" ],
        starts: new Date(2013, 09, 28, 15, 15, 00),
        ends: new Date(2013, 09, 28, 15, 45, 00),
        track: 2
    },
    {
        id: 8,
        title: "Bonsai - A Graphics and Animation JS Library",
        abstract: "Developing interactive and beautiful apps and websites has been difficult and limited in the past - if you wanted to go fancy, Adobe Flash was the way to go. With Bonsai, an open-source Graphics and Animation Library built in JavaScript, you now can create stunning content similar to Adobe Flash. Bonsaiâ€™s simple API makes optimal use of different â€œHMTL5â€ technologies such as SVG, CSS3, WebWorkers and even nodejs. During this talk we will look into the unique architecture of Bonsai, including the separation of rendering and script execution and its plugin infrastructure. We will explore the rendering engine(s), such as the SVG renderer and the environment agnostic script runner (running in the window thread, WebWorker or even on nodejs).</p><p>Bonsai is also the JavaScript-Library that powers our new Flash (including ActionScript 3) to JavaScript Converter <a href='http://pixelplant.com'>http://pixelplant.com</a> and its ActionScript 3 plugin tries to preserve Flash semantics in JavaScript, giving Flash developers an easier entry point to JavaScript and HTML5.</p><p>After this talk you will have a good overview of Bonsaiâ€™s intuitive and simple JavaScript API and how we use the open web to draw interactive graphics. Find everything at <a href='http://bonsaijs.org'>http://bonsaijs.org</a>",
        speakerIds: [4],
        tags: [ "JavaScript", "Klientside", "Web", "Interaksjon" ],
        starts: new Date(2013, 09, 28, 15, 15, 00),
        ends: new Date(2013, 09, 28, 15, 45, 00),
        track: 3
    },
        {
        id: 9,
        title: "Growing Effective Teams - From Survival Mode to Self Organization",
        abstract: "Based on his upcoming book, Roy Osherove discusses the three phases software teams may exist in, and how to navigate between them. Being unaware of these phases could be one of the biggest reasons why agile adoption fails in many teams. Roy also discusses the role of the team leader in a team, and how leadership style needs to change between team phases.",
        speakerIds: [2],
        tags: ["Team", "Selvorganiserte team", "Smidig", "Teamledelse" ],
        starts: new Date(2013, 09, 28, 12, 30, 00),
        ends: new Date(2013, 09, 28, 13, 00, 00),
        track: 2
    },
    {
        id: 10,
        title: "Deep TDD: Proxy Based vs. Profiler Based Isolation Frameworks in .NET",
        abstract: 'In this talk Roy Osherove, author of "The art of Unit Testing", discusses one of the biggest unknowns to most people doing unit testing and tdd - how isolation(mocking) frameworks work, and why do some of them have very different abilities than others. Why can some frameworks fake static calls and others can&#39;t for example. After this talk you will be better equipped to choose a framework for your next project.',
        speakerIds: [2],
        tags: [".NET", "TDD", "Enhetstesting", "Mocking", "VerktÃ¸y" ],
        starts: new Date(2013, 09, 28, 16, 15, 00),
        ends: new Date(2013, 09, 28, 16, 45, 00),
        track: 2
    },
    {
        id: 11,
        title: "Design for vekst",
        abstract: "Arkitektur-patterns som kan vÃ¦re med deg fra forsiktig start til viral vekst. Systemarkitektur for web-baserte applikasjoner, fra nÃ¸ktern hardware til gradvis og plutselig vekst. Praktiske eksempler i forskjellige sprÃ¥k vil bli presentert.",
        speakerIds: [19],
        tags: [ "Arkitektur", "Web", "Back-end"],
        starts: new Date(2013, 09, 28, 11, 30, 00),
        ends: new Date(2013, 09, 28, 12, 00, 00),
        track: 4
    },
    {
        id: 12,
        title: "Scrum og iterasjoner â€“ nÃ¥r er det lurt?",
        abstract: "Beskrivelse: Â«Erfaringsbasert presentasjon av betingelsene for at scrum og iterasjoner kan gi verdi og hvorfor det noen ganger er mindre viktig. Kjennskap til scrum er en fordel.Â»",
        speakerIds: [12],
        tags: [ "Lyntale",  "Iterasjoner", "Scrum", "Smidig"],
        starts: new Date(2013, 09, 28, 12, 00, 00),
        ends: new Date(2013, 09, 28, 12, 15, 00),
        track: 2
    },
    {
        id: 13,
        title: "Kanban: From the U.S. Supermarket to Japanese Automobile Production",
        abstract: "Lean production can be described as both a philosophy and set of tools and techniques that aims to identify and eliminate all waste in manufacturing operations. The lean paradigm stems from the Just-in-Time (JIT) movement of the 1980s, and has its roots set firmly in the Toyota Production System (TPS). A central element of JIT and TPS is the Kanban system. Powell presents the development of the Kanban system and explains the underlying assumptions which are critical to the success of this approach.",
        speakerIds: [11],
        tags: [ "Lyntale", "Kanban", "Smidig", "Lean" ],
        starts: new Date(2013, 09, 28, 12, 15, 00),
        ends: new Date(2013, 09, 28, 12, 30, 00),
        track: 2
    },
    {
        id: 14,
        title: "Interaksjonsdesign for utviklere",
        abstract: "Ingen lager lite brukervennlige systemer med vilje. Hvorfor hvis alle gjÃ¸r sitt beste, hvorfor blir ikke systemene automatisk brukervennlig? En av grunnene er at det du synes er logisk ikke nÃ¸dvendigvis er logisk for andre. I foredraget gir jeg eksempler pÃ¥ grunnleggende prinsipper innen interaksjonsdesign og viser eksempler fra arbeid med Ã¥ sikre brukervennligheten til virksomhetskritiske it-systemer.",
        speakerIds: [6],
        tags: [ "Brukeropplevelse", "Interaksjon" ],
        starts: new Date(2013, 09, 28, 12, 30, 00),
        ends: new Date(2013, 09, 28, 13, 00, 00),
        track: 3
    },
    {
        id: 15,
        title: "JavaScript Everything!",
        abstract: 'In this talk we will look at a real and fairly complex implementation of a "mobile application" based on open web standards. We will look at how the application is build to adopt itself to different screen sizes, how it uses modern browser API&#39;s and how it live on both a URL and can be shipped to several app stores with more or less no code adjustment.<br/> We will look at different challenges one face in the client when doing mobile development and how they have been conquer. We will look at do and do not do&#39;s and we will draw out the underlaying architecture of the whole application and what has led to the different choices. <br/>The application is written entirely in JavaScript and when designing the client it became clear it would be a huge benefit to have the same language running on the server side. We will also look at how node.js made it possible to deal with real time data in a way that benefits the mobile client.',
        speakerIds: [3],
        tags: [ "JavaScript", "Klientside", "Mobil", "Kryss-plattform"],
        starts: new Date(2013, 09, 28, 12, 00, 00),
        ends: new Date(2013, 09, 28, 12, 30, 00),
        track: 3
    }
];


/********************
* SPEAKERS
********************/

TrondheimDC.speakers = [
    {
        image: "images/speakers/kevlinhenney.jpg",        
        id: "1",
        name: "Kevlin Henney",
        twitter: "kevlinhenney",
        about: 'Kevlin er en selvstendig konsulent og trainer i England. Hans interesser innen utvikling er "patterns, programming, practice and process". Han har skrevet for flere magasiner og websider, inkludert Better Software, The Register, Application Development Advisor, Java Report, og The C/C++ Users Journal. Kevlin er ogsÃ¥ en av forfatterne bak "A Pattern Language for Distributed Computing" og "On Patterns and Pattern Language", og to volum i "The Pattern-Oriented Software Architecture"-serien. Han er ogsÃ¥ redaktÃ¸r for <a href="http://shop.oreilly.com/product/9780596809492.do">97 Things Every Programmer Should Know</a>.'
    }, {
        image: "images/speakers/royosherove.jpg",
        id: "2",
        name: "Roy Osherove",
        about: 'Roy Osherove jobber som Chief Scientist hos <a href="http://www.bouvet.no">Bouvet</a>, og har skrevet "The Art of Unit Testing", "From Chaos to Self Organization" og "Notes to a Software Team Leader". Du kan finne ham bloggen hans: <a href="http://www.osherove.com">osherove.com</a>, og <a href="http://www.5whys.com">5whys.com</a>.',
        twitter: "royosherove"
    }, {
        image: "images/speakers/trygvelie.jpg",
        id: "3",
        name: "Trygve Lie",
        about: "Trygve Lie er webutvikler hos A-Pressen Digitale Medier med en sterk lidenskap for Ã¥pen webteknologi. Han har utviklet weblÃ¸sninger basert pÃ¥ HTML, CSS og JavaScript siden midten av 90-tallet og har holdt pÃ¥ med mobil webutvikling siden den fÃ¸rste mobile nettleseren som kom med Nokia 7110 rundt tusenÃ¥rsskifte.",
        twitter: "trygve_lie"
    }, {
        image: 'images/speakers/wolframkriesing.jpg',
        id: "4",
        name: "Wolfram Kriesing",
        about: "Allerede i 1999 da Netscape 4 og IE4 var de to regjerende nettleserene, hadde Wolfram sitt fÃ¸rste JavaScript oppdrag. Det gikk likevel ikke opp for han fÃ¸r i ettertid hvor kult dette sprÃ¥ket var. I 2008 var han med Ã¥ stiftet en av de fÃ¸rste rene JavaScript selskapene; uxebu. NÃ¥ som alle mobiltelefoner har god JavaScript-stÃ¸tte, har uxebu fokus pÃ¥ HTML5 applikasjoner, samtidig som de prÃ¸ver Ã¥ tÃ¸ye grensene for hva som er mulig med JavaScript. Wolfram har vÃ¦rt bidragsyter til Dojo, og har senere startet embedJS, et JavaScript bibliotek med fokus pÃ¥ mobil fÃ¸rst metodikken.",
        twitter: 'wolframkriesing'
    }, {
        image: "images/speakers/kristianbendiksen.jpg",
        id: "5",
        name: "Kristian Bendiksen",
        about: "Kristian er systemutvikler, og glad i programmere. Han liker enkle it-systemer og god kode, men har lÃ¦rt seg Ã¥ se sjarmen i den virkelige verdens kompleksitet. Kristian er it-konsulent hos Bouvet ASA i Trondheim, og fÃ¸r det skrev han fysikksimuleringssoftware og studerte kunstig intelligens ved NTNU.",
        twitter: "kriben"
    }, {
        image: "images/speakers/elitoftoyandersen.jpg",
        id: "6",
        name: "Eli ToftÃ¸y-Andersen",
        about: "Eli ToftÃ¸y-Andersen er senior rÃ¥dgiver innen brukervennlighet og design i konsulentselskapet Steria. Hun har blant annet jobbet som interaksjonsdesigner i Telenor Mobil og i prosjekter for Helse SÃ¸r-Ã˜st, Statens Pensjonskasse og Forsvaret. Hun er vant til Ã¥ tale brukernes sak under utvikling og innfÃ¸ring av it-systemer. <br/>Eli kjÃ¸rte sin fÃ¸rste brukertest i Ã¥r 2000 og har siden den gang vÃ¦rt en pÃ¥driver for Ã¥ fÃ¥ gjennomfÃ¸rt brukertesting i prosjektene hun har vÃ¦rt med i. Hun blogger om pÃ¥ <a href='http://www.brukskvalitet.no'>www.brukskvalitet.no</a>. Eli ToftÃ¸y-Andersen er medforfatter av boken Praktisk brukertesting.",
        twitter: "elitatt"
    }, {
        id: "7",
        image: "images/speakers/jimmynilsson.jpg",
        name: "Jimmy Nilsson",
        twitter: "jimmynilsson",
        about: "En av grÃ¼nderne og daglig leder for <a href='http://factor10.com/'>factor10</a>. Forfattar av Applying Domain-Driven Design and Patterns og .NET Enterprise Design. Developer, samt arkitekt/utvikler i 20+ Ã¥r."
    },
    {
        id: "8",
        image: "images/speakers/tomasjansson.jpg",        
        name: "Tomas Jansson",
        twitter: "TomasJansson",
        about: "Tomas Jansson jobber som manager i BEKK i Oslo og har mer enn seks Ã¥rs erfarenhet fra konsulentverden i bÃ¥de Norge og Sverige med alt fra SAP-utvikling og perl til java og .NET. Fra .NET-stacken har Tomas erfarenhet med hele spektrumet fra databas til webb og caching med AppFabric."
    },
    {
        id: "9",
        image: "images/speakers/hadihariri.jpg",        
        name: "Hadi Hariri",
        twitter: "hhariri",
        about: "Hadi Hariri is a developer, speaker and Technical Evangelist at JetBrains. His passions include software architecture and web development. Book author and frequent contributor to developer publications, Hadi has been speaking at industry events for over a decade. He is based in Spain where he lives with his wife and three sons. He is also an ASP.NET MVP and ASP.NET Insider."
    },
    {
        id: "10",
        image: "images/speakers/joaroyen.jpg",        
        name: "Joar Ã˜yen",
        twitter: "joaroyen",
        about: "Joar Ã˜yen har bidratt mye i utviklingsmiljÃ¸et i Trondheim siden NNUG Trondheim startet opp i 2004, og har de siste tre Ã¥r fÃ¥tt tildelt tittelen Most Valuable Professional av Microsoft. Utover sitt arbeid i NNUG jobber han til daglig som konsulent i Acando og hjelper kunder med utfordringer innen arkitektur og integrasjon."
    },
    {
        id: "11",
        image: "images/speakers/daryllpowell.jpg",        
        name: "Daryl Powell",
        twitter: "",
        about: "Daryl Powell works for the Department of Production and Quality Engineering at the Norwegian University of Science and Technology NTNU and also for SINTEF Operations Management. He has experience from the eight-year research program â€œSFI Normanâ€ which aims to develop new and multi-disciplinary research on next-generation manufacturing, and create theories, methods, models and management tools that enable Norwegian manufacturers to thrive in the global market. Daryl has an MSc in Lean Production from the University of Wales in Swansea, UK; and defends his PhD thesis entitled â€œInvestigating ERP support for Lean Productionâ€ in September 2013. In his thesis he identifies and examines a range of support functionality offered by contemporary ERP systems in the deployment of Lean Production principles. He has published a number of articles on the subject in reputable international journals."
    },
    {
        id: "12",
        image: "images/speakers/klausstafto.jpg",        
        name: "Klaus Stafto",
        twitter: "",
        about: "Klaus Stafto er seniorkonsulent i Acando i Trondheim. Han har 13 Ã¥rs erfaring i bransjen fra roller som utvikler, ScrumMaster, arkitekt, endringsansvarlig, prosjektleder og gruppeleder. Han har jobbet 11 Ã¥r i Oslo for oppdragsgivere som blant annet Telenor, Statsbygg, Norges ForskningsrÃ¥d, Apokjeden (Apotek 1) og Statens vegvesen."
    },
    {
        id: "13",
        image: "images/speakers/jorunbremseth.jpg",        
        name: "Jorun Kristin Bremseth",
        twitter: "",
        about: "Har jobbet i Kantega siden 2000 - stort sett med nettopp denne typen hverdag. Allsidig person, allsidig bakgrunn og allsidige oppgaver. Prosjektledelse, kundeoppfÃ¸lging, kurs/opplÃ¦ring, funksjonell rÃ¥dgivning, kravhÃ¥ndterer/stiller, tester, salg, markedsretta arbeid."
    },
    {
        id: "14",
        image: "images/speakers/sjurkvammen.jpg",        
        name: "Sjur Kvammen",
        twitter: "sjurkvammen",
        about: "Har viklet ut systemer siden 2006, og er kanskje sÃ¦rlig interessert i den menneskelige faktor."
    },
    {
        id: "15",
        image: "images/speakers/larsmariusgarshol.jpg",        
        name: "Lars Marius Garshol",
        twitter: "larsga",
        about: "Lars Marius har jobbet med semantisk teknologi siden 1999. Han var med pÃ¥ Ã¥ starte produktfirmaet Ontopia i 2000, og har vÃ¦rt redaktÃ¸r for flere av ISO-standardene for emnekart. I dag er han konsulent pÃ¥ semantisk web i Bouvet"
    },
    {
        id: "16",
        image: "images/speakers/runegrimstad.jpg",        
        name: "Rune Grimstad",
        twitter: "runegri",
        about: "Rune er spesialist pÃ¥ .NET og har jobbet med platformen siden den ble lansert for 10 Ã¥r siden. Til daglig jobber han som konsulent i Capgemini og fokuserer der pÃ¥ systemutvikling og systemarkitektur. PÃ¥ fritida bruker Rune mye tid pÃ¥ mobilutvikling og er spesielt interessert i kryss-platform mobile applikasjoner."
    },
    {
        id: "17",
        image: "images/speakers/torkildulvoyresheim.jpg",        
        name: "Torkild UlvÃ¸y Resheim",
        twitter: "torkildr",
        about: "Torkild U. Resheim har jobbet som systemutvikler siden 1997 og er konsulent hos Itema AS. De siste syv Ã¥rene har han hovedsaklig laget verktÃ¸y basert pÃ¥ Eclipse-plattformen; blant annet for Mertech og Atmel. Han lager nÃ¥ simuleringsverktÃ¸y for marine operasjoner pÃ¥ oppdrag fra MARINTEK. Torkild er engasjert i Ã¥pne lÃ¸sninger og er Â«committerÂ» pÃ¥ flere Eclipse-prosjekter."
    },
    {
        id: "18",
        image: "images/speakers/torevestues.jpg",        
        name: "Tore Vestues",
        twitter: "ToreVestues",
        about: "Tore er en entusiastisk utvikler med et smidig forhold til livet, prosess og kode. Han tror at problemer lÃ¸ses best med tillit, ydmykhet og pragmatiske lÃ¸sninger. Tore jobber som Manager i BEKK consulting."
    },
    {
        id: "19",
        image: "images/speakers/stigbakken.jpg",        
        name: "Stig Bakken",
        twitter: "stigsb",
        about: "Stig Bakken har nÃ¦rmere 20 Ã¥rs fartstid med Unix, Internet- og web-basert software. Han har vÃ¦rt en av kjerneutviklerene bak (eventuelt medskyldig i) PHP, men har hovedtyngden av sin erfaring fra sÃ¸kebransjen, i bedrifter som FAST, Yahoo!, Google og Zedge."
    },
    {
        id: "20",
        image: "images/speakers/ingvaldskaug.jpg",        
        name: "Ingvald Skaug",
        twitter: "ingvald",
        about: "Ingvald er ein erfaren systemutviklar og fasilitator i Bouvet. Han har erfaring frÃ¥ smÃ¥ og store selskap, og bÃ¥de meir og mindre smidige mÃ¥tar Ã¥ jobba pÃ¥."
    },
    {
        id: "21",
        image: "images/speakers/anderslassen.jpg",        
        name: "Anders Lassen",
        twitter: "",
        about: "Anders Lassen (26) er grÃ¼nder og daglig leder i Outracks Technologies. Han har hatt en lidenskap for sanntidsgrafikk siden svÃ¦rt ung alder, og har over de siste 10 Ã¥rene vÃ¦rt involvert i en lang rekke spill- og grafikkdemo-produksjoner. Etter 6 Ã¥r som student ved NTNU og grafikkspesialist i ARM Norway startet han Outracks Technologies AS i 2011. Anders og Outracks satser nÃ¥ tungt pÃ¥ Ã¥ utvikle verktÃ¸y som gjÃ¸r det enorme potensialet i moderne GPU'er enklere tilgjengelig for utviklere og artister."
    },
    {
        id: "22",
        image: "images/speakers/ninavolstad.jpg",        
        name: "Nina Volstad",
        twitter: "ninavolstad",
        about: "SivilingeniÃ¸r i Industriell Design fra NTNU, med 4 Ã¥rs fartstid i Bekk som interaksjonsdesigner. Elsker nÃ¥r ting bare funker uten hassle, og mine henvendelser til bÃ¥de det offentlige og private firmaer inkluderer som regel en vennlig, men bestemt gratis-ekspertevaluering-av-lÃ¸sningen-din-liste! Jobber pÃ¥ alt fra selvbetjeningsystemer pÃ¥ web og desktop applikasjoner, til mobile ting og prototyper for fremtidsvisjoner. Har det siste Ã¥ret vÃ¦rt leder for Fagruppen for Interaksjon i Bekk, og er spesielt interessert i det psykologiske aspektet ved design."
    },
    {
        id: "23",
        image: "images/speakers/havardstranden.jpg",        
        name: "HÃ¥vard Stranden",
        twitter: "havardstranden",
        about: "HÃ¥vard Stranden jobber som seniorpartner i Conceptos Consulting. Han har bred erfaring fra blant annet store tjenesteorienterte arkitekturer, forretningsapplikasjoner, spesialiserte kommunikasjonslÃ¸sninger og Ã¥pen kildekode-prosjekter. HÃ¥vard er SivilingeniÃ¸r og Master of Technology fra NTNU, og bruker sin erfaring som rÃ¥dgiver, teknisk prosjektleder og systemutvikler for Conceptos Consulting sine kunder. Han er dessuten en aktiv bidragsyter og deltager i faglige fora i TrondheimsomrÃ¥det gjennom blant annet verv som styremedlem i NNUG og medarrangÃ¸r for XP Meetup."
    },  
    {
        id: "24",
        image: "images/speakers/arnulfkrokeide.jpg",        
        name: "Arnulf Krokeide",
        twitter: "arnulfk",
        about: "Startet han som naiv entusiastisk evangelist for smidig utvikling i et firma med 100 ansatte. Fem Ã¥r senere har Confirmit 350 ansatte, er litt smidigere, mange erfaringer rikere og med et mer pragmatisk syn pÃ¥ smidig."
    },
    {
        id: "25",
        image: "images/speakers/rolfandersstorset.jpg",        
        name: "Rolf Anders Storset",
        twitter: "rolfanders",
        about: "Rolf Anders er designer hos WTW Software i Trondheim og lidenskapelig opptatt av god design og brukervennlighet. I sitt daglige virke jobber han for det meste med mobile nettjenester og Â«appsÂ». Rolf Anders stÃ¥r bak designet av Gulltaggen-vinneren AtB Mobillett og SmartPark for Trondheim Parkering."
    },
    {
        id: "26",
        image: "images/speakers/perharaldkristensen.jpg",        
        name: "Per Harald Kristensen",
        twitter: "",
        about: "Per Harald har jobbet med systemlÃ¸sninger for energibransjen siden 1992 og er systemutvikler/testkonsulent hos Powel AS. Han har de siste Ã¥rene engasjert seg i automatisert testing og forbedring av utrullingsprosesser. Per Harald liker utfordringer og mener at alt lar seg lÃ¸se."
    },
    {
        id: "27",
        image: "images/speakers/palfossmo.jpg",        
        name: "PÃ¥l Fossmo",
        twitter: "",
        about: "PÃ¥l Fossmo bruker til daglig sin 12 Ã¥rs lange erfaring til Ã¥ hjelpe kunder med systemarkitektur, systemutvikling og teknisk prosjektledelse. <br/>I 2013 bestemte han seg for Ã¥ fÃ¸lge sin drÃ¸m om Ã¥ starte eget foretak, og driver i dag som selvstendig konsulent.<br /> De fire siste Ã¥rene har han fÃ¥tt utmerkelsen Microsoft Most Valuable Professional i programmeringssprÃ¥ket C#.<br /> PÃ¥l elsker Ã¥ jobbe med arkitektur, ny teknologi og mennesker. Han har et pragmatisk syn pÃ¥ teknologi og prosjektgjennomfÃ¸ring. Det siste Ã¥ret har han fokusert mye pÃ¥ Javascript, HTML5, MonoTouch, Objective C/C og Ruby. <br/> I tillegg til det tekniske aspektet i et prosjekt, er han opptatt av de smÃ¥ tingen som fÃ¥r et prosjektteam til Ã¥ fungere godt sammen.<br/> Han er et aktivt medlem av, og bidragsyter til, det norske utviklermiljÃ¸et og liker Ã¥ dele sine erfaringer bÃ¥de i lokale brukergrupper og pÃ¥ stÃ¸rre konferanser som MSDN Live, XP2010, Norwegian Developer Conference og MVP Live 2013. Han har fÃ¥tt gode tilbakemeldinger pÃ¥ alle foredrag han har holdt. PÃ¥l er styremedlem i Norwegian .NET User Group, Trondheim"
    },
    {
        id: "28",
        image: "images/speakers/frankalexanderkraemer.jpg",        
        name: "Frank Alexander Kraemer",
        twitter: "fralkr",
        about: "Frank er medgrÃ¼nder og teknologisjef i Bitreactive AS. Bedriften er en startup fra NTNU og spesialist i rask utvikling av M2M applikasjoner. Frank har sin bakgrunn i systemutvikling gjennom en doktorgrad i telematikk, og erfaring med verktÃ¸yutvikling i Eclipse, startet hos IBM."
    },
    {
        id: "29",
        image: "images/speakers/erlendoftedal.jpg",        
        name: "Erlend Oftedal",
        twitter: "webtonull",
        about: "Erlend Oftedal har jobbet i BEKK siden 2004, og har vÃ¦rt faggruppeleder for sikkerhetsgruppa i flere Ã¥r. Er i tillegg leder av OWASP Norway og har holdt foredrag pÃ¥ norske og utenlandske konferanser. Jobber til daglig som utvikler, men med sikkerhetshatten pÃ¥. GjÃ¸r i tillegg til utvikling, kodegjennomgang og sikkerhetstesting for andre prosjekter i BEKK."
    },     
    {
        id: "30",
        image: "images/speakers/madsmobaek.jpg",        
        name: "Mads MobÃ¦k",
        twitter: "madsmobaek",
        about: "Mads er en allsidig front-end utvikler hos BEKK Consulting og jobber til daglig med mobilutvikling. Han har jobbet med web de siste 10 Ã¥rene og har i tillegg god kjennskap til iOS og backendutvikling med Java og Ruby, samt automatisering og testing."
    },
    {
        id: "31",
        image: "images/speakers/mortenmoen.jpg",        
        name: "Morten Moen",
        twitter: "LocoMortis",
        about: "Morten har jobbet som arkitekt/utvikler/scrum master i Itema i to Ã¥r. Har drÃ¸yt 15 Ã¥rs fartstid som utvikler, hovedsakelig pÃ¥ Microsoft plattform. Har vÃ¦rt borti det meste siden VB 4.0 men trives best med C# i kombinasjon med WPF/MVVM eller ASP.NET MVC."
    }, 
    {
        id: "32",
        image: "images/speakers/kennethguldbrandsoy.jpg",        
        name: "Kenneth GulbrandsÃ¸y",
        twitter: "",
        about: "Kenneth GulbrandsÃ¸y er utdannet M.Sc. i teknisk kybernetikk og har jobbet med instrumenterings- og kontrollsystemer pÃ¥ produksjons- og organisasjonsnivÃ¥. Hans nÃ¥vÃ¦rende stilling er forskingsleder i One Voice AS der han forsker pÃ¥ intelligente kontrollsystem for krise og beredskap. Ved siden av sin daglige jobb holder han pÃ¥ med en doktorgrad innen modelldrevet beslutningstÃ¸tte for sÃ¸k og redning, samt er faglig leder i ressursgruppe ettersÃ¸kning i Norges RÃ¸de Kors Hjelpekorps."
    },
    {
        id: "33",
        image: "images/speakers/janerikwold.jpg",        
        name: "Jan Erik Wold",
        twitter: "",
        about: "Jobbet med C, C++ og java utvikling som konsulent og utvikler siden 1998.  De siste Ã¥rene mest som teknisk prosjektleder for Telenor sine mobile applikasjoner.<br/> 2 Ã¥r som partner og konsulent i ConsultIT 12 Ã¥r i Telenor som: produktuviklter, innovasjon, teknsik prosjektleder, innovasjon og investering strategi. Fokus pÃ¥ applikasjoner og tjenester mot sluttbruker. <br/> Schizofren teknolog med en dragning mot det kreative. <br/> Lidenskapelig opphengt i teknologi, med en kanskje alt for sterkt Ã¸nske om Ã¥ skape lÃ¸sninger som berÃ¸rer og vil oppleves. Men det er greit om det ogsÃ¥ bare forenkler hverdagen. Ã˜nsker at ting skal virke, og at teknologien skal vÃ¦re et virkemiddel som brukeren aldri skal ha noe forhold til. Det er opplevelse som selger, ikke teknologien. Produkter kan skape fÃ¸lelser og et Ã¸nske om mere."
    },
    {
        id: "34",
        image: "images/speakers/alexbratsetvik.jpg",        
        name: "Alex Brasetvik",
        twitter: "alexbrasetvik",
        about: "Med fordypning i sÃ¸kemotorer pÃ¥ NTNU og en business angel som har tillatt mye eksperimentering, sÃ¥ har Alex og Found IT prÃ¸vd ut mye sÃ¸kerelatert teknologi. NÃ¥ fokuserer de pÃ¥ en ElasticSearch-tjeneste, bygd pÃ¥ Amazon sin plattform."
    },
    {
        id: "35",
        image: "images/speakers/josteinvik.jpg",        
        name: "Jostein Vik",
        twitter: "josteinvik",
        about: "Jostein Vik har utviklet teknologibedrifter til kommersielle suksesser. Jostein har utviklet og solgt selskaper til Samsung, Bacouz Dalloz (Honeywell), Hexagon,  Defa med mer."
    }
];