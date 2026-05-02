import { Mail } from 'lucide-react'

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t px-6 md:px-10 py-10" style={{ borderColor: 'rgba(255,255,255,0.07)', backgroundColor: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-neutral-600 text-xs tracking-widest uppercase">
          Benjamin Tims Photography
        </p>
        <div className="flex items-center gap-5">
          <a href="https://instagram.com/benjammin.visuals" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-white transition-colors">
            <InstagramIcon size={16} />
          </a>
          <a href="mailto:info@bentims.com" className="text-neutral-600 hover:text-white transition-colors">
            <Mail size={16} strokeWidth={1.5} />
          </a>
        </div>
        <p className="text-neutral-700 text-xs">
          © {year} BTP Photography LLC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
