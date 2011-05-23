<?php
$email = $_REQUEST['email'] ;
$to = "voltaxaide@comcast.net";

function check_email_address($email) {
// First, we check that there's one @ symbol, and that the lengths are right
if (!ereg("^[^@]{1,64}@[^@]{1,255}$", $email)) {
// Email invalid because wrong number of characters in one section, or wrong number of @ symbols.
return false;
}
// Split it into sections to make life easier
$email_array = explode("@", $email);
$local_array = explode(".", $email_array[0]);
for ($i = 0; $i < sizeof($local_array); $i++) {
if (!ereg("^(([A-Za-z0-9!#$%&'*+/=?^_`{|}~-][A-Za-z0-9!#$%&'*+/=?^_`{|}~\.-]{0,63})|(\"[^(\\|\")]{0,62}\"))$", $local_array[$i])) {
return false;
}
}
if (!ereg("^\[?[0-9\.]+\]?$", $email_array[1])) { // Check if domain is IP. If not, it should be valid domain name
$domain_array = explode(".", $email_array[1]);
if (sizeof($domain_array) < 2) {
return false; // Not enough parts to domain
}
for ($i = 0; $i < sizeof($domain_array); $i++) {
if (!ereg("^(([A-Za-z0-9][A-Za-z0-9-]{0,61}[A-Za-z0-9])|([A-Za-z0-9]+))$", $domain_array[$i])) {
return false;
}
}
}
return true;
};

function VALIDATE_USPHONE($phonenumber,$useareacode=true)
{
if ( preg_match("/^[ ]*[(]{0,1}[ ]*[0-9]{3,3}[ ]*[)]{0,1}[-]{0,1}[ ]*[0-9]{3,3}[ ]*[-]{0,1}[ ]*[0-9]{4,4}[ ]*$/",$phonenumber) || (preg_match("/^[ ]*[0-9]{3,3}[ ]*[-]{0,1}[ ]*[0-9]{4,4}[ ]*$/",$phonenumber) && !$useareacode)) 
{
  return eregi_replace("[^0-9]", "", $phonenumber);
} else {
  return FALSE;
}
};

$subject = "New Volunteer Information";
$message = "Name: " . $_REQUEST['name'] . "\n Street Address: " . $_REQUEST['street_address'] . "\n City, State: " . $_REQUEST['city_state'] . "\n Zip Code: " . $_REQUEST['zip'] . "\n Telephone: " . $_REQUEST['telephone'] . "\n Cell: " . $_REQUEST['cellphone'] . "\n Email: " . $email;
$from = "From: " . $email;
$mailcheck = check_email_address($email);
$phonecheck = VALIDATE_USPHONE($_REQUEST['telephone']);
if ($phonecheck==FALSE or $mailcheck==FALSE)
{
  header("Location: http://www.aarp-tax-aide-sw-washington.org/error.html");
}
else
{
  mail($to, $subject, $message, $from);
  header("Location: http://www.aarp-tax-aide-sw-washington.org/thanks.html");
};
?>
