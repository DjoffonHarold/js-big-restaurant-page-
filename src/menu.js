//import restaurantHomePage from "./restaurant";
import smallPlate1 from './smallPlate1.jpeg'
import smallPlate2 from './smallPlate2.jpeg'
import smallPlate3 from './smallPlate3.jpeg'
import soupPlate1 from './soupPlate1.jpeg'
import soupPlate2 from './soupPlate2.jpeg'
import soupPlate3 from './soupPlate3.jpeg'
import meatPlate1 from './meatPlate1.jpeg'
import meatPlate2 from './meatPlate2.jpeg'
import meatPlate3 from './meatPlate3.jpeg'

function restaurantMenuPage(){
    const content = document.querySelector("#content")
    const contentMenu = document.createElement("div")
    while(content.firstChild) { 
        content.removeChild(content.firstChild); 
    }
    //content.appendChild(contentMenu)

    const menu = document.createElement("h1")
    menu.classList.add("title")
    menu.textContent = "Menu"

    const contentSmall = document.createElement("div")
    contentSmall.classList.add("firstContent")
    const smallPlateTitle = document.createElement("h2")
    smallPlateTitle.classList.add("middleTitle")
    smallPlateTitle.textContent = "Small Plates"
    const place1 = document.createElement("div")
    place1.classList.add("place")
    const place2 = document.createElement("div")
    place2.classList.add("place")
    const place3 = document.createElement("div")
    place3.classList.add("place")
    
    const contentSoup = document.createElement("div")
    contentSoup.classList.add("secondContent")
    const soupPlateTitle = document.createElement("h2")
    soupPlateTitle.classList.add("middleTitle")
    soupPlateTitle.textContent = "Soups and Salads"
    const place4 = document.createElement("div")
    place4.classList.add("place")
    const place5 = document.createElement("div")
    place5.classList.add("place")
    const place6 = document.createElement("div")
    place6.classList.add("place")

    const contentFish = document.createElement("div")
    contentFish.classList.add("thirdContent")
    const fishPlateTitle = document.createElement("h2")
    fishPlateTitle.classList.add("middleTitle")
    fishPlateTitle.textContent = "Meat and Fish"
    const place7 = document.createElement("div")
    place7.classList.add("place")
    const place8 = document.createElement("div")
    place8.classList.add("place")
    const place9 = document.createElement("div")
    place9.classList.add("place")
    
    
    const smallPlateImage1 = new Image()
    smallPlateImage1.classList.add("image1")
    smallPlateImage1.src = smallPlate1
    const descriptionImage1 = document.createElement("h3")
    descriptionImage1.classList.add("middleDescription")
    descriptionImage1.textContent = "Pkhali Hand-chopped baby spinach and beets pkhali with walnuts and herbs. Served with eggplant rolls.$12"
    const smallPlateImage2 = new Image()
    smallPlateImage2.classList.add("image1")
    smallPlateImage2.src = smallPlate2
    const descriptionImage2 = document.createElement("h3")
    descriptionImage2.classList.add("middleDescription")
    descriptionImage2.textContent = "Chicken Liver PatePate made with chicken liver. Served on a tender slice of bread with herbs.$18"
    const smallPlateImage3 = new Image()
    smallPlateImage3.classList.add("image1")
    smallPlateImage3.src = smallPlate3
    const descriptionImage3 = document.createElement("h3")
    descriptionImage3.classList.add("middleDescription")
    descriptionImage3.textContent = "GebjaliaCheese roll made with sulguni cheese, tarragon, basil, cilantro, mint, garlic and matsoni yogurt.$14"
 
    const soupPlateImage1 = new Image()
    soupPlateImage1.classList.add("image1")
    soupPlateImage1.src = soupPlate1
    const descriptionSoupImage1 = document.createElement("h3")
    descriptionSoupImage1.classList.add("middleDescription")
    descriptionSoupImage1.textContent = "Soup KharchoSlow-cooked beef soup with rice, tomatoes, herbs and Georgian spices.$18"
    const soupPlateImage2 = new Image()
    soupPlateImage2.classList.add("image1")
    soupPlateImage2.src = soupPlate2
    const descriptionSoupImage2 = document.createElement("h3")
    descriptionSoupImage2.classList.add("middleDescription")
    descriptionSoupImage2.textContent = "Georgian Salad Traditional Georgian salad with cucumbers and tomatoes served with walnut dressing.$14"
    const soupPlateImage3 = new Image()
    soupPlateImage3.classList.add("image1")
    soupPlateImage3.src = soupPlate3
    const descriptionSoupImage3 = document.createElement("h3")
    descriptionSoupImage3.classList.add("middleDescription")
    descriptionSoupImage3.textContent = "Badrijani Salad Grilled eggplant, tarragon sauce, garlic, Georgian spices.$19"
    
    const meatPlateImage1 = new Image()
    meatPlateImage1.classList.add("image1")
    meatPlateImage1.src = meatPlate1
    const descriptionMeatImage1 = document.createElement("h3")
    descriptionMeatImage1.classList.add("middleDescription")
    descriptionMeatImage1.textContent = "Mtsvadi Medium-size meat cubes marinated in onions, herbs and spices. Grilled on the skewer. Served with roasted potatoes.Chicken $25Pork$26"
    const meatPlateImage2 = new Image()
    meatPlateImage2.classList.add("image1")
    meatPlateImage2.src = meatPlate2
    const descriptionMeatImage2 = document.createElement("h3")
    descriptionMeatImage2.classList.add("middleDescription")
    descriptionMeatImage2.textContent = "Kebab Ground meat with Georgian herbs and spices cooked on the skewer. Served with roasted potatoes.Lamb$26 Chicken$24"
    const meatPlateImage3 = new Image()
    meatPlateImage3.classList.add("image1")
    meatPlateImage3.src = meatPlate3
    const descriptionMeatImage3 = document.createElement("h3")
    descriptionMeatImage3.classList.add("middleDescription")
    descriptionMeatImage3.textContent = "Ajapsandali Vegetable stew: eggplants, potatoes, bell peppers and onions cooked with tomatoes, cilantro and spices.$24"


    place1.appendChild(smallPlateImage1)
    place1.appendChild(descriptionImage1)
    place2.appendChild(smallPlateImage2)
    place2.appendChild(descriptionImage2)
    place3.appendChild(smallPlateImage3)
    place3.appendChild(descriptionImage3)
    contentSmall.appendChild(place1)
    contentSmall.appendChild(place2)
    contentSmall.appendChild(place3)

    place4.appendChild(soupPlateImage1)
    place4.appendChild(descriptionSoupImage1)
    place5.appendChild(soupPlateImage2)
    place5.appendChild(descriptionSoupImage2)
    place6.appendChild(soupPlateImage3)
    place6.appendChild(descriptionSoupImage3)

    contentSoup.appendChild(place4)
    contentSoup.appendChild(place5)
    contentSoup.appendChild(place6)

    place7.appendChild(meatPlateImage1)
    place7.appendChild(descriptionMeatImage1)
    place8.appendChild(meatPlateImage2)
    place8.appendChild(descriptionMeatImage2)
    place9.appendChild(meatPlateImage3)
    place9.appendChild(descriptionMeatImage3)

    contentFish.appendChild(place7)
    contentFish.appendChild(place8)
    contentFish.appendChild(place9)
   
    contentMenu.appendChild(menu)
    contentMenu.appendChild(smallPlateTitle)
    contentMenu.appendChild(contentSmall)
    contentMenu.appendChild(soupPlateTitle)
    contentMenu.appendChild(contentSoup)
    contentMenu.appendChild(fishPlateTitle)
    contentMenu.appendChild(contentFish)
    
    
    content.appendChild(contentMenu)
    
    
   
    


}
export default restaurantMenuPage