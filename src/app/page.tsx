import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Test from '@/components/Test'
import Parallax from '@/components/Parallax'
import Image from 'next/image'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio/Portfolio'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="">
      <section id='home'>
        <Navbar/>
        <Hero/>
      </section>
      <section>
        <Parallax type={'services'}/>
      </section>
      <section id='Services'>
        <Services/>
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
