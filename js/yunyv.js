
var  homeisc=new IScroll("#home");
$(function(){
	$("#footer").on("click","a",function(e){
		 e.preventDefault();
		 var id=$(this).attr("href");
		 $(id).css({
		 	"-webkit-transform":"translateX(0)",
		 	"-webkit-transition":"all 1s"
		 }).siblings().css({
		 	"-webkit-transform":"translateX(100%)",
		 	"-webkit-transition":"all 1s"
		 });
    //滑块改变
    var index=$(this).parent().index();
    var width=$(window).width();
    var left=index*0.25*width+'px';
//alert(left)
    $("#black").css({
    	"-webkit-transform":"translateX("+left+")",
    	"-webkit-transition":"all 1s"
    })

	
})

})



