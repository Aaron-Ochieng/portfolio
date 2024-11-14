import Image from "next/image";
import Link from "next/link";
import { C, PythonIcon } from "@/app/data/svg"
import { FaGitAlt, FaGolang, FaHtml5 } from "react-icons/fa6";
import { SiGnu, SiGnubash, SiSqlite } from "react-icons/si";
import { BiLogoFlutter, BiLogoMongodb } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri"


export default async function ProjectCard({ description, name, languages, url }) {
    return (
        <section id="projects">
            <li className="mb-12 mt-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                            <Link href={url} className="inline-flex items-baseline font-medium text-xl leading-tight text-gray-600 dark:text-green-300 dark:hover:text-green-300/80" >
                                <span>{name}
                                </span>
                            </Link>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-600 dark:text-gray-300 font-[family-name:var(--font-geist-mono)] font-semibold">{description}</p>
                        <ul className="mt-2 flex flex-wrap">
                            {languages.map((ln, index) => (
                                <li className="mr-1.5 mt-2" key={index}>
                                    <div className="flex items-center rounded-full  bg-[#d5deef] dark:bg-green-400/10 dark:hover:bg-green-400/20 px-3 py-1 text-sm font-medium leading-5 text-gray-500 dark:text-green-300  font-[family-name:var(--font-geist-mono)]">
                                        {
                                            ln === "HTML" ? <FaHtml5 className="mr-2 text-orange-600" /> :
                                                ln === "Github" ? <FaGitAlt className="mr-2 text-red-600" /> :
                                                    ln === "Golang" ? <FaGolang className="mr-2 text-blue-600" /> :
                                                        ln === "Javascript" ? <RiJavascriptFill className="mr-2 text-yellow-500" /> :
                                                            ln === "Flutter" ? <BiLogoFlutter className="mr-2 text-blue-600" /> :
                                                                ln === "C" ? <C /> :
                                                                    ln === "SQLite3" ? <SiSqlite className="mr-2 text-gray-600" /> :
                                                                        ln === "Shell" ? <SiGnubash className="mr-2 text-orange-700" /> :
                                                                            ln === "MongoDB" ? <BiLogoMongodb className="mr-2 text-green-500" /> :
                                                                                ln === "Python" ? <PythonIcon /> :
                                                                                    ln === "MakeFile" ? <SiGnu className="mr-2 text-gray-700 dark:text-gray-200"/> :
                                                                                        // <FaPython className="mr-2 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"/> :
                                                                                        <></>
                                        }
                                        {ln}
                                    </div>
                                </li>
                            ))}

                        </ul>
                    </div>
                    <Image alt="just an hidden image" loading="lazy" width={200} height={48} decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 opacity-0 hidden md:block" style="color:transparent" src="./assets/developer.svg" />
                </div>
            </li>
        </section>
    )
}