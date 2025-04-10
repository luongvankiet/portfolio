import { Download } from 'lucide-react';
import { motion } from 'motion/react';
import { FacebookIcon } from '../assets/icons/facebook';
import { GithubIcon } from '../assets/icons/github';
import { LinkedInIcon } from '../assets/icons/linkedin';
import { LocationIcon } from '../assets/icons/location';
import { MailIcon } from '../assets/icons/mail';
import { PhoneIcon } from '../assets/icons/phone';
import { useTabs } from '../hooks/use-tabs';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';

export function Sidebar() {
  const { tab } = useTabs();

  return (
    <div className={'col-span-12 lg:sticky lg:col-span-4 lg:h-screen ' + (tab === 'about' ? 'block' : 'hidden') + ' lg:block'}>
      <Card className="relative mx-auto mt-[180px] mb-6 w-full rounded-[20px] bg-white px-6 text-center md:mt-[220px] lg:mt-0 lg:mb-0 dark:bg-[#111111]">
        <motion.div
          whileHover={{
            scale: [null, 1.1],
            transition: {
              duration: 0.3,
              times: [0, 0.6, 1],
              ease: ['easeInOut', 'easeOut'],
            },
          }}
          whileTap={{
            scale: 1,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeOut',
          }}
        >
          <img
            src="/assets/images/profile.png"
            alt="avatar"
            className="absolute left-[50%] mx-auto -mt-[120px] w-[300px] -translate-x-[50%] transform rounded-[20px] drop-shadow-xl lg:w-[220px] xl:w-[280px]"
          />
        </motion.div>
        <CardContent className="mt-24 px-0 text-center lg:mt-12 xl:mt-24">
          <h2 className="text-3xl font-bold">Van Kiet Luong</h2>
          <h3 className="mt-2 mb-4 inline-block rounded-lg px-6 py-2 text-lg text-[#7B7B7B] dark:bg-[#1D1D1D] dark:text-[#A6A6A6]">
            React Developer
          </h3>

          <div className="flex flex-row justify-center gap-3">
            <motion.div
              whileTap={{
                scale: 0.7,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
              }}
            >
              <Button
                variant="secondary"
                size="icon"
                className="btn text-[#1773EA]"
                onClick={() => {
                  window.open('https://www.facebook.com/nhox.kevin.1', '_blank');
                }}
              >
                <FacebookIcon />
              </Button>
            </motion.div>
            <motion.div
              whileTap={{
                scale: 0.7,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
              }}
            >
              <Button
                variant="secondary"
                size="icon"
                className="btn text-[#0072b1]"
                onClick={() => {
                  window.open('https://www.linkedin.com/in/van-kiet-luong-81b8b4235', '_blank');
                }}
              >
                <LinkedInIcon />
              </Button>
            </motion.div>

            <motion.div
              whileTap={{
                scale: 0.7,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
              }}
            >
              <Button
                variant="secondary"
                size="icon"
                className="btn"
                onClick={() => {
                  window.open('https://github.com/luongvankiet', '_blank');
                }}
              >
                <GithubIcon />
              </Button>
            </motion.div>
          </div>

          <div className="mt-7 rounded-2xl bg-[#F3F6F6] p-6 px-4 dark:bg-[#1D1D1D]">
            <div className="flex border-b border-[#E3E3E3] py-2.5 dark:border-[#3D3A3A]">
              <Button size="icon" className="btn flex-shrink-0 bg-white text-[#E93B81] shadow-md dark:bg-black">
                <PhoneIcon />
              </Button>
              <div className="ml-2.5 text-left">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Phone</p>
                <p className="break-all dark:text-white">
                  <a className="transition duration-300 hover:text-[#FA5252]" href="tel:+61 421 915 789">
                    +61 421 915 789
                  </a>
                </p>
              </div>
            </div>
            <div className="flex border-b border-[#E3E3E3] py-2.5 dark:border-[#3D3A3A]">
              <Button size="icon" className="btn flex-shrink-0 bg-white text-[#6AB5B9] shadow-md dark:bg-black">
                <LocationIcon />
              </Button>
              <div className="ml-2.5 text-left">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Location</p>
                <p className="break-all dark:text-white">Cabramatta, NSW 2166</p>
              </div>
            </div>
            <div className="flex py-2.5">
              <Button size="icon" className="btn icon flex-shrink-0 bg-white text-[#FD7590] shadow-md dark:bg-black">
                <MailIcon />
              </Button>
              <div className="ml-2.5 text-left">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Email</p>
                <p className="break-all dark:text-white">
                  <a className="transition duration-300 hover:text-[#FA5252]" href="mailto:luongvankiet.97@gmail.com">
                    luongvankiet.97@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="my-4 justify-center">
          <Button variant="secondary" className="btn rounded-full py-6 text-lg font-medium" size="lg" asChild>
            <a href="/assets/pdf/luongvankiet_cv.pdf">
              <Download className="size-md" />
              Download CV
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
