const slider = document.querySelector('.slider');
const monthlyDiscount = document.querySelector('.include-monthly-discount');

const views = document.querySelector('.page-views');
const pricePerMonth = document.querySelector('.price');


slider.addEventListener('change', () => {

    let price = 0;

    switch (slider.value) {
        case '1':
        views.innerHTML = '10K pageviews';
        price = 8;
        break;
        case '2':
          views.innerHTML = '50K pageviews';
          price = 12;
        break;
        case '3':
          views.innerHTML = '100K pageviews';
          price = 16;
        break;
        case '4':
          views.innerHTML = '500k pageviews';
          price = 24;
        break;
        case '5':
          views.innerHTML = '1M pageviews';
          price = 36;
        break;
    }
    if(monthlyDiscount.checked){
        price = price * 0.75;
    }

    pricePerMonth.innerHTML = price.toFixed(2);

    // bar position functionality

    let barLength = (slider.value * 25) - 25;

    slider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%) ${barLength}%, hsl(224, 65%, 95%) ${barLength}%`;

});


monthlyDiscount.addEventListener('change', () => {
    if(monthlyDiscount.checked){
    pricePerMonth.innerHTML = (Number(pricePerMonth.innerHTML) * 0.75).toFixed(2);
  }else{
    pricePerMonth.innerHTML = (Number(pricePerMonth.innerHTML) / 0.75).toFixed(2);
  }
});
