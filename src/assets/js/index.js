import btnScrollTop from "./components/btnScrollTop.js";
import headerNav from "./components/headerNav.js";
import map from "./components/map.js";
import progress from "./components/progress.js";
import select from "./components/select.js";
import carousel from "./components/slider.js";

document.addEventListener('DOMContentLoaded', function() {
    headerNav();
    select();
    carousel();

    carousel('.carousel__container', {
        container: '.carousel__container',
        prev: '.carousel__btn-prev',
        next: '.carousel__btn-next',
        pagination: '.carousel__pagination',
        autoWidth: true,
        items: 3,
        gutter: 30,
        
        autoplay: false,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        mouseDrag: true,
        speed: 1000,
        nav: true,
        navPosition: 'bottom',
        controls: true,
        prevButton: '.carousel__btn-prev',
        nextButton: '.carousel__btn-next',
        
        
    })
    progress();

    map();
    btnScrollTop();
});
