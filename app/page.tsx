import Image from "next/image";

const APP_STORE_URL = "https://apps.apple.com/app/imagym-ai-visualization/id6746975853";
const PRIVACY_URL =
  "https://konradgnat.notion.site/Imagym-Privacy-Policy-20cba635994d8009976ae3e76e779036";

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 32" aria-hidden="true">
      <defs>
        <linearGradient id="inf" x1="0" x2="1">
          <stop offset="0" stopColor="#6D4AFF" />
          <stop offset="1" stopColor="#2F5BEA" />
        </linearGradient>
      </defs>
      <path
        pathLength={1}
        d="M32 16c-6-7-10-11-16-11a11 11 0 0 0 0 22c6 0 10-4 16-11s10-11 16-11a11 11 0 0 1 0 22c-6 0-10-4-16-11z"
        fill="none"
        stroke="url(#inf)"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AppStoreButton({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <a className={`store store--${tone}`} href={APP_STORE_URL} target="_blank" rel="noopener">
      <svg viewBox="0 0 384 512" aria-hidden="true">
        <path
          fill="currentColor"
          d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
        />
      </svg>
      <span>
        <small>Download on the</small>
        App Store
      </span>
    </a>
  );
}

function Phone({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="phone">
      <Image src={src} alt={alt} width={780} height={1688} priority={priority} sizes="(max-width: 720px) 60vw, 300px" />
    </div>
  );
}

const steps = [
  {
    title: "Set an intention",
    body: "Write down the future you want: a launch, a healthier body, a relationship, a calling. Keep as many intentions as you like.",
  },
  {
    title: "Call your guide",
    body: "Start a live voice session. Describe the scene out loud and your AI guide asks what you see, hear and feel until it becomes vivid.",
  },
  {
    title: "Get your recording",
    body: "Each session ends with a personalized audio visualization built from your own words. No script, no typing.",
  },
  {
    title: "Replay and rehearse",
    body: "Listen on a walk, before a meeting, or at bedtime. Every replay is another rep for the future you're building.",
  },
];

const dimensions = [
  { name: "Clarity", score: 20 },
  { name: "Emotional intensity", score: 22 },
  { name: "Sensory detail", score: 18 },
  { name: "Alignment", score: 23 },
];

const gallery = [
  { src: "/screens/home.webp", alt: "Imagym home screen explaining how a session works" },
  { src: "/screens/intentions.webp", alt: "My Intentions list with three saved goals" },
  { src: "/screens/session-audio.webp", alt: "An intention session with its audio visualizations" },
  { src: "/screens/score.webp", alt: "Score card rating clarity, emotion, sensory detail and alignment" },
  { src: "/screens/summary.webp", alt: "AI summary of a visualization conversation" },
  { src: "/screens/library.webp", alt: "Library of saved audio visualizations" },
  { src: "/screens/trial.webp", alt: "Subscription screen offering a three-day free trial" },
];

const reports = [
  "Crystal-clear pictures of their future self",
  "Breakthroughs in emotion and bursts of motivation",
  "Less stress, anxiety and overthinking",
  "A real shift in mindset and self-belief",
];

