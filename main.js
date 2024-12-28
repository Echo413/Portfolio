const slide_container = document.querySelector(".slide");
index = 1;
no_imgs = 2;
function slide(direction) {
	previousImg = document.getElementById(`img${index}`);
	previousImg.style.display = 'none';
	previousCur = document.getElementById(`cur${index}`);
	previousCur.style.background = '#DAF1DE';
	if (direction === "next" && index < 2){
		index += 1;
	}
	else if (direction === "previous" && index > 1){
		index -= 1;
	}
	currentImg = document.getElementById(`img${index}`);
	currentImg.style.display = "inline";
	currentCur = document.getElementById(`cur${index}`);
	currentCur.style.background = '#000';
}