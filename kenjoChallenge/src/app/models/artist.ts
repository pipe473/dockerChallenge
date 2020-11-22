export class Artist {
    public artist_id: string
    public name: string
    public photoUrl: string
    public birthdate: Date
    public createdAt: Date
    public updatedAt: Date

    constructor(artist_id?:string, name?:string, photoUrl?:string, birthdate?:Date, createdAt?:Date, updatedAt?:Date){
        this.artist_id = artist_id;
        this.name = name;
        this.photoUrl = photoUrl;
        this.birthdate = birthdate;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
