import restaurantMenuPage from "./menu"

function restaurantAboutPage(){
    const content = document.querySelector("#content")
    const contentAbout = document.createElement("div")
    contentAbout.classList.add("contentAbout")
    while(content.firstChild){
        content.removeChild(content.firstChild)
    }

    const contentForm = document.createElement("div")
    contentForm.classList.add("contentForm")
    const contentContact = document.createElement("div")
    contentContact.classList.add("contentContact")
    const line = document.createElement("h2")
    line.classList.add("middleTitle")
    line.textContent = " We are available on X Instagram Facebook Photos"
    const info = document.createElement("div")
    info.classList.add("infos")
    const info1 = document.createElement("div")
    info1.classList.add("info")
    info1.textContent = "Palo Alto 335 University Ave, Palo Alto, CA(650) 600-0433"
    const info2 = document.createElement("div")
    info2.classList.add("info")
    info2.textContent = "Los Altos 325 Main St,  Los Altos, CA(650) 753-8056"

    const subscribe = document.createElement("h2")
    subscribe.classList.add("middleTitle")
    subscribe.textContent = "Subscribe to our delicious news."

    const form = document.createElement("form")
    form.method = "POST"
    const labelEmail = document.createElement("label")
    labelEmail.for = "email"
    labelEmail.textContent = "Email :"
    const brSpace = document.createElement("br")
     
    const inputEmail = document.createElement("input")
    inputEmail.classList.add("input")
    inputEmail.type = "email"
    inputEmail.name = "email"

    const submit = document.createElement("button")
    submit.classList.add("submit")
    submit.setAttribute("type", "submit")
    submit.textContent = "submit"



    contentForm.appendChild(subscribe)
    contentForm.appendChild(labelEmail)
    contentForm.appendChild(brSpace)
    contentForm.appendChild(inputEmail)
    contentForm.appendChild(brSpace)
    contentForm.appendChild(submit)
    contentAbout.appendChild(contentForm)
    info.appendChild(info1)
    info.appendChild(info2)
    contentContact.appendChild(line)
    contentContact.appendChild(info)
    
    contentAbout.appendChild(contentContact)
    content.appendChild(contentAbout)

}

export default restaurantAboutPage