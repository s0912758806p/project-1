// Product touch 

const slider = document.getElementById('product_Js_touch');

const prevSlider = document.getElementById('prev');
const nextSlider = document.getElementById('next');

nextSlider.addEventListener('click', (e) =>{
    slider.scrollBy(150, 0);
    console.log('clicked');
});

prevSlider.addEventListener('click', (e) =>{
    slider.scrollBy(-150, 0);
    console.log('clicked');
});


