$(document).ready(function() {
    // create the loading window and set autoOpen to false
    $("#loadingScreen").dialog({
        autoOpen: false,    // set this to false so we can manually open it
        dialogClass: "loadingScreenWindow",
        closeOnEscape: false,
        draggable: false,
        width: 460,
        minHeight: 50,
        modal: true,
        buttons: {},
        resizable: false,
        open: function() {
            // scrollbar fix for IE
            $('body').css('overflow','hidden');
        },
        close: function() {
            // reset overflow
            $('body').css('overflow','auto');
        }
    }); // end of dialog
});
function waitingDialog(waiting) { // I choose to allow my loading screen dialog to be customizable, you don't have to
    $("#loadingScreen").html(waiting.message &amp;&amp; '' != waiting.message ? waiting.message : 'Please wait...');
    $("#loadingScreen").dialog('option', 'title', waiting.title &amp;&amp; '' != waiting.title ? waiting.title : 'Loading');
    $("#loadingScreen").dialog('open');
}
function closeWaitingDialog() {
    $("#loadingScreen").dialog('close');
}

// Simply show the loading screen by calling

// 1
// waitingDialog({});
// or with custom title & message

// 1
// waitingDialog({title: "Hi", message: "I'm loading..."});
// Call

// 1
// closeWaitingDialog();
// to hide the loading screen.