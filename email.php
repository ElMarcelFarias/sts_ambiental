
<?php


include("phpmailer/class.phpmailer.php");


if (isset($_POST['assunto']) && !empty($_POST['assunto'])) {
    $assunto = $_POST['assunto'];
}
if (isset($_POST['email']) && !empty($_POST['email'])) {
    $email = $_POST['email'];
}
if (isset($_POST['mensagem']) && !empty($_POST['mensagem'])) {
    $mensagem = $_POST['mensagem'];
}
if (isset($_POST['nome']) && !empty($_POST['nome'])) {
    $nome = $_POST['nome'];
}
if (isset($_POST['telefone']) && !empty($_POST['telefone'])) {
    $telefone = $_POST['telefone'];
}

$assunto = $assunto . ' - ' . $nome . ' - ' . $email;

$msg = utf8_decode($mensagem);
$msg = '<i>'.$msg.'</i>';

$mail = new PHPMailer;


try{
    $mail->isSMTP();
    $mail->Host = 'email-ssl.com.br';
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'ssl';
    $mail->Username = 'contato@stsambiental.com';
    $mail->Password = 'STSamb@2022!';
    $mail->Port = 465;

    $mail->setFrom('contato@stsambiental.com', 'sts Remetente');
    $mail->addAddress('marcelcunha970@gmail.com');

    $mail->isHTML(true); 
    

    $mail->AddEmbeddedImage("images/footermail.png", "my-attach", "footermail.png");
    $mail->Subject = nl2br(($assunto));
    $mail->Body   = nl2br('<p><i>'.strip_tags($msg).'</p></i>' .'<br><br><br>'.'<img alt="PHPMailer" src="cid:my-attach" height="150">');
    $mail->AltBody = nl2br(strip_tags($msg));

    
    
    $mail->CharSet = 'UTF-8';
    $mailKey = $mail->send();
        
}
catch(Exception $e){

}




?>