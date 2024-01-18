import React from 'react'


export default function Projects() {
  return (
    <>
<section id="Projects_id" class="Projects_list">

<div class="Project" onClick={() => window.location.href = 'https://github.com/Anugrah070/PlayStation_Clone'}>
    
    <img id ="PSIMG" src="/assets/project_Images/PS.png" alt=""/>
    <p>PLAYSTATION CLONE</p>
</div>

<div class="Project" onClick={() => window.location.href = 'https://github.com/Anugrah070/Blog-Website'}>
    <img id="BlogIMG" src="/assets/project_Images/Blog.png" alt=""/>
    <p>BLOG-WEBSITE</p>
</div>
<div class="Project" onClick={() => window.location.href = 'https://github.com/Anugrah070/Weather_App'}>
    <img id="WeatherIMG" src="/assets/project_Images/Weather.png" alt=""/>
    <p>WEATHER-APP</p>
</div>
</section>



<button onClick={()=>{ window.location.href = '/contact';}} id="Project_ContactBtn"  class="button-89" role="button">CONTACT ME</button>
    </>
    
    
  )
}
