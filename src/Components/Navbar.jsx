
export default function Navbar(Props){
  

    return(
        
        // <nav className="Main_navbar">
        <nav className='Main_navbar'>
          <a href="/"><img src="assets/logo.png" alt="logo" /></a>
          <img id="Logo" src="assets/menu.png" alt="menu" onClick={Props.clickHandle}/>
        </nav>
  
      
      
    )
}