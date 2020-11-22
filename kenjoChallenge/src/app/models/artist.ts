export class Artist {
    public name: string
    public photoUrl: string
    public birthdate: Date
    public createdAt: Date
    public updatedAt: Date

    constructor(name?:string, photoUrl?:string, birthdate?:Date, createdAt?:Date, updatedAt?:Date){
        this.name = name;
        this.photoUrl = photoUrl;
        this.birthdate = birthdate;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
