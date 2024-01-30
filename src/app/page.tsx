import Image from 'next/image';
import Link from 'next/link';
import LogoIcon from '@/assets/logo_mark.png';
import { buttonVariants } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';
import { Github, Twitter, Sparkle } from 'lucide-react';
import { Fragment } from 'react';

export default function Home() {
  const technologies = [
    [
      'NextJS',
      'TailwindCSS',
      'Shadcn/UI',
      'ESLint',
      'Pre-commit',
      'Commit lint',
    ],

    ['SEO', 'Dark Mode', 'TypeScript', 'Bun'],
  ];

  return (
    <div className="relative mx-auto w-[1100px] max-2xl:w-[1100px] max-xl:w-[920px] max-lg:w-[680px] max-md:w-[440px] max-sm:w-full px-5">
      <div className="absolute w-[500px] h-[500px] bg-primary rounded-full -top-[550px] blur-[200px] left-1/2 -translate-x-1/2 -z-10"></div>
      <nav className="flex flex-col md:flex-row gap-3 md:justify-between md:items-center my-8 md:my-5">
        <div className="flex gap-3 md:gap-5 items-center">
          <Image src={LogoIcon} alt="Logo Icon`" className="w-7 h-7" />
          <span>\</span>
          <Link
            href="https://adarshdubey.com"
            className="text-lg font-serif font-medium"
          >
            Adarsh Dubey
          </Link>
        </div>
        <div className="flex gap-4">
          <Link
            className={`${buttonVariants({ variant: 'outline', size: 'icon' })} flex gap-2`}
            href="https://twitter.com/inclinedadarsh"
            aria-label="twitter link"
          >
            <Twitter size={16} strokeWidth={1.5} />
          </Link>
          <Link
            className={`${buttonVariants({ variant: 'outline', size: 'icon' })} flex gap-2`}
            href="https://github.com/inclinedadarsh"
            aria-label="github link"
          >
            <Github size={16} strokeWidth={1.5} />
          </Link>
          <ModeToggle />
        </div>
      </nav>
      <main className="">
        <h1 className="font-semibold text-4xl md:text-6xl max-w-4xl text-center mx-auto md:leading-tight mt-20 bg-gradient-to-br from-black dark:from-white from-30% to-black/50 dark:to-white/35 bg-clip-text text-transparent">
          The <span className="font-serif italic">only</span> NextJS starter kit
          you&apos;ll <span className="font-serif italic">ever</span> need.
        </h1>
        <div className="text-black/80 dark:text-white/80 text-sm md:text-xl space-y-3 max-w-4xl my-12 mx-auto">
          {technologies.map((line, index) => (
            <div
              className="flex gap-3 md:gap-5 flex-wrap items-center justify-center"
              key={index}
            >
              {line.map((tech, inner_index) => (
                <Fragment key={inner_index}>
                  {tech}
                  {inner_index < line.length - 1 && (
                    <Sparkle strokeWidth={0} fill="currentColor" size={20} />
                  )}
                </Fragment>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6 my-16">
          <Link
            href="https://nextjs-docs.adarshdubey.com/"
            className={`${buttonVariants({})}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get started
          </Link>
          <Link
            href="https://github.com/inclinedadarsh/nextjs-starter"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonVariants({ variant: 'outline' })}`}
          >
            Star on GitHub
          </Link>
        </div>
      </main>
    </div>
  );
}
