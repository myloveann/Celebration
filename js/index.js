window.onload=function  () {
	'use strict';
	var music=document.getElementById('music');
	var audio=document.getElementsByTagName('audio')[0];

	//获取所有页面
	var page1=document.getElementById('page1');
	var page2=document.getElementById('page2');
	var page3=document.getElementById('page3');

	audio.addEventListener('ended', function (event) {
		music.setAttribute('class', '');
	}, false);

	music.addEventListener('touchstart', function (event) {
		if(audio.paused){
			audio.play();
			this.style.animationPlayState = 'running';
			this.style.webkitAnimationPlayState='running';
		}else {
			audio.pause();
			this.style.animationPlayState = 'paused';
			this.style.webkitAnimationPlayState = 'paused';
		}
	}, false);

	// 添加页面点击事件
	page1.addEventListener('touchstart', function (event) {
		page1.style.display="none";
		page2.style.display = 'block';
		page3.style.display = 'block';
		page3.style.top = '100%';
		setTimeout(function () {
			page2.setAttribute('class', 'page fadeOut');
			page3.setAttribute('class', 'page fadeIn');
		}, 5500)
	}, false);
	page2.addEventListener('touchstart', function (event) {
		
	}, false);


}


	// var isPlay=false;
	// music.onclick=function () {
		// if(audio.paused){
		// 	audio.play();
		// 	this.style.animationPlayState = 'running';
		// 	this.style.webkitAnimationPlayState='running';
		// }else {
		// 	audio.pause();
		// 	this.style.animationPlayState = 'paused';
		// 	this.style.webkitAnimationPlayState='paused';
		// }}
		// 自己想的写法
		// if(isPlay){
		// 	audio.play();
		// 	isPlay=false;
		// 	this.setAttribute('class', 'play');
		// 	console.log(isPlay);
		// }else{
		// 	audio.pause();
		// 	isPlay=true;
		// 	this.setAttribute('class', '');
		// 	console.log(isPlay);
		// }