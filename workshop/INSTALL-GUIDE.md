# Workshop Pre-flight Setup

**Read this BEFORE the workshop starts. It takes ~15 minutes.**

By the end of this guide you will have:

- Claude Code installed on your machine
- The **Seedance Loop Prompt Builder** skill installed (the one we'll use to write video prompts)
- The **Frontend Design** skill installed (the official Anthropic UI/design helper)
- A **KIE.AI** account topped up with $5 of credit to actually render your videos

If anything fails, jump to the **Troubleshooting** section at the bottom — don't get stuck.

---

## Step 1: Install Claude Code (5 min)

Claude Code is the command-line tool that runs the skills.

### On macOS

Open the Terminal app (Cmd+Space → type "Terminal") and paste:

```bash
npm install -g @anthropic-ai/claude-code
```

If you don't have `npm` yet, install Node.js first from <https://nodejs.org> (pick the LTS version), then re-run the command above.

### On Windows

Open PowerShell (Windows key → type "PowerShell") and paste:

```powershell
npm install -g @anthropic-ai/claude-code
```

If you don't have `npm`, install Node.js LTS from <https://nodejs.org> first.

### Verify it worked

In the same terminal, run:

```bash
claude --version
```

You should see a version number print. If you see "command not found," restart your terminal and try again.

### First-time login

Run `claude` in any folder. It will open a browser window asking you to log in with your Anthropic account. Complete the login. You're done with Step 1 when you see Claude Code's prompt waiting for input.

---

## Step 2: Install the Seedance Loop Prompt Builder skill (3 min)

This is the custom skill we built that turns your video ideas into cinema-grade Seedance prompts.

### One command — pulls directly from GitHub

#### On macOS / Linux

Open Terminal and paste:

```bash
mkdir -p ~/.claude/skills/seedance-loop-prompt && curl -L -o ~/.claude/skills/seedance-loop-prompt/SKILL.md https://raw.githubusercontent.com/danielpaulai/website-design/main/.claude/seedance-loop-prompt/SKILL.md
```

#### On Windows (PowerShell)

```powershell
New-Item -ItemType Directory -Force -Path "$HOME\.claude\skills\seedance-loop-prompt"; Invoke-WebRequest -Uri "https://raw.githubusercontent.com/danielpaulai/website-design/main/.claude/seedance-loop-prompt/SKILL.md" -OutFile "$HOME\.claude\skills\seedance-loop-prompt\SKILL.md"
```

That's the whole install — no download, no move, no manual steps.

### 2c. Verify

Restart Claude Code (close it, run `claude` again) and type:

```
Show me what skills you have available.
```

You should see `seedance-loop-prompt` in the list. If you do — Step 2 done.

---

## Step 3: Install the Frontend Design skill (2 min)

This is Anthropic's official skill for building production-grade UI. We'll use it later in the workshop for the website pieces around the video.

### Option A: Use the /plugin command (try this first)

Inside Claude Code, type:

```
/plugin marketplace add anthropics/claude-plugins-official
/plugin install frontend-design@claude-plugins-official
```

If both commands work — done.

If you see **`/plugin isn't available in this environment`**, use Option B below.

### Option B: Manual install (always works)

Open a regular terminal (not inside Claude Code) and paste:

#### macOS / Linux

```bash
mkdir -p ~/.claude/skills/frontend-design
curl -L -o ~/.claude/skills/frontend-design/SKILL.md \
  https://raw.githubusercontent.com/anthropics/claude-plugins-official/main/plugins/frontend-design/skills/frontend-design/SKILL.md
```

#### Windows (PowerShell)

```powershell
New-Item -ItemType Directory -Force -Path "$HOME\.claude\skills\frontend-design"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/anthropics/claude-plugins-official/main/plugins/frontend-design/skills/frontend-design/SKILL.md" -OutFile "$HOME\.claude\skills\frontend-design\SKILL.md"
```

### Verify

Restart Claude Code. Ask:

```
List your installed skills.
```

You should now see both `seedance-loop-prompt` and `frontend-design`.

---

## Step 4: Create a KIE.AI account and top up $5 (5 min)

KIE.AI is the service we'll use to actually render the prompts into video.

1. Go to <https://kie.ai>
2. Click **Sign Up** and create an account (email or Google login both work)
3. Once logged in, find the **Billing** or **Credits** section
4. Top up **$5 USD** — this covers many test renders during the workshop
5. Find the **API Key** or **Dashboard** section and keep that tab open — you'll paste prompts here during the workshop

A 10-second 1080p Seedance render typically costs a small fraction of $1, so $5 is plenty for the session.

---

## Verify everything is ready

Tick these off before the workshop starts:

- [ ] `claude --version` prints a version number
- [ ] Running `claude` opens Claude Code and you can type to it
- [ ] Asking Claude "list your skills" shows **both** `seedance-loop-prompt` and `frontend-design`
- [ ] You can log into <https://kie.ai> and see at least $5 of credit on your account
- [ ] You have a working internet connection (we'll be hitting both Claude and KIE.AI during the session)

If all five are checked — you're ready. See you tomorrow.

---

## Troubleshooting

### "npm: command not found"

You don't have Node.js installed. Get the LTS version from <https://nodejs.org>, then close and reopen your terminal.

### "claude: command not found" (after install)

Close the terminal completely and open a new one. If still failing on macOS, run:

```bash
echo 'export PATH="$PATH:$(npm prefix -g)/bin"' >> ~/.zshrc
source ~/.zshrc
```

### "/plugin isn't available in this environment"

Use the manual install in Step 3 Option B. Both skills work the same way once they're in `~/.claude/skills/`.

### Skills don't show up after install

Make sure you fully closed Claude Code (Cmd+Q on Mac, fully exit on Windows) and re-opened it. Skills are loaded at startup.

### KIE.AI top-up doesn't go through

Try a different payment method. If still failing, use a backup video service — your instructor will share alternatives during the workshop.

### Still stuck?

Message your instructor before the session — don't show up unable to install, we'll lose time fixing setup instead of building.

---

## What you'll do tomorrow

With this stack in place, the workshop flow is:

1. You describe a product, scene, or concept to Claude Code
2. The Seedance skill turns it into a cinema-grade prompt
3. You paste the prompt into KIE.AI
4. KIE.AI renders the video
5. We use the Frontend Design skill to build the website around it

See you in the room.
