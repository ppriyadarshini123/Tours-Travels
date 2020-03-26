/**
 * @file displaydestination.js
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


    //Functions
    /**
     * @name menu
     * @desc creates the left menu and implements toggle
     */
    function menu()
    {
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
    }/* end menu*/

    /**
     * @name openTabs
     * @desc  Fires mouseover event on Tabs
     */
    function openTabs() {

        $(function () {
            $("#tabs").tabs({
                event: "mouseover"
            });
        });
    }/* end openTabs*/

    /**
     * @name openSurvey
     * @desc When the user closes the tab area, or presses back button, opens the survey page.
     */
    /* function openSurvey(e) {

         /!* $(document).ready(function () {
              $("#tDisp").mouseleave(function (e) {
                  window.open("survey.html", "", "width=400px,height=400px,scrollbars=no,left=450px,location=no,resizable=no,top=150px");
                  e.preventDefault();
              });
          });*!/

         /!* $(document).ready(function () {
              $("#tDisp").mouseleave(function (e) {
                  window.open("survey.html", "", "width=400px,height=400px,scrollbars=no,left=450px,location=no,resizable=no,top=150px");
                  e.preventDefault();
              });
          });*!/
         console.log("survey");


         /!* window.addEventListener('beforeunload',function(e)
          {*!/
         /!*   $(window).unload(function(e){
                console.log("unload");
                window.open("survey.html","width=400px,height=400px,scrollbars=no,left=450px,location=no,resizable=no,top=150px");
                e.preventDefault();
            });*!/

         /!* $(document).on('unload',function(e){*!/
         console.log("unload");
         document.open("survey.html", "_parent");
         /!*"width=400px,height=400px,scrollbars=no,left=450px,location=no,resizable=no,top=150px"*!/
         e.preventDefault();
         e.returnValue = '';
         /!* });*!/

         /!* } );*!/
     }/!* end openSurvey*!/*/

    function openSurvey(e)
    {

        $(document).ready(function () {
            /*$(window).onmouseleave(function() {*/
            window.open("survey.html", "_blank", "width=400px,height=550px,scrollbars=no,left=-1500px,location=no,resizable=no,top=450px");
            e.returnValue = '';
            /* });*/
        });

        /*$("#tab").load("survey.html").dialog({modal:true});*/
    }


    /**
     * @name init
     * @desc initialising function
     */
    function init() {
        menu();
        openTabs();
        /* window.onbeforeunload = openSurvey;*/
        /*window.addEventListener("unload", openSurvey);*/
        openSurvey();
        /*document.open("survey.html", "_self", "width=400px,height=400px,scrollbars=no,left=450px,location=no,resizable=no,top=150px");*/
    }//end init

    //onload initialiser
    window.onload = init;

})();/*end iffy*/
