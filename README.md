# HelpDesk – Gestion des demandes

A small front-end ticket manager for IT support requests, built with plain HTML, CSS and JavaScript (no framework, no backend). Tickets are stored in the browser with `localStorage`.

## Features

- Create a ticket with a title, description, category and priority
- Display tickets as **cards** or in a **table**
- Edit and delete existing tickets (delete asks for confirmation)
- Sort tickets by **priority** (Haute > Normale > Basse) or by **category**
- Live ticket counter
- Form validation with inline error messages
- Data persists between visits (`localStorage`, key `data`)
- Responsive layout (mobile, tablet 768–1024px, desktop 1024px+)

## Live demo

https://boukrimbrahim2007.github.io/help_desk/

## Data model

Each ticket is an object:

```js
{
  id: 1,
  titre: "Écran qui ne s'allume plus",
  description: "L'écran du poste de la comptabilité reste noir au démarrage.",
  categorie: "Matériel",   // "Matériel" | "Logiciel" | "Réseau"
  priorite: "Haute"        // "Basse" | "Normale" | "Haute"
}
```

If `localStorage` is empty, three sample tickets (`dataDefult`) are loaded.

## Project structure

```
.
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js
```

## Getting started

1. Put the three files in the structure above.
2. Open `index.html` in a browser (no build step or server needed).
3. An internet connection is needed for the Font Awesome icons (loaded from a CDN).

To reset the app to the sample data, clear the `data` key in the browser's DevTools (Application > Local Storage) and reload.

## How it works

| Function | Role |
|---|---|
| `save()` | Writes the `data` array to `localStorage` |
| `searching(id)` | Returns the index of a ticket in `data` from its id |
| `verifie()` | Moves the id counter forward until it finds an unused id |
| `add(e)` | Validates the form and adds a new ticket |
| `modifie(e)` | Validates the form and replaces the ticket being edited |
| `suprime()` | Deletes the selected ticket |
| `refresh(tab = data)` | Re-renders the list (cards or table) from the array it receives |

The "Ajouter" button is switched to edit mode by the pencil icon: its click handler is swapped from `add` to `modifie`, then swapped back after saving.

## Validation

Title and description must match `/^[a-zA-Z0-9 éÉè]+$/` (letters, digits, spaces, `é`, `É`, `è`). Anything else shows "invalid input".

## Tech

- HTML5, CSS3 (variables, flexbox, grid, media queries)
- Vanilla JavaScript (DOM API, `localStorage`)
- [Font Awesome 6](https://fontawesome.com/) for icons