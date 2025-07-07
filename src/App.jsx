import { ToastContainer } from "react-toastify"
import Contact from "./components/Contact"
import Education from "./components/Education"
import NavBar from "./components/NavBar"
import Profile from "./components/Profile"
import RecentProjects from "./components/RecentProjects"
import Skills from "./components/Skills"
import Specialization from "./components/Specialization"
import BlogCard from "./components/BlogCard"
import Footer from "./components/Footer"
import StatsSection from "./components/StatsSection"
import ProjectCard from "./components/ProjectCard"



function App() {

  return (
    <div className="bg-[#0F0715]">
      <div className="max-w-[1300px] mx-auto ">

        <NavBar></NavBar>


        <Profile></Profile>

        {/* <StatsSection></StatsSection> */}
         <Specialization></Specialization>
        <Skills></Skills>
        <ProjectCard></ProjectCard>
       
       


        <Education></Education>
        <Contact></Contact>
        <BlogCard></BlogCard>


      </div>
      <ToastContainer position="top-center" autoClose={2000} />
      <Footer></Footer>
    </div>

  )
}

export default App
