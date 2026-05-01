import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['Portfolio', 'About', 'Services', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <a
          href="#hero"
          onClick={(e) => handleNav(e, 'hero')}
          className="text-white font-light tracking-[0.2em] text-sm uppercase"
        >
          Benjamin Tims
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={(e) => handleNav(e, l)}
                className="text-neutral-400 hover:text-white text-sm tracking-widest uppercase transition-colors duration-200"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-neutral-300 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '240px' : '0' }}
      >
        <ul
          className="flex flex-col gap-1 px-6 pb-6"
          style={{ backgroundColor: 'rgba(10,10,10,0.97)' }}
        >
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={(e) => handleNav(e, l)}
                className="block py-3 text-neutral-400 hover:text-white text-sm tracking-widest uppercase transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
