import {Deputy} from './deputyModel'

export class Faction {
    listOfDeputs: Deputy[] = [];

    constructor(listOfDeputs: Deputy[] = []) {
        this.listOfDeputs = listOfDeputs
    }

    addDeputy(deputyToAdd: Deputy) {
       this.listOfDeputs.push(deputyToAdd)
    }

    deleteDeputy(deputyToDelete: Deputy){
        const deleteDep = this.listOfDeputs.findIndex((dept: Deputy)=>{
            return deputyToDelete.name == dept.name && deputyToDelete.surname == dept.surname
        });
        this.listOfDeputs.splice(deleteDep, 1);
    }

    deleteAllBribers() {
        this.listOfDeputs.forEach((dep: Deputy, index: number) => {
            if (dep.bribery || !dep.bribery && dep.sum_of_bribe > 10000) {
                delete this.listOfDeputs[index];
            }
        });
    }

    showTheBiggestBriber (){
        const briebers = this.listOfDeputs.sort( (el1: Deputy, el2:Deputy) => {
            return el2.sum_of_bribe - el1.sum_of_bribe
        })
        briebers.length = 1;
        console.log(briebers)
    }

    showAllDeputs(){
        this.listOfDeputs.forEach((deputyToShow:Deputy) =>{
        console.log(deputyToShow)
        })
    }

    deleteAllDeputs(){
        this.listOfDeputs.splice(0, this.listOfDeputs.length)
    }

    showSumOfBribes(){
        const sum = this.listOfDeputs.reduce ((previousValue: number, currentValue: Deputy) => {
            return previousValue + currentValue.sum_of_bribe
        }, 0)
        console.log(sum);
    }

}
