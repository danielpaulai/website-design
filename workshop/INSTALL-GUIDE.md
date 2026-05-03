# Pre-Class Setup — Read this BEFORE the workshop

**This is your pre-flight setup. Complete it before the session starts.** Total time: ~20 minutes.

By the end you will have:

- Claude Code installed on your computer
- The two skills we'll use during the workshop installed
- A KIE.AI account with $5 of credit (for rendering video)
- A GitHub account
- A Vercel account

You don't need to read every word — just follow each step in order. If something fails, jump to **Troubleshooting** at the bottom.

---

## Step 1 / Install Claude Code (5 min)

> Important: we're installing **Claude Code** (the command-line tool), not Claude Desktop (the chat app). They're different products. The workshop uses Claude Code.

### macOS

Open the **Terminal** app (`Cmd+Space` → type "Terminal" → Enter) and paste this line:

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

In the same terminal, type:

```bash
claude
```

A browser tab opens asking you to log into your Anthropic account. Complete the login. When you see Claude Code's prompt waiting for input, you're done with Step 1.

### Verify

In a new terminal, run:

```bash
claude --version
```

You should see a version number. Step 1 done.

---

## Step 2 / Install the two workshop skills (3 min)

We'll use two skills during the session:

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

Close Claude Code completely (`Cmd+Q` on Mac, fully exit on Windows), reopen it with `claude`, then ask:

```
List your installed skills.
```

You should see **both** `seedance-loop-prompt` and `frontend-design` in the response. Step 2 done.

---

## Step 3 / Create a KIE.AI account and top up $5 (5 min)

KIE.AI is the service we'll use to render the video prompts you write during the session.

1. Go to <https://kie.ai>
2. Click **Sign Up** — email or Google login both work
3. Once logged in, find the **Billing** or **Credits** section in the dashboard
4. Top up **$5 USD** (a 10-second 1080p Seedance render costs a small fraction of a dollar — $5 covers many test renders)
5. Keep the dashboard tab open — you'll paste prompts here during the session

Step 3 done when you can see at least $5 of credit on your account dashboard.

---

## Step 4 / Create a GitHub account (3 min)

We'll use GitHub during the session to store your project. **You only need to sign up — don't create a repository yet.** We'll do that together.

1. Go to <https://github.com>
2. Click **Sign up** (top right)
3. Use your real email — you'll need to verify it
4. Pick a username you're happy with (it'll appear in your project URLs)
5. Verify your email when GitHub sends the link

Step 4 done when you can log in to <https://github.com> and see your dashboard.

---

## Step 5 / Create a Vercel account (3 min)

Vercel is the service we'll use to deploy the website you build. Same idea — **just sign up, don't create a project yet**. We'll deploy together in the session.

1. Go to <https://vercel.com>
2. Click **Sign Up**
3. Choose **Continue with GitHub** — this links your accounts now and saves a step in the session
4. Authorize Vercel to access your GitHub when prompted
5. You'll land on the Vercel dashboard

Step 5 done when you can see the Vercel dashboard logged in.

---

## Verify everything is ready

Tick all of these before the session starts:

- [ ] `claude --version` prints a version number in your terminal
- [ ] Running `claude` opens Claude Code and you can type to it
- [ ] Asking Claude "list your installed skills" shows **both** `seedance-loop-prompt` and `frontend-design`
- [ ] You can log into <https://kie.ai> and see at least **$5** of credit
- [ ] You can log into <https://github.com> and see your dashboard
- [ ] You can log into <https://vercel.com> and see your dashboard
- [ ] You have a working internet connection

When all seven boxes are checked — you're ready. See you in the session.

---

## Troubleshooting

### `npm: command not found`

You don't have Node.js installed. Get the **LTS** version from <https://nodejs.org>, then close and reopen your terminal before re-running the install command.

### `claude: command not found` (after installing)

Close the terminal completely and open a new one. If still failing on macOS, run:

```bash
echo 'export PATH="$PATH:$(npm prefix -g)/bin"' >> ~/.zshrc && source ~/.zshrc
```

Then retry `claude --version`.

### Skills don't appear after Step 2

Close Claude Code fully (`Cmd+Q` on Mac, fully exit on Windows), then reopen with `claude`. Skills load at startup — if you didn't restart, they won't show up.

### KIE.AI top-up fails

Try a different payment method. If still failing, message the instructor — we have a backup video service we can switch to during the session.

### GitHub asks for SMS / phone verification

Use your real phone number — GitHub uses it for security only. They won't spam you.

### Vercel "Continue with GitHub" doesn't work

Sign up with email instead. We can link the GitHub account later in the session. It just costs an extra minute.

### Still stuck

Message the instructor before the session starts — don't show up unable to install, we'll lose group time fixing setup instead of building.

---

## What you'll do in the session

With this stack ready:

1. You'll describe a website concept and an architecture firm to Claude Code
2. The Seedance skill will turn your video idea into a cinema-grade prompt
3. You'll paste the prompt into KIE.AI to render the video
4. The Frontend Design skill will help you build the website around that video
5. We'll push it to GitHub and deploy it on Vercel — all in one session

See you in the room.
