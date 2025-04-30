import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
        <nav className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">HomeHero</h1>
                <ul className="flex gap-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profiles">Profiles</Link></li>
                    <li><Link to="/book">Book Service</Link></li>
                </ul>
            </div>

        </nav>
      
    </div>
  )
}

export default NavBar
