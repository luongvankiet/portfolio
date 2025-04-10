import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';

const education = [
  {
    year: '2022 - 2024',
    title: 'Master of Information Communication Technology',
    institution: 'Western Sydney University, NSW, Australia',
  },
  {
    year: '2016 - 2020',
    title: 'Bachelor of Computer Science',
    institution: 'Ton Duc Thang University, Ho Chi Minh City, Vietnam',
  },
];

const experience = [
  {
    year: '2023 - Present',
    title: 'Retail Assistant',
    company: 'Panetta Mercato, Leichhardt, NSW',
    description: [
      'Delivered exceptional customer service and enhanced interpersonal communication.',
      'Efficiently managed multiple tasks within a fast-paced retail environment.',
      'Worked closely with the team, ensuring smooth daily operations.',
    ],
  },
  {
    year: '2022 - 2023',
    title: 'Technical Assistant',
    company: 'IT Hardware Broker Pty Ltd, Strathfield, NSW',
    description: [
      'Refactored legacy hardware systems to improve operational efficiency.',
      'Enhanced the company website functionality and user experience with WordPress.',
      'Supported e-commerce operations, improving order management.',
    ],
  },
  {
    year: '2020 - 2021',
    title: 'Laravel Developer',
    company: 'CNV Holdings, Ho Chi Minh City, Vietnam',
    description: [
      'Developed and maintained robust e-commerce platforms using Laravel and ReactJS.',
      'Created secure, high-performing APIs enhancing user experience.',
      'Integrated complex payment gateways and optimized database queries.',
    ],
  },
];

export function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      <Card className="px-2 py-8">
        <CardHeader className="pt-8">
          <CardTitle>
            <div className="flex items-center space-x-5">
              <h1 className="text-4xl font-bold">Experience</h1>
              <div className="h-0.5 w-[35%] rounded-full bg-gradient-to-r from-red-500 to-pink-600 md:w-[200px]"></div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-6">
              <h2 className="flex items-center text-2xl font-semibold">
                <GraduationCap className="mr-2" size={35} />
                Education
              </h2>

              {education.map((edu, index) => (
                <Card
                  key={edu.title}
                  className={cn(['bg-purple-50', 'bg-zinc-50', 'bg-red-50'][index], 'gap-1 border-0 dark:border-1 dark:bg-transparent')}
                >
                  <CardHeader>
                    <h5 className="text-md flex flex-row items-center text-gray-500 dark:text-gray-200">{edu.year}</h5>
                    <h4 className="flex flex-row items-center text-lg font-bold text-gray-800 dark:text-gray-200">{edu.title}</h4>
                  </CardHeader>
                  <CardContent className="">
                    <p className="text-md tracking-wide text-gray-500 dark:text-gray-400">{edu.institution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex flex-col space-y-6">
              <h2 className="flex items-center text-2xl font-semibold">
                <BriefcaseBusiness className="mr-2" size={35} /> Experience
              </h2>

              {experience.map((exp, index) => (
                <Card
                  key={exp.title}
                  className={cn(['bg-cyan-50', 'bg-yellow-50', 'bg-red-50'][index], 'gap-1 border-0 dark:border-1 dark:bg-transparent')}
                >
                  <CardHeader className="mb-3 gap-0">
                    <h5 className="text-md mb-1 flex flex-row items-center text-gray-500 dark:text-gray-200">{exp.year}</h5>
                    <h4 className="flex flex-row items-center pb-0 text-lg font-bold text-gray-800 dark:text-gray-200">{exp.title}</h4>
                    <span className="text-sm text-gray-500 italic dark:text-gray-400">{exp.company}</span>
                  </CardHeader>
                  <CardContent>
                    {exp.description.map((description, desIndex) => (
                      <div className="mb-4 grid grid-cols-[25px_1fr] items-start" key={desIndex}>
                        <span className="mt-1.5 flex h-2 w-2 translate-y-1 rounded-full bg-gray-500 dark:bg-zinc-100" />
                        <p className="text-lg font-medium tracking-normal text-gray-500 dark:text-gray-200">{description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </motion.div>
  );
}
