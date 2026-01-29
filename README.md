# MirageFlix 🎬

MirageFlix is a **performance-focused React application** designed to demonstrate how intentional optimizations can significantly improve user experience in data-heavy interfaces.

The project compares **baseline (slow)** and **optimized** implementations side by side using real-world movie data from the TMDB API.

> ⚠️ **Disclaimer**  
> MirageFlix is a **Netflix-inspired UI concept** created purely for educational and portfolio purposes.  
> It is **not affiliated with, endorsed by, or connected to Netflix** in any way.

---

## ✨ Key Highlights

- Dark-mode, streaming-style UI with custom brand theme
- Real-time search experience
- Cinematic hero banner with integrated search
- Multiple movie rows
- Intentional performance bottlenecks (baseline)
- Optimized rendering using modern React techniques
- Clean architecture for easy comparison and demos

---

## ⚡ Performance Showcase

MirageFlix intentionally includes **two parallel implementations** to highlight performance differences.

### 🐢 Slow (Baseline)

Demonstrates common real-world performance pitfalls:

- Filtering on every keystroke
- No memoization
- Uncontrolled re-renders
- Noticeable typing and interaction lag

### 🚀 Optimized

Applies targeted optimization strategies:

- Deferred input handling
- Memoized computations
- Controlled rendering
- Smooth typing and scrolling experience

You can switch between implementations without changing imports, making performance differences easy to observe and explain during demos or interviews.

📖 A detailed breakdown is available in  
[`docs/performance.md`](./docs/performance.md)

---

## 🛠 Tech Stack

- **React**
- **TypeScript**
- **Mantine UI**
- **Tailwind CSS**
- **TMDB API**
- **Tabler Icons**

---

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Add environment variables

```
Create a .env.local file in the project root:
```

### 3️⃣ Start the development server

```
npm run dev
```

The app will be available at http://localhost:5173 (default Vite port).

## Why MirageFlix?

This project was built to:

-Understand real-world React performance issues
-Practice optimization techniques used in production apps
-Create a portfolio project beyond basic CRUD demos
Confidently explain performance tradeoffs in interviews

MirageFlix focuses on intentional slowness first, followed by measured optimizations, mirroring how performance problems are identified and solved in real applications.

## Future Improvements

-Virtualized rows for extremely large datasets
-Server-side pagination
-Image loading and caching optimizations
-Performance metrics and benchmarks

## 👤 Author

Built by **KS**  
Frontend Engineer • React Specialist
