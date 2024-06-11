import "./Contact.css"
import Buttons from '../../components/Buttons/Buttons'
import Navbar from "../../components/Navbar/Navbar"
function Contact() {
  return (<>
  <Navbar/>
  <Buttons text="I'm From Contact"/>
    <div className="contact">contact</div>
    </>
  )
}

export default Contact