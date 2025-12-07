# Teqvention - AI Automation Agency Website

Teqvention is a modern, high-performance website for an AI Automation Agency, built with the latest web technologies including Next.js 16, React 19, and Tailwind CSS 4. It features a sleek design, smooth animations, and full internationalization support.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/)
- **UI Primitives:** [Radix UI](https://www.radix-ui.com/)
- **Scheduling:** [Cal.com](https://cal.com/) Embed

## ✨ Features

- **Multi-language Support:** Built-in support for multiple languages using `next-intl` with middleware-based routing.
- **Responsive Design:** Fully responsive layout optimized for all devices.
- **Modern Animations:** Smooth transitions and scroll animations powered by Framer Motion.
- **Component-Based Architecture:** Modular and reusable components for easy maintenance.
- **SEO Optimized:** configured with metadata for better search engine visibility.

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/), or [bun](https://bun.sh/)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/teqvention.git
    cd teqvention/website
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## 📂 Project Structure

```
website/
├── app/
│   ├── [locale]/       # Localized routes
│   │   ├── layout.tsx  # Root layout with i18n provider
│   │   └── page.tsx    # Homepage
│   └── globals.css     # Global styles
├── components/         # Reusable UI components
│   ├── ui/             # Generic UI primitives
│   ├── Hero.tsx        # Hero section
│   ├── Navbar.tsx      # Navigation bar
│   └── ...
├── messages/           # Translation files (JSON)
├── public/             # Static assets
└── ...
```

## 🌐 Internationalization (i18n)

This project uses `next-intl` for internationalization.

- **Translation Files:** Located in the `messages/` directory. Each language has its own JSON file (e.g., `en.json`, `de.json`).
- **Adding a Language:**
    1.  Add a new JSON file in `messages/` (e.g., `fr.json`).
    2.  Update the `i18n/request.ts` (or equivalent configuration) to include the new locale.
    3.  Update the middleware to support the new locale.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License.
