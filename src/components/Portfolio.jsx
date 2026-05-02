import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { categories, photos } from '../data/portfolio'

const PAGE_SIZE = 18

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [visible, setVisible] = useState(PAGE_SIZE)
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? photos : photos.filter((p) => p.category === active)
  const displayed = filtered.slice(0, visible)

  const handleFilter = (c) => {
    setActive(c)
    setVisible(PAGE_SIZE)
  }

  const lightboxIndex = lightbox ? filtered.findIndex((p) => p.id === lightbox.id) : -1

  const navigate = useCallback((dir) => {
    if (lightboxIndex === -1) return
    const next = (lightboxIndex + dir + filtered.length) % filtered.length
    setLightbox(filtered[next])
  }, [lightboxIndex, filtered])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'ArrowRight') navigate(1)
      if (e.key === 'ArrowLeft') navigate(-1)
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, navigate])

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-14">
        <p className="text-neutral-500 tracking-[0.3em] text-xs uppercase mb-3">Work</p>
        <h2
          className="text-white font-light"
          style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Portfolio
        </h2>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => handleFilter(c)}
            className="px-5 py-2 text-xs tracking-[0.2em] uppercase transition-all duration-200"
            style={{
              border: `1px solid ${active === c ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.12)'}`,
              color: active === c ? '#ffffff' : '#737373',
              backgroundColor: active === c ? 'rgba(255,255,255,0.05)' : 'transparent',
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Masonry-style grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[220px] md:auto-rows-[260px]">
        {displayed.map((photo) => (
          <div
            key={photo.id}
            className={`relative overflow-hidden cursor-pointer group ${photo.span}`}
            onClick={() => setLightbox(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end p-4">
              <span className="text-white text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {photo.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Show more */}
      {visible < filtered.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="px-10 py-3 text-xs tracking-[0.25em] uppercase text-neutral-400 hover:text-white transition-colors duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.15)' }}
          >
            Show more
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
          style={{ backgroundColor: 'rgba(0,0,0,0.95)' }}
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-neutral-400 hover:text-white text-2xl font-light leading-none z-10"
            aria-label="Close"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-6 text-neutral-400 hover:text-white transition-colors z-10"
            aria-label="Previous photo"
            onClick={(e) => { e.stopPropagation(); navigate(-1) }}
          >
            <ChevronLeft size={36} strokeWidth={1.2} />
          </button>

          {/* Next */}
          <button
            className="absolute right-4 md:right-6 text-neutral-400 hover:text-white transition-colors z-10"
            aria-label="Next photo"
            onClick={(e) => { e.stopPropagation(); navigate(1) }}
          >
            <ChevronRight size={36} strokeWidth={1.2} />
          </button>

          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: '90vh' }}
          />

          {/* Counter */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-neutral-500 text-xs tracking-widest">
            {lightboxIndex + 1} / {filtered.length}
          </p>
        </div>
      )}
    </section>
  )
}
