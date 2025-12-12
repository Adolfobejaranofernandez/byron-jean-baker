import React, { useState, useEffect, useRef } from 'react';
import { Globe, Circle, Square, Volume2, VolumeX } from 'lucide-react';

/* --- CONTENT DICTIONARY (EN/ES) --- */
const content = {
  en: {
    nav: {
      work: "Archive",
      philosophy: "Method",
      services: "Capabilities",
      contact: "Commission",
      login: "Client Access"
    },
    hero: {
      tag: "ALGORITHMIC CINEMA STUDIO",
      title_1: "FORM FOLLOWS",
      title_2: "FICTION.",
      subtitle: "We engineer Hollywood-grade cinematography without a single physical camera. Your impossible ideas, finally rendered in cinema-grade reality.",
      cta: "Start Commission",
      vision: "// 001. The Product"
    },
    manifesto: {
      header: "The Post-Physical Standard",
      p1: "Traditional production is slow, expensive, and bound by gravity. We are not.",
      p2: "Byron Jean Baker combines director-level storytelling with proprietary AI models to produce high-end commercials, fashion films, and brand universes that were previously unfilmable.",
      quote: "Architecture is the learned game, correct and magnificent, of forms assembled in the light.",
      specs: {
        s1: "Logistics", v1: "0%",
        s2: "Creativity", v2: "100%",
        s3: "Physics", v3: "Optional"
      }
    },
    work: {
      title: "Premium Clients",
      vol: "2010-2024",
      intro: "15 years directing visual content for major brands across global markets. Full-spectrum production from concept to delivery: fashion films, music industry campaigns, product launches, festival visuals, and broadcast content.",
      regions: "Spain \u00b7 Latin America \u00b7 USA \u00b7 Italy \u00b7 Brazil \u00b7 China",
      notable: "Stadium concerts. National broadcast. City installations.",
      roles: "Director \u00b7 DOP \u00b7 Editor \u00b7 Post-Production \u00b7 Concept",
      projects: [
        { id: "01", title: "Cartier: Refraction", client: "Global TVC Campaign", year: "2025" },
        { id: "02", title: "Porsche: The Ghost", client: "Brand Heritage Film", year: "2024" },
        { id: "03", title: "Vogue: Synthetic", client: "Digital Editorial", year: "2024" }
      ]
    },
    footer: {
      title_main: "Let Us",
      title_sub: "Build It.",
      contact: "Initiate Project",
      email: "contact@byronjeanbaker.studio",
      loc: "Madrid · Miami · Shanghai",
      box_text: "We are the architects\nof the impossible."
    }
  },
  es: {
    nav: {
      work: "Archivo",
      philosophy: "Método",
      services: "Capacidades",
      contact: "Encargo",
      login: "Acceso Cliente"
    },
    hero: {
      tag: "ESTUDIO DE CINE ALGORÍTMICO",
      title_1: "LA FORMA SIGUE",
      title_2: "A LA FICCIÓN.",
      subtitle: "Ingeniería cinematográfica nivel Hollywood sin usar una sola cámara física. Tus ideas imposibles, por fin renderizadas en realidad cinematográfica.",
      cta: "Iniciar Encargo",
      vision: "// 001. El Producto"
    },
    manifesto: {
      header: "Estándar Post-Físico",
      p1: "La producción tradicional es lenta, cara y está atada a la gravedad. Nosotros no.",
      p2: "Byron Jean Baker combina narrativa de director de cine con modelos de IA propietarios para producir spots de alta gama, fashion films y universos de marca que antes eran infilmables.",
      quote: "La arquitectura es el juego sabio, correcto y magnífico de los volúmenes bajo la luz.",
      specs: {
        s1: "Logística", v1: "0%",
        s2: "Creatividad", v2: "100%",
        s3: "Física", v3: "Opcional"
      }
    },
    work: {
      title: "Clientes Premium",
      vol: "2010-2024",
      intro: "15 años dirigiendo contenido visual para grandes marcas en mercados globales. Producción integral desde concepto hasta entrega: fashion films, campañas industria musical, lanzamientos de producto, visuales para festivales y contenido broadcast.",
      regions: "España · Latinoamérica · USA · Italia · Brasil · China",
      notable: "Conciertos en estadios. TV nacional. Instalaciones urbanas.",
      roles: "Director · DOP · Editor · Post-Producción · Concepto",
      projects: [
        { id: "01", title: "Cartier: Refracción", client: "Campaña TVC Global", year: "2025" },
        { id: "02", title: "Porsche: El Fantasma", client: "Film de Legado", year: "2024" },
        { id: "03", title: "Vogue: Sintético", client: "Editorial Digital", year: "2024" }
      ]
    },
    footer: {
      title_main: "Déjanos",
      title_sub: "Crearlo.",
      contact: "Iniciar Proyecto",
      email: "contact@byronjeanbaker.studio",
      loc: "Madrid · Miami · Shanghái",
      box_text: "Somos los arquitectos\nde lo imposible."
    }
  }
};

