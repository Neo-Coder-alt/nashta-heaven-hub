import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/dr-saeed-logo.webp.asset.json";
import heroImg from "@/assets/clinic-hero.jpg";
import dentalImg from "@/assets/service-dental.jpg";
import aestheticImg from "@/assets/service-aesthetic.jpg";
import physioImg from "@/assets/service-physio.jpg";
import {
  MapPin, Phone, Clock, Star, Calendar, MessageCircle, ShieldCheck,
  Sparkles, Activity, Stethoscope, Award, HeartPulse, Users, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const PHONE = "0343 8234969";
const PHONE_TEL = "+923438234969";
const WHATSAPP = "923438234969";
const ADDRESS = "3 B 2, 1A Nazimabad Rd #3, Block 3 Nazimabad, Karachi 74600";

const categories = [
  {
    id: "dental",
    icon: Stethoscope,
    title: "Dental & Implants",
    image: dentalImg,
    tagline: "Modern dentistry from routine care to full smile makeovers.",
    services: [
      "Dental Consultation & X-rays", "Scaling & Polishing", "Teeth Whitening",
      "Tooth-Colored Fillings", "Root Canal Treatment (RCT)", "Single Visit RCT",
      "Dental Implants", "Zirconia & E-Max Crowns", "PFM Crowns & Bridges",
      "Metallic / Ceramic / Self-Ligating Braces", "Clear Aligners (Invisible Braces)",
      "Complete, Partial & Flexible Dentures", "Wisdom & Surgical Extractions",
      "Pediatric Dentistry", "Fluoride & Fissure Sealants",
      "Smile Makeover & Hollywood Smile", "Veneers", "Gum Treatment & Contouring",
      "Night Guards & Sports Guards", "Emergency Dental Care",
    ],
  },
  {
    id: "aesthetics",
    icon: Sparkles,
    title: "Aesthetics & Skin",
    image: aestheticImg,
    tagline: "Advanced skin, hair and cosmetic care by trained clinicians.",
    services: [
      "Hydrafacial", "Face PRP", "Microneedling", "BB Glow", "Chemical Peels",
      "Hair PRP", "Hair Exosomes", "Mesotherapy",
      "Anti-Wrinkle (Botox)", "Dermal Fillers", "Thread Lifting",
      "Dark Circles Treatment", "Melasma & Acne Treatment", "Skin Boosters",
      "Whitening Drips & Glutathione", "NAD Therapy", "IV Immunity Drips",
      "Mole & Warts Removal", "Scar Subcision", "Fat Dissolving Injections",
      "Weight Loss Treatment", "Stretch Marks Reduction",
      "Jawline & Chin Contouring", "Lip Enhancement",
      "Non-Surgical Nose Shaping (Liquid Rhinoplasty)",
    ],
  },
  {
    id: "physio",
    icon: Activity,
    title: "Physiotherapy & Rehab",
    image: physioImg,
    tagline: "Evidence-based physiotherapy for pain, injury and recovery.",
    services: [
      "Back, Neck & Sciatica Pain", "Slip Disc Treatment", "Spondylosis Treatment",
      "Frozen Shoulder", "Knee & Hip Pain", "Arthritis Management",
      "Sports Injury Rehabilitation", "Post-Fracture / Post-Surgical Rehab",
      "Plantar Fasciitis & Heel Pain", "Tennis & Golfer's Elbow",
      "Ligament & Muscle Injury", "Joint Mobilization", "Dry Needling",
      "Electrotherapy (IFT, TENS, Ultrasound)", "Manual Therapy", "Cupping",
      "Posture Correction & Body Alignment", "Balance & Gait Training",
      "Stroke & Neurological Rehab", "Facial Palsy Rehab",
      "Pediatric & Geriatric Physio", "Women's Health & Postpartum Physio",
      "Chronic Pain Management", "Home Exercise Programs",
    ],
  },
];

const reviews = [
  { name: "Ayesha K.", text: "Great treatment. The clinic is very clean and well-maintained. Charges are reasonable. Highly recommended!", stars: 5 },
  { name: "Muhammad R.", text: "I have taken scaling treatment from Dr. Arfa Saeed. Very satisfied — she did it in a truly professional way. Highly recommended.", stars: 5 },
  { name: "Sana F.", text: "If you want peaceful and stress-free dental treatment, this is the place. Staff is polite and caring.", stars: 5 },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Nav />
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <Reviews />
      <Appointment />
      <Visit />
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <div className="bg-[color:var(--navy)] text-white text-xs">
      <div className="mx-auto max-w-6xl px-5 h-9 flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Open daily · Closes 10 PM</span>
          <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Nazimabad, Karachi</span>
        </div>
        <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-1.5 font-semibold hover:text-[color:var(--crimson)]">
          <Phone className="h-3.5 w-3.5" /> {PHONE}
        </a>
      </div>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#reviews", label: "Reviews" },
    { href: "#visit", label: "Visit" },
  ];
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-5 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Dr. Saeed Clinic logo" className="h-12 w-12 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-[color:var(--navy)]">Dr. Saeed</div>
            <div className="text-[10px] tracking-widest uppercase text-muted-foreground">Dental · Aesthetic · Physio</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-foreground/80 hover:text-[color:var(--crimson)] transition">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#appointment" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[color:var(--crimson)] text-white px-4 py-2 text-sm font-semibold shadow-[var(--shadow-soft)] hover:brightness-110 transition">
            <Calendar className="h-4 w-4" /> Book Appointment
          </a>
          <button onClick={() => setOpen(!open)} aria-label="menu" className="md:hidden p-2 rounded-md border border-border">
            <div className="w-5 h-0.5 bg-foreground mb-1" />
            <div className="w-5 h-0.5 bg-foreground mb-1" />
            <div className="w-5 h-0.5 bg-foreground" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-5 py-3 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium">{l.label}</a>
            ))}
            <a href="#appointment" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--crimson)] text-white px-4 py-2 text-sm font-semibold">
              <Calendar className="h-4 w-4" /> Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Dr. Saeed Clinic interior" width={1600} height={1100} className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-28 md:pt-28 md:pb-40 text-white">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-3 py-1 text-xs tracking-widest uppercase">
            <Star className="h-3 w-3 fill-[color:var(--crimson)] text-[color:var(--crimson)]" /> 4.8 · 45 Google Reviews
          </div>
          <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-[1.05]">
            A healthier smile.<br/>
            <span className="text-[color:var(--crimson)]">Radiant skin.</span><br/>
            Pain-free living.
          </h1>
          <p className="mt-5 text-lg text-white/85 max-w-xl">
            Dr. Saeed Clinic in Nazimabad, Karachi brings advanced dental care, aesthetic treatments and modern physiotherapy together — with a team that treats every patient like family.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#appointment" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--crimson)] px-6 py-3 font-semibold shadow-[var(--shadow-elegant)] hover:brightness-110 transition">
              <Calendar className="h-4 w-4" /> Book an Appointment
            </a>
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-6 py-3 font-semibold hover:bg-white/20 transition">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: Award, k: "4.8★", v: "Google Rated" },
    { icon: Users, k: "45+", v: "Happy Reviews" },
    { icon: ShieldCheck, k: "Sterile", v: "Modern Equipment" },
    { icon: HeartPulse, k: "3-in-1", v: "Dental · Aesthetic · Physio" },
  ];
  return (
    <section className="border-b border-border bg-[color:var(--mist)]">
      <div className="mx-auto max-w-6xl px-5 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(it => (
          <div key={it.v} className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full grid place-items-center bg-[color:var(--navy)] text-white shrink-0">
              <it.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display text-xl font-bold text-[color:var(--navy)]">{it.k}</div>
              <div className="text-xs text-muted-foreground">{it.v}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-widest font-semibold text-[color:var(--crimson)]">About the Clinic</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-[color:var(--navy)]">
            Complete healthcare, one trusted address.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            At Dr. Saeed Clinic we combine <strong>dentistry</strong>, <strong>aesthetic medicine</strong> and <strong>physiotherapy</strong> under one roof — so families in Nazimabad can access modern, evidence-based care without running between different centers.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From dental implants and Hollywood smile makeovers to hydrafacials, PRP, and post-surgical rehabilitation, our clinicians use current techniques with strict hygiene protocols in a calm, welcoming space.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            {["Board-trained clinicians", "Digital dental X-rays", "Sterilized instruments", "Transparent pricing"].map(b => (
              <li key={b} className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[color:var(--crimson)]" /> {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl" style={{ background: "var(--gradient-brand)", opacity: 0.12 }} />
          <img src={heroImg} alt="Dr. Saeed Clinic treatment room" loading="lazy" width={800} height={600} className="relative rounded-2xl shadow-[var(--shadow-elegant)] w-full aspect-[4/3] object-cover" />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-[color:var(--mist)] border-y border-border">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-widest font-semibold text-[color:var(--crimson)]">Our Services</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-[color:var(--navy)]">Care for every part of you.</h2>
          <p className="mt-4 text-muted-foreground">Three specialised departments, one team of experienced clinicians. Explore what we offer.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {categories.map(cat => (
            <article key={cat.id} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-500 flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={cat.image} alt={cat.title} loading="lazy" width={900} height={700} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 h-11 w-11 rounded-full grid place-items-center bg-white/95 text-[color:var(--crimson)] shadow-md">
                  <cat.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-2xl font-bold text-[color:var(--navy)]">{cat.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{cat.tagline}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-foreground/90 flex-1">
                  {cat.services.slice(0, 6).map(s => (
                    <li key={s} className="flex gap-2"><ChevronRight className="h-4 w-4 text-[color:var(--crimson)] shrink-0 mt-0.5" /> {s}</li>
                  ))}
                </ul>
                <details className="mt-3 group/details">
                  <summary className="cursor-pointer text-sm font-semibold text-[color:var(--navy)] hover:text-[color:var(--crimson)] list-none inline-flex items-center gap-1">
                    View all {cat.services.length} treatments
                    <ChevronRight className="h-4 w-4 group-open/details:rotate-90 transition" />
                  </summary>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground border-t border-border pt-3">
                    {cat.services.slice(6).map(s => (
                      <li key={s} className="flex gap-2"><span className="text-[color:var(--crimson)]">·</span>{s}</li>
                    ))}
                  </ul>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-5 py-24">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-xs uppercase tracking-widest font-semibold text-[color:var(--crimson)]">Patient Reviews</div>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-[color:var(--navy)]">Loved by patients across Karachi.</h2>
        <div className="mt-5 inline-flex items-center gap-3">
          <span className="font-display text-5xl font-bold text-[color:var(--crimson)]">4.8</span>
          <div className="text-left">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="h-4 w-4 fill-[color:var(--crimson)] text-[color:var(--crimson)]" />
              ))}
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">Based on 45 Google reviews</div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {reviews.map(r => (
          <blockquote key={r.name} className="rounded-2xl bg-card border border-border p-6 shadow-[var(--shadow-soft)]">
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: r.stars }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[color:var(--crimson)] text-[color:var(--crimson)]" />
              ))}
            </div>
            <p className="text-foreground/85 leading-relaxed">"{r.text}"</p>
            <footer className="mt-4 text-sm font-semibold text-[color:var(--navy)]">— {r.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function Appointment() {
  const [form, setForm] = useState({ name: "", phone: "", service: "Dental Consultation", date: "", note: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Dr. Saeed Clinic, I'd like to book an appointment.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0APreferred date: ${form.date}%0ANotes: ${form.note}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <section id="appointment" className="relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-brand)" }} />
      <div className="relative mx-auto max-w-6xl px-5 py-24 grid md:grid-cols-2 gap-12 items-center text-white">
        <div>
          <div className="text-xs uppercase tracking-widest font-semibold text-white/80">Book an Appointment</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Schedule your visit in seconds.</h2>
          <p className="mt-4 text-white/85 max-w-md">Fill in the form and we'll confirm on WhatsApp, or call us directly — we're open daily until 10 PM.</p>
          <div className="mt-6 space-y-3 text-white/90">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 hover:text-[color:var(--crimson)] transition">
              <span className="h-10 w-10 grid place-items-center rounded-full bg-white/15"><Phone className="h-4 w-4" /></span>
              <span className="font-semibold text-lg">{PHONE}</span>
            </a>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[color:var(--crimson)] transition">
              <span className="h-10 w-10 grid place-items-center rounded-full bg-white/15"><MessageCircle className="h-4 w-4" /></span>
              <span className="font-semibold">Chat on WhatsApp</span>
            </a>
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 grid place-items-center rounded-full bg-white/15"><Clock className="h-4 w-4" /></span>
              <span>Open daily · Closes 10 PM</span>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-white text-foreground rounded-2xl p-6 md:p-8 shadow-[var(--shadow-elegant)] space-y-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Full name</label>
            <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--navy)]" placeholder="Your name" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</label>
              <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--navy)]" placeholder="03xx xxxxxxx" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Preferred date</label>
              <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--navy)]" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service</label>
            <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--navy)]">
              <optgroup label="Dental">
                <option>Dental Consultation</option>
                <option>Scaling & Polishing</option>
                <option>Teeth Whitening</option>
                <option>Root Canal Treatment</option>
                <option>Dental Implants</option>
                <option>Braces / Aligners</option>
                <option>Crowns & Veneers</option>
                <option>Smile Makeover</option>
              </optgroup>
              <optgroup label="Aesthetics">
                <option>Hydrafacial</option>
                <option>Face / Hair PRP</option>
                <option>Botox / Fillers</option>
                <option>Chemical Peel</option>
                <option>Laser / Skin Treatments</option>
              </optgroup>
              <optgroup label="Physiotherapy">
                <option>Physio Consultation</option>
                <option>Back / Neck Pain</option>
                <option>Sports Injury Rehab</option>
                <option>Post-Surgical Rehab</option>
              </optgroup>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Notes (optional)</label>
            <textarea rows={3} value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--navy)]" placeholder="Anything we should know" />
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--crimson)] text-white px-6 py-3 font-semibold shadow-[var(--shadow-soft)] hover:brightness-110 transition">
            <MessageCircle className="h-4 w-4" /> Send via WhatsApp
          </button>
          {sent && <p className="text-xs text-center text-muted-foreground">Opening WhatsApp… if it didn't open, please call {PHONE}.</p>}
        </form>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-widest font-semibold text-[color:var(--crimson)]">Visit Us</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-[color:var(--navy)]">Find us in Nazimabad, Block 3.</h2>
          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <div className="h-11 w-11 rounded-full grid place-items-center bg-[color:var(--mist)] text-[color:var(--navy)] shrink-0"><MapPin className="h-5 w-5" /></div>
              <div>
                <div className="font-semibold">Address</div>
                <div className="text-sm text-muted-foreground">{ADDRESS}</div>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="h-11 w-11 rounded-full grid place-items-center bg-[color:var(--mist)] text-[color:var(--navy)] shrink-0"><Phone className="h-5 w-5" /></div>
              <div>
                <a href={`tel:${PHONE_TEL}`} className="font-semibold hover:text-[color:var(--crimson)]">{PHONE}</a>
                <div className="text-sm text-muted-foreground">Call for enquiries & bookings</div>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="h-11 w-11 rounded-full grid place-items-center bg-[color:var(--mist)] text-[color:var(--navy)] shrink-0"><Clock className="h-5 w-5" /></div>
              <div>
                <div className="font-semibold">Opening Hours</div>
                <div className="text-sm text-muted-foreground">Every day · Closes 10 PM</div>
              </div>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://www.google.com/maps/search/?api=1&query=Dr+Saeed+Dental+Implant+Aesthetic+Physiotherapy+Clinic+Nazimabad+Karachi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--navy)] text-white px-5 py-3 font-semibold hover:brightness-125 transition">
              <MapPin className="h-4 w-4" /> Get Directions
            </a>
            <a href="#appointment" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 font-semibold hover:bg-secondary transition">
              <Calendar className="h-4 w-4" /> Book Now
            </a>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-elegant)] aspect-square md:aspect-[4/5]">
          <iframe
            title="Map to Dr. Saeed Clinic"
            className="h-full w-full"
            loading="lazy"
            src="https://www.google.com/maps?q=Dr+Saeed+Dental+Implant+Aesthetic+Physiotherapy+Clinic+Nazimabad+Karachi&output=embed"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[color:var(--navy)] text-white/85">
      <div className="mx-auto max-w-6xl px-5 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Dr. Saeed Clinic" className="h-12 w-12 bg-white rounded-full p-1 object-contain" />
            <div>
              <div className="font-display text-lg font-bold text-white">Dr. Saeed Clinic</div>
              <div className="text-xs text-white/60 tracking-widest uppercase">Dental · Aesthetic · Physio</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-xs">Complete dental, aesthetic and physiotherapy care for families in Nazimabad, Karachi.</p>
        </div>
        <div>
          <div className="font-semibold text-white">Contact</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-[color:var(--crimson)]" /> {ADDRESS}</li>
            <li><a href={`tel:${PHONE_TEL}`} className="hover:text-white">{PHONE}</a></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-[color:var(--crimson)]" /> Every day · Closes 10 PM</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Quick Links</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
            <li><a href="#appointment" className="hover:text-white">Book Appointment</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-white/50 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Dr. Saeed Dental, Implant, Aesthetic & Physiotherapy Clinic.</p>
          <p>Made with care in Karachi.</p>
        </div>
      </div>
      <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-[var(--shadow-elegant)] hover:scale-105 transition">
        <MessageCircle className="h-6 w-6" />
      </a>
    </footer>
  );
}
