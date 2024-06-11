// scroll ile fixed yapma
window.addEventListener("scroll",()=>{
    let navbar=document.querySelector(".fixed");
    navbar.classList.toggle("bg-bgNavbar",window.scrollY>0);
    navbar.classList.toggle("fixed-top",window.scrollY>0);

})

//----------------------------------------------------------

//hamburger menu fixed
window.addEventListener('scroll',()=>{
  const hamburger= document.querySelector('#hamburger')
  hamburger.classList.toggle('navbarFixed',window.scrollY>0)

})

const xButton=document.querySelector('#xButton')
const hamMenu=document.querySelector('#hamMenu')
const down=document.querySelector('#down')
const three=document.querySelector('#three')
xButton.addEventListener('click',()=>{
  hamMenu.classList.toggle('hidden')
  down.classList.toggle('hidden')
  three.classList.toggle('hidden')
})







// ---------------------------------------------------------

//Classes sayfası button aktif etme Değerlendirme Formmu 11 başlangıç

const featCont=document.querySelector("#feat-content")


const yogaFunc = () => {
    featCont.innerHTML=`<div  class="flex items-center flex-col sm:max-w-[45%]">
    <h4 class="text-2xl font-bold">Why are your Yoga?</h4>
    <p id="feat-parag" class="text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quibusdam distinctio
      corrupti itaque dolorem quod minus, quae beatae nulla sapiente, earum ea accusantium impedit id, delectus
      omnis? Rem culpa consequatur fugit voluptatum, facere sequi totam esse blanditiis deleniti perspiciatis
      eaque repudiandae quis inventore placeat nisi accusantium, quod cum provident atque.</p>

    <p class="text-2xl font-bold mt-6">When comes Yoga Your Time</p>
    <p class="mt-5 ">Saturday-Sunday: 8:00am – 10:00am</p>
    <p class="mt-5 ">Monday-Tuesday: 10:00am – 12:00pm</p>
    <p class="mt-5 ">Wednesday-Friday: 3:00pm – 6:00pm</p>
  </div>

  <div  class="sm:max-w-[45%]">
    <img id="feat-img"  src="./image/yoga.jpg" alt="">

  </div>

</div>`
  

}
const groupFunc = ()=>{
    
    featCont.innerHTML=`<div  class="flex items-center flex-col sm:max-w-[45%]">
    <h4 class="text-2xl font-bold">Why are your Group?</h4>
    <p id="feat-parag" class="text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quibusdam distinctio
      corrupti itaque dolorem quod minus, quae beatae nulla sapiente, earum ea accusantium impedit id, delectus
      omnis? Rem culpa consequatur fugit voluptatum, facere sequi totam esse blanditiis deleniti perspiciatis
      eaque repudiandae quis inventore placeat nisi accusantium, quod cum provident atque.</p>

    <p class="text-2xl font-bold mt-6">When comes Group Your Time</p>
    <p class="mt-5 ">Saturday-Sunday: 8:00am – 10:00am</p>
    <p class="mt-5 ">Monday-Tuesday: 10:00am – 12:00pm</p>
    <p class="mt-5 ">Wednesday-Friday: 3:00pm – 6:00pm</p>
  </div>

  <div  class="sm:max-w-[45%]">
    
    <img id="feat-img"  src="./image/group.webp" alt="">

  </div>

</div>`

}
const soloFunc=() =>{
    featCont.innerHTML=`<div  class="flex items-center flex-col sm:max-w-[45%]">
    <h4 class="text-2xl font-bold">Why are your Solo?</h4>
    <p id="feat-parag" class="text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quibusdam distinctio
      corrupti itaque dolorem quod minus, quae beatae nulla sapiente, earum ea accusantium impedit id, delectus
      omnis? Rem culpa consequatur fugit voluptatum, facere sequi totam esse blanditiis deleniti perspiciatis
      eaque repudiandae quis inventore placeat nisi accusantium, quod cum provident atque.</p>

    <p class="text-2xl font-bold mt-6">When comes Solo Your Time</p>
    <p class="mt-5 ">Saturday-Sunday: 8:00am – 10:00am</p>
    <p class="mt-5 ">Monday-Tuesday: 10:00am – 12:00pm</p>
    <p class="mt-5 ">Wednesday-Friday: 3:00pm – 6:00pm</p>
  </div>

  <div  class="sm:max-w-[45%]">
    
    <img id="feat-img"  src="./image/solo.jpg" alt="">

  </div>

</div>`

}
const stretchingFunc=() =>{
    featCont.innerHTML=`<div  class="flex items-center flex-col sm:max-w-[45%]">
    <h4 class="text-2xl font-bold">Why are your Strecthing?</h4>
    <p id="feat-parag" class="text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quibusdam distinctio
      corrupti itaque dolorem quod minus, quae beatae nulla sapiente, earum ea accusantium impedit id, delectus
      omnis? Rem culpa consequatur fugit voluptatum, facere sequi totam esse blanditiis deleniti perspiciatis
      eaque repudiandae quis inventore placeat nisi accusantium, quod cum provident atque.</p>

    <p class="text-2xl font-bold mt-6">When comes Strecthing Your Time</p>
    <p class="mt-5 ">Saturday-Sunday: 8:00am – 10:00am</p>
    <p class="mt-5 ">Monday-Tuesday: 10:00am – 12:00pm</p>
    <p class="mt-5 ">Wednesday-Friday: 3:00pm – 6:00pm</p>
  </div>

  <div  class="sm:max-w-[45%]">
    <img id="feat-img"  src="./image/stret.webp" alt="">

  </div>

</div>`

}

