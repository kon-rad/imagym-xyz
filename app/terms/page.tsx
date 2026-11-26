import type { Metadata } from "next";
import Link from "next/link";

const APPLE_TERMS = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

export const metadata: Metadata = {
  title: "Terms of Use | Imagym",
  description: "The terms of use for the Imagym iOS app, including Apple's Standard End User License Agreement.",
};

export default function Terms() {
  return <>
    <header className="nav shell"><Link className="brand" href="/">IMAGYM</Link><nav aria-label="Primary"><Link href="/">Home</Link><Link href="/contact">Contact</Link></nav></header>
    <main className="contact shell">
      <header><p className="eyebrow">Legal</p><h1>Terms of Use</h1><p className="lede">Imagym is licensed under Apple&apos;s Standard End User License Agreement (EULA).</p></header>
      <section aria-labelledby="license"><h2 id="license">Read the agreement</h2><p>The Apple Standard EULA governs your use of the Imagym iOS app, including its auto-renewable subscriptions.</p><p className="terms__action"><a className="button" href={APPLE_TERMS}>Read Apple&apos;s Standard EULA</a></p><p>Subscriptions are billed through your Apple Account. You can manage or cancel them in your device&apos;s Settings under Subscriptions.</p></section>
      <section aria-labelledby="help"><h2 id="help">Questions</h2><p>For help with Imagym, <Link href="/contact">contact us</Link>.</p></section>
    </main>
    <footer className="footer shell"><Link className="brand" href="/">IMAGYM</Link><nav><Link href="/">Home</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/contact">Contact</Link></nav></footer>
  </>;
}
