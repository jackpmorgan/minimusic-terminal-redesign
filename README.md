# MiniMusic Terminal

A modern, full-stack web application built with Cloudflare Workers for the backend API and React for the frontend. This template provides a production-ready starting point with seamless deployment to Cloudflare.

[cloudflarebutton]

## Features

- **Cloudflare Workers Backend**: Fast, edge-deployed API using Hono with automatic CORS, logging, and error handling.
- **React 18 Frontend**: Vite-powered, TypeScript-first with React Router, TanStack Query for data fetching, and immersive state with Zustand.
- **Beautiful UI**: shadcn/ui components, Tailwind CSS with custom design system, dark mode, animations, and responsive design.
- **Developer Experience**: Hot reload, error boundaries, client error reporting, theme toggle, and mobile-responsive hooks.
- **Production-Ready**: Bundle optimization, TypeScript strict mode, ESLint, Prettier, and Cloudflare-specific deployment scripts.
- **Extensible**: Easy API route addition via `worker/userRoutes.ts`, sidebar layout, and app layout components.
- **Performance**: Code splitting, lazy loading, and edge caching out of the box.

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Backend** | Cloudflare Workers, Hono, TypeScript |
| **Frontend** | React 18, Vite, React Router, TanStack Query, Zustand, Immer |
| **UI/UX** | Tailwind CSS, shadcn/ui (full component library), Lucide Icons, Framer Motion, Sonner (toasts) |
| **Forms & Validation** | React Hook Form, Zod |
| **Utilities** | clsx, tailwind-merge, date-fns, uuid |
| **Dev Tools** | Bun, ESLint, TypeScript 5, Wrangler |

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (recommended package manager)
- [Cloudflare CLI (Wrangler)](https://developers.cloudflare.com/workers/wrangler/install-and-update/)
- Cloudflare account (free tier works)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd minimusic-terminal-qivw0biutjsoti0blssxi
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. (Optional) Generate Worker types:
   ```bash
   bun run cf-typegen
   ```

## Development

### Run Locally

Start the development server:
```bash
bun run dev
```

- Frontend: `http://localhost:3000` (Vite dev server)
- API: `/api/*` routes handled by Worker (proxied in dev)

### Add API Routes

Edit `worker/userRoutes.ts`:
```typescript
app.get('/api/example', (c) => c.json({ message: 'Hello from Worker!' }));
```

Routes auto-reload in dev.

### Build for Production

```bash
bun run build
```

Outputs optimized assets to `dist/`.

## Deployment

Deploy to Cloudflare Pages + Workers:

1. **Configure Wrangler** (edit `wrangler.jsonc` if needed):
   ```bash
   wrangler login
   wrangler whoami
   ```

2. **One-Command Deploy**:
   ```bash
   bun run deploy
   ```

This builds assets and deploys the Worker + Pages app. Your app will be live at `https://<worker-name>.workers.dev`.

[cloudflarebutton]

**Pro Tip**: Bind custom domains via Wrangler dashboard or CLI:
```bash
wrangler pages deploy dist --project-name=<pages-project> --branch=main
```

## Project Structure

```
├── src/              # React app (Vite)
│   ├── components/   # UI components (shadcn/ui + custom)
│   ├── hooks/        # Custom hooks (theme, mobile)
│   ├── lib/          # Utilities (error reporting, clsx)
│   └── pages/        # Route components
├── worker/           # Cloudflare Worker API
│   ├── index.ts      # Core router (DO NOT EDIT)
│   └── userRoutes.ts # Add your API routes here
├── public/           # Static assets
├── dist/             # Build output
└── wrangler.jsonc    # Cloudflare config
```

## Customization

- **Theme/UI**: Edit `tailwind.config.js` and `src/index.css`.
- **Sidebar**: Customize `src/components/app-sidebar.tsx`.
- **Layout**: Use `AppLayout` from `src/components/layout/AppLayout.tsx`.
- **Routing**: Add routes in `src/main.tsx`.
- **API**: Extend in `worker/userRoutes.ts` (CORS pre-configured).

## Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start dev server |
| `bun run build` | Build for production |
| `bun run preview` | Preview production build |
| `bun run lint` | Run ESLint |
| `bun run deploy` | Deploy to Cloudflare |
| `bun run cf-typegen` | Generate Worker types |

## Contributing

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit changes (`git commit -m 'Add some AmazingFeature'`).
4. Push (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Support

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

Built with ❤️ for Cloudflare Developers. 🚀