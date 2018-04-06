$(document).ready(function(){
    var kursDollar = 1;
   //Бегунки калькулятора
   var area = $("#slider-area").slider({
       range: "min",
       min: 40,
       max: 300,
       value: 40,
       animate: true,
       slide: function(event, ui){
           $('> .slider_item_result  span:first-child', $(this).parent('.slider_item')).html(ui.value);
           //payment(cost(ui.value, price.slider('value')), percent.slider('value'));
           monthly_payment(cost(ui.value, price.slider('value')), payment(cost(ui.value, price.slider('value')), percent.slider('value')),
               time.slider('value'));
       }
   });
   var price = $("#slider-price").slider({
       range: "min",
       min: 550,
       step: 10,
       max: 1500,
       value: 700,
       animate: true,
       slide: function (event, ui){
           $('> .slider_item_result  span:first-child', $(this).parent('.slider_item')).text(Number(ui.value) * kursDollar);
           //payment(cost(ui.value, area.slider('value')), percent.slider('value'));
           monthly_payment(cost(area.slider('value'), ui.value),
           payment(cost(area.slider('value'), ui.value),
           percent.slider('value')),
           time.slider('value'));
       }
   });
   var percent = $("#slider-percent").slider({
       range: "min",
       min: 30,
       step: 1,
       max: 100,
       value: 30,
       animate: true,
       slide: function (event, ui){
           $('> .slider_item_result  span:first-child', $(this).parent('.slider_item')).html(ui.value);
           monthly_payment(cost(area.slider('value'), price.slider('value')), payment(cost(area.slider('value'), price.slider('value')), ui.value),
               time.slider('value'));
       }
   });
   var time = $("#slider-time").slider({
       range: "min",
       min: 1,
       step: 1,
       max: 36,
       value: 24,
       animate: true,
       slide: function (event, ui){
           var val = $(this).slider('value');
           $('> .slider_item_result  span:first-child', $(this).parent('.slider_item')).html(ui.value);
           monthly_payment(cost(area.slider('value'), price.slider('value')), payment(cost(area.slider('value'), price.slider('value')),
               percent.slider('value')), ui.value);
       }
   });
   //Расчет стоимости
   function cost(a, b){
       apat_cost = parseInt(a, 10) * parseInt(b, 10);
       $('.price-block .price-block_inner:nth-child(1):first-child > .price').text(Number(apat_cost) * kursDollar);
       return apat_cost;
   }

   //Расчет первоначального взноса
   function payment(ab,c){
       apat_payment = Math.round(ab / 100 * c);
       $('.price-block .price-block_inner:nth-child(2) > .price').text(Number(apat_payment) * kursDollar);
       return apat_payment;
   }

   //Расчет ежемесячной выплаты с учетом первоначального взноса
   function monthly_payment(ab, abc, d){
       apat_monthly_payment = parseInt((ab - abc) / d);
       $('.price-block .price-block_inner:nth-child(3) > .price').text(Number(apat_monthly_payment) * kursDollar);
       return apat_monthly_payment;
   }
});