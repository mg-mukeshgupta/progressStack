// for rendering services
const addItemButton= document.querySelector("#ad-item-btn");

addItemButton.addEventListener("click", function(){
    console.log("Add item clicked");
})
const skipItemButton = document.querySelector("#skip-item-btn");
const services = [{
  image:"img pkg/laundry.jpeg", name:"Dry cleaning",price: 200 },
 {image:"img pkg/suede.jpeg", name:"Leather and suede cleaning", price:999 },
 {image:"img pkg/ironing.jpeg", name:"Ironing",price: 30 },
 {image:"img pkg/dress cleaning.jpeg", name:"wedding dress cleaning",price: 2400 },
 {image:"img pkg/fold.jpeg", name:"wash and fold", price: 140 }, 
 {image:"img pkg/stain.jpeg", name:"Stain removal", price: 500 }];
  
 let cart=[];
 let currentService=0;

const renderService = () => {

    if (currentService >= services.length) {
        console.log("All services processed");
        return;
    }
    const service = services[currentService];
    document.querySelector("#ser-name").textContent = service.name;
    document.querySelector("#ser-pp").textContent =`₹${service.price.toFixed(2)}`;
    document.querySelector("#ser-img").src = service.image;
};



  //for cart
const renderCart = () => {
   
    const cartItems = document.querySelector("#cart-items");
    const defaultItems=document.querySelector(".default-items");
    // console.log("cart:",cart);
    // console.log("defaultItems:",defaultItems);
    cartItems.innerHTML = "";

    if (cart.length>0){
      defaultItems.style.display="none";
    }


    cart.forEach((service, index) => {
      const row = document.createElement("div");
      row.className = "cart-row";
      row.innerHTML = `
          <p>${index + 1}</p>
          <p>${service.name}</p>
          <p>₹${service.price.toFixed(2)}</p>
      `;
      cartItems.appendChild(row);
    });
};
const renderTotal = () => {
    const totalAmount = cart.reduce((total, service) => {
        return total + service.price;
    }, 0);

    document.querySelector("#amount").textContent =
        `₹${totalAmount.toFixed(2)}`;
};

//for the cart and serivces

 const addService=()=>{
    cart.push(services[currentService]);
    currentService++;
    renderService();
    renderCart();
    renderTotal();
  }

  const skipService=()=>{
    currentService++;
    renderService();
  }
  skipItemButton.addEventListener("click",()=>{
  skipService();
  });
  addItemButton.addEventListener("click",()=>{
    addService();
  });
  
  renderService();
  
  //for book button warning

const bookButton = document.querySelector(".book-button");
const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const bookingWarning = document.querySelector("#booking-warning");
const bookingWarningText = document.querySelector("#booking-warning-text");

const validateBooking = () => {
  const informationMissing =  fullName.value.trim() === "" ||  email.value.trim() === "" ||  phone.value.trim() === "";
  const cartEmpty = cart.length === 0;
  if (informationMissing && cartEmpty) {
      bookingWarningText.textContent =
          "Please fill in your information and add at least one service.";
      bookingWarning.style.display = "block";
      return;
  }
  if (informationMissing) {
      bookingWarningText.textContent =
          "Please fill in all your information.";
      bookingWarning.style.display = "block";
      return;
  }
  if (cartEmpty) {
      bookingWarningText.textContent =
          "Please add at least one service to the cart.";
      bookingWarning.style.display = "block";
      return;
  }
  bookingWarning.style.display = "none";
  console.log("Booking information is complete");
};
bookButton.addEventListener("click", () => {
    validateBooking();
});