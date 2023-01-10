export class Artwork {
    artworkId: number;
    artworkName: string;
    artworkImage: string;
    description: string;
    categoryId: number;
    typeId: number;
    like: number;
    createdDate: Date;

    /*constructor (
        artworkId: number,
        artworkName: string,
        description: string,
        categoryId: number,
        typeId: number,
        like: number
    ){
        this.artworkId = artworkId;
        this.artworkName = artworkName;
        this.description = description;
        this.categoryId = categoryId;
        this.typeId = typeId;
        this.like = like;
        this.createdDate = new Date;
    }*/

    constructor () {

    }
}