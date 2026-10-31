# Tumhara Taj Mahal 🌙

A little moonlit world, made as a personal gift. Open an ivory envelope to reveal an illustrated Taj Mahal, discover a Hinglish note, and replay the surprise whenever you like.


## Features

- Animated envelope opening and a moonlit Taj Mahal reveal.
- Custom SVG monument with four minarets, gardens, and a reflection pool.
- Personal letter in a modal dialog, with close and return controls.
- Replay button to start the experience again.
- Responsive layouts for phones and desktops.
- Keyboard controls, focus handling, and reduced-motion support.
- No backend, accounts, tracking, external libraries, or build step.

## Run locally

Clone the repository:

```sh
git clone https://github.com/kochi0903/gift-taj-mahal.git
cd gift-taj-mahal
```

Open `index.html` in a modern browser. Keep all four website files in the same folder. JavaScript must be enabled for the interactive experience; a link to the illustration is available when it is disabled.

You can also serve this folder with an editor's local web server, such as VS Code Live Server.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Invitation, dedication, letter, and page metadata |
| `style.css` | Colors, typography, layout, and animation |
| `script.js` | Gift opening, stars, letter controls, and replay |
| `taj.svg` | Original Taj Mahal illustration |

## Make it your own

- Edit the invitation, dedication, and `#letter` content in `index.html` to personalize the message and sign-off.
- Adjust the color variables at the top of `style.css` to change the theme.
- Edit `taj.svg` to customize the illustration.
- Keep HTML element IDs consistent with the selectors in `script.js` so the controls continue to work.

## Publish

Upload this folder to a static website host. There is no install or build command; `index.html` is the entry point. Include `style.css`, `script.js`, and `taj.svg` beside it.

## Quick manual check

1. Open the page on a phone and desktop; check that text and controls fit.
2. Choose **Apna gift kholo** and confirm the monument appears.
3. Choose **Ek baat aur…** and check the personal letter.
4. Close the letter using its buttons or Escape.
5. Choose **Phir se kholo** and confirm the invitation returns.
6. Navigate with Tab and Enter, and enable your system's reduced-motion preference to check the simpler transitions.
