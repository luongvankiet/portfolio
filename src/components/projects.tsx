import { motion, MotionValue, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="img-container">
      <div ref={ref}>
        {/* <img src={ `/assets/illustrations/illustration${ id }.jpg` } alt="A London skyscraper" /> */}
        
          <img src="/assets/images/progress-concept-illustration.jpg" className="rounded-xl dark:hidden" alt="" />
          <img src="/assets/images/progress-concept-illustration-dark.jpg" className="hidden rounded-xl dark:block" alt="" />
      </div>
      <motion.h2
        // Hide until scroll progress is measured
        initial={{ visibility: 'hidden' }}
        animate={{ visibility: 'visible' }}
        style={{ y }}
      >{`Project #0${id}`}</motion.h2>
    </section>
  );
}

export function Projects() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
              <h1 className="text-4xl font-bold">Projects</h1>
              <div className="h-0.5 w-[35%] rounded-full bg-gradient-to-r from-red-500 to-pink-600 md:w-[200px]"></div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-5">
          {/* <img src="/assets/images/progress-concept-illustration.jpg" className="rounded-xl dark:hidden" alt="" />
          <img src="/assets/images/progress-concept-illustration-dark.jpg" className="hidden rounded-xl dark:block" alt="" /> */}

          {[1, 2, 3, 4, 5].map((image) => (
            <Image key={image} id={image} />
          ))}
          <motion.div className="progress" style={{ scaleX }} />
          <StyleSheet />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </motion.div>
  );
}

function StyleSheet() {
  return (
    <style>{`
        .img-container {
            height: 600px;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: 300px;
            height: 400px;
            margin: 20px;
            background: #f5f5f5;
            overflow: hidden;
        }

        .img-container img {
            width: 300px;
            height: 400px;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }

            .img-container img {
                width: 150px;
                height: 200px;
            }
        }

        .img-container h2 {
            color: #4ff0b7;
            margin: 0;
            font-family: "Azeret Mono", monospace;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            left: calc(50% + 120px);
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: #4ff0b7;
            top: 0;
            transform: scaleX(0);
        }
    `}</style>
  );
}
