import Section1 from "./components/sect1";
import Section2 from "./components/section2";
import ThemeSwitcher from "./themeswitcher";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <ThemeSwitcher/>
      <Section1 />
      <Section2/>
    </div>
  )
}