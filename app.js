const Menu_Logo=document.querySelector("#Logo")
const Main_Section=document.querySelector('#Main-SectionID')
const Menu=document.querySelector(".menu_section")
const MiniAbout =document.querySelector(".MiniAbout_Section")
const Footer=document.querySelector(".Footer_Section")
const Cross=document.querySelector("#menu_section_cross")

function ShowMenu(){
    if(Menu.style.right==='-100%'|| Menu.style.right===''){
        Menu.style.right='0'
        Main_Section.style.opacity='0'
        MiniAbout.style.display='none'
        Footer.style.display='none'

    }
    else{

        Menu.style.right='-100%'
    }
}

function HideMenu(){
    Menu.style.right='-100%'
    Main_Section.style.opacity='1'
    MiniAbout.style.display='flex'
    Footer.style.display='flex'

}


Menu_Logo.addEventListener('click',ShowMenu)

Cross.addEventListener('click',HideMenu)