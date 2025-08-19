# Footwork2Framework (F2F)

A research/demo site exploring Bharatanatyam motion capture, visualization, and cross-avatar retargeting—packaged as a modern web app with smooth UX for showcasing videos, meshes, and dataset artifacts.

**Live site:** [https://t2025.github.io/Footwork2Framework/](https://t2025.github.io/Footwork2Framework/)

---

## Table of Contents

- [Features](#features)
- [Quickstart](#quickstart)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [Data & Content](#data--content)
- [Development Notes](#development-notes)
- [Deployment](#deployment)
- [Contact](#contact)

---

## Features

- **Video galleries** for side-by-side/triple-frame comparisons of human choreography, mesh outputs, and stylized renders  
- **3D/mesh previews** highlighting pose fidelity and style transfer behavior  
- **Dataset overview** and usage notes for the F2F collection  
- **Responsive UI** built with Vite + React + Tailwind (with shadcn/ui patterns)
- This diagram illustrates the **data preprocessing pipeline** for F2F capturing the journey from raw recordings to cleaned, segmented clips ready for motion capture and visualization:
 ![alt-text](https://bharatnatyambucket.s3.us-east-1.amazonaws.com/data_preprocessing.png)

---

## Quickstart

### Prerequisites
- Node.js ≥ 18  
- npm ≥ 9 (or pnpm/yarn)

### Install & Run
```bash
# clone
git clone https://github.com/t2025/Footwork2Framework.git
cd Footwork2Framework

# install all workspaces
npm install

# start dev server
npm run dev
```

---

## Project Structure

```
Footwork2Framework/
├─ client/           # Frontend app (Vite + React + Tailwind)
├─ server/           # API server (TypeScript). Optional for static site hosting
├─ shared/           # Shared TypeScript types & utilities
├─ drizzle.config.ts # Drizzle ORM config (schema/migrations)
├─ tailwind.config.ts
├─ vite.config.ts
└─ package.json
```

---

## Scripts

### At the root
- `npm run dev` — start frontend (and server if configured)  
- `npm run build` — build frontend (and server if applicable)  
- `npm run preview` — preview the production build  
- `npm run lint` — lint code  

### Inside `client/`
- `npm run dev` — Vite dev server  
- `npm run build` — production build  
- `npm run preview` — preview static build  

### Inside `server/`
- `npm run dev` — start API with nodemon/ts-node  
- `npm run build` — compile server to `dist/`  
- `npm start` — run compiled server  

---

## Environment Variables

Create a `.env` file in the root with keys such as:
```bash
VITE_PUBLIC_BASE="/Footwork2Framework/"
API_URL="http://localhost:3000"
```

---

## Data & Content

- Video and image assets should be optimized (use `.mp4` / `.webm` for videos, compressed images).  
- Large files should be stored externally and linked.  
- Captions and alt-text should be added for accessibility.  

---

## Development Notes

- **Stack:** Vite, React, Tailwind CSS (shadcn/ui conventions)  
- **Assets:** compress large video/image files before committing  
- **Accessibility:** ensure captions and alt text for videos and images  

---

## Deployment

- Default deployment is **GitHub Pages**.  
- Set `VITE_PUBLIC_BASE="/Footwork2Framework/"`.  

Build and deploy:
```bash
cd client
npm run build
```

Push the built static files to the `gh-pages` branch or configure via GitHub Actions.

---


## Contact

For data access or collaboration inquiries:  
*{asudarsh, lipishan, tanviran, inwogu, rohini}@buffalo.edu*  
