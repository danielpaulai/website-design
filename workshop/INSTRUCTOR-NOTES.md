# Instructor Notes — Distribution & Pre-Workshop Checklist

These notes are **for Daniel only**, not for students. They cover how to actually get the materials into students' hands before tomorrow.

---

## What students need

1. The student-facing handout: [INSTALL-GUIDE.md](INSTALL-GUIDE.md)
2. The Seedance Loop Prompt Builder file: `../.claude/seedance-loop-prompt/SKILL.md`

That's it. Two files.

---

## Distributing the SKILL.md file — pick ONE method

### Option 1: Google Drive (easiest, ~2 min)

1. Open <https://drive.google.com>
2. Upload `/Users/danielpaul/Documents/Website design/.claude/seedance-loop-prompt/SKILL.md`
3. Right-click the file → **Share** → **Anyone with the link can view**
4. Copy the link
5. Paste the link into INSTALL-GUIDE.md Step 2a (replace "Your instructor will share the file via one of these:" with the Google Drive URL directly)
6. Send INSTALL-GUIDE.md to students

### Option 2: GitHub Gist (cleanest, ~3 min)

1. Open <https://gist.github.com>
2. Filename: `SKILL.md`
3. Paste the contents of `/Users/danielpaul/Documents/Website design/.claude/seedance-loop-prompt/SKILL.md`
4. Click **Create public gist**
5. Click **Raw** to get the raw URL
6. Replace Step 2a in INSTALL-GUIDE.md with this curl command:

   ```bash
   mkdir -p ~/.claude/skills/seedance-loop-prompt
   curl -L -o ~/.claude/skills/seedance-loop-prompt/SKILL.md "PASTE_RAW_GIST_URL_HERE"
   ```

   This makes Step 2 a single command — much cleaner for the workshop.

### Option 3: Slack / email attachment (lowest tech)

Just attach the SKILL.md file to whatever channel you use to talk to attendees. They drop it into Downloads and follow Step 2b in the guide as written.

### Option 4: GitHub repo (best for repeat workshops)

Create a public repo at e.g. `github.com/danielpaul/seedance-skill`, commit the SKILL.md, and the install becomes a permanent one-liner. Worth doing if you'll teach this workshop again.

---

## Pre-workshop checklist (do tonight)

- [ ] Pick a distribution method above and share the SKILL.md
- [ ] Update INSTALL-GUIDE.md Step 2a with the actual link/command
- [ ] Send INSTALL-GUIDE.md to attendees at least 2 hours before the session
- [ ] Confirm your own KIE.AI account has credit (you'll need to demo)
- [ ] Test the install yourself in a fresh terminal to catch broken steps
- [ ] Have a backup video service ready if KIE.AI has an outage tomorrow (Higgsfield, Runway, Kling all work)

---

## During the workshop

- Open the session by having everyone run **Verify** checklist on page 4 of the guide — anyone who fails the checklist gets help in the first 10 minutes, not 40 minutes in
- Have a screenshare of YOUR working terminal so attendees can match what they see
- The two most common failures based on past Claude Code installs:
  1. `npm not found` → push them to install Node.js LTS
  2. `claude not found after install` → terminal restart fixes it 90% of the time

---

## After the workshop

- Save attendees' actual generated prompts and rendered videos as case studies
- Note which steps caused friction for the most people — fold fixes back into INSTALL-GUIDE.md before the next workshop
- If most attendees succeeded, consider publishing the SKILL.md as a public GitHub repo so future students can install in one line
