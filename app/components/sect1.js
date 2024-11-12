import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { BiLogoDevTo } from "react-icons/bi";
import Link from "next/link";


export default function Section1() {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-500 dark:text-slate-200 sm:text-5xl">
                    <Link href="/"> <p className="font-[family-name:var(--font-typing-mono)] hover:text-blue-400"> Aaron Ochieng</p> </Link>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-gray-500 dark:text-slate-200 sm:text-xl">Back End & Front End Developer</h2>
                <p className="mt-4 max-w-xs leading-normal">I build accessible, pixel-perfect digital experiences for the web.</p>
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        <li>
                            <Link className="group flex items-center py-3 active" href="#about">
                                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-400  group-focus-visible:bg-slate-400 dark:group-hover:bg-slate-200 group-focus-visible:w-16 dark:group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-blue-400 group-focus-visible:text-blue-300 dark:group-hover:text-slate-200 dark:group-focus-visible:text-slate-200">About</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="group flex items-center py-3 " href="#experience">
                            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-400  group-focus-visible:bg-slate-400 dark:group-hover:bg-slate-200 group-focus-visible:w-16 dark:group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-blue-400 group-focus-visible:text-blue-300 dark:group-hover:text-slate-200 dark:group-focus-visible:text-slate-200">Experience</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="group flex items-center py-3 " href="#projects">
                            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-400  group-focus-visible:bg-slate-400 dark:group-hover:bg-slate-200 group-focus-visible:w-16 dark:group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-blue-400 group-focus-visible:text-blue-300 dark:group-hover:text-slate-200 dark:group-focus-visible:text-slate-200">Projects</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 shrink-0 text-xs">
                    <Link className="block hover:text-gray-400 hover:scale-150 text-gray-400 dark:hover:text-slate-200" href="https://github.com/Aaron-Ochieng" target="_blank" rel="noreferrer noopener" title="GitHub">
                        <FaGithub className="h-6 w-6" />
                    </Link>
                </li>
                <li className="mr-5 shrink-0 text-xs">
                    <Link className="block hover:text-gray-400 hover:scale-150 text-gray-400 dark:hover:text-slate-200" href="https://dev.to" target="_blank" rel="noreferrer noopener" title="Dev.To">
                        <BiLogoDevTo className="h-6 w-6" />
                    </Link>
                </li>
                <li className="mr-5 shrink-0 text-xs">
                    <Link className="block hover:text-gray-400 hover:scale-150 text-gray-400 dark:hover:text-slate-200" href="https://ke.linkedin.com/" target="_blank" rel="noreferrer noopener" title="LinkedIn">
                        <FaLinkedin className="h-6 w-6" />
                    </Link>
                </li>
                <li className="mr-5 shrink-0 text-xs">
                    <Link className="block hover:text-gray-400 hover:scale-150 text-gray-400 dark:hover:text-slate-200" href="https://x.com/Aaron_Ochieng_" target="_blank" rel="noreferrer noopener" title="X">
                        <FaXTwitter className="h-6 w-6" />
                    </Link>
                </li>
            </ul>
        </header>
    )
}