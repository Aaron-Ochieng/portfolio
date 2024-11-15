import Section1 from "./components/sect1";
import Section2 from "./components/section2";


export default function Home() {
  return (
    <>
      
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Section1 />
        <Section2 />
      </div>
    </>
  )
}