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

    var fName = document.getElementById("fname");
    var txtMobile = document.getElementById("mobile");
    const bookF = document.getElementById("bookf");
    var lblFName = document.getElementById("lblFname");
    var lbMobile = document.getElementById("lblMobile");
    var id = getParameterByName('id');

    //onload initialiser
    window.onload = init;

    /**
     * initialising function
     */
    function init() {
        bindBtns();
        startDate();
    }//end init

    /**
     * @name  bindBtns
     * @desc this will subscribe handlers to click events on our buttons
     * USE
     * el.addEventListener(type:string, handler:function)
     */
    function bindBtns() {

        fName.addEventListener("change", name);
        txtMobile.addEventListener("change", mobile);
        bookF.addEventListener("click", bookf);
    }// bindBtns

    //Function
    /**
     * Returns the id from the querystring.
     * @param name
     * @param url
     * @returns {*}
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

    /**
     * Setdate in datepicker
     */
    function startDate()
    {
        $("#datepicker").datepicker("setDate", new Date());
    }

    /**
     * Form validation - required field in bookingform.html
     */
    function bookf()
    {
        if(fName.value === "")
        {
            lblFName.innerHTML = "First name is a required field.";
        }
        if(txtMobile.value === "") {
            lbMobile.innerHTML = "Mobile is a required field.";
        }
        if(fName.value !== "" && txtMobile.value !== "")
        {
            window.open("displaydestination.html?id="+ id, "_self");
        }
    }

    /**
     * Characters check in name using regular expression
     */
    function name()
    {
        const str = fName.value;
        const n = str.search("[^a-zA-Z]");
        if(n === 0) lblFName.innerHTML = "Please enter characters as First Name.";
        else if( n === -1)lblFName.innerHTML = "";
    }

    /**
     * Numbers check in mobile using regular expression
     */
    function mobile()
    {
        const strMob = txtMobile.value;
        const n = strMob.search("[^0-9]");
        if(n === 0) lbMobile.innerHTML = "Please enter numbers as Mobile number.";
        else if(n === -1) lbMobile.innerHTML = "";
    }

})();

