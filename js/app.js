const navSlide=()=> {
    const burger = document.querySelector('.toggle-menu');
    const navBar = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=> {
        //Toogle for the navbar
        navBar.classList.toggle('nav-active');

        //Animations for the individual links
        navLinks.forEach((link, index)=> {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    });
}

navSlide();