export default function generator(lowerLimit,upperLimit){
    return Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit)
}