/**
 * @file bookingform.js
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

    /* store the html element in a variable*/
    let fName = document.getElementById("fname");
    let txtMobile = document.getElementById("mobile");
    let lblFName = document.getElementById("lblFname");
    let lbMobile = document.getElementById("lblMobile");
    let lbDate = document.getElementById("lblDate");
    let lbConfirm = document.getElementById("lblConfirm");

    // /* declaring constants*/
    const bookF = document.getElementById("bookf");
    const destD = document.getElementById("destDetails");


    /**
     * @name getParameterByName
     * @desc The value of id from querystring is extracted using regular expression
     * @param: name
     * @param: url
     */
    function getParameterByName(name,url)
    {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }/*getParameterByName*/

    /* Getting id from querystring*/
    let id = getParameterByName('id');


    /**
     * @name bookf
     * @desc Form validation after 'Book Now' button is clicked - required field in bookingform.html. It also checks if departure date is earlier than arrival date
     */
    function bookf()
    {
        let regExpFName = false;
        let regExpMob = false;

        /* Required field validation for firstname*/
        if(fName.value === "")
        {
            lblFName.innerHTML = "First name is a required field.";
        }/*if*/
        else
        {
            regExpFName =  name();
        }/*else*/

        /* Required field validation for mobile*/
        if(txtMobile.value === "") {
            lbMobile.innerHTML = "Mobile is a required field.";
        }/*if*/
        else
        {
            regExpMob = mobile();
        }/*else*/

        /* Checks if departure date is earlier than arrival date */
        if($("#datepicker").datepicker("getDate") > $("#datepicker2").datepicker("getDate"))
        {
            lbDate.innerHTML = "Departure date must be earlier than arrival date.";
        }/*if*/
        else
        {
            lbDate.innerHTML = "";
        }/*else*/

        /* Checks regular expression for first name and mobile, also if departure date is earlier than arrival date*/
        let d = $("#datepicker").datepicker("getDate") <= $("#datepicker2").datepicker("getDate");

        /* Display a confirmation booking message and display the 'View Destination' button*/
        if(fName.value !== "" && txtMobile.value !== "" && d && regExpFName && regExpMob)
        {
            let dest = ["Amsterdam", "Brussels", "Portugal", "Prague", "Barcelona", "Vienna"]; /*To display destination in result*/

            let depDate = $("#datepicker").datepicker("getDate");
            let arrDate = $("#datepicker2").datepicker("getDate");
            lbConfirm.innerHTML = "Thank you for booking with Go Europe! Your flight is now booked for the departure date : "+ $.datepicker.formatDate("dd-mm-yy", depDate) + " and arrival date : " + $.datepicker.formatDate("dd-mm-yy", arrDate);
            lbConfirm.innerHTML = "Your flight is booked for "+ dest[id-1] +" for the departure date : "+ $.datepicker.formatDate("dd-mm-yy", depDate) + " and arrival date : " + $.datepicker.formatDate("dd-mm-yy", arrDate);
            bookF.style.visibility = "hidden";
            destD.style.visibility = "visible";
        }/*if*/
    }/*end bookf*/

    /**
     * @name openDisplayDestPage
     * @desc opens the displaydestination.html page
     */
    function openDisplayDestPage()
    {
        window.open("displaydestination.html?id="+ id, "_self");
    }/* end openDisplayDestPage*/

    /**
     * @name name
     * @desc Characters check in name using regular expression
     * @returns boolean
     */
    function name()
    {
        const str = fName.value;
        const n = str.search("[^a-zA-Z]");
        if(n === 0)
        {
            lblFName.innerHTML = "Please enter characters as First Name.";
            return false;
        }/*if*/
        else if( n === -1)
        {
            lblFName.innerHTML = "";
            return true;
        }/*else if*/
    }/*end name*/

    /**
     * @name mobile
     * @desc Numbers check in mobile using regular expression
     * @returns boolean
     */
    function mobile()
    {
        const strMob = txtMobile.value;
        const n = strMob.search("[^0-9]");
        if(n === 0) {
            lbMobile.innerHTML = "Please enter numbers as Mobile number.";
            return false;
        }/*if*/
        else if(n === -1)
        {
            lbMobile.innerHTML = "";
            return true;
        }/*elseif*/
    }/*end mobile*/

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
     * @name datePicker
     * @desc shows datepicker
     */
    function datePicker()
    {
        $("#datepicker").datepicker();
        $("#datepicker2").datepicker();
    }/*end datePicker*/

    /**
     * @name startDate
     * @desc Sets today's date in the datepicker
     */
    function startDate()
    {
        $("#datepicker").datepicker("setDate", new Date());
        $("#datepicker2").datepicker("setDate", new Date());
    }/* end startDate*/

    /**
     *  @name bindBtns
     *  @desc Bind fields to event handler
     */
    function bindBtns()
    {
        fName.addEventListener("change", name);
        txtMobile.addEventListener("change", mobile);
        bookF.addEventListener("click", bookf);
        destD.addEventListener("click", openDisplayDestPage);
        destD.style.visibility = "hidden";
    }// end bindBtns

    /**
     * @name init
     * @desc initialising function
     */
    function init() {
        bindBtns();
        menu();
        datePicker();
        startDate();
    }//end init

    //onload initialiser
    window.onload = init;

})();/*end iffy*/
