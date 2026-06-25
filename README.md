# GTA VI Clone

Live demo: [https://gta-vi-clone-pearl.vercel.app/](https://gta-vi-clone-pearl.vercel.app/)

## Overview

This repository contains a polished **GTA VI-inspired landing page** built with **React**, **Vite**, **Tailwind CSS**, and **GSAP**. The project delivers an immersive scrolling experience with video sections, animated hero content, and stylized character highlights.

## What is included

- Animated hero intro using **GSAP ScrollTrigger**
- Full-page layout with multiple sections:
  - `NavBar`
  - `Hero`
  - `FirstVideo` / `SecondVideo`
  - `Jason`
  - `Lucia`
  - `PostCard`
  - `Final`
  - `Outro`
- Responsive design for modern presentation
- Image-based hero and trailer styling
- Smooth scroll-driven transitions and reveals

## Screenshots

### Hero section with animated marquee

![Hero section screenshot](public/readme/hero.png)

### Dark character panel and content layout

![GTA-style character card](public/readme/jsmpro.png)

### Video content / scene presentation

![Video section screenshot](public/readme/videokit.png)

## Key source files

### `src/App.jsx`

```jsx
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Hero from "./sections/Hero"
import NavBar from "./sections/NavBar"
import FirstVideo from "./sections/FirstVideo"
import Jason from "./sections/Jason"
import SecondVideo from "./sections/SecondVideo"
import Lucia from "./sections/Lucia"
import PostCard from "./sections/PostCard"
import Final from "./sections/Final"
import Outro from "./sections/Outro"
gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <FirstVideo/>
      <Jason/>
      <SecondVideo/>
      <Lucia/>
      <PostCard/>
      <Final/>
      <Outro/>
    </main>
  )
}
export default App
```

### `src/sections/Hero.jsx`

```jsx
const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } = useMaskSettings()
  useGSAP(() => {
    gsap.set('.mask-wrapper', {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    })
    // ...scroll animation timeline
  })

  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <img src="/images/hero-bg.webp" alt="hero-bg" className="scale-out" />
        <img src="/images/hero-text.webp" alt="hero-logo" className="title-logo fade-out" />
      </div>
      <div>
        <img src="/images/big-hero-text.svg" alt="logo" className="size-full object-cover mask-logo" />
      </div>
    </section>
  )
}
```

## Run locally

```bash
npm install
npm run dev
```

## Project stack

- React 19
- Vite
- Tailwind CSS
- GSAP
- React Responsive

## Social

- Instagram: [https://instagram.com/your-username](https://instagram.com/your-username)
- LinkedIn: [https://linkedin.com/in/your-username](https://linkedin.com/in/your-username)
- GitHub: [https://github.com/your-username](https://github.com/your-username)

## Notes

Update the placeholder social URLs after deployment, and adjust the screenshot paths if you move assets outside `public/readme`.
