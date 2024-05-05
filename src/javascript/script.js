$(document).ready(function(){

    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navitems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        let activeSectionIndex = 0;

        if(scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        }
        else {
            header.css('box-shadow', '5px 3px 5px rgba(0,0,0,0.1)');
        }

        sections.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })
        navitems.removeClass('active');
        $(navitems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '2%'
    });
    
    ScrollReveal().reveal('#banner', {
        origin: 'left',
        duration: 2000,
        distance: '2%'
    });
    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '2%'
    });
    ScrollReveal().reveal('#avaliacoes-chef', {
        origin: 'left',
        duration: 1000,
        distance: '2%'
    });
    ScrollReveal().reveal('.feedback', {
        origin: 'left',
        duration: 1000,
        distance: '2%'
    })

});

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})