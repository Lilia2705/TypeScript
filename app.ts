
import {Deputy, Faction, VerkhovnaRada} from './models'

const Vova = new Deputy('Vova', 'Koval', 30, true, 7000, 80, 1.80);
const Orest = new Deputy('Orest', 'Pan', 49, true, 12000, 120, 1.68);
const Olya = new Deputy('Olya', 'Didus', 28, true, 1000, 40, 1.70);
const Ostap = new Deputy('Ostap', 'Sova', 37, false, 0, 98, 1.98);
const Vanya = new Deputy('Vova', 'Kosiv', 30, true, 10000, 80, 1.80);
const Katya = new Deputy('Katya', 'Kuk', 40, false, 0, 70, 1.55);

// Ostap.giveBribe(11000);

const firstFaction = new Faction([]);
const secondFaction  = new Faction([]);


firstFaction.addDeputy(Vova);
firstFaction.addDeputy(Orest);
firstFaction.addDeputy(Olya);
firstFaction.addDeputy(Ostap);

// firstFaction.showAllDeputs();
// firstFaction.deleteDeputy(Orest);
// firstFaction.showTheBiggestBriber()
// firstFaction.showSumOfBribes();

secondFaction.addDeputy(Vanya);
secondFaction.addDeputy(Katya);
// secondFaction.deleteAllDeputs();
secondFaction.deleteAllBribers();
console.log(secondFaction);


const verkhovnaRadaOfFactions = new VerkhovnaRada( []);
verkhovnaRadaOfFactions.addFaction(firstFaction);
verkhovnaRadaOfFactions.addFaction(secondFaction);

// verkhovnaRadaOfFactions.showAllBriebery(firstFaction);
// verkhovnaRadaOfFactions.showAllFactions()
// verkhovnaRadaOfFactions.showFaction(secondFaction);
// verkhovnaRadaOfFactions.showTheBiggestBriber(firstFaction);
// verkhovnaRadaOfFactions.showTheBiggestBriberInVR();
