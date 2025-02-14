export class Project {
    public id : number;
    public name : string;
    public status : string;
    public currentVersion : string;
    public iconPath : string;
    public isReleased : boolean;
    public releaseDate : string;
    public devPeriod : string;
    public platforms : string;
    public shortDescription: string;
    public longDescription: string;

    constructor(
        id : number,
        name : string,
        status : string,
        currentVersion : string,
        iconPath : string,
        isReleased : boolean,
        releaseDate : string,
        devPeriod: string,
        platforms : string,
        shortDescription : string,
        longDescription : string
        )
    {
        this.id = id;
        this.name = name;
        this.status = status;
        this.currentVersion = currentVersion;
        this.iconPath = iconPath;
        this.isReleased = isReleased;
        this.releaseDate = releaseDate;
        this.devPeriod = devPeriod;
        this.platforms = platforms;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
    }

    /*static BuildFromSQL() : Project {
        // TODO: INTEGRATE SQL

        return ;
    }*/
}