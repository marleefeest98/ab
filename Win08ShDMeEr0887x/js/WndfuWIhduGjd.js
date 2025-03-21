

   window.onbeforeunload = function() {
if (data_needs_saving()) {
return "Do you really want to leave our brilliant application?";
} else {
return;
}
};


   window.addEventListener("beforeunload", function (e) {
var confirmationMessage = 'It looks like you have been editing something. '
                   + 'If you leave before saving, your changes will be lost.';

       (e || window.event).returnValue = confirmationMessage; //Gecko + IE
       return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
   });
