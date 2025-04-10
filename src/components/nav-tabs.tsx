import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, CircleUserRound, Contact, FileText, Package } from 'lucide-react';
import { motion, wrap } from 'motion/react';
import { useTabs } from '../hooks/use-tabs';
import { Button } from './ui/button';

const tabs = [
  { id: 'about', label: 'About Me', icon: CircleUserRound },
  { id: 'experience', label: 'Experience', icon: FileText },
  { id: 'projects', label: 'Projects', icon: Package },
  { id: 'contact', label: 'Contact', icon: Contact },
];
export function NavTabs() {
  const { tab, setTab } = useTabs();

  function setSlide(newDirection: 1 | -1) {
    const currentIndex = tabs.findIndex((t) => t.id === tab);
    const nextIndex = wrap(0, tabs.length, currentIndex + newDirection);
    const nextItem = tabs[nextIndex].id;
    setTab(nextItem);
  }

  return (
    <div className="mb-10 hidden flex-col items-center lg:flex lg:-mt-32 lg:items-end">
      <div className="flex flex-row items-center gap-4">
        <motion.div initial={false} whileTap={{ scale: 0.9 }} className="hidden sm:block">
          <Button variant="secondary" aria-label="Previous" onClick={() => setSlide(-1)} size="icon" className="btn rounded-full">
            <ArrowLeft />
          </Button>
        </motion.div>

        <div className="flex max-w-2xl items-center justify-center gap-4 rounded-2xl bg-white p-6 dark:bg-[#111111]">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = t.id === tab;

            return (
              <motion.div
                whileTap={{
                  scale: 0.7,
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                }}
                key={t.label}
              >
                <button
                  className={cn(
                    'flex cursor-pointer flex-col items-center rounded-xl px-5 py-6 transition-all duration-300 hover:scale-110',
                    isActive
                      ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-md'
                      : 'bg-secondary text-gray-400 hover:bg-[#2a2a2a] dark:bg-[#1d1d1d]',
                  )}
                  onClick={() => setTab(t.id)}
                >
                  <Icon size={20} className="mb-1" />
                  <span className="text-sm font-medium">{t.label}</span>
                </button>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={false} whileTap={{ scale: 0.9 }} className="hidden sm:block">
          <Button variant="secondary" aria-label="Next" size="icon" className="btn rounded-full" onClick={() => setSlide(1)}>
            <ArrowRight />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
