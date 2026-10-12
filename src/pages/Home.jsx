import {Link} from "react-router-dom"

function Home(){
    return (
        <div className="home-hero">
            <h1>Welcome to ODIN Store</h1>
            <p>Discover handpicked curated collections optimized for your development lifestylre</p>
            <Link to="/shop">Shop Products Now</Link>
        </div>
    )
}

export default Home;