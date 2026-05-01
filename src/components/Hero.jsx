import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

// Unsplash photo IDs for a cycling hero (landscape/portrait photography vibes)
const BG_PHOTOS = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80', // mountain lake
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&q=80', // forest light
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80', // dramatic sky
]

export default function Hero() {
  const imgRef = useRef(null)
  const idxRef = useRef(0)

  useEffect(() => {
    const cycle = setInterval(() => {
      idxRef.current = (idxRef.current + 1) % BG_PHOTOS.length
      if (imgRef.current) {
        imgRef.current.style.opacity = '0'
        setTimeout(() => {
          if (imgRef.current) {
            imgRef.current.src = BG_PHOTOS[idxRef.current]
            imgRef.current.style.opacity = '1'
          }
        }, 600)
      }
    }, 5000)
    return () => clearInterval(cycle)
  }, [])

  const scrollDown = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Background image */}
      <img
        ref={imgRef}
        src={BG_PHOTOS[0]}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity: 1 }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        <h1
          className="text-white font-light leading-none tracking-tight"
          style={{
            fontSize: 'clamp(3rem, 9vw, 8rem)',
            fontFamily: "'Playfair Display', Georgia, serif",
            textShadow: '0 2px 40px rgba(0,0,0,0.5)',
          }}
        >
          Benjamin Tims
        </h1>
        <p className="text-neutral-300 tracking-[0.35em] text-xs md:text-sm uppercase mt-5 font-light">
          Photography
        </p>
        <div
          className="w-16 h-px mt-8 mb-6"
          style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
        />
        <p className="text-neutral-300 text-sm md:text-base font-light tracking-widest uppercase">
          People. Places. Moments.
        </p>

        <a
          href="#portfolio"
          onClick={(e) => { e.preventDefault(); scrollDown() }}
          className="mt-12 inline-flex items-center gap-2 border border-white/30 hover:border-white/70 text-white/70 hover:text-white text-xs tracking-[0.25em] uppercase px-8 py-3 transition-all duration-300"
        >
          View Work
        </a>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollDown}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/80 transition-colors animate-bounce"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  )
}
