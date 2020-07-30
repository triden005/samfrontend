console.log('CONNECTING');



//check off todos 

//   -----------------------------method1
// $("li").click(function  () {
// 	console.log($(this).css("color"));
// 	if($(this).css("color")==="rgb(128, 128, 128)"){
// 		//turn it black
// 		$(this).css({
// 		color : "black" ,
// 		textDecoration: "NONE"
// 		});
// 	}

// 	else {
// 		$(this).css({
// 		color : "gray" ,
// 		textDecoration: "line-through"
// 		});
// 	}
	

// })
//------------------------------------method2

 $("ul").on("click","li",function () {  //-------$("li").click(function () {
 	$(this).toggleClass("completed");
 });

 // --------------------------------
 //--------use of x-----------

 $("ul").on("click","span",function(event){

 	$(this).parent().fadeOut(500,function(){  ///-------this.parent gives parent
 			$(this).remove();
 	});
 	event.stopPropagation();

 })

//------------------------------------------



//------------adding items in list-----------------------
$("input[type='text']").keypress(function(event){

	if(event.which === 13){
		console.log($(this).val());
		var todoText=($(this).val());
		$(this).val("")


		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+" </li>");
	}
	
})
//-------------------------------------------------------

$(".fa-plus").click(function(){
	$("input[type='text'").slideToggle(200);
})