/* --- UTILITY HOOKS --- */
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
      clearTimeout(timer);
    };
  }, [ref, options]);
  return [ref, isVisible];
};

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  return (
    <div ref={ref} className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

/* --- COMPONENTS --- */

const GridLines = () => (
  <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-4 md:px-12 opacity-10">
    <div className="w-px h-full bg-white"></div>
    <div className="hidden md:block w-px h-full bg-white"></div>
    <div className="hidden md:block w-px h-full bg-white"></div>
    <div className="w-px h-full bg-white"></div>
  </div>
);

const LanguageSwitch = ({ lang, setLang }) => (
  <button 
    onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
    className="flex items-center gap-2 text-[10px] tracking-widest font-mono uppercase hover:text-white transition-colors border border-white/20 px-3 py-1"
  >
    <Globe size={10} />
    <span className={lang === 'en' ? 'text-white' : 'text-neutral-500'}>EN</span>
    <span className="text-neutral-700">/</span>
    <span className={lang === 'es' ? 'text-white' : 'text-neutral-500'}>ES</span>
  </button>
);

const Navbar = ({ lang, setLang }) => {
  const t = content[lang].nav;

  return (
    <nav className="fixed top-0 w-full z-50 mix-blend-difference text-white py-6 md:py-8 px-4 md:px-12 flex justify-between items-start">
      <div className="flex flex-col gap-1">
        <a href="/" className="text-xl font-bold tracking-tighter uppercase font-sans leading-none block">Byron Jean Baker</a>
        <span className="text-[9px] font-mono tracking-widest uppercase opacity-70">Luxury Cinematography Studio</span>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <LanguageSwitch lang={lang} setLang={setLang} />
        <a 
          href="#contact" 
          className="text-[10px] font-mono uppercase tracking-widest hover:bg-white hover:text-black px-4 py-2 border border-white/20 transition-colors"
        >
          {t.contact}
        </a>
      </div>

      {/* COMMENTED FOR FUTURE RESTORATION */}
      {/* <div className="hidden md:flex flex-col items-end gap-2">
        <div className="flex gap-8 text-[10px] font-mono uppercase tracking-widest">
           {[t.work, t.philosophy, t.services].map(item => (
             <a key={item} href={`#${item.toLowerCase()}`} className="hover:underline decoration-1 underline-offset-4">{item}</a>
           ))}
        </div>
        <LanguageSwitch lang={lang} setLang={setLang} />
      </div> */}

      {/* Mobile menu temporarily disabled */}
    </nav>
  );
};

const Hero = ({ lang }) => {
  const t = content[lang].hero;
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const videoSrc = 'https://pub-5d9ed0f82d94401c8dee08895d854a6d.r2.dev/hero/videoWeb.mp4';

  return (
    <section className="relative min-h-screen flex flex-col pt-32 pb-12 px-4 md:px-12 border-b border-white/10">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/cover.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={videoSrc}
      />
      
      {/* Sound Toggle Button */}
      <button
        onClick={toggleMute}
        className="fixed bottom-8 right-8 z-50 bg-white/10 hover:bg-white/20 border border-white/20 p-4 transition-colors backdrop-blur-sm"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? <VolumeX size={20} className="text-white" /> : <Volume2 size={20} className="text-white" />}
      </button>
      <div className="flex-grow flex flex-col justify-center relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-3 border border-white/20 px-4 py-2 rounded-none mb-2 md:mb-12">
            <Square size={8} className="fill-white" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em]">
              {lang === 'en' ? (
                <>EST. <span style={{color: '#FFDB6D'}}>2025</span> / MADRID · MIAMI · SHANGHAI</>
              ) : (
                <>EST. <span style={{color: '#FFDB6D'}}>2025</span> / MADRID · MIAMI · SHANGHÁI</>
              )}
            </span>
          </div>
        </Reveal>
        
        <Reveal delay={200}>
          <h1 className="text-[12vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter text-white uppercase">
            {lang === 'en' ? (
              <>ALGORITHMIC<br/><span style={{color: '#E8734E'}}>CINEMA</span> STUDIO</>
            ) : (
              <>ESTUDIO DE<br/><span style={{color: '#E8734E'}}>CINE</span> ALGORÍTMICO</>
            )}
          </h1>
        </Reveal>
        <Reveal delay={400}>
            <p className="max-w-md text-sm md:text-base font-mono text-neutral-100 leading-relaxed uppercase mt-8">
               <span className="text-white block mb-2">
                 {lang === 'en' ? (
                   <><span style={{color: '#A4C997'}}>001</span>. The Product</>
                 ) : (
                   <><span style={{color: '#E8734E'}}>001</span>. El Producto</>
                 )}
               </span>
               {lang === 'en' ? (
                 <>We engineer <span style={{color: '#FFDB6D'}}>Hollywood</span>-grade cinematography without a single physical camera. Your <span style={{color: '#E8734E'}}>impossible</span> ideas, finally rendered in <span style={{color: '#A4C997'}}>cinema-grade</span> reality.</>
               ) : (
                 <>Ingeniería cinematográfica nivel <span style={{color: '#FFDB6D'}}>Hollywood</span> sin usar una sola cámara física. Tus ideas <span style={{color: '#E8734E'}}>imposibles</span>, por fin renderizadas en realidad <span style={{color: '#A4C997'}}>cinematográfica</span>.</>
               )}
            </p>
        </Reveal>
      </div>

      {/* CTA moved to nav - no longer needed here */}
      {/* <div className="flex justify-end items-end relative z-10">
         <Reveal delay={800}>
            <a href="#contact" className="text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black px-6 py-3 border border-white/20 transition-colors">
               {t.cta}
            </a>
         </Reveal>
      </div> */}
    </section>
  );
};

