//Classe représentant un personnage
class Personne {
    constructor(id) {
        this.id = id;
        this.vivant = true;
        this.vie = 100;
    }

    //Accesseurs en lecture et en écriture des variables utilisés par Civil
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

    // Dégrade les points de vie de la personne selon son état
    Degradation() {
        // Si la personne est vivante
        if (this.vivant == true) {

            // On le fait évoluer selon son etat
            switch (this.etat) {
                // Normal on fait rien ( à enlever?)
                case '0':
                    break;
                // Légé
                case 1:
                    this.Blesser(2);
                    break;
                // Sévère
                case '2':
                    this.Blesser(4);
                    break;
                // Grave
                case '3':
                    this.Blesser(6);
                    break;
                // Mort on fait rien ( à enlever?)
                case '4':
                    break;
                // Psycho on fait rien ( à enlever?)
                case '5':
                    break;
                default:
            }
        }
    }

    // Améliore les points de vie de la personne selon son état
    Amelioration() {
        // Si la personne est vivante
        if (this.vivant == true) {

        }
    }
}