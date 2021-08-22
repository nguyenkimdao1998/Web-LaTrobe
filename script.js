
const toP=document.querySelector(".top")
window.addEventListener("scroll",function(){
	const x = this.pageYOffset;
	if(x>80){
		toP.classList.add("active");
	}
	else{
		toP.classList.remove("active");
	}
})