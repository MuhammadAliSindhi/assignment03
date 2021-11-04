
  
  function Myfun() {
    var text1,text2;
   text1=document.f1.t1.value.length;
   text2=document.f1.t2.value.length;
  if(text1==text2){
    $(document).ready(function(){
      $("#save-move").click(function(){
       $(".inner-box0,.inner-box1").animate({
          "marginLeft":"+=1200",
          "width":"+=200",
          "height":"+=200"
       },"slow");
      });
      $("#save-move").click(function(){
       $(".inner-box0,.inner-box1").animate({
          "marginLeft":"-=1200",
          "width":"-=200",
          "height":"-=200"
       },"slow");
      });
      $("#save-move").click(function(){
       $(".inner-box0,.inner-box1").css(
          "background-color", "green");
      });
    });
  }
else{
  $(document).ready(function(){
      $("#save-move").click(function(){
       $(".inner-box0,.inner-box1").animate({
          "marginLeft":"+=1200",
          "width":"+=200",
          "height":"+=200"
       },"slow");
      });
      $("#save-move").click(function(){
       $(".inner-box0,.inner-box1").animate({
          "marginLeft":"-=1200",
          "width":"-=200",
          "height":"-=200"
       },"slow");
      });
      $("#save-move").click(function(){
       $(".inner-box0,.inner-box1").css(
          "background-color", "red");
      });
    });
}
}