export default function Home() {
  return (
    <>
      <header className="nav wrap">
        <a className="brand" href="#top" aria-label="Imagym home">
          <Mark className="brand__mark" />
          <span>Imagym</span>
        </a>
        <a className="nav__cta" href={APP_STORE_URL} target="_blank" rel="noopener">
          Get the app
        </a>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero wrap">
          <div className="hero__copy">
            <Mark className="hero__mark draw" />
            <h1>Rehearse the future until it feels like a memory.</h1>
            <p className="lede">
              Imagym is a gym for your imagination. Talk through the life you want with a live AI voice
              guide, then keep a personalized audio visualization to replay whenever you need to find it
              again.
            </p>
            <div className="hero__actions">
              <AppStoreButton />
              <p className="fine">Free to start, with a 3-day trial of the full plan. iPhone, iOS 18.4 or later.</p>
            </div>
          </div>
          <div className="hero__phones">
            <Phone src="/screens/home.webp" alt="Imagym home screen: Step into your vision" priority />
            <Phone src="/screens/session-audio.webp" alt="A saved intention session with its audio visualizations" priority />
          </div>
        </section>

        {/* Einstein */}
        <section className="board" aria-labelledby="quote">
          <div className="board__inner wrap">
            <figure className="board__photo">
              <Image
                src="/einstein.webp"
                alt="Albert Einstein standing at a chalkboard, holding a piece of chalk"
                width={646}
                height={866}
                sizes="(max-width: 720px) 80vw, 420px"
              />
              <figcaption>Albert Einstein lecturing in Vienna, 1921</figcaption>
            </figure>
            <div className="board__text">
              <blockquote id="quote">
                <p>“Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”</p>
              </blockquote>
              <p className="board__cite">Albert Einstein, interview in The Saturday Evening Post, 1929</p>
              <p className="board__body">
                At sixteen, Einstein pictured himself chasing a beam of light. He later traced relativity
                back to that thought experiment. Imagination went first, and the knowledge followed.
              </p>
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="why wrap">
          <h2>Imagination is a muscle. Most of us never train it.</h2>
          <div className="why__cols">
            <p>
              Athletes run the race in their heads before the gun. Musicians rehearse the piece away
              from the instrument. The mind treats a vividly imagined scene like a practice run, so the
              real thing already feels familiar when it arrives.
            </p>
            <p>
              Imagym brings voice AI together with visualization techniques used in sports and
              performance psychology. Your guide adapts to your voice, your emotions and your goals, and
              leads you through a session rich with sight, sound and feeling. It lands like a memory of
              something that hasn’t happened yet.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="how wrap" aria-labelledby="how">
          <div className="how__phone">
            <Phone src="/screens/intentions.webp" alt="My Intentions screen" />
          </div>
          <div>
            <h2 id="how">How a session works</h2>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className="steps__n">{i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Score */}
        <section className="score" aria-labelledby="score">
          <div className="score__inner wrap">
            <div>
              <h2 id="score">See how vivid your vision really is</h2>
              <p className="section-lede">
                After each session Imagym scores your visualization on four dimensions and writes a short
                reflection: what came through clearly, and what to go deeper on next time.
              </p>
              <div className="meter" role="img" aria-label="Example score card: 83 out of 100">
                <div className="meter__total">
                  <span>83</span>
                  <small>/100 on a sample session</small>
                </div>
                {dimensions.map((d) => (
                  <div className="meter__row" key={d.name}>
                    <span>{d.name}</span>
                    <span className="meter__bar">
                      <span style={{ width: `${(d.score / 25) * 100}%` }} />
                    </span>
                    <span className="meter__val">{d.score}/25</span>
                  </div>
                ))}
              </div>
              <p className="fine">
                Scores add up to a Master Score, so you can watch your practice build week over week.
              </p>
            </div>
            <div className="score__phones">
              <Phone src="/screens/score.webp" alt="Score card with AI reflection" />
              <Phone src="/screens/summary.webp" alt="Session summary with key insights" />
            </div>
          </div>
        </section>

        {/* Feature list */}
        <section className="features wrap" aria-labelledby="features">
          <h2 id="features">Everything in the app</h2>
          <dl className="features__list">
            <div>
              <dt>Live voice guide</dt>
              <dd>A real-time conversation, not a canned meditation. Speak naturally and the guide follows you.</dd>
            </div>
            <div>
              <dt>Your own audio track</dt>
              <dd>A downloadable visualization recording made from your session, yours to keep and replay.</dd>
            </div>
            <div>
              <dt>Intentions</dt>
              <dd>Save the goals you’re working toward and run as many sessions against each one as you need.</dd>
            </div>
            <div>
              <dt>Transcript and summary</dt>
              <dd>Read back the full conversation, the key insights and the breakthroughs from every session.</dd>
            </div>
            <div>
              <dt>Score card and Master Score</dt>
              <dd>Clarity, emotional intensity, sensory detail and alignment, tracked over time.</dd>
            </div>
            <div>
              <dt>No data collected</dt>
              <dd>The App Store privacy label for Imagym reads “Data Not Collected.” Your future stays yours.</dd>
            </div>
          </dl>
        </section>

        {/* Gallery */}
        <section className="gallery" aria-label="App screenshots">
          <div className="gallery__track">
            {gallery.map((g) => (
              <Phone key={g.src} src={g.src} alt={g.alt} />
            ))}
          </div>
        </section>

        {/* Reports + plans */}
        <section className="reports wrap">
          <div>
            <h2>What people notice</h2>
            <ul className="checks">
              {reports.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <div className="plans">
            <h2>Plans</h2>
            <p>
              Download Imagym free and try the full experience for 3 days. Every weekly, monthly or
              yearly plan includes credits for AI-guided voice sessions and high-quality visualization
              recordings you can download.
            </p>
            <p className="fine">Prices are shown in the App Store in your local currency.</p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final">
          <div className="wrap final__inner">
            <Mark className="final__mark" />
            <h2>Your future is waiting. Say it out loud.</h2>
            <AppStoreButton tone="light" />
          </div>
        </section>
      </main>

      <footer className="foot wrap">
        <span>© Synducer LLC. Made by Konrad Gnat.</span>
        <nav>
          <a href={PRIVACY_URL} target="_blank" rel="noopener">Privacy policy</a>
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener">Terms of use</a>
          <a href={APP_STORE_URL} target="_blank" rel="noopener">App Store</a>
        </nav>
      </footer>
    </>
  );
}
