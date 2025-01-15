// main container
const containerEL = document.querySelector(".invoice-generator");
// make a heading
let heading = document.createElement("h1");
heading.textContent = "Invoice Generator";
containerEL.appendChild(heading);



const services = {CarWash: 10, MowLawn: 20, Groceries: 30};


    for (const key in services){
        if (services.hasOwnProperty(key)){
            const serviceBtn = document.createElement("button");
            serviceBtn.textContent = `${key}: ${services[key]}€`;

            serviceBtn.addEventListener("click", function(){
                let bookedServices = document.createElement("p");
                bookedServices.textContent = `${key}: ${services[key]}€`;
                containerEL.appendChild(bookedServices)
            })

            containerEL.appendChild(serviceBtn);
        }
    }


