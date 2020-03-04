/**
 * @file survey.js
 * @folder dist/js
 */
/*
-----------------------------------------------
1) 	create your iffy
2) 	fetch DOM elements and store them into const variables
2.1) 	store other values into let variables
3) 	set up your initialising pattern
4) 	subscribe handlers to events on elevarments
5) 	implement handlers
-----------------------------------------------
*/

(function(){

    /* Store the html element in a constant*/
    const btnOK = document.getElementById("ok");
<<<<<<< HEAD
    let txtComments = document.getElementById("comment");
=======

>>>>>>> 59e8e8ae18e4a2beeb4666ae82df5fd1dc08e32b
    /*Display field*/
    let dispThanks1 = document.getElementById("dispThanks");


<<<<<<< HEAD
    //Functions

    /**
     * @name okClicked
     * @desc After 'Ok' button is clicked, display Thanks.
     */
    function okClicked()
    {
        if(txtComments.value !== "")
        {
            dispThanks1.innerHTML = "Thanks for your feedback. Have a great trip !";
            plane();
        }
        else
            {
                dispThanks1.innerHTML = "Please enter your comments. Thanks";
        }
    }/* end okClicked*/
=======
    //onload initialiser
    window.onload = init;

    /**
     * @name init
     * @desc initialising function
     */
    function init() {
        bindBtns();
        plane();
    }//end init


    //Functions
>>>>>>> 59e8e8ae18e4a2beeb4666ae82df5fd1dc08e32b

    /**
     *  @name bindBtns
     *  @desc Bind fields to event handler
     */
    function bindBtns()
    {
        if(btnOK != null) btnOK.addEventListener("click", okClicked);

    }/* end bindBtns*/

    /**
     * @name plane
     * @desc Code for flying plane
     */
    function plane()
    {
<<<<<<< HEAD
        //Old code
        /*  $(document).ready(function () {
              $("#ok").click(function () {
                  $("#plane").animate({
                      marginLeft: '+=1300px',
                      marginTop: '-=500px',
                      speed: '50',
                      easing: 'linear'
                  }).fadeToggle('slow', 'linear');
              });
          });*/
        $(document).ready(function () {
            $("#comment").change(function () {
                //Check if the text area has value and is not empty
                if ($.trim($('#comment').val()).length > 1) {
                    $("#plane").animate({
                        marginLeft: '+=1300px',
                        marginTop: '-=500px',
                        speed: '50',
                        easing: 'linear'
                    }).fadeToggle('slow', 'linear');
                }
            }
            );

        });


    }/* end plane*/

    /**
     * @name init
     * @desc initialising function
     */
    function init() {
        bindBtns();
        plane();
    }//end init


    //onload initialiser
    window.onload = init;
=======
        $(document).ready(function(){
            $("#ok").click(function(){
                $("#plane").animate({
                    marginLeft: '+=1300px',
                    marginTop:'-=500px',
                    speed: '50',
                    easing: 'linear'
                }).fadeToggle('slow','linear');
            });
        });

    }/* end plane*/

    /**
     * @name okClicked
     * @desc After 'Ok' button is clicked, display Thanks.
     */
    function okClicked()
    {
        dispThanks1.innerHTML = "Thanks for your feedback. Have a great trip !";
    }/* end okClicked*/
>>>>>>> 59e8e8ae18e4a2beeb4666ae82df5fd1dc08e32b

})();/*end iffy*/

