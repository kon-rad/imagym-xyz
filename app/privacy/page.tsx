import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Imagym",
  description: "How the Imagym iOS app and imagym.xyz handle account information, recordings, visualizations, subscriptions, and privacy requests.",
};

export default function Privacy() {
  return <>
    <header className="nav shell"><Link className="brand" href="/">IMAGYM</Link><nav aria-label="Primary"><Link href="/">Home</Link><Link href="/terms">Terms</Link><Link href="/contact">Contact</Link></nav></header>
    <main className="contact shell legal">
      <header><p className="eyebrow">Legal</p><h1>Privacy Policy</h1><p className="lede">Effective November 27, 2026</p></header>
      <section><h2>Who we are</h2><p>Imagym lets you describe a future moment and create a personal guided audio visualization. Questions and privacy requests can be sent to <a href="mailto:synducer@gmail.com">synducer@gmail.com</a>.</p></section>
      <section><h2>Information we handle</h2><ul>
        <li><strong>Account and profile:</strong> Your Apple or Google sign-in identifier, email address and name when supplied, plus the profile name you choose.</li>
        <li><strong>Your content:</strong> Written intentions, optional voice recordings, recognized transcripts, generated scripts and audio tracks, and your voice and background choices. A recording stays on your iPhone and may also be backed up to your account&apos;s cloud storage when that feature is available.</li>
        <li><strong>Practice settings:</strong> Playback dates used for your streak and your reminder preference. Reminders are optional and are scheduled on your device.</li>
        <li><strong>Subscriptions:</strong> Apple processes purchases. RevenueCat receives the identifiers and purchase status needed to show and restore your subscription. We do not receive your payment card number.</li>
        <li><strong>Website requests and support:</strong> Our website host may process standard request details such as IP address, browser information and access time. If you contact us, we receive the information you send. The current website does not set advertising or analytics cookies.</li>
      </ul></section>
      <section><h2>How we use it</h2><p>We use this information to sign you in, save and show your intentions, build and play your tracks, maintain your streak and optional reminders, manage subscriptions, respond to support requests, secure the service and diagnose failures. We do not use your recordings or intentions for advertising.</p></section>
      <section><h2>Services that process information</h2><p>Firebase Authentication, Firestore and Storage handle accounts and saved app content. Apple and Google support sign-in, and Apple handles App Store purchases. RevenueCat manages subscription entitlements. The app sends your written intention or recognized transcript to Together AI to write a visualization script. Narration runs on your iPhone when available; if local narration fails or times out, the final script is sent to Together AI for speech generation. The original voice recording is not sent to Together AI for narration. Optional reminder text may also be generated using Together AI. Providers may process information in countries other than your own.</p><p>We may also disclose information when required by law or to protect the service, and as part of a merger, sale or transfer of Imagym. We do not sell your personal information to advertisers.</p></section>
      <section><h2>Storage, security and retention</h2><p>We use access controls and encrypted network connections to protect stored and transmitted information. No service can guarantee absolute security. Saved content remains associated with your account until it is deleted or a deletion request is completed. We have not set a single fixed retention period for every provider or backup.</p></section>
      <section><h2>Your choices and requests</h2><p>You can skip recording, disable reminders, edit or delete individual intentions, and cancel a subscription in your Apple Account settings. The app&apos;s <strong>Delete Account</strong> action currently deletes your sign-in account; it does not automatically erase every saved intention, script, recording or audio file. To request deletion of all associated data, a copy of your data, or a correction, email <a href="mailto:synducer@gmail.com">synducer@gmail.com</a>. We may need to verify that the request is yours. To manage information held by Apple or Google, use their account controls.</p></section>
      <section><h2>Changes and contact</h2><p>We will update the effective date when this policy changes. For questions or privacy requests, email <a href="mailto:synducer@gmail.com">synducer@gmail.com</a>.</p></section>
      <section><h2>Terms of Use</h2><p>Imagym uses <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Apple&apos;s Standard End User License Agreement</a>. You can also read our <Link href="/terms">Terms page</Link>.</p></section>
    </main>
    <footer className="footer shell"><Link className="brand" href="/">IMAGYM</Link><nav><Link href="/">Home</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/contact">Contact</Link></nav></footer>
  </>;
}
