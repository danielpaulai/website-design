import ScrollReveal from "./components/ScrollReveal";

const capabilities = [
  {
    number: "01",
    name: "Integrated Arenas",
    body: "Stadiums and pavilions designed as the keystone of the urban districts they sit inside, not the exception to them.",
  },
  {
    number: "02",
    name: "Vertical Districts",
    body: "Mixed-use sky-rise clusters that share a podium, a public realm, and a single architectural language.",
  },
  {
    number: "03",
    name: "Waterfront Masterplans",
    body: "Reclamation-scale projects where the brief is the city's relationship with its own water.",
  },
  {
    number: "04",
    name: "Cultural Landmarks",
    body: "Buildings commissioned to carry meaning for fifty years — concert halls, museums, civic monuments.",
  },
];

const projects = [
  {
    name: "AURELIA ARENA",
    location: "Marina Bay, Singapore",
    year: "2026",
    status: "Under construction",
    image:
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "HELIX PAVILION",
    location: "Dubai Creek, UAE",
    year: "2024",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "MERIDIAN QUARTER",
    location: "Tokyo Bay, Japan",
    year: "2025",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "CAUSEWAY HOUSE",
    location: "Liverpool, UK",
    year: "2023",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80",
  },
];

const stats = [
  { number: "8", label: "Years since founding", body: "Founded 2018 in Singapore." },
  { number: "47", label: "Active commissions", body: "Across four cities and three continents." },
  {
    number: "$4.2B",
    label: "Project value under design",
    body: "Total construction cost of works currently in the studio.",
  },
  { number: "12", label: "Awards", body: "RIBA, AIA, Civic Trust, World Architecture Festival." },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-6 flex justify-between items-center">
        <span className="font-display font-light text-lg tracking-[0.4em]">AURA</span>
        <div className="hidden md:flex gap-10 text-[10px] font-medium tracking-[0.3em] uppercase text-bone/70">
          <a href="#work" className="hover:text-bone transition-colors duration-300">
            Work
          </a>
          <a href="#studio" className="hover:text-bone transition-colors duration-300">
            Studio
          </a>
          <a href="#contact" className="hover:text-bone transition-colors duration-300">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO — VIDEO ONLY, NOTHING ELSE */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          src="/aurelia-arena.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* MANIFESTO */}
      <section className="px-8 md:px-12 py-48 md:py-60 max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <p className="font-display font-light text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight italic">
            We don&apos;t design buildings.
            <br />
            We design how a city remembers itself.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-12 text-sm md:text-base text-bone/60 max-w-2xl mx-auto leading-relaxed">
            Aura Build is an architecture practice working at the scale where civic infrastructure
            becomes cultural symbol. Stadiums woven into vertical districts. Waterfronts that stop
            being edges and start being centers.
          </p>
        </ScrollReveal>
      </section>

      {/* CAPABILITIES */}
      <section className="px-8 md:px-12 py-32 md:py-48 max-w-7xl mx-auto border-t border-bone/10">
        <div className="mb-24">
          <ScrollReveal>
            <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-bone/50">
              01 / Capabilities
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-display font-light text-4xl md:text-6xl mt-4 tracking-tight leading-[0.95]">
              What We Build
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 text-bone/60 max-w-md italic font-display">
              Four disciplines, one architectural language.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.number} delay={i * 100}>
              <div className="flex flex-col gap-4">
                <span className="font-display font-light text-bone/30 text-xl">{cap.number}</span>
                <h3 className="font-display font-light text-3xl md:text-4xl leading-tight">
                  {cap.name}
                </h3>
                <p className="text-bone/60 leading-relaxed text-sm md:text-base max-w-md">
                  {cap.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section
        id="work"
        className="px-8 md:px-12 py-32 md:py-48 max-w-7xl mx-auto border-t border-bone/10"
      >
        <div className="mb-24">
          <ScrollReveal>
            <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-bone/50">
              02 / Selected Work
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-display font-light text-4xl md:text-6xl mt-4 tracking-tight leading-[0.95]">
              Four projects in flight.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 text-bone/60 max-w-md italic font-display">
              A small practice with a small number of commissions at a time.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 100}>
              <article className="group relative aspect-[4/3] overflow-hidden cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-canvas/30 to-transparent" />
                <div className="absolute inset-3 ring-0 group-hover:ring-1 ring-bone/30 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 p-8 flex flex-col gap-2">
                  <h3 className="font-display font-light text-2xl md:text-3xl">{p.name}</h3>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-bone/60">
                    {p.location} · {p.year} · {p.status}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="px-8 md:px-12 py-32 md:py-48 max-w-7xl mx-auto border-t border-bone/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <ScrollReveal>
              <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-bone/50">
                03 / By the Numbers
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-display font-light text-4xl md:text-5xl tracking-tight leading-[1.05]">
                An eight-year practice.
                <br />
                <span className="italic text-bone/60">Built at landmark scale.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-bone/60 max-w-sm leading-relaxed">
                We do not pitch. New work comes by introduction. These are the numbers behind the
                practice today.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <a
                href="#contact"
                className="text-sm tracking-wide text-bone border-b border-brass pb-1 self-start hover:border-bone transition-colors duration-300 mt-4"
              >
                View the studio dossier →
              </a>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 80}>
                <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-12 py-10 border-b border-bone/10 last:border-b-0">
                  <span className="font-display font-light text-6xl md:text-7xl tracking-tighter md:w-48 shrink-0">
                    {s.number}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display font-light text-xl">{s.label}</h3>
                    <p className="text-bone/60 text-sm">{s.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO */}
      <section
        id="studio"
        className="px-8 md:px-12 py-32 md:py-48 max-w-3xl mx-auto border-t border-bone/10"
      >
        <ScrollReveal>
          <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-bone/50 mb-12">
            04 / Studio
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="font-display font-light italic text-bone/85 leading-[1.5] text-xl md:text-2xl mb-8">
            Aura Build was founded in 2018 in Singapore by a small group of architects, structural
            engineers, and urbanists who had spent the preceding decade working at the largest
            practices on the largest projects — and had quietly concluded that scale and meaning
            were drifting apart.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-bone/60 leading-relaxed text-base md:text-lg">
            We work on a small number of commissions at a time. We do not pitch. New work comes by
            introduction. If you are reading this and we should be talking, the contact line is
            below.
          </p>
        </ScrollReveal>
      </section>

      {/* FOOTER / CONTACT */}
      <footer
        id="contact"
        className="px-8 md:px-12 pt-32 pb-12 max-w-7xl mx-auto border-t border-bone/10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-2 md:col-span-1">
            <span className="font-display font-light text-xl tracking-[0.4em] block mb-6">
              AURA
            </span>
            <p className="text-bone/60 text-sm leading-relaxed max-w-xs">
              Architecture for the way a city remembers itself.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-bone/50 mb-2">Work</h4>
            <a href="#" className="text-sm text-bone/70 hover:text-bone transition-colors">
              Aurelia Arena
            </a>
            <a href="#" className="text-sm text-bone/70 hover:text-bone transition-colors">
              Helix Pavilion
            </a>
            <a href="#" className="text-sm text-bone/70 hover:text-bone transition-colors">
              Meridian Quarter
            </a>
            <a href="#" className="text-sm text-bone/70 hover:text-bone transition-colors">
              Causeway House
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-bone/50 mb-2">Studio</h4>
            <a href="#" className="text-sm text-bone/70 hover:text-bone transition-colors">
              About
            </a>
            <a href="#" className="text-sm text-bone/70 hover:text-bone transition-colors">
              Process
            </a>
            <a href="#" className="text-sm text-bone/70 hover:text-bone transition-colors">
              Press
            </a>
            <a href="#" className="text-sm text-bone/70 hover:text-bone transition-colors">
              Careers
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-bone/50 mb-2">Contact</h4>
            <a
              href="mailto:studio@aurabuild.co"
              className="text-sm text-bone/70 hover:text-bone transition-colors"
            >
              studio@aurabuild.co
            </a>
            <p className="text-sm text-bone/70">+65 6 — — — — — —</p>
            <p className="text-sm text-bone/70">Tanjong Pagar, Singapore</p>
          </div>
        </div>

        <div className="pt-8 border-t border-bone/10 flex flex-col md:flex-row gap-3 justify-between text-[10px] tracking-[0.3em] uppercase text-bone/40">
          <span>Aura Build · 2026</span>
          <span>Singapore / Dubai / Tokyo</span>
        </div>
      </footer>
    </main>
  );
}
