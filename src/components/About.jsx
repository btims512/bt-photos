export default function About() {
  return (
    <section id="about" className="py-24 md:py-32" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        {/* Image */}
        <div className="relative">
          <div
            className="absolute -top-4 -left-4 w-full h-full border border-white/8"
            aria-hidden
          />
          <img
            src="https://images.unsplash.com/photo-1452457750107-be84244be097?w=800&q=80"
            alt="Benjamin Tims with camera"
            className="w-full aspect-[4/5] object-cover relative z-10"
          />
        </div>

        {/* Text */}
        <div>
          <p className="text-neutral-500 tracking-[0.3em] text-xs uppercase mb-4">About</p>
          <h2
            className="text-white font-light mb-6"
            style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.15 }}
          >
            Every frame tells<br />a story
          </h2>
          <div className="w-10 h-px bg-white/30 mb-8" />
          <p className="text-neutral-400 leading-relaxed mb-5 text-sm md:text-base">
            Hi, I'm Ben — an Austin-based photographer with ties to the Denver metro area and a lifelong background in music and technology.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-8 text-sm md:text-base">
            I believe in creating images that feel natural, polished, and purposeful — whether I'm capturing a person, a property, or a moment that deserves to be remembered. My work spans portraits, event photography, real estate, landscapes, families, and pets. Available to travel wherever the shot takes me.
          </p>

        </div>
      </div>
    </section>
  )
}
