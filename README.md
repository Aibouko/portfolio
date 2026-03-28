# How to Add Content to Your Portfolio

Your portfolio is now **data-driven**! All content lives in `data.json` - just edit that file and your portfolio updates automatically.

---

## Adding a New Skill

Open `data.json` and find the `skills` section:

```json
"skills": {
  "root": "Dev",
  "branches": [
    {
      "name": "Game",
      "items": ["Godot", "GDScript"]
    },
    {
      "name": "Web",
      "items": ["HTML", "CSS", "JavaScript", "TailwindCSS"]
    },
    {
      "name": "Tools",
      "items": ["Git", "GitHub"]
    }
  ]
}
```

**To add a skill:**
1. Choose the branch (Game, Web, or Tools)
2. Add your skill to the `items` array

**Example** - Adding "React" to Web:
```json
{
  "name": "Web",
  "items": ["HTML", "CSS", "JavaScript", "TailwindCSS", "React"]
}
```

---

## Adding a New Project

Open `data.json` and find the `projects` array:

```json
"projects": [
  {
    "scene": "01",
    "status": "Complete",
    "title": "Your Project Name",
    "jpTitle": "Japanese Title",
    "quote": "A cool quote",
    "description": "Describe your project here...",
    "tech": ["Technology1", "Technology2"],
    "link": "https://github.com/yourusername/repo"
  }
]
```

**To add a project:**
1. Copy an existing project object
2. Change the `scene` number (03, 04, etc.)
3. Update all the fields
4. Save the file

**Example** - Adding Scene 03:
```json
{
  "scene": "03",
  "status": "In Progress",
  "title": "My New Game",
  "jpTitle": "新しいゲーム",
  "quote": "Adventure awaits",
  "description": "An exciting new game I'm working on featuring...",
  "tech": ["Godot", "C#"],
  "link": "https://github.com/Aibouko/My-New-Game"
}
```

**Status options:**
- `"Complete"` - Green badge
- `"In Progress"` - Yellow badge (add CSS if needed)

---

## Adding a Blog Post (Future Feature)

The `blog` array is ready in `data.json`:

```json
"blog": [
  {
    "date": "2026-01-15",
    "title": "How I Built My Portfolio",
    "excerpt": "A guide to creating a manga-themed portfolio...",
    "link": "blog/post-1.html"
  }
]
```

**To add blog support later:**
1. Add blog post objects to the `blog` array
2. Create blog post HTML files
3. Update `script.js` to render blog section (I'll help when ready)

---

## Updating Profile Info

Find the `profile` section:

```json
"profile": {
  "name": "Aibouko",
  "jpName": "ポートフォリオ",
  "class": "Web Developer",
  "subclass": "Game developer, Artist",
  "location": "Munich, Germany",
  "languages": "EN / DE",
  "tagline": "Game & web developer"
}
```

**Change anything** - name, location, tagline, etc.

---

## Updating Contact Links

Find the `contact` section:

```json
"contact": {
  "github": "https://github.com/Aibouko",
  "email": "mailto:atipvietnghiem@gmail.com"
}
```

**Update these** when you change your GitHub or email.

---

## Quick Reference

| Task | File to Edit | Section |
|------|--------------|---------|
| Add skill | `data.json` | `skills.branches[].items` |
| Add project | `data.json` | `projects[]` |
| Update name | `data.json` | `profile.name` |
| Change location | `data.json` | `profile.location` |
| Update email | `data.json` | `contact.email` |
| Add blog | `data.json` | `blog[]` (future) |

---

## Tips

1. **Always backup** `data.json` before making big changes
2. **Use valid JSON** - check for commas, quotes, brackets
3. **Test in browser** after editing (Ctrl+Shift+R to hard refresh)
4. **Keep descriptions short** - 1-2 sentences work best
5. **Japanese titles are optional** - leave blank if you don't have one

---

## Need Help?

If something breaks after editing `data.json`:
1. Check that all quotes, commas, and brackets are correct
2. Use a JSON validator (search "JSON validator" online)
3. Revert to the backup if needed

**Your portfolio is now super easy to maintain!** 🎮📖✨
