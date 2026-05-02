import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import btp75 from '../assets/Landscapes/btp-75.jpg'
import btp24 from '../assets/Landscapes/btp-24-Edit-2.jpg'
import btp691 from '../assets/Landscapes/btp-69-1.jpg'
import btp71 from '../assets/Portraits/btp-71.jpg'

const BG_PHOTOS = [
  { src: btp75,  position: 'center center' },
  { src: btp24,  position: 'center center' },
  { src: btp691, position: 'center center' },
  { src: btp71,  position: '70% center' },
]

export default function Hero() {
  const imgRef = useRef(null)
  const idxRef = useRef(0)
  const intervalRef = useRef(null)

  const goTo = (newIdx) => {
    idxRef.current = (newIdx + BG_PHOTOS.length) % BG_PHOTOS.length
    if (imgRef.current) {
      imgRef.current.style.opacity = '0'
      setTimeout(() => {
        if (imgRef.current) {
          const { src, position } = BG_PHOTOS[idxRef.current]
          imgRef.current.src = src
          imgRef.current.style.objectPosition = position
        }
      }, 750)
      setTimeout(() => {
        if (imgRef.current) imgRef.current.style.opacity = '1'
      }, 800)
    }
  }

  const resetCycle = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => goTo(idxRef.current + 1), 5000)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => goTo(idxRef.current + 1), 5000)

    const handleKey = (e) => {
      if (e.key === 'ArrowRight') { goTo(idxRef.current + 1); resetCycle() }
      if (e.key === 'ArrowLeft') { goTo(idxRef.current - 1); resetCycle() }
    }

    window.addEventListener('keydown', handleKey)
    return () => {
      clearInterval(intervalRef.current)
      window.removeEventListener('keydown', handleKey)
    }
  }, [])

  const scrollDown = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{ backgroundColor: '#000' }}
    >
      {/* Background image */}
      <img
        ref={imgRef}
        src={BG_PHOTOS[0].src}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity: 1, objectPosition: BG_PHOTOS[0].position }}
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
