//-------For sliding aside in mobile view-------------------
const sideMenu = document.querySelector('aside');
const ham = document.querySelector('#ham_icon');
const blurBack = document.querySelector('.max_width_holder');
const slideMenu = () => {
	if (sideMenu.style.left === '0px') {
		sideMenu.style.left = '-250px';
		ham.src = 'https://img.icons8.com/android/96/000000/menu.png';
		blurBack.style.pointerEvents = 'all';
		blurBack.style.filter = ' blur(0px)';
	} else {
		ham.src =
			'https://img.icons8.com/material-outlined/24/000000/delete-sign.png';
		sideMenu.style.left = '0';
		blurBack.style.pointerEvents = 'none';
		blurBack.style.filter = ' blur(5px)';
	}
};

//-----------------popup form------------------
const pageContentHolder = document.querySelector('.page_content_holder');
const popUpForm = document.querySelector('.popUpFormHolder');
const aside = document.querySelector('aside');
const showPopUpForm = () => {
	popUpForm.style.display = 'flex';
	pageContentHolder.style.filter = 'blur(5px)';
	aside.style.filter = 'blur(5px)';
	if (sideMenu.style.left === '0px') {
		sideMenu.style.left = '-250px';
		ham.src = 'https://img.icons8.com/android/96/000000/menu.png';
		blurBack.style.pointerEvents = 'all';
		blurBack.style.filter = ' blur(0px)';
	}
};
const closePopUpForm = () => {
	popUpForm.style.display = 'none';
	pageContentHolder.style.filter = 'blur(0px)';
	aside.style.filter = 'blur(0px)';
};
