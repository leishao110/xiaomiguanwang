var mySw = new Swiper('.swiper-container',{
	autoplay:2000,
	autoplayDisableOnInteraction:false,
	pagination:'.swiper-pagination',
	prevButton:".swiper-button-prev",
	nextButton:".swiper-button-next",
	paginationClickable:true,
	loop:true
});
var mySw1 = new Swiper('.swiper-container1',{
	autoplay:2000,
	autoplayDisableOnInteraction:false,
//	pagination:'.swiper-pagination',
//	prevButton:".swiper-button-prev",
//	nextButton:".swiper-button-next",
	paginationClickable:true,
	loop:true
});


var oPrev1=document.getElementsByClassName("prev1")[0];
var oNext1=document.getElementsByClassName("next1")[0];
var oUl1=document.getElementsByClassName("change1")[0];
var oUl11=document.getElementsByClassName("change11")[0];
oNext1.onclick=function(){
	oUl1.style.transition="all 2s";
	oUl1.style.marginLeft="-1200px";
	this.style.color="lightgray";
	oPrev1.style.color="gray";
}
oPrev1.onclick=function(){
	oUl1.style.transition="all 2s";
	oUl1.style.marginLeft="0px";
	this.style.color="lightgray";
	oNext1.style.color="gray";
}


var oPrev2=document.getElementsByClassName("prev2")[0];
var oNext2=document.getElementsByClassName("next2")[0];
var oUl2=document.getElementsByClassName("change2")[0];
var oUl22=document.getElementsByClassName("change22")[0];
oNext2.onclick=function(){
	oUl2.style.transition="all 2s";
	oUl2.style.marginLeft="-1200px";
	this.style.color="lightgray";
	oPrev2.style.color="gray";
}
oPrev2.onclick=function(){
	oUl2.style.transition="all 2s";
	oUl2.style.marginLeft="0px";
	this.style.color="lightgray";
	oNext2.style.color="gray";
}






