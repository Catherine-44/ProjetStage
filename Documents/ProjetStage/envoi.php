<?php 
$nom=$HTTP_POST_VARS['nom']; 
$prenom=$HTTP_POST_VARS['prenom'];
$email=$HTTP_POST_VARS['mail']; 
$objet=$HTTP_POST_VARS['objet']; 
$message=$HTTP_POST_VARS['message']; 

/////voici la version Mine 
$headers = "MIME-Version: 1.0\r\n"; 

//////ici on détermine le mail en format text 
$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n"; 

////ici on détermine l'expediteur et l'adresse de réponse 
$headers .= "From: $nom <$email>\r\nReply-to : $nom <$email>\nX-Mailer:PHP"; 

$subject="$objet"; 
$destinataire="catherinewang2002@gmail.com";
$body="$message"; 
if (mail($destinataire,$subject,$body,$headers)) { 
echo "Votre mail a été envoyé<br>"; 
} else { 
echo "Une erreur s'est produite"; 
} 
?></p>
<p align="center">Vous allez bientot etre redirigé vers la page d'acceuil<br>
Si vous n'etes pas redirigé au bout de 5 secondes cliquez <a href="http://preprodnbperso.site/">ici 
</a></p>