$(document).ready(function () {
    function smoothScroll(target, duration) { 
        var target = document.querySelector(target);
        var targetPosition = target.getBoundingClientRect().top - 200;
        var startPosotion = window.pageYOffset;
        var distance = targetPosition - startPosotion;
        var startTime = null;

        function scrollingAnimation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosotion, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(scrollingAnimation);
        }

        function ease(t, b, c, d) {
            return c * t / d + b;
        };

        requestAnimationFrame(scrollingAnimation);
    }

    // smoothScroll('.scroll-to', 2000);
    
    var scrollButton = document.querySelector('.scroll-button');
    scrollButton.addEventListener('click', function () {
        smoothScroll('.scroll-to', 2000);
    });

});
