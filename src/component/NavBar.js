import React  from 'react';
import {Link} from 'react-router-dom';

 const NavBar= ()=>{
  
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <div className="nav-item mx-2">
          <Link className="nav-a active" aria-current="page" to="/">Home</Link>
        </div>
        
        <div className="nav-item"><Link className="nav-a" to="/business">Business</Link></div>
                            <div className="nav-item mx-2"><Link className="nav-a" to="/entertainment">Entertainment</Link></div>
                            <div className="nav-item mx-2" ><Link className="nav-a" to="/general">General</Link></div>
                            <div className="nav-item mx-2"><Link className="nav-a" to="/health">Health</Link></div>
                            <div className="nav-item mx-2"><Link className="nav-a" to="/science">Science</Link></div>
                            <div className="nav-item mx-2"><Link className="nav-a" to="/sports">Sports</Link></div>
                            <div className="nav-item mx-2"><Link className="nav-a" to="/technology">Technology</Link></div>
        
        </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  
}
export default NavBar