const ages: number[] = [13, 21, 35, 55, 67, 69];

console.log(calculateAverage(ages));

function calculateAverage(numbers: number[]): number{
    let sum: number = 0;

    for(const num of numbers){
        sum += num;
    }

    sum = sum / numbers.length;
    return Math.round(sum);
}
export {};