import { Link } from "react-router-dom"
import'./index.css'

const HomePage = () =>{
    return(
        <div className="homePage">
            <h1 className="homeHeading"><Link to = '/desktop1'>Make An Appointment</Link></h1>
            <h1 className="homeHeading"><Link to = '/desktop2'>Choose An Appointment</Link></h1>

        </div>

    )
}

export default HomePage