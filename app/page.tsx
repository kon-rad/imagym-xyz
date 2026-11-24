import Image from "next/image";
import Link from "next/link";

const APP_STORE_URL = "https://apps.apple.com/app/imagym-ai-visualization/id6746975853";
const PRIVACY_URL = "https://konradgnat.notion.site/Imagym-Privacy-Policy-20cba635994d8009976ae3e76e779036";

function Mark() { return <span className="mark" aria-hidden="true"><i /><i /><i /></span>; }
function Header() { return <header className="nav shell"><Link className="brand" href="/">IMAGYM</Link><nav aria-label="Primary"><Link href="/#how">How it works</Link><Link href="/blog/how-to-visualize">Blog</Link><a className="button button--small" href={APP_STORE_URL}>Get the app</a></nav></header>; }
function Footer() { return <footer className="footer shell"><Link className="brand" href="/">IMAGYM</Link><nav><Link href="/blog/how-to-visualize">Blog</Link><a href={PRIVACY_URL}>Privacy</a><a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Terms</a></nav><p>Made with intention by <a href="https://x.com/konrad_gnat">Konrad Gnat</a></p></footer>; }
function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) { return <div className={`phone ${className}`}><Image src={src} alt={alt} width={780} height={1688} sizes="(max-width: 700px) 72vw, 310px" /></div>; }

const features = [
  ["Built from your words", "Speak for up to five minutes, or start from a written intention. Your scene gives the track its direction."],
  ["A 10-minute guided track", "Imagym writes and narrates a personal visualization over background sound, ready to return to."],
  ["Script and original recording", "Read the scene behind your track and revisit the words that started it."],
  ["Voice and sound choices", "Change the narration voice or background when you want the practice to feel different."],
  ["Intentions and library", "Keep more than one future in view and find every generated track in one place."],
  ["Designed for repetition", "Listen before a meaningful moment or make it part of a regular mental rehearsal practice."],
];
const gallery = [
  ["/screens/reskin/record.png", "Imagym recording screen with prompts for describing a future moment"],
  ["/screens/reskin/building.png", "Imagym creating a visualization track"],
  ["/screens/reskin/listen.png", "Imagym listening screen with generated visualization tracks"],
  ["/screens/reskin/script.png", "Imagym script screen showing the scene behind a track"],
  ["/screens/reskin/library.png", "Imagym visualization library"],
];

export default function Home() {
  return <><Header /><main>
    <section className="hero shell"><div className="hero__copy"><p className="eyebrow">Visualization and intention setting</p><h1>Hear the future you’re building.</h1><p className="lede">Describe a moment that matters in your own voice. Imagym turns your words into a personal guided visualization you can listen to again.</p><div className="hero__actions"><a className="button" href={APP_STORE_URL}>Download on the App Store</a><Link className="text-link" href="/blog/how-to-visualize">Learn how the practice works →</Link></div></div><div className="hero__visual"><div className="orb"><Mark /></div><Phone src="/screens/reskin/listen.png" alt="A finished personal visualization in Imagym" /></div></section>
    <section className="promise"><div className="shell promise__inner"><p className="eyebrow">Your future, in your words</p><h2>From an intention to a practice you can return to.</h2><p>Imagym removes the blank page. Start with a goal, speak through one concrete future moment, then listen as that scene becomes a narrated track.</p></div></section>
    <section className="flow shell" id="how"><div className="section-head"><p className="eyebrow">How it works</p><h2>Three steps. One scene that feels personal.</h2></div><ol className="flow__grid"><li><span>01</span><h3>Set an intention</h3><p>Name the future you want to move toward. Add detail if it helps, or keep it simple.</p><Phone src="/screens/reskin/intention.png" alt="An intention in Imagym" /></li><li><span>02</span><h3>Describe the moment</h3><p>Speak for one to five minutes about what you see, hear, feel, and do. Recording is optional.</p><Phone src="/screens/reskin/record.png" alt="Recording a future moment in Imagym" /></li><li><span>03</span><h3>Listen and return</h3><p>Imagym builds a 10-minute guided track. Read the script, change the sound, and replay it when useful.</p><Phone src="/screens/reskin/listen.png" alt="Listening to a guided visualization in Imagym" /></li></ol></section>
    <section className="features shell"><div className="section-head"><p className="eyebrow">A clearer place to practice</p><h2>Everything supports the same loop.</h2></div><div className="features__grid">{features.map(([title, body]) => <article key={title}><Mark /><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="gallery" aria-labelledby="inside"><div className="shell section-head"><p className="eyebrow">Inside the app</p><h2 id="inside">Built for focus, from start to replay.</h2></div><div className="gallery__rail">{gallery.map(([src, alt]) => <Phone key={src} src={src} alt={alt} />)}</div></section>
    <section className="science shell"><div><p className="eyebrow">The practice</p><h2>Mental imagery is studied. The evidence is promising and nuanced.</h2></div><div><p>Research in sport and motor learning suggests imagery can support performance, especially alongside physical practice. Results vary by task, study quality, and how the practice is designed. Imagym is a practice tool, not a treatment or a guarantee.</p><Link className="button button--outline" href="/blog/how-to-visualize">Read the guide and research</Link></div></section>
    <section className="cta"><div className="shell"><div className="orb orb--small"><Mark /></div><p className="eyebrow">Begin with one intention</p><h2>Make your future easier to picture.</h2><a className="button" href={APP_STORE_URL}>Download on the App Store</a></div></section>
  </main><Footer /></>;
}
