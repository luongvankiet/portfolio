import { useEffect, useRef } from 'react';
import { Toaster } from 'react-hot-toast';
import { Content } from './components/content';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { useTheme } from './components/theme-provider';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  const flashlightRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!flashlightRef.current) return;

    const handlePointerMove = (e: MouseEvent) => {
      if (!flashlightRef.current) return;

      const element = flashlightRef.current;
      const halfWidth = element.offsetWidth / 2;
      const halfHeight = element.offsetHeight / 2;

      // Use clientX/Y for fixed positioning (no scroll offsets needed)
      element.style.transform = `translate(${e.clientX - halfWidth}px, ${e.clientY - halfHeight}px)`;
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <>
      <div
        className="relative h-full bg-[url('/assets/images/bg_light.jpg')] bg-cover bg-no-repeat pb-20 dark:bg-[url('/assets/images/bg_dark.jpg')]"
        ref={containerRef}
      >
        <div className="mx-auto max-w-screen-xl px-10">
          <Header />

          <div className="grid grid-cols-12 justify-between md:gap-8 lg:mt-[220px]">
            <Sidebar />

            <Content />
          </div>
        </div>

        {/* Flashlight effect - only visible in dark mode */}
        {theme === 'dark' && (
          <div
            ref={flashlightRef}
            className="pointer-events-none fixed top-0 left-0 z-5 h-50 w-50 rounded-full bg-radial from-zinc-50 from-1% to-transparent to-50% opacity-50 mix-blend-screen"
            // style={{
            //   borderRadius: '50%',
            //   background:
            //     'radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.12) 25%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)',
            //   mixBlendMode: 'screen',
            //   left: 0,
            //   top: 0,
            //   transform: 'translate(0, 0)',
            // }}
            aria-hidden="true"
          />
        )}
      </div>

      <Toaster />
    </>
  );
}

export default App;
