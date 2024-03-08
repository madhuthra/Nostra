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

var productContainer = document.querySelector(".products-list")
var search = document.getElementById("search")
var productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
  var enteredValue = event.target.value.toUpperCase()
  for(count=0;count<productList.length;count=count+1){
    var productname = productList[count].querySelector("h1").textContent
    if(productname.toUpperCase().indexOf(enteredValue)<0){
      productList[count].style.display="none"
    }else{
      productList[count].style.display="block"
    }

  }
})