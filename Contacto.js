const navSlide = () =>{
    const MyList = document.querySelector('.MyList');
    const nav = document.querySelector('.nav-links');

    const navLinks = document.querySelectorAll('.nav-links li');


    //Toggle Nav
    MyList.addEventListener('click' , ()=> {
    nav.classList.toggle('nav-active');
    })

    //animate Links
    navLinks.forEach((link,index)=> {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1 }s`;
        
    })
}

navSlide();
