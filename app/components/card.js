import Link from "next/link";
import { BiLogoFlutter, BiLogoMongodb } from "react-icons/bi";
import { FaDocker, FaFigma, FaGitAlt, FaGolang, FaHtml5, FaNode, FaPython } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { C } from "../data/svg";
import { SiGnubash, SiSqlite } from "react-icons/si";

export default function Card({ date, position, company, technology, description, url }) {
    return (
        <section id="experience">
            <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block">
                    </div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={date}>{date}</header>
                    <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                                {url !== "" ? <div>
                                    <Link href={url} className="inline-flex items-baseline font-medium leading-tight text-slate-600 dark:text-green-400/80  text-base" target="_blank" rel="noreferrer noopener">
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                                        </span>
                                        <span className="text-xl">
                                            {company}
                                        </span>
                                    </Link>
                                </div> : <div>
                                    <div className="inline-flex items-baseline font-medium leading-tight text-slate-600 dark:text-green-400/80  text-base">
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                                        </span>
                                        <span className="text-xl">
                                            {company}
                                        </span>
                                    </div>
                                </div>
                                }
                            </div>
                            <div>
                                <div className="text-slate-500  dark:text-gray-400 hover:dark:text-gray-200" aria-hidden="true">{position}</div>
                            </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-gray-600 dark:text-gray-400 font-[family-name:var(--font-geist-mono)] font-semibold">{description}</p>
                        <ul className="mt-2 flex flex-wrap">
                            {technology.map((tech, index) => (
                                <li className="mr-1.5 mt-2" key={index}>
                                    <div className="flex items-center rounded-full  bg-[#d5deef] hover:bg-gray-500/10 dark:bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-500 dark:text-green-300 font-[family-name:var(--font-geist-mono)]">
                                        {
                                            tech === "HTML" ? <FaHtml5 className="mr-2 text-orange-700" /> :
                                                tech === "Git" ? <FaGitAlt className="mr-2 text-red-500" /> :
                                                    tech === "Golang" ? <FaGolang className="mr-2 text-blue-500" /> :
                                                        tech === "Javascript" ? <RiJavascriptFill className="mr-2 text-yellow-500" /> :
                                                            tech === "Flutter" ? <BiLogoFlutter className="mr-2 text-blue-500" /> :
                                                                tech === "C" ? <C /> :
                                                                    tech === "SQLite3" ? <SiSqlite className="mr-2" /> :
                                                                        tech === "Shell" ? <SiGnubash className="mr-2 text-orange-500" /> :
                                                                                tech === "Python" ? <FaPython className="mr-2" /> :
                                                                                    tech === "Docker" ? <FaDocker className="mr-2 text-blue-500" /> :
                                                                                        tech === "Node" ? <FaNode className="mr-2" /> :
                                                                                            tech === "UX" ? <FaFigma className="mr-2 text-red-500" /> :
                                                                                                <></>
                                        }
                                        {tech}
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </li>
        </section>
    )
}