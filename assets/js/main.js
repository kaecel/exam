// toggle menu

document.getElementById('check').onclick = function (){
	let cl = document.querySelector('.nav-link ul').classList;
	let icount = document.querySelectorAll('.togglebtn i');
	if (cl.contains('leftZero')) {
		document.querySelector('.nav-link ul').classList.remove('leftZero');
		icount[0].classList.remove('hide');
		icount[1].classList.add('hide');
		
	}  else {
		document.querySelector('.nav-link ul').classList.add('leftZero');
		icount[1].classList.remove('hide');
		icount[0].classList.add('hide');
	}
}


// scroll

function topFunction() {
	window.scrollTo({top: 0, behavior: 'smooth'});
}


var nav = $("#nav div ul li");
var contents = $(".container > section");

var arrow = $(".scroll-down a");

arrow.click(function(e){
	e.preventDefault();
	var target = $(this);
	var index = target.index();
	var section = contents.eq(index);
	var offset = section.offset().top;
	$("html,body").animate({scrollTop:offset-600},100,"linear");
    console.log(index);
});


nav.click(function(e){
	e.preventDefault();
	var target = $(this);
	var index = target.index();
	var section = contents.eq(index);
	var offset = section.offset().top;
	$("html,body").animate({scrollTop:offset-100},300,"easeInOutExpo");
    console.log(index);
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop()+160;
    // console.log( $(this).scrollTop());
	
	let height = document.body.scrollHeight - 650;
	let per = Math.floor(($(this).scrollTop() / height) * 100);
	let bar = document.querySelector('.bar');
	console.log(per)
	bar.style.height = `${per}%`;

    if(wScroll <= 250)
        nav.removeClass("active");

	if(wScroll >= contents.eq(0).offset().top){
		nav.removeClass("active");
		nav.eq(0).addClass("active");
	}
	if(wScroll >= contents.eq(1).offset().top){
		nav.removeClass("active");
		nav.eq(1).addClass("active");
	}
	if(wScroll >= contents.eq(2).offset().top){
		nav.removeClass("active");
		nav.eq(2).addClass("active");
	}
	if(wScroll >= contents.eq(3).offset().top){
		nav.removeClass("active");
		nav.eq(3).addClass("active");
	}
});
 
// read more
function readMoreFunction(button) {
    var btnText = button;
    var contentText = button.previousElementSibling;
    var dots = contentText.previousElementSibling.children[0];
    
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More \u2192";
      contentText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "\u2190 Read Less";
      contentText.style.display = "inline";
    }
  }


// show input 

document.getElementById('my-button').onclick = function() {
	document.getElementById('my-input').classList.toggle('show');
	document.getElementById("my-input").value = "";
}
 

// left right

const right = document.querySelector('.right');
const left = document.querySelector('.left');

let els = document.querySelectorAll('.scrolling-content div');
let currentEl = 0;

const showPage = (index, dir) => {
    if (dir == 'right') {
        els[index - 1].classList.remove('pageCurrent')
        els[index - 1].classList.add('pageLeft')
    } else if (dir == "left") {
        els[index + 1].classList.remove('pageCurrent')
        els[index + 1].classList.add('pageRight')
    }
    els[index].classList.remove('pageRight')
	els[index].classList.remove('pageLeft')
    els[index].classList.add('pageCurrent');
}

// showPage(0, "right")

right.onclick = () => {
	if (currentEl == currentEl.length - 1) return false;
    currentEl ++;
    if (currentEl > els.length - 1) currentEl = els.length - 1;
    showPage(currentEl, "right")
    return false
}

left.onclick =() => {
	if (currentEl == 0) return false;
    currentEl --;
    if (currentEl < 0) currentEl = 0;
    showPage(currentEl, "left")
    return false;
}

