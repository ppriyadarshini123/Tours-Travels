/**
 * @file estimateform.js
 * @folder dist/js
 */

/*
-----------------------------------------------
1) 	create your iffy
2) 	fetch DOM elements and store them into const letiables
2.1) 	store other values into let letiables
3) 	set up your initialising pattern
4) 	subscribe handlers to events on elements
5) 	implement handlers
-----------------------------------------------
*/

(function(){

    /* Initializing variable*/
    let total = 0;
    let x = 0, y = 0;
    let destinations = ["Amsterdam", "Brussels", "Portugal", "Prague", "Barcelona","Vienna"];

    /* Declaring constants*/
    const destDd = document.getElementById("dest");
    const oneWay = document.getElementsByName("one");
    const room = document.getElementsByName("single");
    const bookNow = document.getElementById("book");

    /* Display fields*/
    let dispDestD = document.getElementById("destD");

    let dispFliBook = document.getElementById("flightBookingFee");
    let dispFliBookVal = document.getElementById("flightBookingFeeVal");
    let dispOne = document.getElementById("oneWayReturn");
    let dispOneVal = document.getElementById("oneWayReturnVal");
    let dispHotelBook = document.getElementById("hotelBookingFee");
    let dispHotelBookVal = document.getElementById("hotelBookingFeeVal");
    let dispSingleDouble = document.getElementById("singleDouble");
    let dispSingleDoubleVal = document.getElementById("singleDoubleVal");
    let dispTotal = document.getElementById("total");
    let dispTotalVal = document.getElementById("totalVal");

    /* Getting the querystring*/
    let id = getParameterByName('id');


    /* FUNCTIONS*/

    /**
     * @name getParameterByName
     * @desc The value of id from querystring is extracted using regular expression
     * @param: name, url
     */
    function getParameterByName(name,url)
    {
        console.log("getParameterByName");
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));

    }/* end getParameterByName*/



    /**
     * @name destDisp
     * @desc displays the chosen destination in the dispDestD field
     */
    function destDisp()
    {
        console.log("destDisp");
        for(let j=0; j< destinations.length - 1; j++)
        {
            if(id == j+1)
                dispDestD.innerHTML = destinations[j];
        }

    }/*end destDisp*/

    /**
     * @name initialize
     * @desc When the destination dropdown on estimateform.html page changes,
     * the radio buttons and displays are set to null, dest() function is called,
     * to recalculate flight booking fee of chosen destination.
     */
    function initialize()
    {
        console.log("initialize");

        id = destDd.selectedIndex + 1;
        for(let i = 0; i< oneWay.length; i++)
        {
            if(oneWay[i].checked) oneWay[i].checked = false;
        }
        for(let j = 0; j< room.length; j++)
        {
            if(room[j].checked) room[j].checked = false;
        }
        dispOne.innerHTML = "";
        dispHotelBook.innerHTML = "";
        dispSingleDouble.innerHTML = "";

        total = 0;
        x = 0;
        y = 0;
        destChanged();
    }/*end initialize*/

    /**
     * @name journey
     * @desc Checking the radio button which is selected and displaying the estimate
     * of one way/return flight to the selected destination.
     */
    function journey()
    {
        console.log("journey");
        if($(oneWay[0]).prop('checked')){

            let oneWayFee = [200, 300, 250, 350, 260, 210];

            for(let j=0; j< destinations.length - 1; j++)
            {
                if(id == j+1) {
                    dispDestD.innerHTML = destinations[j];
                    dispOne.innerHTML = "One way to " + destinations[j] + " will cost ";
                    dispOneVal.innerHTML = "+ £ " + oneWayFee[j];
                    total = total - y;
                    y = oneWayFee[j];
                    total = total + y;
                    dispTotal.innerHTML = "Your Total is: ";
                    dispTotalVal.innerHTML = "£" + total;
                }
            }

        }
        else
        {
            let returnFee = [400, 600, 500, 700, 520, 420];

            for(let j=0; j< destinations.length - 1; j++)
            {
                if(id == j+1) {
                    dispOne.innerHTML = "Return flight to " + destinations[j] + " will cost ";
                    dispOneVal.innerHTML = "+ £" + returnFee[j];
                    total = total - y;
                    y = returnFee[j];
                    total = total + y;
                    dispTotal.innerHTML = "Your Total is: ";
                    dispTotalVal.innerHTML = "£" + total;
                }
            }

        }
    }/* end journey*/

    /**
     * @name single
     * @desc Checking the radio button which is checked and displaying the
     * hotel booking fee & single/double room cost of selected destination.
     */
    function single()
    {
        console.log("single");
        let hotelBookFee = [20, 25, 25, 30, 15, 45];
        if($(room[0]).prop('checked')) {

            let singleRoomFee = [150, 120, 210, 140, 220,170];

            for(let j=0; j< destinations.length - 1; j++)
            {
                if(id == j+1) {
                    dispHotelBook.innerHTML = "Your Hotel booking fee is : ";
                    dispHotelBookVal.innerHTML = "+ £ " + hotelBookFee[j];
                    dispSingleDouble.innerHTML = "Single room in "+ destinations[j]+" will cost ";
                    dispSingleDoubleVal.innerHTML = "+ £" + singleRoomFee[j];
                    /* Incase the user changes his preference for single/double room, the x value stores the old value of single/double room, hence it is subtracted from the total*/
                    total = total - x;
                    x = singleRoomFee[j] + hotelBookFee[j];
                    total = total + x;
                    dispTotal.innerHTML = "Your Total is: ";
                    dispTotalVal.innerHTML = "£" + total;
                }
            }
        }
        else {

            let doubleRoomFee = [250, 220, 310, 220, 320,270];

            for(let j=0; j< destinations.length - 1; j++)
            {
                if(id == j+1) {
                    dispHotelBook.innerHTML = "Your Hotel booking fee is :";
                    dispHotelBookVal.innerHTML = "+ £ " + hotelBookFee[j];
                    dispSingleDouble.innerHTML = "Double room in "+ destinations[j]+ " will cost ";
                    dispSingleDoubleVal.innerHTML = "+ £ " + doubleRoomFee[j];
                    /* Incase the user changes his preference for single/double room, the x value stores the old value of single/double room, hence it is subtracted from the total*/
                    total = total - x;
                    x = doubleRoomFee[j] + hotelBookFee[j];
                    total = total + x;
                    dispTotal.innerHTML = "Your Total is: ";
                    dispTotalVal.innerHTML = "£" + total;
                }
            }

        }
    }/*end single*/

    /**

     * @name book
     * @desc When 'Book Now' button is clicked, open page bookingForm.html in the same tab.
     *
     */
    function book()
    {
        console.log("book");
        window.open("bookingForm.html?id="+ id, "_self");

    } /* end book*/

    /**
     * @name destChanged
     * @desc To display the flight booking fee and the total when destination in
     *  dropdown is changed
     */
    function destChanged()
    {
        console.log("destChanged");
        let flightBookFeeVal = [40, 50, 60, 30, 60,70];
        console.log("total="+total);

        for(let j=0; j< destinations.length - 1; j++)
        {
            /*This error should not be removed*/
            if(id == j+1) {
                dispDestD.innerHTML = destinations[j];
                dispFliBook.innerHTML = "Flight booking fee : ";
                dispFliBookVal.innerHTML = " £ " + flightBookFeeVal[j];
                total = total + flightBookFeeVal[j];
                dispTotal.innerHTML = "Your Total is: ";
                dispTotalVal.innerHTML = "£" + total;
            }
        }
    }/* end destChanged*/

    /**
     * @name initializeDestChanged
     * @desc When the destination dropdown on estimateform.html page changes,
     * the radio buttons and displays are set to null, dest() function is called,
     * to recalculate flight booking fee of chosen destination.
     */
    function initializeDestChanged()
    {
        console.log("initializeDestChanged");
        id = destDd.selectedIndex + 1;
        for(let i = 0; i< oneWay.length; i++)
        {
            if(oneWay[i].checked) oneWay[i].checked = false;
        }
        for(let j = 0; j< room.length; j++)
        {
            if(room[j].checked) room[j].checked = false;
        }
        dispOne.innerHTML = "";
        dispHotelBook.innerHTML = "";
        dispSingleDouble.innerHTML = "";

        total = 0;
        x = 0;
        y = 0;
        destChanged();
    }/*end initializeDestchanged*/
    /**
     * @name menu
     * @desc creates the left menu and implements toggle
     */
    function menu()
    {
        console.log("menu");
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

    }/* end menu*/

    /**
     *  @name bindBtns
     *  @desc Bind fields to event handler
     */
    function bindBtns() {
        console.log("bindBtns");
        //Checking if button exists on page and then add eventhandler
        if(destDd != null)destDd.addEventListener("change", initializeDestChanged);
        if(destDd != null)destDd.selectedIndex = id-1;
        if(bookNow != null)bookNow.addEventListener("click", book);

        //Reading radio buttons from collection for oneway/return and assigning to function
        if(oneWay != null) {
            for (let i = 0; i < oneWay.length; i++) {
                oneWay[i].onclick = journey;
            }
        }
        //Reading radio buttons from collection for single/double room and assigning to function
        if(room != null) {
            for (let j = 0; j < room.length; j++) {
                room[j].onclick = single;
            }
        }
    }// end bindBtns

    /**
     * @name init
     * @desc initialising function
     */
    function init() {
        console.log("init");
        bindBtns();
        menu();
        if(destDd != null)destChanged();
        if(dispDestD != null)destDisp();
    }//end init


    //onload initialiser
    window.onload = init;

})();/*end iffy*/

