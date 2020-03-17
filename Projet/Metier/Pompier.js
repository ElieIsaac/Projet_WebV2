class Pompier
{
	constructor(id)
	{
        this.id = id;
        this.porte = false;
	}

	porterVictime()
	{
		this.porte = true;
	}

	getPorte()
	{
		return this.porte;
	}
}