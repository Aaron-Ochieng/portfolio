import Image from "next/image";
import Link from "next/link";

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
                                    <div className="flex items-center rounded-full  bg-[#d5deef] dark:bg-green-400/10 dark:hover:bg-green-400/20 px-3 py-1 text-xs font-medium leading-5 text-gray-500 dark:text-green-300  font-[family-name:var(--font-geist-mono)]">{ln}</div>
                                </li>
                            ))}

                        </ul>
                    </div>
                     <Image alt="just an hidden image" loading="lazy" width={200} height={48} decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 opacity-0" style="color:transparent" src="./assets/developer.svg" />
                </div>
            </li>
        </section>
    )
}