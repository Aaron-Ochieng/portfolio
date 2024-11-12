import { intro, work } from "../data/intro";
import Card from "./card";

export default function Section2() {
    var txt = "{txt}"
    return (
        <section className="pt-24 lg:w-1/2 lg:py-24">
            <div className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" id="#about">

                {/* Hidden About  section in larger devices */}
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen dark:bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-200 lg:sr-only">About</h2>
                </div>

                <div>
                    <p className="mb-4 font-[family-name:var(--font-geist-mono)]">
                        {intro.intro}
                    </p>
                </div>
            </div>

            {/* Work Experience */}
            {Object.entries(work).map(([key, { desc, pos, technology, date, company }]) => (
                <div key={key}>
                    <Card key={key} date={date} position={pos} company={company} description={desc} technology={technology} />
                </div>
            ))}
        </section>
    )
}