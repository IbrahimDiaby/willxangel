<?php
global $_POST;
$mail_to = 'contact@csi-uvci.com'; //Your email here

// Required fields
$email = isset( $_POST['Email'] ) ? strip_tags( trim( $_POST['Email'] ) ) : '';
$name  = isset( $_POST['Name'] ) ? strip_tags( trim( $_POST['Name'] ) ) : '';
$text  = isset( $_POST['Message'] ) ? strip_tags( trim( $_POST['Message'] ) ) : '';
$phone     = isset( $_POST['Phone'] ) ? strip_tags( trim( $_POST['Phone'] ) ) : '';
$subject   = isset( $_POST['Object'] ) ? strip_tags( trim( $_POST['Object'] ) ) : '';
// Additional fields
$permalink = isset( $_POST['permalink'] ) ? strip_tags( trim( $_POST['permalink'] ) ) : '';
$company   = isset( $_POST['company'] ) ? strip_tags( trim( $_POST['company'] ) ) : '';


$mail_subject = $subject != '' ? $subject : 'From Contact form on website';

$message = '<h3>You got a mail from website:</h3>' . '<br/>';
$message .= '<b>Name:</b> ' . $name . '<br/>';
$message .= '<b>Email:</b> ' . $email . '<br/>';

if ( ! empty( $permalink ) ) {
	$message .= '<b>Website:</b> ' . $permalink . '<br/>';
}
if ( ! empty( $phone ) ) {
	$message .= '<b>Phone:</b> ' . $phone . '<br/>';
}
if ( ! empty( $company ) ) {
	$message .= '<b>Company:</b> ' . $company . '<br/>';
}

$message .= '<b>Message:</b> ' . $text . '<br/>';

$headers = array();
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';

// // Additional headers
$headers[] = 'From:'.$name.' <' . $email . '>';
//$headers[] = 'Reply-to : contact@csi-uvci.com';

// // $headers = array();
//  $headers = 'MIME-Version: 1.0';
//  $headers .= 'Content-type: text/html; charset=UTF-8';

// // Additional headers
//  $headers .= 'From:'.$name.' <' . $email . '>';
//  $headers .= 'Reply-to : contact@csi-uvci.com';

mail( $mail_to, $mail_subject, $message, implode("\r\n", $headers) );
header("Location:index.php");
?>