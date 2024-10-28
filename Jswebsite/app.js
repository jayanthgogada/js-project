// let navlinks = document.querySelectorAll
function navslide() {
    const nav = document.querySelector(".navbar")
    const linksnav = document.querySelector(".links");
    const hamburger = document.querySelector(".nav-ham-img2");

    hamburger.addEventListener("click", () => {
        linksnav.classList.toggle("navactive");
    });
}

navslide();


const popupform = document.querySelector(".popup");
const login = document.querySelector(".nav-button");
const button = document.querySelector("#wrong");

login.addEventListener('click', () => {
    popupform.style.display = 'flex';

});



  button.addEventListener('click', () => {
      popupform.style.display = 'none';
  }); 







const form = document.querySelector(".popup-form");
const userid = document.querySelector("#User");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
    const useridvalue = userid.value.trim();
    const passwordvalue = password.value.trim();



    if (useridvalue == "") {
        e.preventDefault();
        // alert("please provide your userid");
        userid.focus();
        return false;
    }


    if (passwordvalue == "") {
        e.preventDefault();
        alert("please enter your password");
        password.focus();
        return false;
    }


    if (passwordvalue.length < 8) {
        e.preventDefault();
        alert("Minimum required password should be more than 8 letters");
        password.focus();
        return false;
    }

    alert("data has been submitted sucessfully");
});


    const faqs = document.querySelectorAll(".container");
    faqs.forEach((container) => {
        container.addEventListener("click", () => {
            container.classList.toggle("active");
        });
    });


    const heading = document.querySelector(".heading");
    const myimage = document.querySelector(".pg9image");
    const btn1 = document.querySelector(".btn1");
    const btn2 = document.querySelector(".btn2");
    const btn3 = document.querySelector(".btn3");
    const btn4 = document.querySelector(".btn4");
    const btn5 = document.querySelector(".btn5");
    const clearbutton = document.querySelector(".clearbtn");

    btn1.addEventListener("click", () =>{
        myimage.setAttribute("src", "js-1.jpeg");
        heading.innerHTML = "Name: Josaphine General Fitness Trainer";
    });

    btn2.addEventListener("click", () =>{
        myimage.setAttribute("src", "js-3.jpeg");
        heading.innerHTML = "Name: Navia Strength and Conditioning Coach";
    });


    btn3.addEventListener("click", () =>{
        myimage.setAttribute("src", "js-4.png");
        heading.innerHTML = "Our Goodlyfe Gym";
    });


    btn4.addEventListener("click", () =>{
        myimage.setAttribute("src", "trainer-helping-beginner-gym.jpg");
        heading.innerHTML = "Name: Kyle Jennifer Sports-Specific Trainer";
    });

    btn5.addEventListener("click", () =>{
        myimage.setAttribute("src", "woman-with-visible-abs-doing-fitness.jpg");
        heading.innerHTML = "Name: Marie kaira Rehabilitation Trainer";
    });

    clearbutton.addEventListener("click", () =>{
        myimage.setAttribute("src", "")
        heading.innerHTML = "Select your trainer";
    });

