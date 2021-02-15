$(document).ready(function () {
    $("form#loopTestForm").submit(runLoops);
});

function runLoops(event) {
    // Stop the form from submitting
    event.preventDefault();

    // This variable will contain one of three strings:
    // "for-loop", "while-loop", or "do-while-loop"
    let selectedLoop = $("input[name=loop-type]:checked").val();

    /*
        Depending on which loop was selected,
        call the appropriate function.

        Possible values of selectedLoop and
        the corresponding function calls are:

        "for-loop"	    ==>  runForLoop()
        "while-loop"    ==>  runWhileLoop()
        "do-while-loop" ==>  runDoWhileLoop()
    */

if (selectedLoop === "while-loop")
{
    runWhileLoop();
}
else if (selectedLoop === "do-while-loop")
{
    runDoWhileLoop();
}
else if (selectedLoop === "for-loop")
{
    runForLoop();
}


}


function runWhileLoop() {
    let number = parseInt($("input#myNumber").val());
    let output = "A";

    /*
        Use a while loop to output the letter A
        "number" times. For example, if "number" is 5,
        then output should be "AAAAA".

        (Or for a challenge, output the first "number" letters of the alphabet!)

        Hint: Use jQuery's append() to add text to an element
        (instead of replacing text)

        $("div#while-result").append(...);
    */

    let whileNumPrinted = 0;

    while (whileNumPrinted < number) {
        $("div#while-result").append(output);
        whileNumPrinted++;
    }


}


function runForLoop() {
    let number = parseInt($("input#myNumber").val());
    let sum = 0;

    /*
        Use a for loop to add the numbers 1 through "number"
        into the variable "sum". Output the sum to the div.
    */

    for (let numPrinted = 0; numPrinted < number; numPrinted++) {
        sum += numPrinted + 1;
    }

    $("div#for-result").text(sum);
}


function runDoWhileLoop() {
    let number = parseInt($("input#myNumber").val());

    /*
        Use a do-while loop to output the numbers 1 through
        "number". For example, if "number" is 5, then output
        should be "12345".

        Hint: Use jQuery's append() to add text to an element
        (instead of replacing text)

        $("div#do-while-result").append(...);
    */

    let doWhileNumPrinted = 0;

    do {
            $("div#do-while-result").append(doWhileNumPrinted + 1);
            doWhileNumPrinted++;
        } while (number > doWhileNumPrinted);

}