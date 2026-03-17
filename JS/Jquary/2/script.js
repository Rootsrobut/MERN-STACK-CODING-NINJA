// var para1 = document.getElementById('para1');
// paral.innerHTML = "Welcome" :
 
// console.log($('#para1')); jquary object

// $('#para1').hide();
// $('#para1').width(100);
// $('#para1').html('Welcome');


//  $('p').html('welcome');
//  console.log( $('p'));


/*
  function $(query){
    return document.querySelector(query);
}
*/

// $("span, b, u").addClass("blue");// it will add class 'blue' to all the selected elements .
// $("img").addClass("collage");//it will add class 'collage' to all the image  elements 
// $("#imp").addClass("important blue"); // it will add 'important' and 'blue' classes to the element with id 'imp'



// $("span, b, u").removeClass("blue");//it will remove class 'blue' to all  the selected elements 
// $("img").removeClass("collage"); //it will remove class 'collage' to all the  image elements 
// $("#imp").removeClass("important blue");//it will remove 'important'  and 'blue' classes to the element with id 'imp'

// $("span, b, u").toggleClass("blue");// it will toggle the class 'blue' to all the selected elements 
// $("img").toggleClass("collage");// it will toggle the class 'collage' to all  the image elements 
// $("#imp").toggleClass("important blue");//it will toggle 'important' and 'blue' classes separately for the element with id 'imp' 

$('div').css({
   width:"100px",
   height:"100px",
   backgroundColor:"red",
});


// $('div').click(()=>{
//   alert("Div Clicked");
// });


// $('div').on('click',function(){
//    alert("Div Element");
// });

// $(document).ready(function(){
//   $("div").on("click",function(){
//     console.log("A Button with the alert class was");
//   })
// });

// $('div').on('click',function(){
//   var element=$(this);
//   element.width(element.width()+10+'px');
//    //alert("Div Element");
// });

// $('a').on('click',function(event){
//   event.preventDefault();
//   alert("Anchor tag Clicked");
// });


