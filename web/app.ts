/*
* File: app.ts
* Author: Szűcs Norbert, Rohrbacher Marcell János
* Copyright: 2021, Szűcs Norbert, Rohrbacher Marcell János
* Group: Szoft II/N
* Date: 2021-12-08
* Github: https://github.com/Szucs-Norbert/
          https://github.com/Marci971104/     
* Licenc: GNU GPL
*/

import { Car } from "./car.js";



var cars=[];
const ul = document.querySelector('#cars');

fetch("http://localhost:9000/cars")
.then(Response=>Response.json())
.then(data =>{

    data.forEach((car:Car) => {
        let car2= new Car(car.id, car.plate, car.color, car.brand, car.year, car.capacity,  car.fule,  car.price, car.sold, );
        cars.push(car2);      
        //console.log(car.id);       
    });

    cars.forEach((car:Car)=>{
        let li = document.createElement('li');
        li.textContent = car.plate;
        ul.appendChild(li);
    });
});




