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