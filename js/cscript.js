// Form Validation
jQuery(function($) {
	var validation_holder;
	
	$("form#form1 input[name='Submit']").click(function() {
	
	var validation_holder = 0;
	
		var name 			= $("form#form1 input[name='name']").val();
		var name_regex		= /^[A-z ]+$/; // reg ex phone check
		var email 			= $("form#form1 input[name='email']").val();
		var email_regex 	= /^[\w%_\-.\d]+@[\w.\-]+.[A-Za-z]{2,6}$/;
		var phone 			= $("form#form1 input[name='phone']").val();
		var phone_regex		= /^\d{10}$/; // reg ex phone check	
		var message 		= $("form#form1 input[name='text']").val();
			
		/* validation start */	
		
		if(name == "") {
			$("span.val_fname").html("* Please Enter your name.").addClass('validate');
			validation_holder = 1;
		} else {
			if(!name_regex.test(name)){ // if invalid email
				$("span.val_fname").html("* Invalid name.").addClass('validate');
			validation_holder = 1;
			} else {
			$("span.val_fname").html("");
			}
		}
	 if(email == "") {
			$("span.val_email").html("* Please Enter email").addClass('validate');
			validation_holder = 1;
		} else {
			if(!email_regex.test(email)){ // if invalid email
				$("span.val_email").html("* Invalid Email!").addClass('validate');
				validation_holder = 1;
			} else {
				$("span.val_email").html("");
			}
		}
	
        if(phone == "") {
			$("span.val_phone").html("* Please Enter contact details").addClass('validate');
			validation_holder = 1;
		} else {
			if(!phone_regex.test(phone)){ // if invalid email
				$("span.val_phone").html("* Invalid contact!").addClass('validate');
				validation_holder = 1;
			} else {
				$("span.val_phone").html("");
			}
		}
		if(validation_holder == 1) { // if have a field is blank, return false
			$("p.validate_msg").slideDown("fast");
			return false;
		}  
        else
            {
        validation_holder = 0;
                submitForm();
                
                function submitForm(){
    $.ajax({
        type: "POST",
        url: "email.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                alert(text);
                formSuccess();
            }
        }
    });
}
function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
}
        }// else return true
		/* validation end */	
            }); 	
}); // jQuery End