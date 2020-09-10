/*
* @file index.js
* @folder dist/js
*/
/*
-----------------------------------------------
1) 	create your iffy
2) 	fetch DOM elements and store them into const variables
2.1) 	store other values into let variables
3) 	set up your initialising pattern
4) 	subscribe handlers to events on elements
5) 	implement handlers
-----------------------------------------------
*/

(function(){

    /* FUNCTIONS*/

    /**
     * @name slideShow
     * @desc displays slideshow of destinations, with the chosen transition type
     */
    function slideShow() {

        $(document).ready(function(){
            $('.slideshow').cycle({
                fx:'fade' //transition type fade, scrollUp, shuffle etc
            });
        });

    } /* end slideshow*/

    /**
     * @name whychooseusscroll
     * @desc implements the scroll for 'why choose us' section
     */
    function whyChooseUsScroll()
    {
        //Code taken from https://codepen.io/mahish/pen/RajmQw

        // get items dimensions
        let itemsLength = $('.item').length;
        console.log("itemsLength="+itemsLength);

        $(document).ready(loop());
        function loop(){
            for (i = 1, j=0; i <= itemsLength; i++, j+=300)
            {
                $('.reasons').animate({"scrollLeft": j},4000, function(){
                    2000, loop()
                });
                $('.reasons').delay(500);
            }
        }
    } /* end whychooseusscroll */

    /**
     * @name menu
     * @desc creates the menu, implements toggle.
     */
    function menu()
    {
        /* THE LEFT MENU*/
        /* Code taken from https://codepen.io/soulwire/pen/EKmwC*/
        let $nigiri = $( '.nigiri' );

        // Create Makisus
        $nigiri.makisu({
            selector: 'dd',
            overlap: 0.85,
            speed: 1.7
        });

        // Open all
        $( '.list' ).makisu( 'open' );

        // Toggle on click
        $( '.toggle' ).on( 'click', function() {
            $( '.list' ).makisu( 'toggle' );
        });

    }/* end MENU*/

    /**
     * @name init
     * @desc calls other functions, controls the flow
     *
     */
    function init() {
        slideShow();
        whyChooseUsScroll();
        menu();
    }//end init

    /**
     * @desc onload initilizer
     * @type {init}
     */
    window.onload = init;

})();/*end iffy*/

