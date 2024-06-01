const clock = document.querySelector("#clock")

setInterval(function(){
  const now = new Date()
  clock.innerText = now.toLocaleTimeString()
},1000);