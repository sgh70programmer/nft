const trendBoxs = document.querySelectorAll(".trends_box")
if(this.window.innerWidth < 576){
  trendBoxs.forEach(function(item, i){
    if(i >= 2){
      item.style.transform="translateY(-70px)"
    }
  })
}else{ trendBoxs.forEach(function(item){
  if(item.style.transform != null){
    item.style.transform="none"
  }
})

}

window.addEventListener("resize", function(){
  if(this.window.innerWidth < 576){
    trendBoxs.forEach(function(item, i){
      if(i >= 2){
        item.style.transform="translateY(-70px)"
      }
    })
  }else{ trendBoxs.forEach(function(item){
    if(item.style.transform != null){
      item.style.transform="none"
    }
  })

  }
})
