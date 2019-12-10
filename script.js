var element = document.querySelector('.cls-6');
element.addEventListener('mouseenter', onMouseOver);

function onMouseOver(event){
gsap.to(".cls-6", {duration: 1, x: 100, repeat: -1});
}
gsap.to(".cls-4", {duration: 3, rotation: 360, scale: 0.5, repeat: -1});

gsap.to(".element", {duration: 2, x: 200, ease: "bounce", repeat:-1});
gsap.to(".cls-3", {duration: 2, y: 200, ease: "bounce", repeat:-1});
