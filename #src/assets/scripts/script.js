/*_Function  support browser webp css_*/
@@include('main/_header-burger.js');
@@include('vendors/owl.carousel.min.js');

// let querSell = x => document.querySelector(x);
// $(document).ready(function(){
//     // var owl = $(".case__carousel.owl-carousel").owlCarousel({
//     // loop:true,
//     // items: 4,
//     // margin: 90,
//     // nav:false,
//     // smartSpeed:300,
//     // mouseDrag:true,
//     // slideTransition: 'linear',
//     // stagePadding:10,
//     // });



//     // const positionTopItems = [0 , 120, 55, 95, 40 ,30];

//     // function changePositionCard(){
//     //     let items = $(".case__carousel .owl-item.active")
//     //     items.each((i, item)  => {
//     //         $(item.children).css("margin-top", positionTopItems[i]+"px" )

//     //         console.log(positionTopItems[i])
          
//     //     })
//     // }
//     // changePositionCard()

//     // owl.on('changed.owl.carousel', function(event) {
//     // })

// });




document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('resize' , debounce(resizePage,  11));
  
    resizePage()


    
    function resizePage(){

  


      if(window.innerWidth > 1400) querSell('.nav').classList.remove('nav_active');
      
     else{
        let headerHeight =  querSell('.header__inner').offsetHeight + 'px';
        querSell('.header').style.height = headerHeight;
      }

    } 
  
  
    // Function debonce
    function debounce(callback , delay){
      let timer;
      return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=> {
          callback.apply(this , args)
        }, delay);
      }
    }
  
  
    // function throttle(callback , delay){
  
    //   let isWaiting = false;
  
    //   return function(...args){
    //         if(isWaiting) return;
    //         callback.apply(this , args);
    //         isWaiting = true;
  
    //         setTimeout(()=> isWaiting = false, delay)
    //   }
  
    // }
  
  })