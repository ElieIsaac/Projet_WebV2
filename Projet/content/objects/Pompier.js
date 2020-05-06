//Classe Pompier h�ritant des param�tres de la classe Personne
class Pompier extends Personne{

    constructor(id) {
        super(id);
        this.porte = false;
    }

    porterVictime() {
        this.porte = true;
    }

    getPorte() {
        return this.porte;
    }

}