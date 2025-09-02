
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './App.css'
import { CgMail } from 'react-icons/cg'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <div className="bg-black text-white">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="justify-center">
            <img style={{ width: "400px" }} src="/im-Photoroom.png" alt="" />
          </div>

          <div className=" pt-20 text-center">
            <h1 className='text-4xl p-2  text-slate-100 font-bold'>APARNA JAYAKUMAR</h1>
            <h2 className='text-2xl'>Hello, I am a <span className='text-3xl text-amber-200'>Full Stack Developer</span></h2>
            <div className='text-center p-1'>
              <button className='border border-white bg-green-700 rounded p-1 text-white '><a href='/Aparna CV (2).pdf' download="/Aparna CV (2).pdf">Download Resume</a></button>

            </div>
          </div>
        </div>


        <div id='about' className=" mt-7">
          <h1 className='text-center text-3xl mb-7'>ABOUT</h1>
          <div className='md:grid grid-cols-2 ps-4'>

            <div>
              <p className=' text-xl p-5'>I am a Postgraduate in Physics passout in the year 2017. Have used different programming languages since my graduation. As my interest in coding increased I joined as an intern in web development. In addition to my interest in technology I am always keen to learn new things.

                <p>My Objective is to challenge myself in a new environment to learn, develop and improve my skills.</p>
              </p>
            </div>
            <div>
              <img style={{ width: "550px", height: "250px" }} src="https://42abudhabi.ae/wp-content/uploads/2023/11/computer-programming-nigeria-scaled-1-1-1024x683.jpeg" alt="" />

            </div>
          </div>
        </div>






        <div id='projects' className="mt-10">
          <h1 className='text-3xl text-center mb-7'>CHECK MY PROJECTS </h1>
          <div className="md:grid grid-cols-2 p-5">
            <div className="shadow border border-green-950 text-center p-3 me-1" style={{ height: "150px" }}>
              <u className=''>USED ITEM SELLING WEBSITE</u>
              <p> Website to display used items using HTML, React and React Bootstrap</p>
              <button className='bg-green-950 p-1 rounded m-4'><a href='https://used-hub-frontend.vercel.app/'>Live Link</a></button>
            </div>
            <div className="shadow border border-green-950 text-center p-3" style={{ height: "150px" }}>
              <u className=''>E-COMMERCE WEBSITE</u>
              <p>E-commerce Website using HTML, CSS and Bootstrap</p>
              <button className='bg-green-950 p-1 rounded m-4'><a href='https://baggit-three.vercel.app/'>Live Link</a></button>
            </div>
          </div>

          <div className="md:grid grid-cols-2 p-5">
            <div className="shadow border border-green-950 text-center p-3 me-1" style={{ height: "150px" }}>
              <u className=''>EDUCATION WEBSITE</u>
              <p>Education Website using HTML, React and React Bootstrap</p>
              <button className='bg-green-950 p-1 rounded m-4'><a href='https://online-course-olive.vercel.app/'>Live Link</a></button>
            </div>
            <div className="shadow border border-green-950 text-center p-3" style={{ height: "150px" }}>
              <u className=''>TODO APP</u>
              <p> Website which has CRUD operations made using HTML and React Bootstrap</p>
              <button className='bg-green-950 p-1 rounded m-4'><a href='https://todofrontend-omega-six.vercel.app/'>Live Link</a></button>
            </div>
          </div>



        </div>



        <div id='skills' className="mt-7 mb-7 text-center p-15">
          <h1 className='text-center text-3xl mb-7'>SKILLS</h1>

          <div className="md:grid grid-cols-[1fr_2fr]">
            <div>HTML</div>
<div class="mt-4 relative">
  <div class="w-full bg-white h-2 rounded-3xl me-5"></div>
<div class="absolute top-0 left-0 h-2 rounded-2xl bg-green-600 w-[95%]"></div>
</div>
          </div>

          <div className="md:grid grid-cols-[1fr_2fr]">
            <div>CSS</div>
<div class="mt-4 relative">
  <div class="w-full bg-white h-2 rounded-3xl me-5"></div>
<div class="absolute top-0 left-0 h-2 rounded-2xl bg-green-600 w-[90%]"></div>
</div>
          </div>

                    <div className="md:grid grid-cols-[1fr_2fr]">
            <div>JAVASCRIPT</div>
<div class="mt-4 relative">
  <div class="w-full bg-white h-2 rounded-3xl me-5"></div>
<div class="absolute top-0 left-0 h-2 rounded-2xl bg-green-600 w-[95%]"></div>
</div>
          </div>

                    <div className="md:grid grid-cols-[1fr_2fr]">
            <div>REACT</div>
<div class="mt-4 relative">
  <div class="w-full bg-white h-2 rounded-3xl me-5"></div>
<div class="absolute top-0 left-0 h-2 rounded-2xl bg-green-600 w-[80%]"></div>
</div>
          </div>
        </div>

      




      <div id='contact' className=''>
        <h1 className="text-center text-3xl mt-7 pb-8">
          CONNECT WITH ME
        </h1>
        <div className='md:grid grid-cols-2'>
          <div className="">
            <h3 className='text-4xl text-green-700 font-bold text-center'>Lets Work Together</h3>
          </div>
          <div className=''>
            <div className="flex justify-center text-3xl">
              <a href='https://www.linkedin.com/in/aparna-jayakumar/'>              <FaLinkedin className=' m-2 me-3' /></a>
              <a href='mailto:aparnajayakumar91@gmail.com'>              <CgMail className='m-2 me-4' /></a>
              <a href='https://github.com/Aparnajkumar'>              <FaGithub className='m-2 me-4' /></a>
              <a href='https://wa.me//+918301970395'><IoLogoWhatsapp className='m-2' /></a >

            </div>
          </div>
        </div>
      </div>

    </div >
<Footer/>
    </>
  )
}

export default App
