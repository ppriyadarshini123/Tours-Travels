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

        /* // paddles
         let leftPaddle = document.getElementsByClassName('left-paddle');
         let rightPaddle = document.getElementsByClassName('right-paddle');*/

        // get items dimensions
        let itemsLength = $('.item').length;
        console.log("itemsLength="+itemsLength);
       /* let itemSize = $('.item').outerWidth(true);
        console.log("itemSize="+itemSize);*/

        // get some relevant size for the paddle triggering point
       /* let paddleMargin = 20;

        // get wrapper width
        let getMenuWrapperSize = function() {
            return $('.whyChooseUs').outerWidth();
        }
        let menuWrapperSize = getMenuWrapperSize();
        console.log("MenuWrapperSize="+menuWrapperSize);*/

        // the wrapper is responsive
       /* $(window).on('resize', function() {
            menuWrapperSize = getMenuWrapperSize();
        });*/

        // size of the visible part of the menu is equal as the wrapper size
       /* let menuVisibleSize = menuWrapperSize;

        // get total width of all menu items
        let getMenuSize = function() {
            return itemsLength * itemSize;
        };

        let menuSize = getMenuSize() + 45;
        console.log("menuSize"+menuSize);

        // get how much of menu is invisible
        let menuInvisibleSize = menuSize - menuWrapperSize;
        console.log("menuInvisibleSize"+menuInvisibleSize);*/

        // get how much have we scrolled to the left
        let getMenuPosition = function() {
            return $('.reasons').scrollLeft();
        };

        $(document).ready(loop());

      /*  function loop(){
            for (i = 1; i <= itemsLength; i++) {
               /!* $('.item').each(function( i ){*!/
                    $('.reasons').animate({"scrollLeft": "+=150px"},"slow", function(){
                        loop();
                        /!* if(getMenuPosition()==900)
                         {

                             var list = $(".reasons").append('<ul></ul>').find('ul');
                             console.log(list);
                             for (var i = 0; i < 6; i++)
                                 list.append($('.item')[i]);

                             console.log(list);


                             /!*console.log($('.item'));*!/
                            /!* $('.reasons').append($('.item')[0]);*!/


                             /!*$('.reasons').append($('.item')[0]);*!/
                         /!*.css({scrollRight:0})*!/
                             /!*$('.reasons').css('scrollLeft', 600);*!/
                         }/!*if(getMenuPosition()==1800)*!/!*!/
                        /!*console.log($('.reasons').get($('.li').get(0)));*!/

                    });/!*animate*!/
               /!* });/!*each*!/!*!/
            }/!*for*!/
        }/!*loop()*!/*/

        function loop(){
            for (i = 1, j=0; i <= itemsLength; i++, j+=300)
            {
                $('.reasons').animate({"scrollLeft": j},4000, function(){
                    /*$('.reasons').pause(),*/
                    2000
                });
                $('.reasons').delay(500);
            }
            loop();
        }
        console.log("I am after final loop");


        /* $('.reasons').animate( { scrollLeft: $('.item')[i].scrollLeft($('.item')[i].scrollLeft())},{duration: 400}, {complete: function(){
                 let finalMenuPosition = getMenuPosition();
                 if(finalMenuPosition == getMenuSize()) itemSize = 0;
                 /!*break;*!/
             }});*/
        /* $('.reasons').scrollLeft(itemSize+itemSize);*/
        /*$('.reasons').animate( { scrollLeft: menuInvisibleSize}, scrollDuration);*/
        /* $('.reasons').scrollLeft();*/

        /* $('.reasons').scrollLeft(300);*/

        /* $('.reasons').scroll(function(){
             $('.reasons').animate( { scrollLeft: menuInvisibleSize}, scrollDuration);
         });*/

        // finally, what happens when we are actually scrolling the menu
        /* $('.reasons').on('scroll', function() {

             // get how much of menu is invisible
             menuInvisibleSize = menuSize - menuWrapperSize;
             console.log("menuInvisibleSize"+menuInvisibleSize);

             // get how much have we scrolled so far
             let menuPosition = getMenuPosition();
             console.log("menuPosition"+menuPosition);

             let menuEndOffset = menuInvisibleSize - paddleMargin;
             console.log("menuEndOffset="+menuEndOffset);

             // show & hide the paddles
             // depending on scroll position
             if (menuPosition <= paddleMargin) {
                 /!*$(leftPaddle).addClass('hidden');
                 $(rightPaddle).removeClass('hidden');*!/
             } else if (menuPosition < menuEndOffset) {
                 // show both paddles in the middle
                /!* $(leftPaddle).removeClass('hidden');
                 $(rightPaddle).removeClass('hidden');*!/
             } else if (menuPosition >= menuEndOffset) {
                /!* $(leftPaddle).removeClass('hidden');
                 $(rightPaddle).addClass('hidden');*!/
             }
         });*/

        /* // scroll to left
         $(rightPaddle).on('click', function() {
             $('.reasons').animate( { scrollLeft: menuInvisibleSize}, scrollDuration);
         });

         // scroll to right
         $(leftPaddle).on('click', function() {
             $('.reasons').animate( { scrollLeft: '0' }, scrollDuration);
         });*/

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

