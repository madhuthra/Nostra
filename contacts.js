

var sidebaractivate = document.getElementById("sidebar-activate")
var sidebardeactivate = document.getElementById("sidebar-deactivate")
var sidebar = document.querySelector(".sidebar")

sidebaractivate.addEventListener("click",function(){
  sidebar.style.marginLeft ="0px"
})
sidebardeactivate.addEventListener("click",function(){
  sidebar.style.marginLeft = "-60%"
})