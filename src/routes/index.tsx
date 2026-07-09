import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-halwa-puri.jpg";
import chaiImg from "@/assets/chai.jpg";
import samosaAsset from "@/assets/samosa.webp.asset.json";
const samosaImg = samosaAsset.url;
import halwaImg from "@/assets/halwa.jpg";
import { MapPin, Phone, Clock, Star, Utensils, ShoppingBag, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const menuItems = [
  { name: "Halwa Puri Bhaji", urdu: "حلوہ پوری بھاجی", desc: "Crispy hot puris with sweet sooji halwa, choley and aloo tarkari — the complete nashta.", img: heroImg, tag: "Signature" },
  { name: "Samosa", urdu: "سموسہ", desc: "Golden, flaky, spiced potato samosas served with tangy green chutney.", img: samosaImg, tag: "Snack" },
  { name: "Sooji Halwa", urdu: "سوجی حلوہ", desc: "Slow-cooked semolina in ghee, sugar and cardamom. Finished with pistachios.", img: halwaImg, tag: "Sweet" },
  { name: "Doodh Patti Chai", urdu: "دودھ پتی چائے", desc: "Full-cream milk tea, brewed strong on a slow flame. The morning classic.", img: chaiImg, tag: "Drink" },
];

const reviews = [
  { name: "ابراہیم عبداللہ", ago: "8 months ago", stars: 5, text: "Everything was absolutely delicious! The puris were crispy and fresh, the chana were flavorful, and the halwa was perfectly sweet. The aloo tarkari had just the right spice." },
  { name: "IMRAN MUSHIR", ago: "Local Guide · 2 years ago", stars: 5, text: "Local residential area halwa-puri shop. Standard is good. Their choly-salan is very good because they use desi small chickpeas which gives very good aroma and taste." },
  { name: "Kashif Shabbir", ago: "Local Guide · 3 months ago", stars: 3, text: "Simple average halwa puri nashta — a classic no-frills neighborhood stop." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-full grid place-items-center text-primary-foreground font-bold" style={{ background: "var(--gradient-warm)" }}>N</span>
            <span className="font-display text-lg font-bold tracking-tight">New Master</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#menu" className="hover:text-primary transition">Menu</a>
            <a href="#reviews" className="hover:text-primary transition">Reviews</a>
            <a href="#visit" className="hover:text-primary transition">Visit</a>
          </nav>
          <a href="https://foodpanda.pk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:brightness-110 transition">
            <ShoppingBag className="h-4 w-4" /> Order
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Halwa puri thali with chana, aloo and halwa" width={1600} height={1104} className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 pt-24 pb-32 md:pt-36 md:pb-44">
          <div className="max-w-2xl text-[color:var(--cream)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-3 py-1 text-xs tracking-widest uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--saffron)]" /> Nazimabad, Karachi
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.02]">
              Halwa puri,<br/>
              <span className="italic text-[color:var(--saffron)]">the way</span> nashta<br/>
              was meant to be.
            </h1>
            <p className="mt-4 font-urdu text-2xl md:text-3xl text-[color:var(--saffron)]/90">نیو ماسٹر ناشتہ ہاؤس</p>
            <p className="mt-6 text-lg text-white/85 max-w-xl">
              A neighborhood breakfast institution in Block 2 Nazimabad — crispy puris, aromatic desi chana, warm sooji halwa and cutting chai. Open from dawn.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://foodpanda.pk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--saffron)] text-[color:var(--ink)] px-6 py-3 font-semibold shadow-[var(--shadow-warm)] hover:brightness-105 transition">
                <ShoppingBag className="h-4 w-4" /> Order on foodpanda
              </a>
              <a href="tel:+923462392049" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-6 py-3 font-semibold text-white hover:bg-white/20 transition">
                <Phone className="h-4 w-4" /> +92 346 2392049
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-white/85">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-[color:var(--saffron)] text-[color:var(--saffron)]" />
                <span><strong className="text-white">4.4</strong> · 60 reviews</span>
              </div>
              <div className="hidden sm:flex items-center gap-2"><Utensils className="h-4 w-4" /> Dine-in · Takeout</div>
              <div className="hidden sm:flex items-center gap-2"><Clock className="h-4 w-4" /> Open · Closes 8 PM</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[color:var(--cream)]">
        <div className="mx-auto max-w-6xl px-5 py-10 grid md:grid-cols-3 gap-8 text-center md:text-left">
          {[
            { k: "Since", v: "Karachi mornings", d: "A Nazimabad staple, made fresh every day." },
            { k: "Signature", v: "Halwa Puri", d: "Crispy, hot, and served with desi chana." },
            { k: "Price", v: "Rs 1–1,000", d: "Full nashta for the whole family." },
          ].map((s) => (
            <div key={s.k}>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.k}</div>
              <div className="mt-1 font-display text-2xl font-semibold">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold">The Menu</div>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold">Made fresh, served hot.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">Traditional Karachi nashta done properly. Small menu, sharp focus — the classics, every day.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {menuItems.map((item, i) => (
            <article key={item.name} className={`group relative overflow-hidden rounded-2xl bg-card border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-warm)] transition-all duration-500 ${i === 0 ? "md:col-span-2 md:grid md:grid-cols-2" : ""}`}>
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[4/3] md:aspect-auto" : "aspect-[4/3]"}`}>
                <img src={item.img} alt={item.name} loading="lazy" width={800} height={600} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-4 left-4 rounded-full bg-[color:var(--saffron)] text-[color:var(--ink)] px-3 py-1 text-xs font-semibold">{item.tag}</span>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold">{item.name}</h3>
                  <span className="font-urdu text-xl text-primary">{item.urdu}</span>
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="reviews" className="bg-[color:var(--ink)] text-[color:var(--cream)]">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <div className="text-xs uppercase tracking-widest text-[color:var(--saffron)] font-semibold">What people say</div>
              <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold">Loved by the neighborhood.</h2>
              <div className="mt-6 flex items-center gap-4">
                <div className="font-display text-6xl font-bold text-[color:var(--saffron)]">4.4</div>
                <div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className={`h-4 w-4 ${i <= 4 ? "fill-[color:var(--saffron)] text-[color:var(--saffron)]" : "text-white/30"}`} />
                    ))}
                  </div>
                  <div className="mt-1 text-sm text-white/70">Based on 60 Google reviews</div>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              {reviews.map(r => (
                <blockquote key={r.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({length: r.stars}).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-[color:var(--saffron)] text-[color:var(--saffron)]" />)}
                  </div>
                  <p className="text-white/90 leading-relaxed">"{r.text}"</p>
                  <footer className="mt-4 text-sm text-white/60">
                    <span className="font-semibold text-white/90">{r.name}</span> · {r.ago}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="visit" className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold">Come by</div>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold">Find us in Nazimabad.</h2>
            <p className="mt-4 text-muted-foreground text-lg">Tucked into Block 2, we've been feeding Karachi mornings with the same simple promise: hot, fresh, honest nashta.</p>

            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-full grid place-items-center bg-secondary text-primary shrink-0"><MapPin className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold">Plot 1, Block 2 Nazimabad</div>
                  <div className="text-sm text-muted-foreground">Karachi 74600, Pakistan</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-full grid place-items-center bg-secondary text-primary shrink-0"><Phone className="h-5 w-5" /></div>
                <div>
                  <a href="tel:+923462392049" className="font-semibold hover:text-primary">+92 346 2392049</a>
                  <div className="text-sm text-muted-foreground">Call for takeout</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-full grid place-items-center bg-secondary text-primary shrink-0"><Clock className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold">Open daily · Closes 8 PM</div>
                  <div className="text-sm text-muted-foreground">Best visited for early morning nashta</div>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://www.google.com/maps/search/?api=1&query=New+Master+Nashta+House+Nazimabad+Karachi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 font-semibold hover:brightness-110 transition">
                <MapPin className="h-4 w-4" /> Get directions
              </a>
              <a href="https://foodpanda.pk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 font-semibold hover:bg-secondary transition">
                foodpanda <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-warm)] aspect-square md:aspect-[4/5]">
            <iframe
              title="Map to New Master Nashta House"
              className="h-full w-full"
              loading="lazy"
              src="https://www.google.com/maps?q=New+Master+Nashta+House+Nazimabad+Karachi&output=embed"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-[color:var(--cream)]">
        <div className="mx-auto max-w-6xl px-5 py-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-9 w-9 rounded-full grid place-items-center text-primary-foreground font-bold" style={{ background: "var(--gradient-warm)" }}>N</span>
              <span className="font-display text-lg font-bold">New Master Nashta House</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">Plot 1, Block 2 Nazimabad, Karachi 74600 · +92 346 2392049</p>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} New Master Nashta House. Made with care in Karachi.</p>
        </div>
      </footer>
    </div>
  );
}
