# Thirukkural 504 · Saga Scroll (Cinematic Edition)

An interactive, scrolling web experience that tells the story of **Thirukkural 504**, using the work of the sage **Thiruvalluvar**. It has a cinematic hero page, a fire-text kural page, cinematic artwork pages, seven word-by-word pages and a short closing story.

## 📖 Kural Description

### Thirukkural 504

**குணம் நாடிக் குற்றமும் நாடி அவற்றுள்  
மிகை நாடி மிக்க கொளல்**

**Meaning:**

Examine a person's good qualities and faults. Compare both carefully and determine which side is greater. A person should be accepted or selected based on the qualities that prevail.

**Explanation:**

This Kural teaches us not to judge a person based on a single mistake or a single good quality. We should carefully consider both the strengths and weaknesses of a person. After comparing them, we should make a fair decision based on what is greater.

The central message of the Kural is **balanced judgment** — examine, compare and then decide.

## Team: BYTE CODE

| Name | Register No. |
|------|--------------|
| AKILAN P | 7376252AL105 |
| DHARNISH B | 7376252AL144 |
| GOKUL B | 7376251CS184 |

## Project structure

```
thirukkural-project/
├── index.html      # page structure
├── style.css       # all styling and animations
├── script.js       # page building, navigation, effects
├── README.md
└── assets/
    ├── thiruvalluvar.jpg
    ├── artwork-sheet-1.jpg
    └── artwork-sheet-2.jpg
```

## How to run

1. Unzip the folder and keep all files together, including `assets/`.
2. Open `index.html` in a modern browser (Chrome, Edge or Firefox).
3. Scroll, use the arrow keys, or click the dots on the right to move between pages.

An internet connection is needed once to load the Google Fonts used for Tamil and English text.

## Pages

1. **Hero:** Thiruvalluvar on a golden sunrise backdrop, with drifting Tamil letters and animated sea.
2. **Kural:** the kural in fire-style lettering with rising sparks.
3. **Cinematic pages (2):** slow camera pan and zoom, letterbox bars, light sweep and subtitles.
4. **Seven word pages:** each word has Tamil and English meanings, hover-to-reveal morals, small info boxes, a word strip and a picture collage cut from the artwork sheets.
5. **Story:** *The Two Ministers*, a short bilingual tale of the kural.

## Technologies

HTML5, CSS3 (animations, masks, SVG filters) and vanilla JavaScript. No frameworks or build step.

## Notes

- Custom cursor: a plain Tamil letter "அ".
- Moving fire and wave effects are heavier on older devices; `prefers-reduced-motion` is respected.
