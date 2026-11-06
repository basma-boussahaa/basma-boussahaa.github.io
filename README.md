# Basma El Amel Boussaha

Source for my personal website: **https://basma-boussahaa.github.io**

I'm a Principal Researcher at the [Technology Innovation Institute (TII)](https://www.tii.ae), where I lead the Arabic & Dialects team. We build Arabic foundation models in the Falcon family (Falcon-H1-Arabic, Falcon-Arabic, Falcon-Emirati, Falcon-OCR-Arabic) and evaluation resources such as QIMMA and the Open Arabic LLM Leaderboard.

[Google Scholar](https://scholar.google.com/citations?user=i6dzV84AAAAJ) · [Hugging Face](https://huggingface.co/basma-b) · [LinkedIn](https://www.linkedin.com/in/basma-b/) · [X](https://x.com/BasmaEAB)

## Structure

The site is plain HTML, CSS and JavaScript, with no build step or dependencies.

| Path | Contents |
| --- | --- |
| `index.html` | Page content and sections |
| `style.css` | Styles, light and dark themes |
| `main.js` | Publication list (`PUBS`), filters, theme toggle |
| `assets/publications/` | Papers, slides and posters hosted with the site |
| `images/` | Profile photo |
| `404.html` | Not-found page |

## Updating

- **Add a publication:** add an entry at the top of the `PUBS` array in `main.js`.
- **Run it locally:** `python3 -m http.server` in this folder, then open http://localhost:8000.
- **Deploy:** push to `master`. GitHub Pages publishes the site within a minute or two.
- After changing `style.css` or `main.js`, increase the `?v=` number on their links in `index.html` so browsers load the new files.

## License

© Basma El Amel Boussaha. All rights reserved for the text, photos and papers.
