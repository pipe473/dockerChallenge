export class Artist {
    public name: string
    public photoUrl: string
    public birthdate: Date

    constructor(name?:string, photoUrl?:string, birthdate?:Date){
        this.name = name;
        this.photoUrl = photoUrl;
        this.birthdate = birthdate;
    }
}
