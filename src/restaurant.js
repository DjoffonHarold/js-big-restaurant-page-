import homeImage from './homeImage.jpeg'
import restaurantMenuPage from './menu'
import restaurantAboutPage from './about'

function restaurantHomePage(){
    const content = document.querySelector("#content")
    const contentHomePage = document.createElement("div")
    contentHomePage.classList.add("contentHomePage")

    const leftSide = document.createElement("div")
    leftSide.classList.add("leftSide")
    const image = new Image()
    image.classList.add("image")
    image.src = homeImage
    
    leftSide.appendChild(image)
    contentHomePage.appendChild(leftSide)
    
    const rightSide = document.createElement("div")
    rightSide.classList.add("rightSide")
    const title = document.createElement("h1")
    title.classList.add("title")
    title.textContent = "The Place of Delights"
    const description = document.createElement("p")
    description.classList.add("description")
    description.textContent = "In the bustling 9th arrondissement, cradle of Parisian diversity and liveliness, a new gastronomic gem has recently blossomed: the Passionné restaurant has opened with a tempting promise. This culinary newborn fervently celebrates the art of French gastronomy. Each dish that comes to your table is an ode to traditional know-how, enhanced by products carefully selected from small local producers. At Passionné, the authenticity of flavors rivals the excellence of the ingredients, for taste experiences that defy expectations and delight the most demanding palates.The dishes all seem to be accompanied by one or more glasses of sparkling wine, giving a very original character to the site and its cuisine."
    
    rightSide.appendChild(title)
    rightSide.appendChild(description)
   /* rightSide.appendChild(buttonMenu)*/
    contentHomePage.appendChild(rightSide) 

    content.appendChild(contentHomePage)  
    
    const buttonHome = document.querySelector(".buttonHome")
    buttonHome.addEventListener('click', ()=>{
        while(content.firstChild) { 
            content.removeChild(content.firstChild); 
        }
        content.appendChild(contentHomePage) 
    })

    const buttonMenu = document.querySelector(".buttonMenu")
    buttonMenu.addEventListener('click', ()=>{
        restaurantMenuPage();
        
    })
    const buttonAbout = document.querySelector(".buttonAbout")
    buttonAbout.addEventListener('click', ()=>{
        restaurantAboutPage()
    })
}
export default restaurantHomePage

