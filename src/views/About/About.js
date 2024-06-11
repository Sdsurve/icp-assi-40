import Buttons from '../../components/Buttons/Buttons'
import Navbar from '../../components/Navbar/Navbar'
import './About.css'
function About() {
  return (<>
  <Navbar/>
  <Buttons text="I'm From About"/>
    <div className='About-container'>About</div>
    </>
  )
}

export default About