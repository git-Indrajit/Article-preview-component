let shareButton = document.querySelector('#share__image');
let shareBox = document.querySelector('#share__box');

shareButton.addEventListener('click',()=>{
    shareBox.classList.toggle('hidden');
});