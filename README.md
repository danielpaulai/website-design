# Website Design — Workshop Materials

Source repository for a hands-on workshop on building cinema-grade looping background videos with Seedance 2 and remixing them into architectural firm websites with Claude Code.

The materials are organised so you can pull whatever you need without cloning the whole repo.

---

## For workshop attendees — start here

If you're attending the workshop, read **[workshop/INSTALL-GUIDE.md](workshop/INSTALL-GUIDE.md)** first. It walks you through installing Claude Code, the Seedance skill, the Frontend Design skill, and creating a KIE.AI account in about 15 minutes.

### Install the Seedance Loop Prompt Builder skill (one command)

```bash
mkdir -p ~/.claude/skills/seedance-loop-prompt
curl -L -o ~/.claude/skills/seedance-loop-prompt/SKILL.md \
  https://raw.githubusercontent.com/danielpaulai/website-design/main/.claude/seedance-loop-prompt/SKILL.md
```

Restart Claude Code and the skill activates. That's the whole install.

---

## What's in this repo

```
.
├── README.md                                  this file
├── .claude/
│   └── seedance-loop-prompt/
│       └── SKILL.md                           the Seedance prompt-builder skill
└── workshop/
    ├── INSTALL-GUIDE.md                       student-facing pre-flight setup
    ├── INSTRUCTOR-NOTES.md                    distribution + pre-workshop notes (instructor only)
    └── aurabuild/
        ├── CREATIVE-BRIEF.md                  fictional firm + website creative brief
        └── REMIX-BRIEF.md                     brief for remixing the TalentHub React component into AURA BUILD
```

---

## The Seedance skill in one paragraph

The skill at [`.claude/seedance-loop-prompt/SKILL.md`](.claude/seedance-loop-prompt/SKILL.md) turns vague video ideas into hyper-detailed Seedance 2 prompts — built around a **12-block architecture** (genre, scene, subject anatomy, camera, lighting, color science, materials, atmospherics, timing, text, loop mechanics, negative prompts) and a **5-class loop topology** (rotational, breathing, particle-cycle, palindrome, masked-transition). Includes five worked examples spanning luxury cinema, tech-minimal, gourmet sensory, editorial fashion, and surreal-poetic genres. Outputs the prompt + a structured breakdown + two alternate variants + generation notes ready to paste into KIE.AI.

---

## Workshop demo project — AURA BUILD

The workshop ends with attendees building a website for a fictional Singapore architecture firm called **AURA BUILD**, with the AURELIA ARENA build-up video as the looping hero. The two briefs in [`workshop/aurabuild/`](workshop/aurabuild/) are paste-ready inputs for AI website builders (Bolt, Lovable, v0.dev).

---

## License

Workshop materials are shared for educational use. The Seedance skill and creative briefs are authored by Daniel Paul; do not republish without attribution.
