# AERO Notes

A Croatian-first, local-first Liquid Glass notes application.

## Start

```bash
npm install
npm run dev
```

Open the URL printed by Vite. Notes, folders and PDFs are saved locally in IndexedDB.

## Implemented

- Create, edit, pin, favorite, archive, delete and restore notes; autosave rich text and titles.
- TipTap formatting: headings, bold, italic, underline, highlight, lists, tasks, tables, quotes, links, images, undo/redo.
- Folder creation, renaming, deletion and note browsing by folder.
- PDF upload, persistent storage, page rendering, zoom, text extraction for the current page, text copy and current-page search.
- Note search, Markdown text export, browser print-to-PDF, JSON note/folder backup.
- Light/dark Liquid Glass themes, responsive mobile navigation, focus mode.
- Pomodoro timer and session count (timer state is not persisted).
- AI UI calls `/api/ai` but requires your own backend configuration.

## AI backend

For secure server-side AI, run the optional `server.mjs` server instead of the Vite dev server. Set `OPENAI_API_KEY` in the server environment; never put it in client code. `server.mjs` serves built assets from `dist` and accepts POST `/api/ai`. Run `npm run build` then `OPENAI_API_KEY=... node server.mjs`.

## Current limitations

No DOCX export, document-wide PDF search, PDF annotations, PDF-to-editable conversion, drag-and-drop nesting, note templates, spaced-repetition flashcards, quiz engine, authentication or cloud sync yet. JSON backups do not contain PDFs and import is not yet supported. PDF text extraction requires an embedded text layer; scanned PDFs need OCR. No real-time collaboration. This is a working foundation, not the complete feature set of the product brief.
