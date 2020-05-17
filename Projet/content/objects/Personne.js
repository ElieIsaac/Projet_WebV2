//Classe repr�sentant un personnage
class Personne {
    constructor(id) {
        this.id = id;
        this.vivant = true;
        this.vie = 100;
    }

    //Accesseurs en lecture et en �criture des variables utilis�s par Civil
    setNom(nom) { this.nom = nom; }
    setPrenom(prenom) { this.prenom = prenom; }
    setEtat(etat) { this.etat = etat; }

    getNom() { return this.nom; }
    getPrenom() { return this.prenom; }
    getEtat() { return this.etat; }

    // Blesse la personne
    Blesser(points) {
        if (this.vie - points <= 0) {
            this.vie = 0;
            this.vivant = false;
        }
        else {
            this.vie -= points;
        }
    }

    // Soigne la personne
    Soigner(points) {
        if (this.vie + points > 100) {
            this.vie = 100;
        }
        else {
            this.vie += points;
        }   
    }

    // D�grade les points de vie de la personne selon son �tat
    Degradation() {
        // Si la personne est vivante
        if (this.vivant == true) {

            // On le fait �voluer selon son etat
            switch (this.etat) {
                // Normal on fait rien ( � enlever?)
                case '0':
                    break;
                // L�g�
                case 1:
                    this.Blesser(2);
                    break;
                // S�v�re
                case '2':
                    this.Blesser(4);
                    break;
                // Grave
                case '3':
                    this.Blesser(6);
                    break;
                // Mort on fait rien ( � enlever?)
                case '4':
                    break;
                // Psycho on fait rien ( � enlever?)
                case '5':
                    break;
                default:
            }
        }
    }

    // Am�liore les points de vie de la personne selon son �tat
    Amelioration() {
        // Si la personne est vivante
        if (this.vivant == true) {

        }
    }
}