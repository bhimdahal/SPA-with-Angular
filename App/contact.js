        $("#validationForm").submit(function(event){
            var errorMessage = "";

            event.preventDefault();

            function isValidEmailAddress(emailAddress) {
                var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                return pattern.test(emailAddress);
            };

            function isValidPhone(phoneNumber){
                var pattern = new RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
                return pattern.test(phoneNumber);
            }
            if ( $("#fname").val() == "" ) {
                errorMessage += "<br />First Name should Enter!";
               $("#fname").addClass("errorField");
            } else {
                    $("#fname").removeClass("errorField");
                };

            if ( $("#lname").val() == "" ) {
                errorMessage += "<br />Last Name should Enter!";
               $("#lname").addClass("errorField");
            } else {
                    $("#lname").removeClass("errorField");
                };

            if (!isValidEmailAddress($("#email").val())) {
                errorMessage += "<br /> Not a valid email address";
                $("#email").addClass("errorField");
            } else {
                    $("#email").removeClass("errorField");
                };

            if(!isValidPhone($("#phone").val())){
                errorMessage += "<br />Not a valid phone";
                $("#phone").addClass("errorField");
            } else {
                    $("#phone").removeClass("errorField");
                };
            
            if ( $("#password").val() != $("#confirmPassword").val() ) {
                errorMessage += "<br />Passwords should match";
               $(".password").addClass("errorField");
            } else {
                    $(".password").removeClass("errorField");
                };

           if ( $("#password").val() == "" ){
                errorMessage += "<br />Passwords should Enter!";
               $(".password").addClass("errorField");
            } else {
                    $(".password").removeClass("errorField");
                };


            if ( $("#country").val() == "" ) {
                errorMessage += "<br />Please select your country!";
               $("#country").addClass("errorField");
            } else {
                    $("#country").removeClass("errorField");
                }

            if(errorMessage == ""){
                alert("Successfully submited!");
                document.form.reset();
                $("#error").html("");

            } else {
                $("#error").html("Highlighted field is required <br />" + errorMessage);
            }

        });
