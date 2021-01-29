<?php

use PHPMailer\PHPMailer\PHPMailer;

require_once '../phpmailer/Exception.php';
require_once '../phpmailer/PHPMailer.php';
require_once '../phpmailer/SMTP.php';

$mail = new PHPMailer(true);

$alert = '';

if (isset($_POST['submit'])) {
    $name = $_POST['InputName'];
    $email = $_POST['InputEmail'];
    $subject = $_POST['InputSubject'];
    $message = $_POST['InputMessage'];

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'harya.pratama22@gmail.com';
        $mail->Password = 'haryapratama22@gmail';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = '587';

        $mail->setFrom('harya.pratama22@gmail.com');
        $mail->addAddress('harya.pratama22@gmail.com');

        $mail->isHTML(true);
        $mail->Subject = '$subject';
        $mail->Body = '<h3>Name : $name <br>Email : $email <br>Message : $message</h3>';

        $mail->send();
        $alert = '<div class="alert alert-success alert-dismissible fade show" role="alert">
							<strong>Messaga sent!</strong> Thank you for contacting.
							<button type="button" class="close" data-dismiss="alert" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>';
    } catch (Exception $e) {
        $alert = '<div class="alert alert-warning alert-dismissible fade show" role="alert">'
            . $e->getMessage() . '
							<button type="button" class="close" data-dismiss="alert" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>';
    }
};
