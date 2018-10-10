let menu = document.getElementById("menu")
let starters = document.getElementById("starters")
let entrees = document.getElementById("entrees")
let desserts = document.getElementById("desserts")



for(let index = 0; index < dishes.length; index++) {

    let dish = dishes[index] 

  

    let menuItem = `
    <li>
    <div><img src="${dish.imageURL}"</div>
     <div><label>${dish.title}</label></div>
     
      <div>${dish.price}</div>

    </li>
    `
    if(dish.course == "Starters") {
        starters.insertAdjacentHTML('beforeend',menuItem) 
    } else if(dish.course == "Entrees"){
        entrees.insertAdjacentHTML('beforeend',menuItem)
    } else if(dish.course == "Desserts"){
        desserts.insertAdjacentHTML('beforeend',menuItem)
    }




    // menu.insertAdjacentHTML('beforeend',menuItem)
   
  
  }
  
  
