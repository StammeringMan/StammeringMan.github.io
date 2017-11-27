function displayMobileMenu(){
	var mobileMenu = document.getElementById("mobileMenu");
	if(mobileMenu.style.display !== "flex"){
		mobileMenu.style.display = "flex";
	}else{
		mobileMenu.style.display = "none";
	}

}

function changebar(x){
	x.classList.toggle("cross");
}

function hidenav(ev){
	if(window.pageYOffset>40){
		document.getElementById("navbar").style.display = "none";
	}else{
		document.getElementById("navbar").style.display = "flex";	
	}
}

window.onscroll=hidenav;