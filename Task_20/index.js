document.addEventListener('DOMContentLoaded', () => {
  emailjs.init("lZ4Gv-M0VEfHAblrm");
  let cart=[];

  const selectToggles = document.querySelectorAll('.select-toggle');
  const bookButton=document.querySelector('.book-button');
  const fullNameInput=document.getElementById('full-name');
  const emailInput=document.getElementById('email');
  const phoneInput=document.getElementById('phone-number');


 selectToggles.forEach((toggle) => {
 const addBtn = toggle.querySelector('.add');
 const rmvBtn = toggle.querySelector('.rmv');
 
 const serviceBox=toggle.closest('.service-boxes');
 const serviceName = serviceBox.querySelector('p').childNodes[1].textContent.trim();
  const priceText = serviceBox.querySelector('.serv-price').textContent;
  const price = parseFloat(priceText.replace('₹', ''));

//for adding items to the cart
 addBtn.addEventListener('click', () => {
   toggle.classList.add('active');//toggling add items button
   cart.push({id:serviceName, name:serviceName, price:price });//adding objects
   console.log("items added", cart);
   updatecartUI();
 });

//for removing items from cart
 rmvBtn.addEventListener('click', () => {
   toggle.classList.remove('active');
   cart=cart.filter(item=> item.id!==serviceName);
   console.log("item removed",cart);
   updatecartUI();
 });
  });

  //cart updating function
  function updatecartUI(){
    const cartItemscontainer=document.getElementById('cart-items');
    const cartDefaultitems=document.getElementById('default-items');
    const amountElement=document.getElementById('amount');
    if (cart.length===0){
      cartDefaultitems.style.display='flex';
      cartItemscontainer.innerHTML='';
      amountElement.textContent='₹0';
      return;
    }
    cartDefaultitems.style.display='none';
    let cartHTML='';
    let total=0;
    //loop for selecting item through each indices
    cart.forEach((item,index)=>{
      total+=item.price;
      cartHTML+=`
      <div class="cart-row">
        <p class="sno">${index + 1}</p>
        <p class="sName">${item.name}</p>
        <p class="price">₹${item.price.toFixed(2)}</p>
      </div>
      `});
      cartItemscontainer.innerHTML=cartHTML;
      amountElement.textContent=`₹${total.toFixed(2)}`;
  }
//book button setup
const buttonDefaultMsg=document.querySelector('.not-send');
const buttonBlankField=document.querySelector('.blank-field')
const buttonSentMsg=document.querySelector('.send');
if(bookButton){
  bookButton.addEventListener('click',(e)=>{
    e.preventDefault();
    if (buttonDefaultMsg[0]) buttonDefaultMsg[0].style.display = 'none';
    if (buttonBlankField[0]) buttonBlankField[0].style.display = 'none';
    if (buttonSentMsg[0]) buttonSentMsg[0].style.display = 'none';

    if (cart.length === 0) {
    buttonDefaultMsg[0].style.display = 'flex';
      return;
    }
    if (!fullNameInput.value.trim() || !emailInput.value.trim() || !phoneInput.value.trim()) {
        if (buttonBlankField) buttonBlankField.style.display = 'flex';
        return;
    }

      const orderDetails = cart
        .map((item, i) => `${i + 1}. ${item.name} - ₹${item.price.toFixed(2)}`)
        .join('\n');
      
        const totalAmount = document.getElementById('amount').textContent;
      const templateParams = {
        user_name: fullNameInput.value,
        user_email: emailInput.value,
        user_phone: phoneInput.value,
        orders: orderDetails,
        total_amount: totalAmount
      };
      emailjs.send('service_ik5ieof', 'template_08p35lk', templateParams)
        .then(() => {
          if (buttonSentMsg) buttonSentMsg.style.display = 'flex';
          alert('Booking successful! A confirmation email has been sent.');

          cart = [];
          updatecartUI();
          document.querySelectorAll('.select-toggle.active').forEach(toggle => toggle.classList.remove('active'));
          fullNameInput.value = '';
          emailInput.value = '';
          phoneInput.value = '';
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          alert('Failed to send booking. Please check console for details.');
       });
     });
    }
});