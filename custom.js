     "use strict"

$(document).ready(function(){
     $('.ml').click(function(){
          $('.popUp').show(2000,function(){
               $('.bodyAll').show();
          });
     });
});
$(document).ready(function(){
     $('.closeup').click(function(){
          $('.popUp').hide(2000,function(){
               $('.bodyAll').css('display','none');
          });
     });
});

var add=document.querySelector('.addbtn');

add.addEventListener('click',()=>{
     var input=document.querySelector('.inputType').value;
     var text=document.createTextNode(input);

    var newput=document.createElement('h1');
    newput.append(text);
    var newin=document.querySelector('.para');
     newin.append(newput);
});
//    file upload code
$(function () {
     $(":file").change(function () {
             var noOfFiles = this.files.length;
         for(var i=0; i < noOfFiles; i++){        
               var reader = new FileReader();
             reader.onload = imageIsLoaded;
             reader.readAsDataURL(this.files[i]);
         }        
     });
 });
 
// //  function imageIsLoaded(e) {
// //  var imgTmpl = '<img src='+e.target.result+'>';
// //      $('.img-container').append(imgTmpl);
 
// //  };
// //     new paractice project

function imageIsLoaded(e) {
     var imgTmpl='<img src='+e.target.result+'>';
     $('.img-container').append(imgTmpl);
}

// js project image upload 
// const imageInput = document.querySelector(".inPut");
// let uploadedImage = "";

// imageInput.addEventListener("change", function () {
//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//         uploadedImage = reader.result;
//         document.querySelector(".img-container").style.backgroundImage = `url(${uploadedImage})`
//     })
//     reader.readAsDataURL(this.files[0])
// })