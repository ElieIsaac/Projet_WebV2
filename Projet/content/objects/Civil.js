class Civil extends Personne{

    constructor(id) {
        super(id);
    }  

    //Accesseurs en lecture et �criture
    setEnCharge(charge) { this.EnCharge = charge; }
    setBlessures(blessures) { this.Blessures = blessures; }

    getEnCharge() { return this.EnCharge; }
    getBlessures() { return this.Blessures; }
}

