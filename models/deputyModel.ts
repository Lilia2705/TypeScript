import {Person} from "./personModel";

export class Deputy extends Person {
    name: string;
    surname: string;
    age: number;
    bribery: boolean;
    sum_of_bribe: number;

    constructor(name: string, surname: string, age: number, bribery: boolean, sum_of_bribe: number,  weight: number, height: number) {
        super(weight, height);
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.bribery = bribery;
        this.sum_of_bribe = sum_of_bribe;

    }

    giveBribe (sum:number) {
        if (!this.bribery  && sum > 10000){
            return console.log(`Give him 10000`);
        }
        else  if(!this.bribery){
            return console.log(`Don't give him money`);
        }
        else if (this.bribery){
            return console.log(`He takes!`);
        }
    }
}