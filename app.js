const elts = document.querySelectorAll('.fadeeffect');

const cb=(enteries)=>{
    enteries.forEach(entery=>{
        console.log(entery.intersectionRatio)
        if(entery.isIntersecting){
            // console.log(entery)
            entery.target.classList.add('active');
        }
    })
}
let observer = new IntersectionObserver(cb);
elts.forEach(el=>{
    observer.observe(el);
})