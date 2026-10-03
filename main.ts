console.log(calculatedBirthYear(21));

function calculatedBirthYear(age: number) : number{
    const currentYear: number = 2026;
    let birthYear: number =  currentYear - age;

    return birthYear;
}

export {};