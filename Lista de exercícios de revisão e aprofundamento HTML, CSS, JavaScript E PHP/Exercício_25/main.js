document.addEventListener('DOMContentLoaded', function() {
    var faqs = document.getElementsByClassName('faq-question');
    for (var i = 0; i < faqs.length; i++) {
        faqs[i].addEventListener('click', function() {
            var answer = this.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } 
        });
    }
});