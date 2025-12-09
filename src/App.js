import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Menu, X, Globe, ArrowUpRight, Diamond, Circle, Square } from 'lucide-react';

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
      subtitle: "We engineer Hollywood-grade video campaigns without a single physical camera. Your impossible ideas, finally rendered in 8K reality.",
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
      title: "Commissioned Realities",
      vol: "Vol. 2025",
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
      email: "architect@byronjeanbaker.ai",
      loc: "Madrid / Cloud / Void",
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
      subtitle: "Ingeniería de vídeo publicitario nivel Hollywood sin usar una sola cámara física. Tus ideas imposibles, por fin renderizadas en realidad 8K.",
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
      title: "Realidades Comisionadas",
      vol: "Vol. 2025",
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
      email: "architect@byronjeanbaker.ai",
      loc: "Madrid / Nube / Vacío",
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
    if (ref.current) observer.observe(ref.current);
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
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
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang].nav;

  return (
    <nav className="fixed top-0 w-full z-50 mix-blend-difference text-white py-6 md:py-8 px-4 md:px-12 flex justify-between items-start">
      <div className="flex flex-col gap-1">
        <a href="#" className="text-xl font-bold tracking-tighter uppercase font-sans leading-none block">Byron Jean Baker</a>
        <span className="text-[9px] font-mono tracking-widest uppercase opacity-70">Architecture of Dreams</span>
      </div>

      <div className="hidden md:flex flex-col items-end gap-2">
        <div className="flex gap-8 text-[10px] font-mono uppercase tracking-widest">
           {[t.work, t.philosophy, t.services].map(item => (
             <a key={item} href={`#${item.toLowerCase()}`} className="hover:underline decoration-1 underline-offset-4">{item}</a>
           ))}
        </div>
        <LanguageSwitch lang={lang} setLang={setLang} />
      </div>

      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
        {menuOpen ? <X /> : <Menu />}
      </button>

      {/* Full Screen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col justify-center px-12">
           <div className="space-y-8">
             {[t.work, t.philosophy, t.services, t.contact].map(item => (
               <a key={item} href="#" onClick={() => setMenuOpen(false)} className="block text-5xl font-bold tracking-tighter uppercase text-white hover:text-neutral-500 transition-colors">
                 {item}
               </a>
             ))}
           </div>
           <div className="mt-12">
             <LanguageSwitch lang={lang} setLang={setLang} />
           </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ lang }) => {
  const t = content[lang].hero;
  return (
    <section className="relative min-h-screen flex flex-col pt-32 pb-12 px-4 md:px-12 border-b border-white/10">
      <div className="flex-grow flex flex-col justify-center relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-3 border border-white/20 px-4 py-2 rounded-none mb-12">
            <Square size={8} className="fill-white" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em]">
              {lang === 'en' ? (
                <>EST. <span style={{color: '#FFDB6D'}}>2025</span> / MADRID</>
              ) : (
                <>EST. <span style={{color: '#FFDB6D'}}>2025</span> / MADRID</>
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
            <p className="max-w-md text-sm md:text-base font-mono text-neutral-500 leading-relaxed uppercase mt-8">
               <span className="text-white block mb-2">
                 {lang === 'en' ? (
                   <>// <span style={{color: '#A4C997'}}>001</span>. The Product</>
                 ) : (
                   <>// <span style={{color: '#E8734E'}}>001</span>. El Producto</>
                 )}
               </span>
               {lang === 'en' ? (
                 <>We engineer <span style={{color: '#FFDB6D'}}>Hollywood</span>-grade video campaigns without a single physical camera. Your <span style={{color: '#E8734E'}}>impossible</span> ideas, finally rendered in <span style={{color: '#A4C997'}}>8K</span> reality.</>
               ) : (
                 <>Ingeniería de vídeo publicitario nivel <span style={{color: '#FFDB6D'}}>Hollywood</span> sin usar una sola cámara física. Tus ideas <span style={{color: '#E8734E'}}>imposibles</span>, por fin renderizadas en realidad <span style={{color: '#A4C997'}}>8K</span>.</>
               )}
            </p>
        </Reveal>
      </div>

      <div className="flex justify-between items-end relative z-10">
         <Reveal delay={600}>
            <div className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center animate-spin-slow">
               <ArrowRight size={24} className="-rotate-45 text-white" />
            </div>
         </Reveal>
         <Reveal delay={800}>
            <a href="#contact" className="text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black px-6 py-3 border border-white/20 transition-colors">
               {t.cta}
            </a>
         </Reveal>
      </div>
    </section>
  );
};

const Manifesto = ({ lang }) => {
  const t = content[lang].manifesto;
  return (
    <section id="philosophy" className="py-32 px-4 md:px-12 border-b border-white/10 relative">
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
      textCardPosition: 2 // Random position 0-5
    },
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
        { id: 6, src: '/videos/fashion-lunar.mp4', title: 'Lunar' },
        { id: 7, src: '/videos/fashion-desert-01.mp4', title: 'Desert 01' },
        { id: 8, src: '/videos/fashion-desert-02.mp4', title: 'Desert 02' },
        { id: 9, src: '/videos/fashion-walking.mp4', title: 'Walking' },
        { id: 10, src: '/videos/fashion-robots.mp4', title: 'Robots' }
      ],
      textCardPosition: 4 // Random position 0-5
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
      textCardPosition: 1 // Random position 0-5
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
      textCardPosition: 0 // Random position 0-5
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
    <section className="py-32 px-4 md:px-12 border-b border-white/10">
      {categories.map((category, catIndex) => (
        <div key={catIndex} className={catIndex > 0 ? 'mt-32' : ''}>
          <Reveal>
            <div className="relative z-10 flex justify-between items-end mb-24">
              <h3 className="text-xl font-mono uppercase tracking-widest text-white border-l-2 border-white pl-4">
                {category.title.split(' ')[0]} <span style={{color: '#FFDB6D'}}>{category.title.split(' ')[1]}</span>
              </h3>
              <span className="text-xs font-mono text-neutral-500">{category.subtitle}</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black">
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
            <div className="relative group cursor-pointer overflow-hidden bg-black">
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover transition-opacity duration-500 group-hover:opacity-70"
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
    <section id="work" className="py-32 px-4 md:px-12 border-b border-white/10">
      <Reveal>
        <h2 className="text-[10vw] font-black tracking-tighter text-neutral-900 uppercase leading-none select-none absolute left-0 right-0 text-center pointer-events-none">
           Archive
        </h2>
        <div className="relative z-10 flex justify-between items-end mb-24">
           <h3 className="text-xl font-mono uppercase tracking-widest text-white border-l-2 border-white pl-4">
             {t.title}
           </h3>
           <span className="text-xs font-mono text-neutral-500">{t.vol}</span>
        </div>
      </Reveal>

      <div className="space-y-0">
        {t.projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 150}>
            <div className="group border-t border-white/20 py-12 md:py-20 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white hover:text-black transition-colors duration-500 cursor-pointer px-4 -mx-4">
               <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 w-full">
                  <span className="font-mono text-xs opacity-50">/{project.id}</span>
                  <h4 className="text-4xl md:text-7xl font-light font-sans tracking-tight uppercase group-hover:italic transition-all">
                    {project.title}
                  </h4>
               </div>
               <div className="mt-4 md:mt-0 flex items-center gap-12 w-full md:w-auto justify-between md:justify-end">
                  <div className="text-xs font-mono uppercase tracking-widest opacity-70 text-right">
                     {project.client} <br/> {project.year}
                  </div>
                  <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>
            </div>
          </Reveal>
        ))}
        <div className="border-t border-white/20"></div>
      </div>
    </section>
  );
};

const Footer = ({ lang }) => {
  const t = content[lang].footer;
  return (
    <footer id="contact" className="py-24 px-4 md:px-12 bg-neutral-950">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
           <Reveal>
             <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-8 leading-[0.8]">
               {lang === 'en' ? (
                 <>{t.title_main}<br/><span className="text-neutral-600"><span style={{color: '#E8734E'}}>Build</span> It.</span></>
               ) : (
                 <>{t.title_main}<br/><span className="text-neutral-600"><span style={{color: '#E8734E'}}>Crear</span>lo.</span></>
               )}
             </h2>
           </Reveal>
        </div>
        <div className="flex flex-col justify-between">
           <Reveal delay={200}>
              <div className="space-y-8">
                 <a href={`mailto:${t.email}`} className="block text-xl md:text-2xl font-mono text-white hover:text-neutral-400 border-b border-white/20 pb-4">
                   {t.email}
                 </a>
                 <div className="flex justify-between text-xs font-mono uppercase text-neutral-500 tracking-widest">
                    <span>{t.loc}</span>
                    <span>© 2025 BJB</span>
                 </div>
              </div>
           </Reveal>
           <Reveal delay={400}>
              <div className="mt-12 flex gap-4">
                 <div className="w-full h-32 bg-neutral-900 border border-white/10 flex items-center justify-center p-4 text-center">
                    <span className="text-[10px] font-mono text-neutral-600 uppercase whitespace-pre-line">
                       {lang === 'en' ? (
                         <>We are the <span style={{color: '#A4C997'}}>architects</span><br/>of the <span style={{color: '#E8734E'}}>impossible</span>.</>
                       ) : (
                         <>Somos los <span style={{color: '#A4C997'}}>arquitectos</span><br/>de lo <span style={{color: '#FFDB6D'}}>imposible</span>.</>
                       )}
                    </span>
                 </div>
              </div>
           </Reveal>
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
