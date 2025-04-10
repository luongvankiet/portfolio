import { CircleUserRound, Contact, FileText, Package } from 'lucide-react';
import { useState } from 'react';
import { useTabs } from '../hooks/use-tabs';
import { cn } from '../lib/utils';
import { HamburgerButton } from './hamburger-button';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from './ui/sheet';

const tabs = [
  { id: 'about', label: 'About Me', icon: CircleUserRound },
  { id: 'experience', label: 'Experience', icon: FileText },
  { id: 'projects', label: 'Projects', icon: Package },
  { id: 'contact', label: 'Contact', icon: Contact },
];

export function Header() {
  const { tab, setTab } = useTabs();
  const [open, setOpen] = useState(false);

  function handleSelectTab(newTab: string) {
    setTab(newTab);
    setOpen(false);
  }

  return (
    <>
      <header className="flex items-center justify-between py-4">
        <div className="flex flex-row items-center space-x-1 hover:scale-110">
          <span className="text-2xl font-bold text-gray-500 dark:text-white">
            &lt;<span className="text-pink-600 dark:text-pink-400">Kevin</span> /&gt;
          </span>
        </div>

        <div className="flex flex-row items-center justify-center space-x-2">
          <ModeToggle />

          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <HamburgerButton onClick={() => setOpen(true)} />
              </SheetTrigger>
              <SheetContent className="w-full">
                <SheetHeader>
                  <SheetDescription className="mt-16">
                    {tabs.map((t) => {
                      const Icon = t.icon;
                      const isActive = t.id === tab;

                      return (
                        <Button
                          key={t.label}
                          variant="outline"
                          className={cn(
                            'btn mb-2 flex w-full flex-row items-center justify-start border-0 shadow-none transition-all duration-200',
                            isActive ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-md' : 'text-gray-400 dark:bg-transparent',
                          )}
                          onClick={() => handleSelectTab(t.id)}
                        >
                          <Icon size={20} className="mb-1" />
                          <span className="text-sm font-medium">{t.label}</span>
                        </Button>
                      );
                    })}
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
