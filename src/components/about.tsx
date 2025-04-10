import Autoplay from 'embla-carousel-autoplay';
import { Cable, ChevronsLeftRightEllipsis, CodeXml, Database, HeartHandshake, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';

import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

const skills = [
  { name: 'Laravel', icon: SiLaravel },
  { name: 'React', icon: SiReact },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'PHP', icon: SiPhp },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'MySQL', icon: SiMysql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Express.js', icon: SiExpress },
];

const skills2 = [
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'Git', icon: SiGit },
  { name: 'Postman', icon: SiPostman },
  { name: 'Vite', icon: SiVite },
  { name: 'Python', icon: SiPython },
];

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      <Card className="pt-8 pb-0">
        <CardHeader className="px-6 pt-8">
          <CardTitle>
            <div className="flex items-center space-x-5">
              <h1 className="text-4xl font-bold">About Me</h1>
              <div className="h-0.5 w-[35%] rounded-full bg-gradient-to-r from-red-500 to-pink-600 md:w-[200px]"></div>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="grid gap-4">
          <div className="space-y-4">
            <p className="text-lg tracking-wide text-gray-500 dark:text-gray-400">
              I am a dedicated Software Developer based in Sydney, Australia, with proven expertise in designing and developing scalable,
              high-performing web applications. My professional experience includes working extensively with PHP, Laravel, ExpressJS, MySQL, MongoDB,
              and modern JavaScript frameworks such as ReactJS. I'm also familiar with deploying applications using AWS and Docker.
            </p>
            <p className="text-lg tracking-wide text-gray-500 dark:text-gray-400">
              My strengths lie in problem-solving, effective communication, and collaborative teamwork. I thrive in dynamic environments, consistently
              demonstrating adaptability and efficient time management.
            </p>
            <p className="text-lg tracking-wide text-gray-500 dark:text-gray-400">
              I currently hold a Master's degree in Information Communication Technology at Western Sydney University, I continue to deepen my
              technical knowledge and system design capabilities to deliver robust and user-focused web solutions.
            </p>
          </div>

          <div className="mt-10 flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold">What I do!</h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Card className="gap-1 border-0 bg-cyan-50 dark:border-1 dark:bg-transparent">
                <CardHeader>
                  <h4 className="text-md flex flex-row items-center font-bold whitespace-nowrap text-cyan-600 dark:text-gray-200">
                    <CodeXml size={25} className="mr-2 -ml-1" />
                    Full-stack Web Development
                  </h4>
                </CardHeader>
                <CardContent className="">
                  <p className="text-md tracking-wide text-gray-500 dark:text-gray-400">
                    I develop interactive, high-quality web applications using Laravel, ExpressJS and ReactJS, ensuring seamless frontend-backend
                    integration.
                  </p>
                </CardContent>
              </Card>
              <Card className="gap-1 border-0 bg-yellow-50 dark:border-1 dark:bg-transparent">
                <CardHeader>
                  <h4 className="text-md flex flex-row items-center font-bold whitespace-nowrap text-yellow-800 dark:text-gray-200">
                    <ChevronsLeftRightEllipsis size={25} className="mr-2" />
                    API Design & Development
                  </h4>
                </CardHeader>
                <CardContent className="">
                  <p className="text-md tracking-wide text-gray-500 dark:text-gray-400">
                    I build efficient, secure APIs tailored to enhance performance and usability, crucial for scalable web solutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="gap-1 border-0 bg-indigo-50 dark:border-1 dark:bg-transparent">
                <CardHeader>
                  <h4 className="text-md flex flex-row items-center font-bold whitespace-nowrap text-indigo-800 dark:text-gray-200">
                    <Database size={25} className="mr-2" />
                    Database Management
                  </h4>
                </CardHeader>
                <CardContent className="">
                  <p className="text-md tracking-wide text-gray-500 dark:text-gray-400">
                    Skilled in MySQL and MongoDB, I optimize and maintain complex databases, ensuring data integrity and high performance.
                  </p>
                </CardContent>
              </Card>
              <Card className="gap-1 border-0 bg-red-50 dark:border-1 dark:bg-transparent">
                <CardHeader>
                  <h4 className="text-md flex flex-row items-center font-bold whitespace-nowrap text-red-800 dark:text-gray-200">
                    <ShoppingCart size={25} className="mr-2" />
                    E-commerce Solutions
                  </h4>
                </CardHeader>
                <CardContent className="">
                  <p className="text-md tracking-wide text-gray-500 dark:text-gray-400">
                    Experienced in developing secure and scalable e-commerce platforms, I integrate payment gateways and craft intuitive user
                    interfaces.
                  </p>
                </CardContent>
              </Card>
              <Card className="gap-1 border-0 bg-pink-50 dark:border-1 dark:bg-transparent">
                <CardHeader>
                  <h4 className="text-md flex flex-row items-center font-bold whitespace-nowrap text-pink-800 dark:text-gray-200">
                    <Cable size={25} className="mr-2" />
                    Optimization & Maintenance
                  </h4>
                </CardHeader>
                <CardContent className="">
                  <p className="text-md tracking-wide text-gray-500 dark:text-gray-400">
                    I enhance existing websites for better performance, usability, and reliability, including refactoring legacy systems.
                  </p>
                </CardContent>
              </Card>
              <Card className="gap-1 border-0 bg-blue-50 dark:border-1 dark:bg-transparent">
                <CardHeader>
                  <h4 className="text-md flex flex-row items-center font-bold whitespace-nowrap text-gray-800 dark:text-gray-200">
                    <HeartHandshake size={25} className="mr-2" />
                    Team Collaboration
                  </h4>
                </CardHeader>
                <CardContent className="">
                  <p className="text-md tracking-wide text-gray-500 dark:text-gray-400">
                    I excel in team-based environments, prioritizing effective communication, adaptability, and collaborative problem-solving.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start space-y-5 rounded-b-xl px-8 py-10">
          <h2 className="text-2xl font-semibold">Professional Skillset</h2>
          <div className="flex w-full items-center justify-center rounded-xl bg-gray-50 px-15 py-10 dark:bg-zinc-950">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
                slidesToScroll: 1,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex flex-col items-center justify-center space-y-2 p-6">
                            <div className="text-5xl">
                              <Icon />
                            </div>
                            <span className="text-lg font-semibold">{skill.name}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="flex w-full items-center justify-center rounded-xl bg-gray-50 px-15 py-10 dark:bg-zinc-950">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
                slidesToScroll: 1,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {skills2.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex flex-col items-center justify-center space-y-2 p-6">
                            <div className="text-5xl">
                              <Icon />
                            </div>
                            <span className="text-lg font-semibold">{skill.name}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
