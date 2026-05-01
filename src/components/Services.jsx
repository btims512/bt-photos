import { useState } from 'react'
import { Camera, Mic2, Building2, Baby } from 'lucide-react'

const services = [
  {
    icon: <Camera size={28} strokeWidth={1.25} />,
    title: 'Portrait Sessions',
    backTitle: 'Portrait Pricing',
    desc: 'Individuals, couples, and families — on location, in studio, or I\'ll come to you. Headshots available for professionals and creatives.',
    tiers: [
      { label: 'Mini', duration: '', price: '$150' },
      { label: 'Headshots', duration: '', price: '$150' },
      { label: 'Standard', duration: '', price: '$250' },
      { label: 'Extended', duration: '', price: '$400' },
    ],
    details: 'Starting at $150',
  },
  {
    icon: <Mic2 size={28} strokeWidth={1.25} />,
    title: 'Events',
    backTitle: 'Event Pricing',
    desc: 'Live events, performances, and entertainment. From comedy clubs to concert stages — capturing energy and the moments that can\'t be recreated.',
    tiers: [
      { label: 'Solo Artist / Comedian', duration: '', price: '$125' },
      { label: 'Band / Group Act', duration: '', price: '$250' },
      { label: 'Full Show / Festival', duration: '', price: '$400' },
    ],
    details: 'Starting at $100',
  },
  {
    icon: <Baby size={28} strokeWidth={1.25} />,
    title: 'Maternity & Newborn',
    backTitle: 'Maternity & Newborn Pricing',
    desc: 'Celebrating new life from bump to baby. Whether you\'re expecting or have just welcomed someone new, these are the moments worth slowing down for.',
    tiers: [
      { label: 'Maternity Session', duration: '', price: '$175' },
      { label: 'Newborn Session', duration: '', price: '$250' },
      { label: 'Maternity + Newborn Bundle', duration: '', price: '$375' },
    ],
    details: 'Starting at $175',
  },
  {
    icon: <Building2 size={28} strokeWidth={1.25} />,
    title: 'Real Estate & Airbnb',
    backTitle: 'Real Estate Pricing',
    desc: 'Interior and exterior photography for homes, rentals, and short-term listings. Available with walkthrough video shot on gimbal.',
    tiers: [
      { label: 'Up to 25 photos', duration: '', price: '$175' },
      { label: 'Up to 50 photos', duration: '', price: '$300' },
      { label: 'Up to 75 photos', duration: '', price: '$400' },
      { label: 'Add Walkthrough Video', duration: '', price: '+$150' },
    ],
    details: 'Starting at $175',
  },
]

function ServiceCard({ icon, title, backTitle, desc, tiers, details }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="cursor-pointer h-[380px] sm:h-[340px] lg:h-[320px]"
      style={{ perspective: '1000px', backgroundColor: '#0a0a0a' }}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        style={{
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.55s ease',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          height: '100%',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 p-8 md:p-10 flex flex-col"
          style={{ backfaceVisibility: 'hidden', backgroundColor: '#0a0a0a' }}
        >
          <div className="text-neutral-400 mb-6">{icon}</div>
          <h3 className="text-white font-light text-lg mb-3">{title}</h3>
          <p className="text-neutral-500 text-sm leading-relaxed flex-1 mb-4">{desc}</p>
          <p className="text-white font-medium text-xs tracking-widest uppercase md:border-t md:border-white/8 md:pt-5 pt-2">
            {details}
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 p-8 md:p-10 flex flex-col"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', backgroundColor: '#0a0a0a' }}
        >
          <h3 className="text-white font-light text-lg mb-6">{backTitle}</h3>
          {tiers ? (
            <div className="flex flex-col gap-4 flex-1">
              {tiers.map(({ label, duration, price }) => (
                <div key={label} className="border-b border-white/8 pb-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-white text-sm font-light">{label}</span>
                    <span className="text-white text-sm">{price}</span>
                  </div>
                  <span className="text-neutral-500 text-xs">{duration}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-neutral-400 text-sm leading-relaxed flex-1">{desc}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-neutral-500 tracking-[0.3em] text-xs uppercase mb-3">What I offer</p>
          <h2
            className="text-white font-light"
            style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Services
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20 mb-8">
          <button
            onClick={scrollToContact}
            className="inline-block border border-white/30 hover:border-white text-white/70 hover:text-white text-xs tracking-[0.25em] uppercase px-10 py-4 transition-all duration-300"
          >
            Book a Session
          </button>
        </div>
      </div>
    </section>
  )
}
