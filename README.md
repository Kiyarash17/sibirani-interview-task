# Word Translation Dashboard

A React + TypeScript single-page application for managing and viewing keyword translations with persistent storage in `localStorage`.

## 🚀 Features

- **Management Dashboard**
  - View and inline-edit translations for all keywords and languages
  - Add a new keyword (with an initial translation in one language; others start empty)
  - Drag-and-drop reorder of keywords (using [@dnd-kit](https://github.com/clauderic/dnd-kit))
- **Public View**
  - Read-only list of keywords and their translations
  - Switch display language on the fly
  - “— no translation —” placeholder for missing translations
- **Data Persistence**
  - All data stored under the key `translation-data` in `localStorage`
  - Automatic sync after every edit, add, or reorder
- **Responsive Design**
  - Mobile-friendly layouts and inputs
- **Type-safe & Fast**
  - Built with TypeScript + SWC (via Vite) for lightning-fast HMR and builds

## 🛠 Tech Stack

- **Framework & Language**  
  - React  
  - TypeScript + SWC  
- **Build Tool**  
  - Vite (`react-ts` template with `@vitejs/plugin-react-swc`)  
- **Routing**  
  - react-router-dom  
- **Drag & Drop**  
  - @dnd-kit/core & @dnd-kit/sortable  
- **Styling**  
  - Tailwind CSS (optionally shadcn/ui or MUI)
- **Animation**  
  - Motion Framer

## 📁 Project Structure

```
word-translation-dashboard/
├─ src/
│  ├─ components/
│  │  ├─ AddKeywordForm.tsx
│  │  ├─ DraggableKeywordList.tsx
│  │  └─ …  
│  ├─ context/
│  │  └─ TranslationContext.tsx
│  ├─ data/
│  │  └─ initialData.ts
│  ├─ pages/
│  │  ├─ Dashboard.tsx
│  │  └─ PublicView.tsx
│  ├─ utils/
│  │  └─ storage.ts
│  ├─ App.tsx
│  └─ main.tsx
├─ public/
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ README.md
```


## 🚀 Installation & Running Locally

1. Clone or unzip the project:
   ```bash
   git clone <repo-url>   # or unzip word-translation-dashboard.zip
   cd word-translation-dashboard
   ```
2. Install dependencies and start the development server:
   ```bash
   yarn install
   yarn dev
   ```
3. Open your browser at:
   - Management Dashboard: `http://localhost:5173/dashboard`
   - Public View:          `http://localhost:5173/view`

## 🔧 Optional Enhancements

_(Add any you’ve implemented, e.g.)_  
- Dark mode toggle (via Tailwind’s `dark:` utilities)  
- Search/filter input above the keyword list  
- Animated language-switch transitions with Framer Motion  

## ✅ Manual Testing

- **Add** a new keyword → verify it appears in both Dashboard and Public View  
- **Edit** translations inline → verify changes persist on page reload  
- **Reorder** via drag-and-drop → confirm `localStorage` order and UI match  
- **Switch** languages in both views → expect correct translations or placeholder  

## 📞 Contact

- **Author:** Kiyarash Hadidian  
- **Email:** kiyarashhadidian@gmail.com 
- **GitHub:** github.com/Kiyarash17