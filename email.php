<?php
$name=$_POST['name'];
	$phone=$_POST['phone'];	
	$email=$_POST['email'];
$e_message1 ="<html>

				<table border=\"0\" cellpadding=\"0\" width=\"700\" cellspacing=\"0\">
				
				<tr><td colspan=\"3\" ><font size=\"+1\" color=\"#666666\"><Strong>CIDP ENQUIRY RECIEVED</Strong></font></td></tr>
				
				<tr>
				
				<td colspan=\"3\" >&nbsp;</td>
				
				</tr>
				<tr>
				
				<td colspan=\"3\" >&nbsp;</td>
				
				</tr>
				
				<tr><td colspan=\"3\" width=\"150\" ><strong>You Have Recieved an Enquiry,</strong></td></tr>
				
				<tr><td></td><td></td><td>&nbsp;</td></tr>
				<tr><td width=\"150\" ><strong>Name</strong></td><td >:</td><td >&nbsp;$name</td></tr>
				
				<tr><td><strong>Phone</strong></td><td>:</td><td>&nbsp;$phone</td></tr>
				
				<tr><td><strong>Email</strong></td><td>:</td><td>&nbsp;$email</td></tr>
				<tr><td><strong>Message</strong></td><td>:</td><td>&nbsp;$msg</td></tr>
							
				<tr><td></td><td></td><td>&nbsp;</td></tr>
							
				<tr><td></td><td></td><td>&nbsp;</td></tr>
						
				</table>
				
				</html>";
				
				$message1 = $e_message1;
    //$to = "jobs@knowroaming.com";
    $from1 = "$email"; 
					
				$to1 = "ns1910@gmail.com";
				
				$subject1 ="CIDP - ENQUIRY RECIEVED";				
				
				$headers1  = "MIME-Version: 1.0" ."\r\n";
				
				$headers1 .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
				
				$headers1 .= "From:$from <$from>"."\r\n";
				
				$success = mail($to1,$subject1,$message1,$headers1);
if($success)
{
    return "success";
}
else
{
    return "Mail not Sent";
}


?>