function distributeGifts(packOfGifts, reindeers) {
    const giftsWeight = packOfGifts.reduce((totalWeight, gift) => totalWeight + gift.length, 0);
    const maxReindeerWeight = reindeers.reduce((maxWeight, reindeer) => Math.max(maxWeight, reindeer.length * 2), 0);
    
    return Math.floor(maxReindeerWeight / giftsWeight);
}



const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

const result = distributeGifts(packOfGifts, reindeers);
console.log(result); // Debería imprimir 2