export class Album {
    public album_id: number
    public title: string
    public artistId: string
    public coverUrl: string
    public year: Date
    public genre: string
    public createdAt: Date
    public updatedAt: Date

    constructor(album_id?:number, title?:string, artistId?:string, coverUrl?:string, year?:Date, genre?:string, createdAt?:Date, updatedAt?:Date ){
        this.album_id = album_id;
        this.title = title;
        this.artistId = artistId;
        this.coverUrl = coverUrl;
        this.year = year;
        this.genre = genre;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
