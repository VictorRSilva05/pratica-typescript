const person : {name: string, age: number} = {
    name: 'Victor',
    age: 21,
};

console.log(createProfile(person));

function createProfile(user: typeof person): string{
    return `${user.name} is ${user.age} years old.`;
};
export {};