//Classe principale d'une ville lambda
class Ville {
    constructor(nom) {
        this.nom = nom;
    }

    //Accesseurs en lecture et en �criture
    setHopitaux(NbrHopi) { this.NbrHopi = NbrHopi; }

    getHopitaux() { return this.NbrHopi; }
}
