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
    var total = 0;
    var x = 0, y = 0;
    const destDd = document.getElementById("dest");
    const startD = document.getElementById("datepicker");
    const oneWay = document.getElementsByName("one");
    const room = document.getElementsByName("single");
    const bookNow = document.getElementById("book");
    const btnOK = document.getElementById("ok");


    /* Display fields*/
    var dispDestD = document.getElementById("destD");
    var dispFliBook = document.getElementById("flightBookingFee");
    var dispOne = document.getElementById("oneWayReturn");
    var dispHotelBook = document.getElementById("hotelBookingFee");
    var dispSingleDouble = document.getElementById("singleDouble");
    var dispTotal = document.getElementById("total");
    var dispDestd = document.getElementById("dispDest");
    var dispThanks1 = document.getElementById("dispThanks");
    /* Getting the querystring*/
    var id = getParameterByName('id');

    //onload initialiser
    window.onload = init;

    /**
     * initialising function
     */
    function init() {
        bindBtns();
        if(destDd != null)dest();
        if(dispDestd != null)destDisp12();
        if(startD != null) startDate();

    }//end init

    /**
     *  Bind fields to event handler
     */
    function bindBtns() {
        //Checking if button exists on page and then add eventhandler
        if(startD != null) startD.addEventListener("click", startDate);
        if(destDd != null)destDd.addEventListener("change", destC);
        if(bookNow != null)bookNow.addEventListener("click", book);
        if(destDd != null)destDd.selectedIndex = id-1;

        //Reading radio buttons from collection for oneway/return and assigning to function
        if(oneWay != null) {
            for (let i = 0; i < oneWay.length; i++) {
                oneWay[i].onclick = one;
            }
        }
        //Reading radio buttons from collection for single/double room and assigning to function
        if(room != null) {
            for (let j = 0; j < room.length; j++) {
                room[j].onclick = single;
            }
        }

        if(btnOK != null) btnOK.addEventListener("click", okClicked);


    }// bindBtns

    //Functions

    /**
     *  To Display the chosen destination on
     *  displaydestination.html page
     */
    function destDisp12()
    {
         if(id == 1)
            dispDestd.innerHTML = "Amsterdam";
        else if(id == 2)
            dispDestd.innerHTML = "Brussels";
        else if(id == 3)
            dispDestd.innerHTML ="Portugal";
        else if(id == 4)
            dispDestd.innerHTML = "Prague";
        else if(id ==5)
            dispDestd.innerHTML = "Barcelona";
        else if(id == 6)
            dispDestd.innerHTML = "Vienna";
    }

    /*
    *  To display the flight booking fee and the total when destination in
    *  dropdown is changed
    */
    function dest()
    {
        if(id == 1) {
            dispDestD.innerHTML = "Amsterdam";
            dispFliBook.innerHTML = "Your flight booking fee: £40";
            total = total + 40;
            dispTotal.innerHTML = "Your Total is:£" + total;
        }
        else if(id == 2)
        {
            dispDestD.innerHTML = "Brussels";
            dispFliBook.innerHTML = "Your flight booking fee: £50";
            total = total +50;
            dispTotal.innerHTML = "Your Total is:£" + total;
        }
        else if(id == 3)
        {
            dispDestD.innerHTML = "Portugal";
            dispFliBook.innerHTML = "Your flight booking fee: £60";
            total = total + 60;
            dispTotal.innerHTML = "Your Total is:£" + total;
        }
        else if(id == 4)
        {
            dispDestD.innerHTML = "Prague";
            dispFliBook.innerHTML = "Your flight booking fee: £30";
            total = total + 30;
            dispTotal.innerHTML = "Your Total is:£" + total;
        }
        else if(id == 5)
        {
            dispDestD.innerHTML = "Barcelona";
            dispFliBook.innerHTML = "Your flight booking fee: £60";
            total = total + 60;
            dispTotal.innerHTML = "Your Total is:£" + total;
        }
        else if(id == 6)
        {
            dispDestD.innerHTML = "Vienna";
            dispFliBook.innerHTML = "Your flight booking fee: £70";
            total = total +70;
            dispTotal.innerHTML = "Your Total is:£" + total;
        }
    }

    /*
    * When the destination dropdown on estimateform.html page changes,
    * the radio buttons and displays are set to null, dest() function is called,
    * to recalculate flight booking fee of chosen destination.
    */
    function destC()
    {
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
        dest();

    }

    /*
    * The value of id from querystring is extracted using regular expression
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

    }

    /*
    *  Setting date in the datepicker.
    */
    function startDate()
    {
        $("#datepicker").datepicker("setDate", new Date());
    }

    /*
    * Selecting the radio button which is selected and displaying the estimate
    * of one way/return flight to the selected destination.
    */
    function one()
    {
        if($(oneWay[0]).prop('checked')){
            if (id == 1) {
                dispOne.innerHTML = "One way to Amsterdam will cost £200.";
                total = total - y;
                y = 200;
                total = total + y;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
            else if (id == 2) {
                dispOne.innerHTML = "One way to Brussels will cost £300";
                total = total - y;
                y = 300;
                total = total + y;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
            else if (id == 3) {
                dispOne.innerHTML = "One way to Portugal will cost £250";
                total = total - y;
                y = 250;
                total = total + y;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
            else if (id == 4) {
                dispOne.innerHTML = "One way to Prague will cost £350.";
                total = total - y;
                y = 350;
                total = total + y;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
            else if (id == 5) {
                dispOne.innerHTML = "One way to Barcelona will cost £260.";
                total = total - y;
                y = 260;
                total = total + y;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
            else if (id == 6) {
                dispOne.innerHTML = "One way to Vienna will cost £210.";
                total = total - y;
                y = 210;
                total= total + y;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
        }
        else
        {
            if (id == 1) {
                dispOne.innerHTML = "Return flight to Amsterdam will cost £400.";
                total = total - y;
                y = 400;
                total = total + y;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
            else if (id == 2) {
                dispOne.innerHTML = "Return flight to Brussels will cost £600";
                total = total - y;
                y = 600;
                total = total + y;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
            else if (id == 3) {
                dispOne.innerHTML = "Return flight to Portugal will cost £500";
                total = total - y;
                y = 500;
                total = total + y;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
            else if (id == 4) {
                dispOne.innerHTML = "Return flight to Prague will cost £700.";
                total = total - y;
                y = 700;
                total = total + y;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
            else if (id == 5) {
                dispOne.innerHTML = "Return flight to Barcelona will cost £520.";
                total = total - y;
                y = 520;
                total = total + y;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
            else if (id == 6) {
                dispOne.innerHTML = "Return flight to Vienna will cost £420.";
                total = total - y;
                y = 420;
                total = total +  y;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
        }
    }

    /*
    * Checking the radio button which is checked and displaying the
    * hotel booking fee & single/double room cost of selected destination.
    */
    function single()
    {
        if($(room[0]).prop('checked')) {
            if (id == 1) {
                dispHotelBook.innerHTML = "Your Hotel booking fee: £20";
                dispSingleDouble.innerHTML = "Single room in Amsterdam will cost £150.";
                total = total - x;
                x = 170;
                total = total + x;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
            else if (id == 2) {
                dispHotelBook.innerHTML = "Your Hotel booking fee: £ 25";
                dispSingleDouble.innerHTML = "Single room in Brussels will cost £120";
                total = total - x;
                x = 145;
                total = total + x;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
            else if (id == 3) {
                dispHotelBook.innerHTML = "Your Hotel booking fee: £25";
                dispSingleDouble.innerHTML = "Single room in Portugal will cost £210";
                total = total - x;
                x = 235;
                total = total + x;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
            else if (id == 4) {
                dispHotelBook.innerHTML = "Your Hotel booking fee: £ 30";
                dispSingleDouble.innerHTML = "Single room in Prague will cost £120";
                total = total - x;
                x = 150;
                total = total + x;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
            else if (id == 5) {
                dispHotelBook.innerHTML = "Your Hotel booking fee: £ 15";
                dispSingleDouble.innerHTML = "Single room in Barcelona will cost £220";
                total = total - x;
                x = 235;
                total = total + x;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
            else if (id == 6) {
                dispHotelBook.innerHTML = "Your Hotel booking fee: £ 45";
                dispSingleDouble.innerHTML = "Single room in Vienna will cost £170";
                total = total - x;
                x = 215;
                total = total +  x;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
        }
        else {
            if (id == 1) {
                dispHotelBook.innerHTML = "Your Hotel booking fee: £20";
                dispSingleDouble.innerHTML = "Double room in Amsterdam will cost £250.";
                total = total - x;
                x = 270;
                total = total + x;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
            else if (id == 2) {
                dispHotelBook.innerHTML = "Your Hotel booking fee: £ 25";
                dispSingleDouble.innerHTML = "Double room in Brussels will cost £220";
                total = total - x;
                x = 245;
                total = total + x;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
            else if (id == 3) {
                dispHotelBook.innerHTML = "Your Hotel booking fee: £25";
                dispSingleDouble.innerHTML = "Double room in Portugal will cost £310";
                total = total - x;
                x = 335;
                total = total + x;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
            else if (id == 4) {
                dispHotelBook.innerHTML = "Your Hotel booking fee: £ 30";
                dispSingleDouble.innerHTML = "Double room in Prague will cost £220";
                total = total - x;
                x = 250;
                total = total + x;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
            else if (id == 5) {
                dispHotelBook.innerHTML = "Your Hotel booking fee: £ 15";
                dispSingleDouble.innerHTML = "Double room in Barcelona will cost £320";
                total = total - x;
                x = 335;
                total = total + x;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }
            else if (id == 6) {
                dispHotelBook.innerHTML = "Your Hotel booking fee: £ 45";
                dispSingleDouble.innerHTML = "Double room in Vienna will cost £270";
                total = total - x;
                x = 315;
                total = total +  x;
                dispTotal.innerHTML = "Your Total is:£" + total;
            }

        }
    }

    /*
    * When 'Book Now' button is clicked, open page bookingForm.html in the same tab.
    */
    function book()
    {
        window.open("bookingForm.html?id="+ id, "_self");

    }

    /*
    * On the survey.html page, after 'Ok' button is clicked, display Thanks.
    */
    function okClicked()
    {
        dispThanks1.innerHTML = "Thanks for your feedback. Have a great trip !";
    }
})();

