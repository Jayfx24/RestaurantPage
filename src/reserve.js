const contentContainer = document.querySelector("#content");
const reserveContainer = document.createElement('div')
const reserveForm = document.createElement('form')
createForm()


export function createReserve(){
    
    contentContainer.innerHTML = ''
    reserveContainer.appendChild(reserveForm)
    contentContainer.appendChild(reserveContainer)

}


function createForm(){
    reserveForm.id = 'reserveForm';

    const nameLabel = document.createElement('label')
    const nameInput = document.createElement('input')
    nameLabel.textContent= "Full Name: "
    nameLabel.setAttribute("for", "name")
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "name");
    nameInput.setAttribute("id", "name");

    nameInput.setAttribute("required", "true");

    reserveForm.appendChild(nameLabel)
    reserveForm.appendChild(nameInput)
    reserveForm.appendChild(document.createElement("br"));


    const dateLabel = document.createElement('label')
    const dateInput = document.createElement('input')
    dateLabel.textContent= "Reservation Date: "
    dateLabel.setAttribute("for", "date")
    dateInput.setAttribute("type", "datetime-local");
    dateInput.setAttribute("id", "date");

    dateInput.setAttribute("name", "date");
    dateInput.setAttribute("required", "true");

    reserveForm.appendChild(dateLabel)
    reserveForm.appendChild(dateInput)
    reserveForm.appendChild(document.createElement("br"));



    const emailLabel = document.createElement('label')
    const emailInput = document.createElement('input')
    emailLabel.textContent= "Email: "
    emailLabel.setAttribute("for", "time")
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("required", "true");

    reserveForm.appendChild(emailLabel)
    reserveForm.appendChild(emailInput)
    reserveForm.appendChild(document.createElement("br"));


    const peopleLabel = document.createElement("label");
    const peopleInput = document.createElement("input");
    peopleLabel.textContent = "Number of People:";
    peopleInput.setAttribute("type", "number");
    peopleInput.setAttribute("name", "people");
    peopleInput.setAttribute("id", "people");
    peopleInput.setAttribute("min", "1");
    peopleInput.setAttribute("max", "12");

    peopleInput.setAttribute("required", "true");


    reserveForm.appendChild(peopleLabel);
    reserveForm.appendChild(peopleInput);
    reserveForm.appendChild(document.createElement("br"));

    const specialLabel = document.createElement("label");
    const specialInput = document.createElement("textarea");
    specialLabel.textContent = "Special Requests:";
    specialLabel.setAttribute("for", "specials")
    specialInput.setAttribute("name", "specials");
    specialInput.setAttribute("id", "specials");

    reserveForm.appendChild(specialLabel);
    reserveForm.appendChild(specialInput);
    reserveForm.appendChild(document.createElement("br"));


    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit Reservation";
    reserveForm.appendChild(submitButton);
    


}