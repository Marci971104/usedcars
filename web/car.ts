/*
* File: Car.ts
* Author: Szűcs Norbert, Rohrbacher Marcell János
* Copyright: 2021, Szűcs Norbert, Rohrbacher Marcell János
* Group: Szoft II/N
* Date: 2021-12-08
* Github: https://github.com/Szucs-Norbert/
          https://github.com/Marci971104/
* Licenc: GNU GPL
*/

export class Car{
    id:number;
    plate:string;
    color:string;
    brand:string;  
    year:number;
    capacity:number;
    fule:string;
    price:number;
    sold:string;

    constructor(
        id:number, plate:string,
        color:string, brand:string,
        year:number, capacity: number,
        fule:string, price:number, sold:string
        ){
        this.id=id;
        this.plate=plate;
        this.color=color;
        this.brand=brand;
        this.year=year;
        this.capacity=capacity;
        this.fule=fule;
        this.price=price;
        this.sold=sold;             
    }
}

