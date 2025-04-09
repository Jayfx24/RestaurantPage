const contentContainer = document.querySelector("#content");
const reserveContainer = document.createElement('div')
const reserveForm = document.createElement('form')
createForm()

reserveContainer.id = 'reserveContainer';


export function createReserve(){


    contentContainer.innerHTML = ''
    reserveContainer.appendChild(reserveForm)
    contentContainer.appendChild(reserveContainer)

}


function createForm(){
    reserveForm.id = 'reserveForm';

    const nameLabel = document.createElement('label');
    const nameInput = document.createElement('input');
    const nameDiv = document.createElement('div');
    const dateDiv = document.createElement('div');
    const emailDiv = document.createElement('div');
    const peopleDiv = document.createElement('div');
    const requestsDiv = document.createElement('div');
    const timeDiv = document.createElement('div');


    nameDiv.classList = 'form-group'
    dateDiv.classList = 'form-group'
    timeDiv.classList = 'form-group'
    emailDiv.classList = 'form-group'
    peopleDiv.classList = 'form-group'
    requestsDiv.classList = 'form-group'




    nameLabel.textContent= "Full Name "
    nameLabel.setAttribute("for", "name")
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "name");
    nameInput.setAttribute("id", "name");

    nameInput.setAttribute("required", "true");

    nameDiv.appendChild(nameLabel)
    nameDiv.appendChild(nameInput)
    reserveForm.appendChild(nameDiv);


    const dateLabel = document.createElement('label')
    const dateInput = document.createElement('input')
    dateLabel.textContent= "Reservation Date "
    dateLabel.setAttribute("for", "date")
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("id", "date");

    dateInput.setAttribute("name", "date");
    dateInput.setAttribute("required", "true");

    dateDiv.appendChild(dateLabel)
    dateDiv.appendChild(dateInput)
    reserveForm.appendChild(dateDiv);

    const timeLabel = document.createElement('label')
    const timeInput = document.createElement('input')
    timeLabel.textContent= "Reservation Time "
    timeLabel.setAttribute("for", "time");
    timeInput.setAttribute("type", "time");
    timeInput.setAttribute("id", "time");
    timeInput.setAttribute("name", "time");
    timeInput.setAttribute("required", "true");

    timeDiv.appendChild(timeLabel)
    timeDiv.appendChild(timeInput)
    reserveForm.appendChild(timeDiv);


    const emailLabel = document.createElement('label')
    const emailInput = document.createElement('input')
    emailLabel.textContent= "Email "
    emailLabel.setAttribute("for", "email")
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("required", "true");

    emailDiv.appendChild(emailLabel)
    emailDiv.appendChild(emailInput)
    reserveForm.appendChild(emailDiv);


    const peopleLabel = document.createElement("label");
    const peopleInput = document.createElement("input");
    peopleLabel.textContent = "Number of People ";
    peopleInput.setAttribute("type", "number");
    peopleInput.setAttribute("name", "people");
    peopleInput.setAttribute("id", "people");
    peopleInput.setAttribute("min", "1");
    peopleInput.setAttribute("max", "12");

    peopleInput.setAttribute("required", "true");


    peopleDiv.appendChild(peopleLabel);
    peopleDiv.appendChild(peopleInput);
    reserveForm.appendChild(peopleDiv);

    const specialLabel = document.createElement("label");
    const specialInput = document.createElement("textarea");
    specialLabel.textContent = "Special Requests";
    specialLabel.setAttribute("for", "specials")
    specialInput.setAttribute("name", "specials");
    specialInput.setAttribute("id", "specials");

    requestsDiv.appendChild(specialLabel);
    requestsDiv.appendChild(specialInput);
    reserveForm.appendChild(requestsDiv);


    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", "submitBtn");   
    submitButton.textContent = "Submit Reservation";
    reserveForm.appendChild(submitButton);
    


}


function makeId() {
    let result = '';
    let num = Math.floor(Math.random() * 30) + 1;
    let twoDigit = num.toString().padStart(2, '0');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUV';
    const charactersLength = characters.length;
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    result += twoDigit;
    return result;
}

reserveForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const formData = new FormData(reserveForm);

    const formValues = {
        name: formData.get('name'),
        date: formData.get('date'),
        time: formData.get('time'),
        email: formData.get('email'),
        request: formData.get('specials'),
        people: formData.get('people')
    };

    spotReserved(formValues)

})

function spotReserved(formValues){
    contentContainer.innerHTML = '';
    const orderDiv = document.createElement('div')
    const resDetails = document.createElement('div')
    const orderTitle = document.createElement('h1')
    const order = document.createElement('h3')
    const ul = document.createElement('ul')
    let tableNumber = makeId()

    orderDiv.id = 'order'
    order.id = 'orderText'
    resDetails.id = 'resDetails'

    ul.className = 'r-list'
    for (const [key, value] of Object.entries(formValues)) {
        if (key){
            const li = document.createElement('li');
            li.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)} - ${value}`;
            ul.appendChild(li);
        }
    }


    orderTitle.textContent = `Table ${tableNumber} Reserved for ${formValues['name'].toUpperCase()}`
    order.textContent = 'Reservation Details'

    orderDiv.appendChild(orderTitle)
    resDetails.appendChild(order)
    resDetails.appendChild(ul)
    orderDiv.appendChild(resDetails)
    contentContainer.appendChild(orderDiv)
}