import { useTabs } from '../hooks/use-tabs';
import { About } from './about';
import { Contact } from './contact';
import { Experience } from './experience';
import { NavTabs } from './nav-tabs';
import { Projects } from './projects';

export function Content() {
  const { tab } = useTabs();

  return (
    <div className="col-span-12 lg:col-span-8">
      <NavTabs />

      <div className="mt-10">
        {tab === 'about' && <About />}
        {tab === 'experience' && <Experience />}
        {tab === 'projects' && <Projects />}
        {tab === 'contact' && <Contact />}
      </div>
    </div>
  );
}
