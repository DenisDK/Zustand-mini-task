# Zustand Mini Projects

A collection of mini-projects built with **Next.js, React, TypeScript, and Zustand** to practice state management, component architecture, API integration, and modern React development.

## Projects

- **Counter** — state management basics, actions, and selectors.
- **Shopping Cart** — product management, quantity updates, and total price calculations.
- **Wishlist** — managing favorite items and updating UI state.
- **Todo App** — task management and state updates.
- **Multi-step Form** — step navigation, form validation with Zod, and a success screen.
- **Currency Converter** — currency conversion using live exchange rates from ExchangeRate-API, dynamic currency selection, and server-side API integration with Next.js.
- **Notes App** — creating, editing, and deleting notes; searching by title and content; filtering by categories and pinned status; sorting notes by pinned status and creation date; and customizing note card colors.

## Tech Stack

- Next.js
- React
- TypeScript
- Zustand
- Tailwind CSS
- shadcn/ui
- Zod
- React Icons
- ExchangeRate-API

## Getting Started

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env.local` file in the project root and add your ExchangeRate-API key:

```env
EXCHANGE_RATE_API_KEY=your_api_key
```

Keep your API key private and never expose it in client-side code or commit `.env.local` to a public repository.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Purpose

This project was created as a hands-on learning experience to strengthen my understanding of Zustand and TypeScript, practice building reusable React components, work with external APIs, and explore scalable frontend architecture through practical examples. It also covers server-side API integration, environment variable security, data handling in Next.js, and building interactive user interfaces with persistent state management.
