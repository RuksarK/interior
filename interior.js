// ---------------------popup-------------------------
let popup=document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

let popup1=document.getElementById("popup-1");
function openPopup1(){
    popup1.classList.add("openPopup1");
}
function closePopup1(){
    popup1.classList.remove("openPopup1");
}

let popup2=document.getElementById("popup-2");
function openPopup2(){
    popup2.classList.add("openPopup2");
}
function closePopup2(){
    popup2.classList.remove("openPopup2");
}


// -----------------------acordian---------------
const accordian=document.querySelectorAll('.accordian');
accordian.forEach(accordian => {
    const icon=accordian.querySelector('.icon');
    const answer=accordian.querySelector('.answer');

    accordian.addEventListener("click", () =>{
        icon.classList.toggle('active');
        answer.classList.toggle('active');

    })

})
// -------------------logindetails------------------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbxFzb8qNFDM2oOS9afORbIf8aMqZXCPz5YIbnHr0_vnZseU2O7cFIg5QDYOVJ_wF8w7mA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

// ----------small devices--------
var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}