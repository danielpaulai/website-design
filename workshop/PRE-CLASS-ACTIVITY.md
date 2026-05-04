# Pre-Class Activity

**Complete this before our session.** Time required: ~25 minutes.

By the time you walk in, you'll have:

- Claude Code installed and logged in on your machine
- Two skills installed — **Seedance Loop Prompt Builder** + **Frontend Design**
- A **KIE.AI** account topped up with **$5** (used to render videos in class)
- A **GitHub** account
- A **Vercel** account
- One Seedance prompt already generated — so you've used the skill once before tomorrow

The warmup at the end is optional but strongly recommended — attendees who do it move 2x faster in the session.

If anything blocks you, jump to **Troubleshooting** at the bottom. Don't get stuck — message the instructor before the session if needed.

---

## Step 1 / Install Claude Code (5 min)

> We're installing **Claude Code** (the command-line tool), not the consumer Claude Desktop chat app. They're different products. The workshop uses Claude Code.

### macOS

Open the **Terminal** app (`Cmd+Space` → type "Terminal" → Enter) and paste:

```bash
npm install -g @anthropic-ai/claude-code
```

If you see `npm: command not found`, install **Node.js LTS** from <https://nodejs.org> first, then re-run the command above.

### Windows

Open **PowerShell** (Windows key → type "PowerShell" → Enter) and paste:

```powershell
npm install -g @anthropic-ai/claude-code
```

If you don't have `npm`, install **Node.js LTS** from <https://nodejs.org> first.

### First login

In your terminal, type:

```bash
claude
```

A browser tab opens asking you to log into your Anthropic account. Complete the login. You're done with Step 1 when Claude Code's prompt is waiting for input in your terminal.

### Verify

```bash
claude --version
```

A version number prints. ✅

---

## Step 2 / Install both workshop skills (3 min)

We use two skills in the session:

- **Seedance Loop Prompt Builder** — turns video ideas into cinema-grade Seedance 2 prompts
- **Frontend Design** — Anthropic's official skill for building production-grade UI

Install both with **one paste** in your terminal.

### macOS / Linux

```bash
mkdir -p ~/.claude/skills/seedance-loop-prompt ~/.claude/skills/frontend-design && \
curl -L -o ~/.claude/skills/seedance-loop-prompt/SKILL.md https://raw.githubusercontent.com/danielpaulai/website-design/main/.claude/seedance-loop-prompt/SKILL.md && \
curl -L -o ~/.claude/skills/frontend-design/SKILL.md https://raw.githubusercontent.com/danielpaulai/website-design/main/.claude/frontend-design/SKILL.md
```

### Windows (PowerShell)

