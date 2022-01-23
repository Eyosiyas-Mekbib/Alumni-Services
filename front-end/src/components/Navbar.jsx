import '../App.css'



function Navbar() {
  
  return (
    <div className='navbar'>
      <a href="" className="logo">ALUMNI</a>
      <nav className=''>
          <ul>
              <a href='#home'><li>Home</li></a>
              <a href='#services'><li>Services</li></a>
              <a href=''><li>About</li></a>
              <a href=''><li>Faq</li></a>
          </ul>
      </nav>
    </div>
  );
}

export default Navbar;