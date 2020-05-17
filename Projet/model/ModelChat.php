<?php
    class ModelChat extends Model
    {
        //Recupere les messages dans la BDD
        public function recuperer_messages($compte)
        {
            $this->getBdd();
            $query = parent::$_bdd->query('SELECT message,emetteur FROM messages WHERE destinataire="'.$compte.'"ORDER BY ID');
            $msgs = $query->fetchAll();
            $query->closeCursor();
            echo json_encode($msgs);
        }

        //Ajoute les messages dans la BDD
        public function ajouter_message($message,$emetteur,$destinataire)
        {
            if(!empty($message)){
            $this->getBdd();
            $query = parent::$_bdd->prepare('INSERT INTO messages (message,emetteur,destinataire) VALUES (?,?,?);');
            $query->execute(array($message,$emetteur,$destinataire));
            $query->closeCursor();
            }
        }

    }
    
?>
