import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Test from '@/components/Test'
import Parallax from '@/components/Parallax'
import Image from 'next/image'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio/Portfolio'
import Contact from '@/components/Contact'
import Skillset from '@/components/Skillset'

export default function Home() {
  return (
    <main className="">
      <section id='Home'>
        <Navbar/>
        <Hero/>
      </section>
      <section>
        <Parallax type={'services'}/>
      </section>
      <section id='Services'>
        <Services/>
      </section>
      <section id='Skills'>
        <Skillset/>
      </section>
        <Portfolio/>
      <section id='Contact'>
        <Contact/>
      </section>

      {/* <section>
        <Test/>
      </section> */}

    </main>
  )
}
