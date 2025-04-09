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

    const nameLabel = document.createElement('label')
    const nameInput = document.createElement('input')
    const nameDiv = document.createElement('div')
    const dateDiv = document.createElement('div')
    const emailDiv = document.createElement('div')
    const peopleDiv = document.createElement('div')
    const requestsDiv = document.createElement('div')


    nameDiv.classList = 'form-group'
    dateDiv.classList = 'form-group'
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
    dateInput.setAttribute("type", "datetime-local");
    dateInput.setAttribute("id", "date");

    dateInput.setAttribute("name", "date");
    dateInput.setAttribute("required", "true");

    dateDiv.appendChild(dateLabel)
    dateDiv.appendChild(dateInput)
    reserveForm.appendChild(dateDiv);



    const emailLabel = document.createElement('label')
    const emailInput = document.createElement('input')
    emailLabel.textContent= "Email "
    emailLabel.setAttribute("for", "time")
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

class ReserveData{
    constructor(name,date,email,people,request){
        this.name = name;
        this.date = date;
        this.email = email;
        this.people = people;
        this.request = request;
    }

}

reserveForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const formData = new FormData(reserveForm);

    const formValues = {
        name: formData.get('name'),
        date: formData.get('date'),
        email: formData.get('email'),
        request: formData.get('specials'),
        people: formData.get('people')
    };
    reserveContainer.innerHTML = '';

    const order = document.createElement('h3')

    order.textContent = `Spot Reserved for ${formValues['name'].toUpperCase}`

    reserveContainer.appendChild(order)
      

})