var offer = document.querySelector(".offer")
var offerclose = document.getElementById("offer-close")

offerclose.addEventListener("click",function(){
  offer.style.display="none"
})

var sidebaractivate = document.getElementById("sidebar-activate")
var sidebardeactivate = document.getElementById("sidebar-deactivate")
var sidebar = document.querySelector(".sidebar")

sidebaractivate.addEventListener("click",function(){
  sidebar.style.marginLeft ="0px"
})
sidebardeactivate.addEventListener("click",function(){
  sidebar.style.marginLeft = "-60%"
})

var sliderleftbutton = document.getElementById("left-activate")
var sliderrightbutton =document.getElementById("right-activate")
var sliderimage= document.querySelector(".slider__image")
var slidermargin=0
sliderrightbutton.addEventListener("click",function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
})
sliderleftbutton.addEventListener("click",function(){
  slidermargin=slidermargin+100

  if(slidermargin>200)
  {
      slidermargin=0
      sliderimage.style.marginright=0;
  }
  else{
      sliderimage.style.marginLeft="-"+slidermargin+"vw";
  }
})