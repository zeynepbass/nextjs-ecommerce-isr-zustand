# 🛒 Next.js E-Commerce App (ISR + React Query + Zustand)

Modern Next.js App Router mimarisi kullanılarak geliştirilmiş, ölçeklenebilir bir e-commerce ürün listeleme ve sepet yönetim uygulaması.

Bu projede server state ve client global state ayrımı profesyonel mimariyle ele alınmıştır.

---

## 🚀 Tech Stack

- Next.js (App Router)
- React Query (Server State Management)
- Zustand (Global Client State)
- Incremental Static Regeneration (ISR)
- Tailwind CSS

---

## 📦 Features

- Product listing with ISR (auto revalidation every 60 seconds)
- Server-side cached product fetching
- Global cart state with Zustand
- Add / remove products from cart
- Optimized rendering strategy (ISR + Client hydration)

---

## 🧠 Architecture Overview

| Layer | Responsibility |
|------|---------------|
| Server State | Product data (React Query + ISR) |
| Client Global State | Shopping cart (Zustand) |
| Rendering Strategy | ISR |
| API triggering | Fetch + caching |

---

## ⏱ ISR Example

export const revalidate = 60;
