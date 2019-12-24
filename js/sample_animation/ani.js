//to create animation, need to change properties of element at small interval of time
window.onload= function(){	//run only when html is fully loaded
	var pos=0;
	var box=document.getElementById('box');	//single quotes only
	//set timer
	var t= setInterval(move, 50);

	function move(){
		if(pos>=150){
			clearInterval(t);
		}
		else{
			pos += 1;
			box.style.left = pos+"px";
		}
	}
};