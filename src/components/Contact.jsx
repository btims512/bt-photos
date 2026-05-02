import { useState } from 'react'
import { Send, Mail } from 'lucide-react'

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

const initialForm = { name: '', email: '', type: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent'

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate send — wire to a real backend or Formspree later
    setTimeout(() => {
      setStatus('sent')
      setForm(initialForm)
    }, 1200)
  }

  return (
    <section id="contact" className="py-24 md:py-32" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 md:gap-20">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <p className="text-neutral-500 tracking-[0.3em] text-xs uppercase mb-4">Get in touch</p>
          <h2
            className="text-white font-light mb-6"
            style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.15 }}
          >
            Let's create<br />something beautiful
          </h2>
          <div className="w-10 h-px bg-white/30 mb-8" />
          <p className="text-neutral-400 text-sm leading-relaxed mb-10">
            Whether you have a specific vision or are just starting to explore ideas, I'd love
            to hear from you. All inquiries are typically answered within 24 hours.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:info@bentims.com"
              className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors text-sm"
            >
              <Mail size={16} strokeWidth={1.5} />
              info@bentims.com
            </a>
            <a
              href="https://instagram.com/benjammin.visuals"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors text-sm"
            >
              <InstagramIcon size={16} />
              @benjammin.visuals
            </a>
          </div>
        </div>

        {/* Form */}
        <div>
          {status === 'sent' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center mb-6">
                <Send size={20} className="text-white/60" />
              </div>
              <h3 className="text-white text-xl font-light mb-3">Message sent</h3>
              <p className="text-neutral-500 text-sm">I'll be in touch within 24 hours.</p>
              <button
                onClick={() => setStatus(null)}
                className="mt-8 text-xs tracking-widest uppercase text-neutral-500 hover:text-white transition-colors"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-neutral-500 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-white/12 text-white text-sm px-4 py-3 outline-none focus:border-white/40 transition-colors placeholder:text-neutral-700"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-neutral-500 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-white/12 text-white text-sm px-4 py-3 outline-none focus:border-white/40 transition-colors placeholder:text-neutral-700"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-neutral-500 mb-2">
                  Session type
                </label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-white/12 text-white text-sm px-4 py-3 outline-none focus:border-white/40 transition-colors"
                >
                  <option value="">Select a service…</option>
                  <option>Portrait</option>
                  <option>Events</option>
                  <option>Maternity &amp; Newborn</option>
                  <option>Real Estate &amp; Airbnb</option>
                  <option>Pets</option>
                  <option>Landscape</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-neutral-500 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-transparent border border-white/12 text-white text-sm px-4 py-3 outline-none focus:border-white/40 transition-colors placeholder:text-neutral-700 resize-none"
                  placeholder="Tell me about your project…"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white/70 hover:text-white text-xs tracking-[0.25em] uppercase px-8 py-4 transition-all duration-300 disabled:opacity-50"
              >
                {status === 'sending' ? (
                  'Sending…'
                ) : (
                  <>
                    Send message <Send size={13} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
