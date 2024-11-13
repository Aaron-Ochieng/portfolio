import Link from "next/link";

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
                                    <Link href={url} className="work-link group/link" target="_blank" rel="noreferrer noopener">
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                                        </span>
                                        <span className="text-xl">
                                            {company}
                                        </span>
                                    </Link>
                                </div> : <div>
                                    <div className="work-link group/link" target="_blank" rel="noreferrer noopener">
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
                                <div className="text-slate-500" aria-hidden="true">{position}</div>
                            </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-gray-600 dark:text-gray-400 font-[family-name:var(--font-geist-mono)]">{description}</p>
                        <ul className="mt-2 flex flex-wrap">
                            {technology.map((tech, index) => (
                                <li className="mr-1.5 mt-2" key={index}>
                                    <div className="languages">{tech}</div>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </li>
        </section>
    )
}