const btns = document.querySelector("#btns-div")
btns.addEventListener("click",(e)=>{
    const btnId=e.target.id;
    switch(btnId){
        case "yoga":
            yogaFunc();
            break;
        case "group":
            groupFunc();
            break;
        case "solo":
            soloFunc();
            break;
        case "stretching":
            stretchingFunc();
            break;
        default:
            return;    
    }
});


//Our Classes altındaki butonlara focus özelliği ile "i" eklemek
const buttons = document.querySelectorAll('#btns-div button');

// Tüm butonların altındaki ok öğelerini kaldır
function removeAllCarets() {
    buttons.forEach(button => {
        const caretElement = button.querySelector('i.fa-caret-down');
        if (caretElement) {
            button.removeChild(caretElement);
        }
    });
}

buttons.forEach(button => {
    button.addEventListener('focus', () => {
        // Diğer butonlardaki öğeyi kaldırın
        removeAllCarets();

        // Yeni bir caret öğesi oluşturun ve butona ekleyin
        const newCaretElement = document.createElement('i');
        newCaretElement.className = 'fa-solid fa-caret-down left-1/2 ve -translate-x-1/2 absolute bottom-0 top-4 -z-10 bg-hoverColor';
        button.appendChild(newCaretElement);
    });
});

// Sayfa üzerinde herhangi bir yere tıklandığında tüm ok öğelerini kaldır
document.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (!clickedElement.matches('button')) {
        removeAllCarets();
    }
});

// Değerlendirme formu 11 bitiş


// --------------------------------------------------------

//BODY MASS BMI
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const bmiResultSpan = document.querySelector('.bmiResult');
const bmiReportSpan = document.querySelector('.bmireport');
const caretElement = document.getElementById('bmıCaret');

function calculateBMI() {
    const height = parseFloat(heightInput.value) / 100; // cm cinsinden alınan boyu metreye çeviriyoruz
    const weight = parseFloat(weightInput.value);
    let bmi =parseFloat(weight / (height **2));
    
    
    let caretMove;

    // BMI sonucunu ekrana yazdır
    

    // BMI sonucuna göre bir rapor oluştur
    if(bmi<13){
        bmiReportSpan.textContent = "Underweight";
        bmiResultSpan.innerHTML=` ${bmi.toFixed(2)}`
        caretMove = (bmi-13)*(80/27.5)+5
        caretElement.style.left = `7%`;

    }else if (bmi < 18.5) {
        bmiReportSpan.textContent = "Underweight";
        bmiResultSpan.innerHTML=` ${bmi.toFixed(2)}`
        caretMove = (bmi-13)*(80/27.5)+5
        caretElement.style.left = `${caretMove}%`;
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiReportSpan.textContent = "Normal weight";
        caretMove = (bmi-13)*(80/27.5)+5
        caretElement.style.left = `${caretMove}%`;
        bmiResultSpan.innerHTML=` ${bmi.toFixed(2)}`
    } else if (bmi >= 25 && bmi < 30) {

        bmiReportSpan.textContent = "Overweight";
        caretMove = (bmi-13)*(80/27.5)+5
        caretElement.style.left = `${caretMove}%`;
        bmiResultSpan.innerHTML=` ${bmi.toFixed(2)}`
    } else if(bmi>=30 && bmi<35) {
        bmiReportSpan.textContent = "Obese";
        caretMove = (bmi-13)*(80/27.5)+5
        caretElement.style.left = `${caretMove}%`;
        bmiResultSpan.innerHTML=` ${bmi.toFixed(2)}`
    }else if(bmi>=35 && bmi<=40) {
        bmiReportSpan.textContent = "Extremely Obese";
        caretMove = (bmi-13)*(80/27.5)+5
        caretElement.style.left = `${caretMove}%`;
        bmiResultSpan.innerHTML=` ${bmi.toFixed(2)}`
    }else if(bmi>40){
        bmiReportSpan.textContent = "Extremely Obese";
        caretElement.style.left = `87%`;
        bmiResultSpan.innerHTML=` ${bmi.toFixed(2)}`
    }
}

// Her bir input değiştiğinde BMI yeniden hesaplanacak
heightInput.addEventListener('input', calculateBMI);
weightInput.addEventListener('input', calculateBMI);






