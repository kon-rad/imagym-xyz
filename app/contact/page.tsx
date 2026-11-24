import type { Metadata } from "next";
import Link from "next/link";

const APP_STORE_URL = "https://apps.apple.com/app/imagym-ai-visualization/id6746975853";

export const metadata: Metadata = {
  title: "Contact us | Imagym",
  description: "Contact Imagym with questions, feedback, comments, support requests, or partnership ideas.",
};

const reasons = [
  ["Questions about Imagym", "Ask how the app works, how to create a visualization, or how to get more from your practice."],
  ["Feedback and comments", "Tell us what feels useful, what feels unclear, and what you would change."],
  ["Technical support", "Let us know about a problem with recording, track generation, playback, your account, or a subscription."],
  ["Privacy and data", "Ask how your recordings, intentions, scripts, and account information are handled."],
  ["Ideas and feature requests", "Share a use case, accessibility need, voice or sound request, or an idea for the product."],
  ["Press and partnerships", "Get in touch about interviews, research, collaborations, teams, or other ways to work together."],
];

export default function Contact() {
  return <>
    <header className="nav shell"><Link className="brand" href="/">IMAGYM</Link><nav aria-label="Primary"><Link href="/#how">How it works</Link><Link href="/blog/how-to-visualize">Blog</Link><Link href="/contact">Contact</Link><a className="button button--small" href={APP_STORE_URL}>Get the app</a></nav></header>
    <main className="contact shell">
      <header><p className="eyebrow">Contact us</p><h1>We want to hear from you.</h1><p className="lede">Questions, feedback, comments, and honest reports about what is or is not working are all welcome.</p></header>
      <section aria-labelledby="contact-reasons"><h2 id="contact-reasons">What you can contact us about</h2><div className="contact__reasons">{reasons.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section className="contact__methods" aria-labelledby="contact-methods"><div><p className="eyebrow">Get in touch</p><h2 id="contact-methods">Choose what is easiest.</h2></div><div className="contact__cards"><a href="https://x.com/konrad_gnat"><span>Twitter / X</span><strong>DM me on Twitter</strong><small>@konrad_gnat</small></a><a href="mailto:synducer@gmail.com"><span>Email</span><strong>Send me an email</strong><small>synducer@gmail.com</small></a></div></section>
    </main>
    <footer className="footer shell"><Link className="brand" href="/">IMAGYM</Link><nav><Link href="/blog/how-to-visualize">Blog</Link><Link href="/contact">Contact</Link><Link href="/">Home</Link></nav><p>Made with intention by <a href="https://x.com/konrad_gnat">Konrad Gnat</a></p></footer>
  </>;
}
