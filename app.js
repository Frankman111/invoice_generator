// main container
const containerEL = document.querySelector(".invoice-generator");
// make a heading
let heading = document.createElement("h1");
heading.textContent = "Invoice Generator";
containerEL.appendChild(heading);
// make the sum container
const sumContainer = document.querySelector(".sum");
// objects for the services
const services = {CarWash: 10, MowLawn: 20, Groceries: 30};
let chosenServices = [];


for (const key in services) {
    if (services.hasOwnProperty(key)) {
        const serviceBtn = document.createElement("button");
        serviceBtn.textContent = `${key}: ${services[key]}€`;

        serviceBtn.addEventListener("click", function () {
            //check if the service is already booked
            if (!chosenServices.includes(services[key])) {
                //creating a Container for the booked services
                let bookedServices = document.createElement("span")
                bookedServices.classList.add("tasks");
                // create a element for the service names
                let singleServiceName = document.createElement("span");
                singleServiceName.textContent = `${key}:`;
                //create a element for the service values
                let singleServiceValue = document.createElement("span");
                singleServiceValue.textContent = `${services[key]}€`;
                //create a element to remove the services
                let removeBtn = document.createElement("button");
                removeBtn.textContent = "Remove"
                removeBtn.addEventListener("click", function () {
                    // remove the service from the array chosenService
                    chosenServices = chosenServices.filter(service => service !== services[key]);
                    //remove the element from the dom
                    bookedServices.remove();
                    console.log(chosenServices)
                    // calculate the total amount of booked services
                    const total = calculateTotal(chosenServices);
                    totalDisplay.textContent = `Total: ${total}€`;
                })
                bookedServices.appendChild(singleServiceName);
                bookedServices.appendChild(singleServiceValue);
                bookedServices.appendChild(removeBtn);
                containerEL.appendChild(bookedServices)
                chosenServices.push(services[key]) // pushe the values to the array
                // calculate the total amount of booked services
                const total = calculateTotal(chosenServices)
                totalDisplay.textContent = `Total: ${total}€`;
                console.log(total)
            } else {
                alert("Service bereits verwendet")
            }

        })

        containerEL.appendChild(serviceBtn);
    }
}

function calculateTotal(servicesArray) {
    return servicesArray.reduce((total, service) => total + service, 0)
}

// element for the total sum
let totalDisplay = document.createElement("div");
totalDisplay.textContent = "Total: 0€";
sumContainer.appendChild(totalDisplay);

/*
Verbesserter Code von ChatGPT
// main container
const containerEL = document.querySelector(".invoice-generator");
// make a heading
let heading = document.createElement("h1");
heading.textContent = "Invoice Generator";
containerEL.appendChild(heading);
// make the sum container
const sumContainer = document.querySelector(".sum");
// objects for the services
const services = {CarWash: 10, MowLawn: 20, Groceries: 30};
let chosenServices = [];

// element for the total sum
let totalDisplay = document.createElement("div");
totalDisplay.textContent = "Total: 0€";
sumContainer.appendChild(totalDisplay);

for (const key in services) {
    if (services.hasOwnProperty(key)) {
        const serviceBtn = document.createElement("button");
        serviceBtn.textContent = `${key}: ${services[key]}€`;

        serviceBtn.addEventListener("click", function() {
            //check if the service is already booked
            if (!chosenServices.includes(key)) {
                //creating a Container for the booked services
                let bookedServices = document.createElement("span");
                bookedServices.classList.add("tasks");
                // create a element for the service names
                let singleServiceName = document.createElement("span");
                singleServiceName.textContent = `${key}:`;
                //create a element for the service values
                let singleServiceValue = document.createElement("span");
                singleServiceValue.textContent = `${services[key]}€`;
                //create a element to remove the services
                let removeBtn = document.createElement("button");
                removeBtn.textContent = "Remove";
                removeBtn.addEventListener("click", function() {
                    // remove the service from the array chosenService
                    chosenServices = chosenServices.filter(service => service !== key);
                    //remove the element from the dom
                    bookedServices.remove();
                    console.log(chosenServices);
                    // calculate the total amount of booked services
                    const total = calculateTotal(chosenServices.map(service => services[service]));
                    totalDisplay.textContent = `Total: ${total}€`;
                });
                bookedServices.appendChild(singleServiceName);
                bookedServices.appendChild(singleServiceValue);
                bookedServices.appendChild(removeBtn);
                containerEL.appendChild(bookedServices);

                // Add the service key to chosenServices
                chosenServices.push(key);
                // calculate the total amount of booked services
                const total = calculateTotal(chosenServices.map(service => services[service]));
                totalDisplay.textContent = `Total: ${total}€`;
                console.log(total);
            } else {
                alert("Service bereits verwendet");
            }
        });

        containerEL.appendChild(serviceBtn);
    }
}

function calculateTotal(servicesArray) {
    return servicesArray.reduce((total, service) => total + service, 0);
}*/