const Manifesto = ({ lang }) => {
  const t = content[lang].manifesto;
  return (
    <section id="philosophy" className="py-12 md:py-32 px-4 md:px-12 border-b border-white/10 relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
           <Reveal>
             <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4 flex items-center gap-2">
               <Circle size={8} className="fill-neutral-500" />
               {t.header}
             </h2>
             <div className="w-full h-px bg-white/20 my-8"></div>
             <p className="text-4xl font-serif italic text-white leading-tight">
               "{t.quote}"
             </p>
             <p className="text-[10px] font-mono uppercase mt-4 text-neutral-500">— Le Corbusier (Spirit)</p>
           </Reveal>
        </div>
        <div className="md:col-span-8 flex flex-col justify-end">
           <Reveal delay={200}>
             <div className="border-l-4 border-white pl-6 mb-12">
               <h3 className="text-4xl md:text-6xl font-serif italic text-white leading-tight">
                 {lang === 'en' ? (
                   <>Form Follows <span style={{color: '#E8734E'}}>Fiction</span>.</>
                 ) : (
                   <>La Forma Sigue a la <span style={{color: '#E8734E'}}>Ficción</span>.</>
                 )}
               </h3>
             </div>
             <p className="text-2xl md:text-5xl font-bold uppercase tracking-tight text-white mb-8 leading-none">
               {lang === 'en' ? (
                 <>Traditional production is slow, expensive, and bound by <span style={{color: '#FFDB6D'}}>gravity</span>. We are <span style={{color: '#A4C997'}}>not</span>.</>
               ) : (
                 <>La producción tradicional es lenta, cara y está atada a la <span style={{color: '#FFDB6D'}}>gravedad</span>. Nosotros <span style={{color: '#A4C997'}}>no</span>.</>
               )}
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8">
               <p className="text-neutral-400 font-sans text-lg leading-relaxed">
                 {lang === 'en' ? (
                   <>Byron Jean Baker combines director-level storytelling with proprietary <span style={{color: '#A4C997'}}>AI</span> models to produce high-end commercials, fashion films, and brand universes that were previously <span style={{color: '#FFDB6D'}}>unfilmable</span>.</>
                 ) : (
                   <>Byron Jean Baker combina narrativa de director de cine con modelos de <span style={{color: '#A4C997'}}>IA</span> propietarios para producir spots de alta gama, fashion films y universos de marca que antes eran <span style={{color: '#FFDB6D'}}>infilmables</span>.</>
                 )}
               </p>
               <div className="bg-neutral-900 p-6 font-mono text-xs text-neutral-500 space-y-2 uppercase">
                  <div className="flex justify-between"><span>{t.specs.s1}</span><span style={{color: '#FFDB6D'}}>{t.specs.v1}</span></div>
                  <div className="flex justify-between"><span>{t.specs.s2}</span><span style={{color: '#A4C997'}}>{t.specs.v2}</span></div>
                  <div className="flex justify-between"><span>{t.specs.s3}</span><span style={{color: '#FFDB6D'}}>{t.specs.v3}</span></div>
                  <div className="flex justify-between"><span>{lang === 'en' ? 'Output' : 'Resolución'}</span><span style={{color: '#A4C997'}}>Up to 4K</span></div>
               </div>
             </div>
           </Reveal>
        </div>
      </div>
    </section>
  );
};

