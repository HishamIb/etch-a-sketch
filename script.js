
let divsContainer = document.querySelector(".container")
let changeGridButton = document.querySelector(".btn")

// code to change color of hovered element
console.log(containerDivs);

  divsContainer.addEventListener("mouseover",(e)=>{
    let target = e.target
    target.classList.add("color-change")
  })
  divsContainer.addEventListener("mouseover",()=>{
    divsContainer.classList.add("no-color-change")
  })
// generate grid with user input
changeGridButton.addEventListener("click",()=>{
  let gridSize = parseInt(prompt("Enter Grid Size"))
  if(gridSize<4){
    alert("You have to enter 4 minimum")
  }  
  else if(gridSize>100){
    alert("only value upto 100 supported")
  }
  else{
    divsContainer.replaceChildren()
  for(let i=0;i<gridSize;i++){
    for(let j=0;j<gridSize;j++){
      let newDiv = document.createElement("div")
          newDiv.classList.add("divs")
          newDiv.style.width = `${960/gridSize}px`
          newDiv.style.height = `${960/gridSize}px`
          divsContainer.appendChild(newDiv)
  }
    }
          
  }
})