```powershell
New-Item -ItemType Directory -Force -Path "$HOME\.claude\skills\seedance-loop-prompt"; `
New-Item -ItemType Directory -Force -Path "$HOME\.claude\skills\frontend-design"; `
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/danielpaulai/website-design/main/.claude/seedance-loop-prompt/SKILL.md" -OutFile "$HOME\.claude\skills\seedance-loop-prompt\SKILL.md"; `
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/danielpaulai/website-design/main/.claude/frontend-design/SKILL.md" -OutFile "$HOME\.claude\skills\frontend-design\SKILL.md"
```

### Verify

Quit Claude Code fully (`Cmd+Q` on Mac, full exit on Windows), reopen with `claude`, then ask:

```
List your installed skills.
```

You should see **both** `seedance-loop-prompt` and `frontend-design` in the response. ✅

---

## Step 3 / Create a KIE.AI account + top up $5 (5 min)

KIE.AI is the service we'll use to render the video prompts you write during the session.

1. Go to <https://kie.ai>
2. Click **Sign Up** — email or Google login both work
3. Once logged in, find the **Billing** or **Credits** section
4. Top up **$5 USD** (a 10-second 1080p Seedance render costs a small fraction of a dollar — $5 covers many test renders)
5. Keep this dashboard tab bookmarked

✅ Step done when you can see at least $5 of credit on your account.

---

## Step 4 / Create a GitHub account (3 min)

We'll use GitHub during the session to store your project. **Just sign up — don't create a repository yet.** We'll do that together.

1. Go to <https://github.com>
2. Click **Sign up** (top right)
3. Use your real email — you'll need to verify it
4. Pick a username you're happy with (it'll appear in your project URLs forever)
5. Verify your email when GitHub sends the link

✅ Step done when you can log in and see your GitHub dashboard.

---

## Step 5 / Create a Vercel account (3 min)

Vercel is the service we'll use to deploy your finished website. **Just sign up — don't create a project yet.** We'll deploy together.

1. Go to <https://vercel.com>
2. Click **Sign Up**
3. Choose **Continue with GitHub** — this links your accounts now and saves a step in the session
4. Authorize Vercel to access your GitHub when prompted
5. Land on the Vercel dashboard

✅ Step done when you can see your Vercel dashboard logged in.

---

## Warmup task — generate one Seedance prompt (5 min)

This is optional but **highly recommended.** Attendees who complete the warmup save 30+ minutes during the session because they already understand what the skill outputs.

Open Claude Code:

```bash
claude
```

Paste this prompt and press Enter:

> I want to use the seedance-loop-prompt skill. Generate a Seedance 2 prompt for a 6-second seamless looping background video of a hand-poured espresso into a porcelain cup. The cafe is called "Quarter Turn".

Claude Code activates the Seedance skill and produces a full structured output: creative direction, dense single-paragraph prompt, twelve-block breakdown, two alternate variants, and generation notes.

Read the output. Notice how a vague three-sentence brief becomes a cinema-grade prompt with named cinematographers, specific lens millimeters, film stocks, BRDF material descriptors, and explicit loop mechanics.

**Optional bonus:** paste the primary prompt into your KIE.AI dashboard and render the video. Costs roughly $0.30 of your $5. Seeing the end-to-end flow once before class makes the live session click immediately.

---

## Before you arrive — think about ONE thing

Spend 10 minutes imagining the project you'd like to build in the session. The format is simple:

- **A subject** — a product, a brand, a fictional firm, an artist, a place, anything
- **A 6–10 second looping video** that shows it cinematically
- **A single-page website** built around that loop

Don't overthink it. Don't write anything down. Just have the vision in your head when you walk in. The skill turns vision into prompt; the prompt turns into video; the video becomes the hero of a website you'll deploy live before the session ends.

---

## Verify everything is ready

Tick all of these before the session starts:

- [ ] `claude --version` prints a version number in your terminal
- [ ] Running `claude` opens Claude Code and you can type to it
- [ ] Asking Claude "list your installed skills" shows **both** `seedance-loop-prompt` and `frontend-design`
- [ ] You can log into <https://kie.ai> and see at least **$5** of credit
- [ ] You can log into <https://github.com> and see your dashboard
- [ ] You can log into <https://vercel.com> and see your dashboard
- [ ] (Optional but recommended) You generated one Seedance prompt with the skill
- [ ] You have a working internet connection

When the boxes are checked — you're ready. See you in the session.

---

## Troubleshooting

### `npm: command not found`

You don't have Node.js installed. Get the **LTS** version from <https://nodejs.org>, then close and reopen your terminal before re-running the install command.

### `claude: command not found` (after installing)

Close the terminal completely and open a new one. If still failing on macOS:

```bash
echo 'export PATH="$PATH:$(npm prefix -g)/bin"' >> ~/.zshrc && source ~/.zshrc
```

Then retry `claude --version`.

### Skills don't appear after Step 2

Quit Claude Code fully (`Cmd+Q` on Mac, full exit on Windows) and reopen with `claude`. Skills are loaded at startup — if you didn't restart, they won't show up.

### KIE.AI top-up fails

Try a different payment method. If still failing, message the instructor — we have backup video services we can switch to during the session (Higgsfield, Runway, Kling).

### GitHub asks for SMS / phone verification

Use your real number. GitHub uses it for security only. They won't spam you.

### Vercel "Continue with GitHub" doesn't work

Sign up with email instead. We can link the GitHub account during the session in 30 seconds.

### Still stuck

Message the instructor before the session starts. Don't show up unable to install — we'll lose group time fixing setup instead of building.

---

## What you'll do in the session

With this stack ready, the workshop flow is:

1. You describe a subject and a website concept to Claude Code
2. The Seedance skill turns your video idea into a cinema-grade prompt
3. You paste the prompt into KIE.AI to render a real video
4. The Frontend Design skill helps you build the website around that video
5. We push to GitHub and deploy to Vercel — all in one session
6. You leave with a live URL of a real website with your own AI-generated video as its hero

See you tomorrow.
