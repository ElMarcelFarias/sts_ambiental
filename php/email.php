
<?php


include("../phpmailer/class.phpmailer.php");




if (isset($_POST['assunto']) && !empty($_POST['assunto'])) {
    $assunto = $_POST['assunto'];
}

if (isset($_POST['email']) && !empty($_POST['email'])) {
    $email = $_POST['email'];
}


if (isset($_POST['mensagem']) && !empty($_POST['mensagem'])) {
    $mensagem = utf8_encode($_POST['mensagem']);
}

if (isset($_POST['nome']) && !empty($_POST['nome'])) {
    $nome = $_POST['nome'];
}

if (isset($_POST['telefone']) && !empty($_POST['telefone'])) {
    $telefone = $_POST['telefone'];
}

$mensagem = '<b>'.$nome.'<b>'.'<br>'.'<b>'.$email.'<b>'.'<br>'.'<b>'.$telefone.'<b>'.'<br><br>'.$mensagem;
 

$mail = new PHPMailer;

header('Location: index.php?true');


/*
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

    $mail->Subject = nl2br(strip_tags($assunto));
    $mail->Body   = nl2br($mensagem);
    $mail->AltBody = nl2br(strip_tags($mensagem));

    if(!$mail->send()) {
        echo 'Não foi possível enviar a mensagem.<br>';
        echo 'Erro: ' . $mail->ErrorInfo;
    } else {
        header('Location: index.php?true');
    }

}
catch(Exception $e){

}

*/

?>