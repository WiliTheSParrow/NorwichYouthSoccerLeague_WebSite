var app = new Vue({
    el: '#app',

    data: {
        path: 0,
        pathTitle: ["Norwich Youth Soccer League Home", "About Norwich Youth Soccer League", "Norwich Youth Soccer League Contact Information", "Norwich Youth Soccer League Game Information", "Registration Form", "Rules of Play & Policies"],
        collapseMenuPath: 0
    },


    methods: {

        pathChanger: function (newPath) {
            this.path = newPath;
        },

        collapseMenuChanger: function (newMenu) {
            this.collapseMenuPath = newMenu;
        }
    }

});

//Scroll To Top Button:
if (location.pathname != "show_data.html") {
    $(document).ready(function () {

        $(window).scroll(function () {
            if ($(this).scrollTop() > 40) {
                $('#topBtn').fadeIn();
            } else {
                $('#topBtn').fadeOut();
            }
        });

        $("#topBtn").click(function () {
            $('html , body').animate({
                scrollTop: 0
            }, 800);
        });
    });
}
