import React from 'react'

export default function MiniAbout() {
  return (
    <section class="MiniAbout_Section">

      
      
      <div class="MiniABout">

        <div class="mini">
          <img src="/assets/AboutImg.png" alt=""/>

        <div class="MiniAbout_Right">
          <h1 class="MiniAbout_Heading">About Me</h1>
        <p class="MiniAbout_Content">Currently studying IT engineering in my third year at Dy Patil Institute of Technology. I'm on a journey of learning and experiencing all things tech. Let me share a bit about who I am, what I'm learning, and why it's so exciting. Welcome to my digital space!</p>
        </div>
        </div>
        </div>

        <div class="MiniAbout_MySkills">
            <h1 class="MiniAbout_Heading">My Skills</h1>

            <div class="MiniAbout_MySkills_Images">
              <div class="MiniAbout_MySkills_ImageBorder"><img src="/assets/tech/html.png" alt=""/>
                <p>HTML</p>
                </div>
                <div class="MiniAbout_MySkills_ImageBorder"><img src="/assets//tech/css.png" alt=""/>
                <p>CSS</p>
                </div>
                <div class="MiniAbout_MySkills_ImageBorder"><img src="/assets/tech/javascript.png" alt=""/>
                <p>Javascript</p>
                </div>
                <div class="MiniAbout_MySkills_ImageBorder"><img src="/assets/tech/mongodb.png" alt=""/>
                <p>MongoDB</p>
                </div>
                <div class="MiniAbout_MySkills_ImageBorder"><img src="/assets/tech/nodejs.png" alt=""/>
                <p>NodeJS</p>
                </div>
                <div class="MiniAbout_MySkills_ImageBorder"><img  src="/assets/tech/reactjs.png" alt=""/>
                <p>React</p>
                </div>
                <div class="MiniAbout_MySkills_ImageBorder"><img src="/assets/tech/git.png" alt=""/>
                <p>Git</p>
                </div>
                <div class="MiniAbout_MySkills_ImageBorder"><img src="/assets/tech/express.png" alt=""/>
                  <p>ExpressJS</p>
                </div>
                <div class="MiniAbout_MySkills_ImageBorder"><img src="/assets/tech/tailwind.png" alt=""/>
                  <p>Tailwind</p>
                </div>
            </div>

            

        </div>

        <div class="buttons">
          <button onClick={()=>{ window.location.href = '/projects'}} class="button-89" role="button">SHOW PROJECTS</button>
        <button onClick={()=>{ window.location.href = '/contact'}} class="button-89" role="button">CONTACT ME</button>
        </div>

        
    </section>


  )
}
