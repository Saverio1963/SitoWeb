export const bookData = {
  title: "Cronache dal fronte invisibile",
  subtitle: "Storie di vita vissuta",
  author: "Saverio Santoniccolo",
  coverImage: "/book-cover.jpg",
  authorPhoto: "/author-photo.jpg",
  
  synopsis: "Resilienza, dolore, speranza, quotidianità. È un viaggio autentico e crudo nelle indagini, nelle notti, nelle scelte e nelle ferite di un uomo che ha servito lo Stato per quarantuno anni. Saverio Santoniccolo, Luogotenente in Carica Speciale dell'Arma dei Carabinieri, ora in congedo, racconta con voce diretta e profonda le operazioni contro la mafia, il narcotraffico internazionale, gli assalti per rapine ai portavalori. Le stragi e gli omicidi che hanno segnato intere comunità, la cattura di latitanti e il dolore per la perdita di colleghi e innocenti. Queste pagine non sono solo cronaca: sono memoria viva, testimonianza morale, resistenza civile.",
  
  chapters: [
    { number: "1", title: "Il giuramento e la prima uniforme" },
    { number: "2", title: "L'arrivo a Bardulos" },
    { number: "3", title: "Il litorale del terrore" },
    { number: "4", title: "Marino Di Resta – Non invano" },
    { number: "5", title: "Le ferie negate" },
    { number: "6", title: "La fuga armata" },
    { number: "7", title: "Graziella Mansi - Orrore di una notte d'estate" },
    { number: "8", title: "Commando" },
    { number: "9", title: "Predator – la scia del gasolio" },
    { number: "10", title: "La fabbrica della morte" },
    { number: "11", title: "Il \"cavallo\" sbagliato" },
    { number: "12", title: "San Marco in Lamis – la strage annunciata –" },
    { number: "13", title: "Una storia a lieto fine" },
    { number: "14", title: "Un arresto particolare" }
  ],
  
  authorBio: "Luogotenente in Carica Speciale dei Carabinieri, ora in congedo, nato ad Andria (BT) il 12.05.1963. Ha prestato servizio per quarantuno anni nella Benemerita, trenta dei quali nella città di Barletta, dove ha comandato la locale Sezione Operativa. Ha ricoperto altresì gli incarichi di: comandante di Stazione, addetto a Sezione di Polizia Giudiziaria, addetto a Nucleo Operativo e comandante di Nucleo Operativo.",
  
  quote: "L'uniforme non é solo un simbolo, é una promessa fatta a chi non ha voce, a chi ha perso la fiducia, a chi aspetta che qualcuno dica: io ci sono",
  quoteAuthor: "Saverio Santoniccolo",
  
  contact: {
    email: "saverio.santoniccolo@gmail.com",
    social: {
      facebook: "Saverio Santoniccolo",
      instagram: "Saverio Santoniccolo",
      linkedin: "Saverio Santoniccolo"
    }
  },
  
  whyIWrote: "Ho deciso di scrivere perché certe storie non devono restare chiuse nei fascicoli, né nei corridoi delle caserme. Devono essere condivise, comprese, tramandate. Perché la lotta alla criminalità non è solo un fatto di polizia: è una battaglia culturale, una responsabilità collettiva, una questione di coscienza.\n\nHo raccontato episodi vissuti in prima persona: operazioni antimafia, indagini sul narcotraffico internazionale, omicidi efferati, collaborazioni difficili, delusioni istituzionali.\n\nHo raccontato anche il lato umano: la paura, la rabbia, la stanchezza, la solitudine. Perché dietro ogni uniforme c'è un cuore che batte, e dietro ogni operazione c'è una vita che cambia.\n\nNon cerco applausi. Cerco memoria. Cerco verità. Cerco giustizia, anche dopo la giustizia.\n\nSe queste storie serviranno a far riflettere, a far capire, a far scegliere — allora avranno avuto senso.",
  
  galleryCategories: {
    commando: {
      title: "Operazione Commando",
      description: "Documentazione fotografica delle fasi operative",
      phases: {
        operative: {
          title: "Fasi Operative",
          description: "Documentazione completa delle operazioni sul campo",
          photos: [
            {
              id: 1,
              image: "/commando1.png",
              caption: "Ricognizione aerea - Vista del territorio oggetto di indagine",
              type: "image"
            },
            {
              id: 2,
              image: "/commando2.png",
              caption: "Osservazione campo operativo - Area sotto controllo",
              type: "image"
            },
            {
              id: 3,
              image: "/commando3.png",
              caption: "Controllo stradale - Sorveglianza e monitoraggio movimenti",
              type: "image"
            },
            {
              id: 4,
              image: "/commando4.png",
              caption: "Esecuzione - Materiale sequestrato durante l'operazione",
              type: "image"
            },
            {
              id: 5,
              image: "/commando5.png",
              caption: "Autovetture rubate utilizzate per gli assalti ai portavalori",
              type: "image"
            }
          ]
        },
        servizi: {
          title: "Servizi giornalistici",
          description: "Copertura mediatica dell'operazione Commando",
          photos: [
            {
              id: 21,
              image: "/commando_tg1.avi",
              caption: "Servizio TG1 - Operazione Commando",
              type: "video",
              thumbnail: "/commando_tg1_thumb.jpg"
            },
            {
              id: 22,
              image: "/commando_tg3.mp4",
              caption: "Servizio TG3 - Operazione Commando",
              type: "video",
              thumbnail: "/commando_tg3_thumb.jpg"
            },
            {
              id: 23,
              image: "/commando_teleregione.mp4",
              caption: "Servizio Teleregione - Operazione Commando",
              type: "video",
              thumbnail: "/commando_teleregione_thumb.jpg"
            }
          ]
        }
      }
    },
    fabbrica: {
      title: "La fabbrica della morte",
      description: "Operazione contro il traffico di armi e stupefacenti",
      phases: {
        generale: {
          title: "Sequestro",
          description: "",
          photos: [
            {
              id: 11,
              image: "/fabbrica1.jpg",
              caption: "Arsenale di armi da fuoco sequestrate",
              type: "image"
            },
            {
              id: 12,
              image: "/fabbrica2.jpg",
              caption: "Documentazione investigativa",
              type: "image"
            },
            {
              id: 13,
              image: "/fabbrica3.jpg",
              caption: "Materiale sequestrato durante l'operazione",
              type: "image"
            },
            {
              id: 14,
              image: "/fabbrica4.jpg",
              caption: "Vista completa del materiale sequestrato: armi, droga e strumenti",
              type: "image"
            },
            {
              id: 15,
              image: "/fabbrica5.jpg",
              caption: "Dettaglio del materiale illecito sequestrato",
              type: "image"
            },
            {
              id: 17,
              image: "/fabbrica6.jpg",
              caption: "Sacchetti di materiale sequestrato per aspirapolvere utilizzati per il trasporto",
              type: "image"
            },
            {
              id: 18,
              image: "/fabbrica7.jpg",
              caption: "Pacchi di droga nascosti all'interno del veicolo",
              type: "image"
            },
            {
              id: 19,
              image: "/fabbrica8.jpg",
              caption: "Esposizione completa dell'arsenale sequestrato: armi automatiche e esplosivi",
              type: "image"
            },
            {
              id: 16,
              image: "/fabbrica_video1.3gp",
              caption: "Servizio TG1 liberazione ostaggio",
              type: "video",
              thumbnail: "/video_thumbnail.jpg"
            },
            {
              id: 20,
              image: "/fabbrica_video2.avi",
              caption: "Video completo materiale sequestrato",
              type: "video",
              thumbnail: "/video2_thumbnail.jpg"
            }
          ]
        }
      }
    },
    altri: {
      title: "Altri Eventi",
      description: "Presentazioni del libro e momenti storici",
      phases: {
        generale: {
          title: "Generale",
          description: "",
          photos: [
            {
              id: 6,
              image: "https://via.placeholder.com/600x400/1a3a4a/00d4ff?text=Foto+da+aggiungere",
              caption: "Presentazione del libro - [Didascalia da aggiungere]"
            }
          ]
        }
      }
    }
  },
  
  excerpts: [
    {
      id: 1,
      title: "Tra le fiamme",
      text: "Rovi, alberi spezzati, fumo, calore insopportabile. Avanzammo tra le fiamme per un centinaio di metri. Gli occhi lacrimavano, il sudore bruciava. Poi, sotto un albero, la sagoma di una bambina. Supina, braccia piegate, corpo fumante."
    },
    {
      id: 2,
      title: "L'operazione",
      text: "Primo passaggio, sagome a ridosso del muro. Secondo passaggio: quota più bassa, videocamera accesa, metto lo zoom al massimo. Quasi non riuscivo a crederci. Li vedevo, li vedevo tutti. Sei individui, seduti su un muretto, in tute mimetiche verdi, con teste rasate, volti rivolti al sole, rilassati, sicuri, pronti."
    },
    {
      id: 3,
      title: "Faccia d'angelo",
      text: "Riunione d'urgenza. Avevamo un nome, un volto. Un legame diretto con la rete criminale garganica. Tucci Saverio, \"faccia d'angelo\". Un soprannome che strideva con la realtà. Di angelico non aveva nulla. Era un soggetto di Manfredonia, noto da anni per il suo spessore criminale. Aveva collezionato condanne per mafia, era stato vittima di attentati, eppure - come purtroppo spesso accade in Italia - le condanne si scontano, se si scontano, dopo decenni."
    },
    {
      id: 4,
      title: "Redenzione",
      text: "Penso che, quando una persona così profondamente radicata nella criminalità sceglie di affidarsi a un'altra per cambiare vita, non per paura delle conseguenze legali, ma per un'intima convinzione, si toccano davvero le corde più intime del senso di giustizia e della professione che si ricopre. Non si tratta più di assicurare un criminale alla giustizia, ma di essere un punto di riferimento, una guida in un percorso di redenzione. E un atto di fiducia enorme e, per chi lo riceve, un'opportunità straordinaria di dimostrare che il sistema non è solo punitivo, ma può anche essere uno strumento di rinascita e cambiamento. E ciò evidenzia come il vero successo non sia sempre legato alla condanna, ma a quell'impatto umano e morale che può portare a una trasformazione radicale nella vita di un individuo."
    }
  ],
  
  purchaseLinks: [
    { name: "Amazon", url: "#", available: false },
    { name: "IBS", url: "#", available: false },
    { name: "Feltrinelli", url: "#", available: false }
  ]
};
