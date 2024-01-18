import React from 'react';

export default function Menu(props) {
  return (
    <>
    
      <section className={props.MenuStaus?'hide':'menu_section'}>
        <img id="menu_section_cross" src="/assets/cross.png" alt="" onClick={props.clickHandle} />
  
        <div className="menu_main">
          <div className="menu_list_left">
            <p className="rotate">MENU</p>
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/projects">PROJECTS</a></li>
              <li><a href="/about">ABOUT</a></li>
              <li><a href="/contact">CONTACT</a></li>
            </ul>
          </div>

          <div className="menu_list_right">
            <p>anugrah78123@gmail.com</p>
            <p>+91 7984352350</p>
            <img onClick={()=>{window.location.href='https://github.com/Anugrah070'}} src="/assets/tech/github.png"  alt=""/>
            <img onClick={()=>{window.location.href='https://www.linkedin.com/in/anugrah-sasi-588395249/'}} src="/assets/LinkdenLogo.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
