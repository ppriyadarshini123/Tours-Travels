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



    /**
     * @desc onload initilizer
     * @type {init}
     */
    window.onload = init;

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



    /* FUNCTIONS*/

    /**
     * @name slideShow
     * @desc displays slideshow of destinations, with the choseb transition type
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
        // duration of scroll animation
        let scrollDuration = 1500;

        // paddles
        let leftPaddle = document.getElementsByClassName('left-paddle');
        let rightPaddle = document.getElementsByClassName('right-paddle');

        // get items dimensions
        let itemsLength = $('.item').length;
        let itemSize = $('.item').outerWidth(true);

        // get some relevant size for the paddle triggering point
        let paddleMargin = 20;

        // get wrapper width
        let getMenuWrapperSize = function() {
            return $('.menu-wrapper').outerWidth();
        }
        let menuWrapperSize = getMenuWrapperSize();

        // the wrapper is responsive
        $(window).on('resize', function() {
            menuWrapperSize = getMenuWrapperSize();
        });

        // size of the visible part of the menu is equal as the wrapper size
        let menuVisibleSize = menuWrapperSize;

        // get total width of all menu items
        let getMenuSize = function() {
            return itemsLength * itemSize;
        };

        let menuSize = getMenuSize() + 45;

        // get how much of menu is invisible
        let menuInvisibleSize = menuSize - menuWrapperSize;

        // get how much have we scrolled to the left
        let getMenuPosition = function() {
            return $('.menu').scrollLeft();
        };

        // finally, what happens when we are actually scrolling the menu
        $('.menu').on('scroll', function() {

            // get how much of menu is invisible
            menuInvisibleSize = menuSize - menuWrapperSize;
            // get how much have we scrolled so far
            let menuPosition = getMenuPosition();

            let menuEndOffset = menuInvisibleSize - paddleMargin;

            // show & hide the paddles
            // depending on scroll position
            if (menuPosition <= paddleMargin) {
                $(leftPaddle).addClass('hidden');
                $(rightPaddle).removeClass('hidden');
            } else if (menuPosition < menuEndOffset) {
                // show both paddles in the middle
                $(leftPaddle).removeClass('hidden');
                $(rightPaddle).removeClass('hidden');
            } else if (menuPosition >= menuEndOffset) {
                $(leftPaddle).removeClass('hidden');
                $(rightPaddle).addClass('hidden');
            }
        });

        // scroll to left
        $(rightPaddle).on('click', function() {
            $('.menu').animate( { scrollLeft: menuInvisibleSize}, scrollDuration);
        });

        // scroll to right
        $(leftPaddle).on('click', function() {
            $('.menu').animate( { scrollLeft: '0' }, scrollDuration);
        });

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

