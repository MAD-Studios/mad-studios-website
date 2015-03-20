<?php
    //------------------------------------SEND FLAG
    $to = 'helpdesk@madstudios.net';
    $subject = "I'd like to know more about MAD Studios Co.";
    $headers = "From: MAD Studios Co. Website\r\n";
    $headers .= "Reply-To: helpdesk@madstudios.net\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    
    $user_name = strip_tags($_POST['user_name']);
    $user_email = strip_tags($_POST['user_email']);
    $user_industry = strip_tags($_POST['user_industry']);
    $user_challenge = strip_tags($_POST['user_challenge']);
    
    $message = '<html><body>';
    $message .= '<table rules="all" width="600" border="0" style="border:0; font-family: Verdana, Arial, sans-serif; margin:20px auto;" cellpadding="0">';
    $message .= '<tr style="background-color: #ffa227;">';
    $message .= '<td width="600" style="border: 1px solid #ffa227; padding:28px;"><img style="width:127px;height:42px;" src="http://dev.madstudios.net/kelsey/projects/madstudios/web/images/corporate/png/header-logo-mad@2x.png" /></td></tr>';
    $message .= '<tr style="background-color: #333e48; border-bottom: 5px solid #333e48"><td width="600" style="border:none; color:#ffffff; font-size:10px; padding:0 28px 12px 28px; line-height:13px;"><p style="width:400px;"><br/>A website user would like more info.  Please see the details below.</p></td>';
    $message .= '</tr></table>';
    $message .= '<table rules="all" width="600" border="0" style="border:0; font-family: Helvetica, Arial, sans-serif; margin:20px auto;" cellpadding="0"><tr>';
    $message .= '<td width="200" style="border:none; padding:0 28px 28px 28px; font-size:14px; font-weight:bold; color:#333e48; vertical-align:top; text-align:left;">';
    $message .= 'Name: <br/><br/>';
    $message .= 'Email: <br/><br/>';
    $message .= 'Industry: <br/><br/>';
    $message .= 'Business Challenge: <br/><br/>';
    $message .= '</td>';
    $message .= '<td width="400" style="border:none; padding:0 28px 28px 0; font-size:14px; color:#333e48; vertical-align:top;">';
    $message .= ($user_name . '<br/><br/>');
    $message .= ('<a href="mailto:' . $user_email . '" style="color:#797979; text-decoration:none;">' . $user_email . '</a><br/><br/>');
    $message .= ($user_industry . '<br/><br/>');
    $message .= ($user_challenge . '<br/><br/>');
    $message .= '</td>';
    $message .= '</tr>';
    $message .= '</table>';
    $message .= '</body></html>';
    
    @mail($to, $subject, $message, $headers);
?>