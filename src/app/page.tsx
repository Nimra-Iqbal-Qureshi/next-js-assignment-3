import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'

function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <section id="about" className='mt-44 ml-64 p-6 items-center text-center w-3/5 2 rounded-lg shadow-2xl shadow-black bg-slate-50 transform transition duration-300 hover:scale-105'>
        <div>
          <h1 className='text-4xl font-bold underline'>About Me </h1>
          <p className='mt-5 text-2xl leading-10 text-center'>I am currently a student at GIAIC.<br/>I know TypeScript, HTML, CSS, and Tailwind CSS.<br/> I haven't made a full website yet, and I'm still learning <br/>how to create websites that look good and work on all screen,<br/> sizes.I'm excited to keep learning and improve my skills in web development.

         </p>
        </div>
            </section>

            <section id="contact" className='mt-52 ml-64 p-6 items-center text-center w-3/5 2 rounded-lg shadow-2xl shadow-black bg-slate-50 transform transition duration-300 hover:scale-105 mb-20'>

              <h1 className='text-4xl font-bold underline'>Contact Me</h1>
              <p className='mt-5 text-2xl leading-10 text-center'>
              I'm always open to connecting! If you have any questions<br/> or just want to say hi, you can contact me at:<br/>

              <strong>Email:</strong> nimra@gmail.com<br/>

              <a href="https://github.com/Nimra-Iqbal-Qureshi">My GitHub Profile</a><br/>
              Looking forward to hearing from you!
              </p>
               
            </section>
      <Footer/>
    </div>
  )
}

export default Home

