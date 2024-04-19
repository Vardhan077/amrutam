import './index.css'

const Header = () =>{
    return(
        <div className="headerContainer">  
            <div className='container'>
                <div className='one'>
                    <img className='logo' src="https://res.cloudinary.com/dg9itycrz/image/upload/v1713501103/v1_10_ivb2bx.png" alt="image"  />
                    <p>Home</p>
                    <p className='d'>Find Doctors</p>
                    <p>About Us</p>
                </div>
                <div className='two'>
                    <button className='login'>Login</button>
                    <button className='signUp'>Sign-up</button>
                </div>
            </div>
        </div>
    )
}

export default Header