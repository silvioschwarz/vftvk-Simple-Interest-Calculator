function compute()
{
    //Get input values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //Check whether principal is > 0 and focus on pricipal
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    //Calculate interest and year in futer
    var interest = principal * years * rate / 100;
    var calculatedYear = new Date().getFullYear()+ parseInt(years);

    var result = document.getElementById("result");

    // Set result output
    result.innerHTML = "If you deposit <mark>" + principal.toString()+ 
    "</mark>,<br>at an interest rate of <mark>" + rate.toString() +
    "</mark>%.<br>You will receive an amount of <mark>" + interest.toString() +
    "</mark>,<br>in the year <mark>" + calculatedYear.toString()+"</mark>";



}

function updateRateSpan()
{
    // Get handles
    var rangeSliderValue = document.getElementById("rate").value;
    var rateSpan = document.getElementById("rateSpan");

    //Update rate span text
    rateSpan.innerHTML = rangeSliderValue.toString() + " %";
}
