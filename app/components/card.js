import Link from "next/link";
import { BiLogoFlutter } from "react-icons/bi";
import {
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaGolang,
  FaHtml5,
  FaMicrochip,
  FaNode,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { C, PythonIcon } from "../data/svg";
import { SiGnubash, SiSqlite } from "react-icons/si";
import React from "react";

export default function Card({
  date,
  position,
  company,
  technology,
  description,
  url,
}) {
  return (
    <section id="experience">
      <div className="mb-12">
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"></div>
          <header
            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
            aria-label={date}
          >
            {date}
          </header>
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-200">
              <div>
                {url !== "" ? (
                  <div>
                    <Link
                      href={url}
                      className="inline-flex items-baseline font-medium leading-tight text-slate-600 dark:text-green-400/80  text-base"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span className="text-xl">{company}</span>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <div className="inline-flex items-baseline font-medium leading-tight text-slate-600 dark:text-green-400/80  text-base">
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span className="text-xl">{company}</span>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <div
                  className="text-orange-500  dark:text-lime-400 hover:dark:text-gray-200"
                  aria-hidden="true"
                >
                  {position}
                </div>
              </div>
            </h3>
            <ul className="mt-2 text-lg leading-normal text-gray-600 dark:text-gray-400 font-[family-name:var(--font-geist-mono)] font-normal">
              {description.split("<br>").map((value, index) => (
                <li
                  className="mt-2 text-sm leading-normal text-gray-600 dark:text-gray-400 font-[family-name:var(--font-geist-mono)] font-normal"
                  key={index}
                >
                  {value}
                </li>
              ))}
            </ul>
            <ul className="mt-2 flex flex-wrap">
              {technology.map((tech, index) => (
                <li className="mr-1.5 mt-2" key={index}>
                  <div className="flex items-center rounded-full  bg-[#d5deef] hover:bg-gray-500/10 dark:bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-500 dark:text-green-300 font-[family-name:var(--font-geist-mono)]">
                    {tech.toLowerCase() === "html" ? (
                      <FaHtml5 className="mr-2 text-orange-700" />
                    ) : tech.toLowerCase() === "git" ? (
                      <FaGitAlt className="mr-2 text-red-500" />
                    ) : tech.toLowerCase() === "golang" ? (
                      <FaGolang className="mr-2 text-blue-500" />
                    ) : tech.toLowerCase() === "javascript" ? (
                      <RiJavascriptFill className="mr-2 text-yellow-500" />
                    ) : tech.toLowerCase() === "flutter" ? (
                      <BiLogoFlutter className="mr-2 text-blue-500" />
                    ) : tech.toLowerCase() === "c" ? (
                      <C />
                    ) : tech.toLowerCase() === "sqlite3" ? (
                      <SiSqlite className="mr-2" />
                    ) : tech.toLowerCase() === "shell" ? (
                      <SiGnubash className="mr-2 text-orange-500" />
                    ) : tech.toLowerCase() === "python" ? (
                      <PythonIcon className="mr-2" />
                    ) : tech.toLowerCase() === "docker" ? (
                      <FaDocker className="mr-2 text-blue-500" />
                    ) : tech.toLowerCase() === "node" ? (
                      <FaNode className="mr-2" />
                    ) : tech.toLowerCase() === "ux" ? (
                      <FaFigma className="mr-2 text-red-500" />
                    ) : tech.toLowerCase() === "ai" ? (
                      <FaMicrochip className="mr-2 text-lime-500" />
                    ) : tech.toLowerCase() === "react" ? (
                      <FaReact className="mr-2 text-yellow-500" />
                    ) : (
                      <></>
                    )}
                    {tech}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
