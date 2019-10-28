import {Faction} from "./factionModel";
import {Deputy} from "./deputyModel";

export class VerkhovnaRada {
    listOfFaction: Faction[] = [];

    constructor(listOfFaction: Faction[] = []) {
        this.listOfFaction = listOfFaction
    }

    addFaction(factionToAdd: Faction) {
        this.listOfFaction.push(factionToAdd)
    }

    deleteFaction(factionToDelete: Faction) {
        const deleteFact = this.listOfFaction.findIndex((fact: Faction) => {
            return factionToDelete == fact
        });
        this.listOfFaction.splice(deleteFact, 1);
    }

    showAllFactions(){
        this.listOfFaction.forEach((factionToShow: Faction) =>{
            console.log(factionToShow)
        })
    }

    showFaction(factionToShow: Faction){
        const findedfaction = this.listOfFaction.find((fact: Faction) =>
        fact === factionToShow)

        console.log(findedfaction);
    }

    addDeputyToFaction(factionToAdd: Faction, deputyToAdd: Deputy) {
        factionToAdd.addDeputy(deputyToAdd)
    }

    deleteDeputyFromFaction(factionToDelete: Faction, deputyToDelete: Deputy) {
        factionToDelete.deleteDeputy(deputyToDelete)
    }

    showAllBrieberies(factionToShow:Faction) {
        const allBrieberies = factionToShow.listOfDeputs.filter((deputy: Deputy) =>
            deputy.bribery || !deputy.bribery && deputy.sum_of_bribe > 10000 )
        console.log(allBrieberies);
    }

    showTheBiggestBriber (fractionToShow:Faction){
        const briebers = fractionToShow.listOfDeputs.sort( (el1: Deputy, el2:Deputy) => {
            return el2.sum_of_bribe - el1.sum_of_bribe
        })
        briebers.length = 1;
        console.log(briebers)
    }

    showTheBiggestBriberInVR (){
        this.listOfFaction.forEach((fact:Faction) =>{
            fact.showTheBiggestBriber()
        })
    }
}

