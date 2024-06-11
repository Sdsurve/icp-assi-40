import "./home.css"
import Navbar from "../../components/Navbar/Navbar"
import Buttons from "../../components/Buttons/Buttons"

function Home() {
  return (<>
    <Navbar/>
    <Buttons text="I am home button"/>
    <div
    className="Home-container">Home</div>
    </>
  )
}

export default Home