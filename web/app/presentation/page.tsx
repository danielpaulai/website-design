import type { Metadata } from "next";
import DeckShell from "./DeckShell";
import "./deck.css";

export const metadata: Metadata = {
  title: "Aura Build · Workshop · Live Deck",
  description: "Opening deck for tonight's Aura Build workshop.",
};

const TOTAL = 15;

export default function Presentation() {
  return (
    <DeckShell total={TOTAL}>
      {/* SLIDE 01 — TITLE */}
      <section className="slide" data-slide="01">
        <div className="slide-grid two-col">
          <div className="col col-text">
            <span className="eyebrow">Aura Build · Workshop</span>
            <h1 className="display display-xl italic">
              From idea to<br />live website.<br />Tonight.
            </h1>
            <span className="hairline" />
          </div>
          <div className="col col-image">
            <video
              src="/aurelia-arena.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="full-cover"
            />
          </div>
        </div>
      </section>

      {/* SLIDE 02 — THE QUESTION */}
      <section className="slide" data-slide="02">
        <div className="slide-grid centered">
          <span className="eyebrow">01 / The question</span>
          <h2 className="display display-lg italic balanced">
            What if, in the next 90 minutes, you shipped a real website with an
            AI-generated cinematic video as its hero?
          </h2>
          <p className="lede">
            Live URL. Real domain. The kind of work agencies are charging{" "}
            <span className="brass">$5,000 to $15,000</span> for right now.
          </p>
        </div>
      </section>

      {/* SLIDE 03 — STORY: ICE CUBE */}
      <section className="slide slide-dark slide-image-bg" data-slide="03">
        <div
          className="slide-bg"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1551601651-bcc9ae6e9eb8?auto=format&fit=crop&w=2400&q=80")',
          }}
        />
        <div className="slide-bg-scrim" />
        <div className="slide-grid bottom-left">
          <span className="eyebrow">02 / A story</span>
          <h2 className="display display-md">An ice cube in a cold room.</h2>
          <blockquote className="quote">
            <p>
              Imagine an ice cube on a table. The room is{" "}
              <span className="serif italic">25°F</span>. You start heating:{" "}
              <span className="num">26… 27… 28… 29… 30… 31</span>. Nothing visible
              changes. Then at <span className="serif italic">32°</span> the ice
              melts.
            </p>
            <p>
              Did one degree do all the work? No. Every degree was working. We
              just couldn&apos;t see it.
            </p>
          </blockquote>
          <span className="attribution">— James Clear, Atomic Habits</span>
        </div>
      </section>

      {/* SLIDE 04 — INSIGHT */}
      <section className="slide" data-slide="04">
        <div className="slide-grid centered">
          <span className="eyebrow">03 / The insight</span>
          <h2 className="display display-xl italic balanced">
            You don&apos;t rise to your goals.<br />
            You fall to your systems.
          </h2>
          <span className="hairline-center" />
          <p className="lede">
            Tonight is your <span className="brass italic">32-degree moment.</span>{" "}
            The system you&apos;ve been quietly building finally becomes visible.
          </p>
        </div>
      </section>

      {/* SLIDE 05 — WHAT WE'RE BUILDING */}
      <section className="slide slide-image-bg" data-slide="05">
        <video
          src="/aurelia-arena.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="slide-bg-video"
        />
        <div className="slide-bg-scrim slide-bg-scrim-bottom" />
        <div className="slide-grid bottom-left">
          <span className="eyebrow">04 / What we&apos;re building</span>
          <h1 className="display display-xl tight">AURA BUILD</h1>
          <p className="display-italic">
            Architecture for the way a city remembers itself.
          </p>
        </div>
      </section>

      {/* SLIDE 06 — WHY NOW */}
      <section className="slide" data-slide="06">
        <div className="slide-grid two-col-equal">
          <div className="col col-text">
            <span className="eyebrow">05 / Three years ago</span>
            <div className="big-number muted">$50,000</div>
            <p className="caption">A 3D artist, a cinematographer, a render farm, a designer, a frontend engineer, DevOps, a project manager — twelve people for a hero video plus a single-page launch site.</p>
          </div>
          <div className="vertical-rule" />
          <div className="col col-text">
            <span className="eyebrow">05 / Tonight</span>
            <div className="big-number brass">$5</div>
            <p className="caption">You. A laptop. Ninety minutes. The whole stack collapsed into a system anyone in this room can run.</p>
          </div>
        </div>
      </section>

      {/* SLIDE 07 — THE SYSTEM */}
      <section className="slide" data-slide="07">
        <div className="slide-grid stacked">
          <span className="eyebrow">06 / The system</span>
          <h2 className="display display-lg">Idea → Prompt → Video → Site</h2>
          <p className="lede italic">Four moves. Three tools. Forty minutes of work.</p>
          <div className="step-flow">
            {[
              { n: "01", stage: "Idea → Prompt", tool: "Claude Code + Seedance skill", time: "5 min" },
              { n: "02", stage: "Prompt → Video", tool: "KIE.AI", time: "90 sec render" },
              { n: "03", stage: "Video → Site", tool: "Claude Code + Frontend Design", time: "30 min" },
              { n: "04", stage: "Site → Live", tool: "GitHub + Vercel", time: "3 min" },
            ].map((step) => (
              <div key={step.n} className="step-card">
                <span className="step-n">{step.n}</span>
                <h3 className="step-stage">{step.stage}</h3>
                <p className="step-tool">{step.tool}</p>
                <p className="step-time">{step.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 08 — LIVE PREVIEW */}
      <section className="slide slide-bare" data-slide="08">
        <video
          src="/aurelia-arena.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="slide-bg-video"
        />
        <div className="slide-watermark">
          AURELIA ARENA · Marina Bay, Singapore · Generated with Seedance 2
        </div>
      </section>

      {/* SLIDE 09 — STEP 1 */}
      <section className="slide" data-slide="09">
        <div className="slide-grid stacked">
          <span className="eyebrow">07 / Step 01 — Idea to prompt</span>
          <h2 className="display display-lg">You bring the vision.<br />The skill brings the brief.</h2>
          <div className="before-after">
            <div className="ba-col">
              <span className="ba-label">Before</span>
              <p className="ba-vague">
                "6-second loop, watch deconstructing on black stone, luxury cinema feel."
              </p>
            </div>
            <div className="ba-arrow">→</div>
            <div className="ba-col">
              <span className="ba-label">After</span>
              <p className="ba-rich">
                Luxury cinema, 6-second masked-transition seamless loop of a Swiss
                mechanical watch on matte black volcanic stone, exploded-view
                deconstruction in zero gravity revealing escapement, balance wheel,
                mainspring, ruby jewels — 100mm macro at T2.0, slow 8-sec orbit,
                24fps with 180° shutter, hard rim key from camera-back-right at
                4300K, graded as Kodak Vision3 250D, palette graphite{" "}
                <span className="mono">#0F1014</span>, polished platinum{" "}
                <span className="mono">#C8C9CB</span>, warm brass{" "}
                <span className="mono">#B8915E</span>…
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 10 — STEP 2 */}
      <section className="slide" data-slide="10">
        <div className="slide-grid centered">
          <span className="eyebrow">08 / Step 02 — Prompt to video</span>
          <div className="huge-stat brass italic">$0.30</div>
          <p className="display-italic muted">per render</p>
          <div className="dot-row">
            <div className="dot-stat"><span className="dot-stat-n">90 sec</span><span className="dot-stat-l">wait time</span></div>
            <div className="dot-stat"><span className="dot-stat-n">1080p</span><span className="dot-stat-l">cinema-grade output</span></div>
            <div className="dot-stat"><span className="dot-stat-n">$5,000</span><span className="dot-stat-l line-through">commercial render</span></div>
          </div>
        </div>
      </section>

      {/* SLIDE 11 — STEP 3 */}
      <section className="slide" data-slide="11">
        <div className="slide-grid two-col">
          <div className="col col-text">
            <span className="eyebrow">09 / Step 03 — Video to site</span>
            <h2 className="display display-md italic">
              Not a Squarespace template.<br />
              <span className="brass">A Phaidon book in browser form.</span>
            </h2>
          </div>
          <div className="col col-list">
            <div className="section-list">
              {["Hero — looping video, no overlay","Manifesto — single editorial line","What We Build — 4 disciplines","Selected Work — 4 project cards","By the Numbers — 8 / 47 / $4.2B / 12","Studio — 2 paragraphs, no team grid","Footer — wordmark + 3 columns"].map((s, i) => (
                <div key={i} className="section-row">
                  <span className="section-n">{String(i+1).padStart(2,"0")}</span>
                  <span className="section-label">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 12 — STEP 4 */}
      <section className="slide" data-slide="12">
        <div className="slide-grid stacked">
          <span className="eyebrow">10 / Step 04 — Site to live</span>
          <h2 className="display display-lg">Three commands.<br />Ninety seconds.<br />A URL.</h2>
          <div className="cmd-list">
            <div className="cmd-row"><span className="cmd-n">1</span><code className="cmd">git push</code><span className="cmd-cap">your work goes to GitHub</span></div>
            <div className="cmd-row"><span className="cmd-n">2</span><code className="cmd">vercel deploy --prod</code><span className="cmd-cap">Vercel builds and hosts it</span></div>
            <div className="cmd-row"><span className="cmd-n">3</span><code className="cmd">your-name.vercel.app</code><span className="cmd-cap">live on the public internet</span></div>
          </div>
          <p className="lede italic">Buy a real domain in 30 seconds. Point it. Now you have your-name.com.</p>
        </div>
      </section>

      {/* SLIDE 13 — IDENTITY */}
      <section className="slide" data-slide="13">
        <div className="slide-grid two-col">
          <div className="col col-text">
            <span className="eyebrow">11 / What you walk away with</span>
            <h2 className="display display-md">By 9pm tonight you will have:</h2>
            <ul className="brass-list">
              <li>A live URL on the public internet</li>
              <li>Your own AI-rendered cinematic video</li>
              <li>A skill 99% of agencies can&apos;t yet do</li>
              <li>The identity of someone who <em>ships</em></li>
              <li>Proof you can text your mother</li>
            </ul>
          </div>
          <div className="col col-quote">
            <blockquote className="big-quote">
              <p className="display-italic">
                Every action is a vote for the type of person you wish to become.
              </p>
              <span className="attribution">— James Clear</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* SLIDE 14 — ROOM RULES */}
      <section className="slide" data-slide="14">
        <div className="slide-grid stacked">
          <span className="eyebrow">12 / The room rules</span>
          <h2 className="display display-md">Three things tonight.</h2>
          <div className="rules-grid">
            {[
              { n: "01", title: "Lean in.", body: "When something works, name it. When you're stuck, ask immediately. We move at the speed of the room." },
              { n: "02", title: "No silent confusion.", body: "If you're lost, raise a hand. I would rather rewind than have you ghost the second half." },
              { n: "03", title: "Steal everything.", body: "Code, prompts, copy, screenshots. We are not student and teacher tonight — we are a small studio building together." },
            ].map((r) => (
              <div key={r.n} className="rule-card">
                <span className="rule-n">{r.n}</span>
                <h3 className="rule-title">{r.title}</h3>
                <p className="rule-body">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 15 — LET'S GO */}
      <section className="slide" data-slide="15">
        <div className="slide-grid centered">
          <h1 className="display display-xl italic">The ice melts at 32°.</h1>
          <span className="hairline-center" />
          <p className="cta brass">Open Claude Code.</p>
          <p className="cta brass">We start now.</p>
        </div>
      </section>
    </DeckShell>
  );
}
