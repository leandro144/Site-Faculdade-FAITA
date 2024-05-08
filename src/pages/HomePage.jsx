
import About from '../components/About/About'
import Cards from '../components/Cards/Cards'
import Contact from '../components/Contact/Contact'
import Courses from '../components/Courses/Courses'
import Footer from '../components/Footer/Footer'
import Main from '../components/Main/Main'
import Navbars from '../components/Navbar/Navbars'
import SubNavbar from '../components/SubNavbar/SubNavbar'


function HomePage() {

  return (
    <>
      <SubNavbar/>
      <Navbars />
      <Main />
      <About />
      <Cards />
      <Courses />
      <Contact />
      <Footer />
    </>
      
  )
}

export default HomePage;
