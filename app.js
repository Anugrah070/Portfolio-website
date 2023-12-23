const Menu_Logo=document.querySelector("#Logo")
const Main_Section=document.querySelector('#Main-SectionID')
const Menu=document.querySelector(".menu_section")
const MiniAbout =document.querySelector(".MiniAbout_Section")
const Footer=document.querySelector(".Footer_Section")
const Cross=document.querySelector("#menu_section_cross")
const PSImage=document.getElementById("PSIMG")
const BlogImage=document.getElementById("BlogIMG")
const WeatherImage=document.getElementById("WeatherIMG")
const ProjectSection=document.getElementById("Projects_id")


//MENU TOGGLE FUNCTION

function ShowMenu(){
    if(Menu.style.right==='-100%'|| Menu.style.right===''){
        Menu.style.right='0'
        Main_Section.style.opacity='0'
        MiniAbout.style.display='none'
        ProjectSection.style.display='none'
        Footer.style.display='none'

    }
    else{

        Menu.style.right='-100%'
    }
}

function HideMenu(){
    Menu.style.right='-100%'
    Main_Section.style.opacity='1'
    ProjectSection.style.display='flex'
    MiniAbout.style.display='flex'
    Footer.style.display='flex'

}


Menu_Logo.addEventListener('click',ShowMenu)

Cross.addEventListener('click',HideMenu)


//IMAGE TO GITHUB REDIRECT

PSImage.addEventListener("click",()=>{
    window.location.href = "https://github.com/Anugrah070/PlayStation_Clone";
})
BlogImage.addEventListener("click",()=>{
    console.log("clicked blog")
    window.location.href = "https://github.com/Anugrah070/Blog-Website";
})
WeatherImage.addEventListener("click",()=>{
    console.log("clicked weather")
    window.location.href = "https://github.com/Anugrah070/Weather_App";
})