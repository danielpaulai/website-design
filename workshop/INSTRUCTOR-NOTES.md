# Instructor Notes — Pre-Workshop Checklist & Distribution

For Daniel only. Not for students.

---

## Distribution decision (made)

The Seedance and Frontend Design skills are now distributed directly from the GitHub repo at `github.com/danielpaulai/website-design`. Students install both with one paste in their terminal — see Step 2 of [PRE-CLASS-ACTIVITY.md](PRE-CLASS-ACTIVITY.md).

This means the only thing you need to share with attendees is the **PRE-CLASS-ACTIVITY.md** itself (or a link to a published version of it — Notion, Google Doc, Vercel page, whatever you prefer).

The repo URL itself is not promoted in the pre-class doc. Students get the curl commands, but not a "browse the repo" link or a tour of the workshop materials. Reveal the repo during the session.

---

## Hosting the pre-class activity for attendees

You have a few options for distributing PRE-CLASS-ACTIVITY.md to attendees:

### Option A — Notion (easiest, most familiar)

1. Open Notion → New page → import the markdown from `workshop/PRE-CLASS-ACTIVITY.md`
2. Click **Share** → **Share to web** → **Allow editing: off**
3. Copy the link and send it to attendees

### Option B — Google Docs

1. Create a new Google Doc titled "Pre-Class Setup"
2. Paste the markdown contents (Google Docs auto-formats reasonably well — clean up code blocks manually if needed)
3. **Share** → **Anyone with the link can view**
4. Copy and send

### Option C — Vercel preview page (most polished, slight extra effort)

If you want it to feel like a workshop landing page:

1. Use the Frontend Design skill in Claude Code to generate a single-page Next.js site that just renders the install guide
2. Deploy to Vercel — instant URL like `pre-class.aurabuild.workshop.app`
3. Send that URL

This option doubles as a teaser of what they're about to build.

### Option D — Direct file (lowest tech)

Email or Slack the `PRE-CLASS-ACTIVITY.md` file as an attachment. Works, but markdown rendering depends on whatever app the attendee opens it with.

---

## Pre-workshop checklist (do tonight)

- [ ] Pick a distribution method above and publish the PRE-CLASS-ACTIVITY.md
- [ ] Send the link to attendees at least 2 hours before the session
- [ ] Run the install steps yourself in a fresh terminal — catches any broken steps caused by repo updates
- [ ] Confirm your own KIE.AI account has sufficient credit (you'll need to demo)
- [ ] Confirm your Vercel + GitHub accounts are linked (saves a minute during the deploy demo)
- [ ] Have a backup video service URL ready in case KIE.AI has an outage tomorrow (Higgsfield, Runway, Kling all work)
- [ ] Pull up your own `github.com/danielpaulai/website-design` repo in a browser tab so you can show it during the session

---

## During the workshop

- Open the session by having everyone hit the **Verify** checklist near the bottom of the pre-class activity. Anyone who fails the checklist gets help in the first 10 minutes, not 40 minutes in.
- Have a screenshare of YOUR working terminal so attendees can match what they see.
- The two most common install failures from past Claude Code workshops:
  1. `npm: command not found` → push them to install Node.js LTS
  2. `claude: command not found` after install → terminal restart fixes it 90% of the time
- The "skills don't show up" failure is almost always because they didn't quit Claude Code fully before reopening it. Show them how to fully quit (Cmd+Q on Mac).

---

## After the workshop

- Save attendees' actual generated prompts and rendered videos as case studies
- Note which steps caused friction for the most people — fold fixes back into PRE-CLASS-ACTIVITY.md for the next workshop
- If the workshop went well, consider publishing the PRE-CLASS-ACTIVITY.md publicly as a "How to install Claude Code skills" tutorial — it's a useful primer beyond this specific workshop