const VideoPortfolio = () => {
  const categories = [
    {
      title: 'Haute Visions',
      subtitle: 'Fashion Films',
      description: {
        text: 'Movement as architecture. Fabric defying physics. The intersection of haute couture and computational vision.',
        highlight1: 'physics',
        highlight2: 'computational',
        color1: '#E8734E',
        color2: '#A4C997'
      },
      videos: [
        { id: 6, src: '/videos/fashion-new-01.mp4', title: 'Catwalk 01' },
        { id: 7, src: '/videos/fashion-new-03.mp4', title: 'Futuristic' },
        { id: 8, src: '/videos/fashion-new-02.mp4', title: 'Catwalk 02' },
        { id: 9, src: '/videos/fashion-new-04.mp4', title: 'Robots' },
        { id: 10, src: '/videos/fashion-new-05.mp4', title: 'Frozen' }
      ],
      textCardPosition: 4
    },
    {
      title: 'Eastern Elegance',
      subtitle: 'Nocturnal Fields',
      description: {
        text: 'Silk meets wheat under moonlight. Eastern grace flows through golden fields where ancient elegance confronts pastoral stillness.',
        highlight1: 'moonlight',
        highlight2: 'elegance',
        color1: '#FFDB6D',
        color2: '#A4C997'
      },
      videos: [
        { id: 26, src: '/videos/fashion-wheat-01.mp4', title: 'Wheat 01' },
        { id: 27, src: '/videos/fashion-wheat-02.mp4', title: 'Wheat 02' },
        { id: 28, src: '/videos/fashion-wheat-03.mp4', title: 'Wheat 03' },
        { id: 29, src: '/videos/fashion-wheat-04.mp4', title: 'Wheat 04' },
        { id: 30, src: '/videos/fashion-wheat-05.mp4', title: 'Wheat 05' }
      ],
      textCardPosition: 2
    },
    {
      title: 'Mythic Forms',
      subtitle: 'Subaquatic Entities',
      description: {
        text: 'Pre-Columbian deities reimagined beneath impossible oceans. Scales, feathers, and digital mythology converge in depths beyond reach.',
        highlight1: 'deities',
        highlight2: 'digital',
        color1: '#E8734E',
        color2: '#FFDB6D'
      },
      videos: [
        { id: 11, src: '/videos/creature-feathers.mp4', title: 'Feathers' },
        { id: 12, src: '/videos/creature-tentacles-01.mp4', title: 'Tentacles 01' },
        { id: 13, src: '/videos/creature-tentacles-02.mp4', title: 'Tentacles 02' },
        { id: 14, src: '/videos/creature-aztec.mp4', title: 'Aztec' },
        { id: 15, src: '/videos/creature-bubbles.mp4', title: 'Bubbles' }
      ],
      textCardPosition: 1
    },
    {
      title: 'Abyssal Portraits',
      subtitle: 'Cephalopod Hybrids',
      description: {
        text: 'Human forms fused with deep-sea intelligence. Hyperrealistic textures where flesh becomes tentacle, consciousness becomes collective.',
        highlight1: 'intelligence',
        highlight2: 'consciousness',
        color1: '#A4C997',
        color2: '#E8734E'
      },
      videos: [
        { id: 16, src: '/videos/octopus-man-01.mp4', title: 'Octopus Man 01' },
        { id: 17, src: '/videos/octopus-man-02.mp4', title: 'Octopus Man 02' },
        { id: 18, src: '/videos/octopus-man-03.mp4', title: 'Octopus Man 03' },
        { id: 19, src: '/videos/octopus-man-04.mp4', title: 'Octopus Man 04' },
        { id: 20, src: '/videos/octopus-man-05.mp4', title: 'Octopus Man 05' }
      ],
      textCardPosition: 0
    },
    {
      title: 'Sacred Aesthetics',
      subtitle: 'Religious Iconography',
      description: {
        text: 'Ceremonial narratives where divinity meets dust. Each frame echoes ancient rituals reimagined through algorithmic devotion.',
        highlight1: 'divinity',
        highlight2: 'algorithmic',
        color1: '#FFDB6D',
        color2: '#A4C997'
      },
      videos: [
        { id: 1, src: '/videos/desert-night-01.mp4', title: 'Desert Night 01' },
        { id: 2, src: '/videos/desert-night-02.mp4', title: 'Desert Night 02' },
        { id: 3, src: '/videos/desert-night-03.mp4', title: 'Desert Night 03' },
        { id: 4, src: '/videos/desert-closeup.mp4', title: 'Desert Closeup' },
        { id: 5, src: '/videos/white-dust.mp4', title: 'White Dust' }
      ],
      textCardPosition: 2
    },
    {
      title: 'Red Queens',
      subtitle: 'Baroque Madonnas',
      description: {
        text: 'Divine figures crowned in roses. Baroque splendor meets contemporary vision where sacred iconography blooms in crimson devotion.',
        highlight1: 'roses',
        highlight2: 'crimson',
        color1: '#E8734E',
        color2: '#FFDB6D'
      },
      videos: [
        { id: 21, src: '/videos/red-queen-01.mp4', title: 'Red Queen 01' },
        { id: 22, src: '/videos/red-queen-02.mp4', title: 'Red Queen 02' },
        { id: 23, src: '/videos/red-queen-03.mp4', title: 'Red Queen 03' },
        { id: 24, src: '/videos/red-queen-04.mp4', title: 'Red Queen 04' },
        { id: 25, src: '/videos/red-queen-05.mp4', title: 'Red Queen 05' }
      ],
      textCardPosition: 3
    }
  ];

  // Insert text card at random position
  const getItemsWithTextCard = (category) => {
    const items = [...category.videos];
    items.splice(category.textCardPosition, 0, { 
      id: 'text-card', 
      type: 'text',
      description: category.description 
    });
    return items;
  };

  return (
    <section className="py-12 md:py-32 px-4 md:px-12 border-b border-white/10">
      {categories.map((category, catIndex) => (
        <div key={catIndex} className={catIndex > 0 ? 'mt-32' : ''}>
          <Reveal>
            <div className="relative z-10 mb-4">
              <span className="text-sm font-sans font-bold uppercase tracking-widest text-neutral-500 block mb-2 pl-4">
                {category.subtitle}
              </span>
              <h3 className="text-base font-mono uppercase tracking-widest text-white border-l-2 border-white pl-4">
                {category.title.split(' ')[0]} <span style={{color: '#FFDB6D'}}>{category.title.split(' ')[1]}</span>
              </h3>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-black">
            {getItemsWithTextCard(category).map((item, index) => (
              <Reveal key={item.id} delay={index * 100}>
                {item.type === 'text' ? (
                  <div className="relative bg-neutral-950 border-none p-8 md:p-12 flex flex-col justify-center aspect-video">
                    <div className="space-y-6">
                      <div className="w-12 h-px bg-white/20"></div>
                      <p className="text-sm md:text-base font-mono text-neutral-500 leading-relaxed uppercase">
                        {item.description.text.split(item.description.highlight1)[0]}
                        <span style={{color: item.description.color1}}>{item.description.highlight1}</span>
                        {item.description.text.split(item.description.highlight1)[1].split(item.description.highlight2)[0]}
                        <span style={{color: item.description.color2}}>{item.description.highlight2}</span>
                        {item.description.text.split(item.description.highlight2)[1]}
                      </p>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.description.color1}}></div>
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.description.color2}}></div>
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                      </div>
                    </div>
                  </div>
                ) : (
            <div className="relative group cursor-pointer overflow-hidden bg-black aspect-video">
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-70"
              />
            </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

const Work = ({ lang }) => {
  const t = content[lang].work;
  return (
    <section id="work" className="py-12 md:py-16 px-4 md:px-12 border-b border-white/10">
      <Reveal>
        <div className="relative z-10 flex justify-between items-end mb-16">
           <h3 className="text-xl font-mono uppercase tracking-widest text-white border-l-2 border-white pl-4">
             {t.title}
           </h3>
           <span className="text-xs font-mono text-neutral-500">{t.vol}</span>
        </div>
      </Reveal>

      {/* Copy with colors */}
      <div className="mb-16">
        <Reveal delay={200}>
          <p className="text-base md:text-lg font-mono text-neutral-500 leading-relaxed uppercase max-w-4xl">
            {lang === 'en' ? (
              <><span style={{color: '#A4C997'}}>15 years</span> directing campaigns for <span style={{color: '#FFDB6D'}}>global brands</span> across 6 markets. Full-spectrum production from concept to delivery: <span style={{color: '#E8734E'}}>fashion films</span>, music industry, product launches, festival visuals, broadcast content. <span style={{color: '#E8734E'}}>Stadium concerts</span>. <span style={{color: '#E8734E'}}>National broadcast</span>. City installations.</>
            ) : (
              <><span style={{color: '#A4C997'}}>15 años</span> dirigiendo campañas para <span style={{color: '#FFDB6D'}}>marcas globales</span> en 6 mercados. Producción integral desde concepto hasta entrega: <span style={{color: '#E8734E'}}>fashion films</span>, industria musical, lanzamientos de producto, visuales para festivales, contenido broadcast. <span style={{color: '#E8734E'}}>Conciertos en estadios</span>. <span style={{color: '#E8734E'}}>TV nacional</span>. Instalaciones urbanas.</>
            )}
          </p>
          <p className="text-xs font-mono text-neutral-600 uppercase tracking-widest mt-6">
            {t.regions}
          </p>
          <p className="text-xs font-mono text-neutral-600 uppercase tracking-widest mt-3">
            {t.roles}
          </p>
        </Reveal>
      </div>

      {/* Logo Strip - Two Rows */}
      <Reveal delay={400}>
        <div className="border-t border-white/10 pt-16 space-y-12">
          {/* New Row - Top - 3 Logos Centered */}
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
            <img src="/thumbnails/Universal Music Group_idcVSa6kKY_1.png" alt="Universal Music" className="h-20 md:h-24 lg:h-28 w-auto" style={{filter: 'grayscale(1) opacity(0.9)'}} />
            <img src="/thumbnails/BMG_id-8zctsKG_0.png" alt="BMG Music" className="h-16 md:h-20 lg:h-24 w-auto" style={{filter: 'grayscale(1) opacity(0.7)'}} />
            <img src="/thumbnails/idLPpgqNbl_logos.png" alt="EMI Music" className="h-16 md:h-20 lg:h-24 w-auto" style={{filter: 'grayscale(1) opacity(0.7)'}} />
          </div>

          {/* Existing Row - Bottom - 5 Logos */}
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
            <img src="/thumbnails/Warner Music Group_idMFrEs0Gz_0.png" alt="Warner Music" className="h-16 md:h-20 lg:h-24 w-auto" style={{filter: 'grayscale(1) opacity(0.7)'}} />
            <img src="/thumbnails/Budweiser_Logo_1.png" alt="Budweiser" className="h-14 md:h-16 lg:h-20 w-auto" style={{filter: 'grayscale(1) opacity(0.7)'}} />
            <img src="/thumbnails/Sony Music_Logo_1.png" alt="Sony Music" className="h-20 md:h-24 lg:h-28 w-auto" style={{filter: 'grayscale(1) opacity(0.7)'}} />
            <img src="/thumbnails/bluegirl.png" alt="Blue Girl" className="h-20 md:h-24 lg:h-28 w-auto" style={{filter: 'grayscale(1) opacity(0.7)'}} />
            <img src="/thumbnails/Corona USA_id4rGQj9f6_0.png" alt="Corona" className="h-16 md:h-20 lg:h-24 w-auto" style={{filter: 'grayscale(1) opacity(0.7)'}} />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

const Footer = ({ lang }) => {
  const t = content[lang].footer;
  return (
    <footer id="contact" className="py-24 px-4 md:px-12 bg-neutral-950">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        {/* Left Column - Big Statement */}
        <div className="flex items-center">
           <Reveal>
             <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.8]">
               {lang === 'en' ? (
                 <>WE ARE THE<br/><span style={{color: '#A4C997'}}>ARCHITECTS</span><br/>OF THE <span style={{color: '#E8734E'}}>IMPOSSIBLE</span>.</>
               ) : (
                 <>SOMOS LOS<br/><span style={{color: '#A4C997'}}>ARQUITECTOS</span><br/>DE LO <span style={{color: '#FFDB6D'}}>IMPOSIBLE</span>.</>
               )}
             </h2>
           </Reveal>
        </div>

        {/* Right Column - Contact Info in 2 sub-columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Personal / Key People */}
           <Reveal delay={200}>
              <div>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-8 leading-none">
                  {lang === 'en' ? (
                    <>LET US <span style={{color: '#E8734E'}}>BUILD</span> IT.</>
                  ) : (
                    <>DÉJANOS <span style={{color: '#E8734E'}}>CREARLO</span>.</>
                  )}
                </h3>

                {/* Key People */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest mb-2" style={{color: '#A4C997'}}>
                      CEO
                    </h4>
                    <a href="mailto:bjb@byronjeanbaker.studio" className="block text-sm font-mono text-white hover:text-[#E8734E] transition-colors">
                      bjb@byronjeanbaker.studio
                    </a>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest mb-2" style={{color: '#A4C997'}}>
                      {lang === 'en' ? 'Production Designer / Creative Director' : 'Diseñador Producción / Director Creativo'}
                    </h4>
                    <a href="mailto:juan.marrero@byronjeanbaker.studio" className="block text-sm font-mono text-white hover:text-[#E8734E] transition-colors">
                      juan.marrero@byronjeanbaker.studio
                    </a>
                  </div>
                </div>
              </div>
           </Reveal>

           {/* All Services - Only 2 Emails */}
           <Reveal delay={400}>
              <div className="space-y-8">
                {/* Main Contact - 2 Emails Only */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest mb-4" style={{color: '#FFDB6D'}}>
                    {lang === 'en' ? 'All Inquiries' : 'Todas las Consultas'}
                  </h4>
                  <div className="space-y-4 border-l-2 border-white/20 pl-4">
                    <div>
                      <a href="mailto:contact@byronjeanbaker.studio" className="block text-sm font-mono text-white hover:text-[#E8734E] transition-colors mb-2">
                        contact@byronjeanbaker.studio
                      </a>
                      <p className="text-[9px] font-mono uppercase text-neutral-600 leading-relaxed">
                        {lang === 'en' ? 'General Inquiries · First Contact' : 'Consultas Generales · Primer Contacto'}
                      </p>
                    </div>
                    <div>
                      <a href="mailto:projects@byronjeanbaker.studio" className="block text-sm font-mono text-white hover:text-[#E8734E] transition-colors mb-2">
                        projects@byronjeanbaker.studio
                      </a>
                      <p className="text-[9px] font-mono uppercase text-neutral-600 leading-relaxed">
                        {lang === 'en' ? 'New Commissions · Pitch Briefings' : 'Nuevos Encargos · Briefings'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Departments */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest mb-4" style={{color: '#A4C997'}}>
                    {lang === 'en' ? 'Departments' : 'Departamentos'}
                  </h4>
                  <div className="text-[10px] font-mono uppercase text-neutral-600 leading-loose space-y-1">
                    <p>{lang === 'en' ? 'Commercials · Brand Campaigns' : 'Comerciales · Campañas de Marca'}</p>
                    <p>{lang === 'en' ? 'Fashion Films · Editorial Visuals' : 'Fashion Films · Visuales Editoriales'}</p>
                    <p>{lang === 'en' ? 'Music Videos · Artist Narratives' : 'Videos Musicales · Narrativas Artísticas'}</p>
                    <p>{lang === 'en' ? 'Cinema · Experimental Films' : 'Cine · Films Experimentales'}</p>
                  </div>
                </div>

                {/* Operations */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest mb-4" style={{color: '#A4C997'}}>
                    {lang === 'en' ? 'Operations' : 'Operaciones'}
                  </h4>
                  <div className="text-[10px] font-mono uppercase text-neutral-600 leading-loose space-y-1">
                    <p>{lang === 'en' ? 'Production · Full-Service Execution' : 'Producción · Ejecución Integral'}</p>
                    <p>{lang === 'en' ? 'Press & Media · Materials' : 'Prensa & Medios · Materiales'}</p>
                  </div>
                </div>
              </div>
           </Reveal>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between text-xs font-mono uppercase text-neutral-500 tracking-widest gap-2">
          <span>{t.loc}</span>
          <div className="flex gap-4">
            <a href="/legal/privacy.html" className="hover:text-white transition-colors">Privacy</a>
            <span>© 2025 BJB</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [lang, setLang] = useState('en');

  return (
    <div className="bg-black min-h-screen text-white font-sans antialiased overflow-x-hidden selection:bg-white selection:text-black">
      <GridLines />
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Manifesto lang={lang} />
      <VideoPortfolio />
      <Work lang={lang} />
      <Footer lang={lang} />
    </div>
  );
};

export default App;
