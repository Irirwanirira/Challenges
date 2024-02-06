const array =[
    "rhys karangwa, 30, male",
    "lil wyne, 32, male",
    "lilian mimi, 21, female",
    "Dodos dash, 21, male",
    "Alian grand, 22, famale",
    "Patrick wyne, 33, male",
];


function SortByGender(params) {
 const result = {
    females: {},
    males: {}
 };

 for(let  i=0; i<params.length; i++){
    const value = params[i];
    const [fullName, age, gender ] = value.split(",").map((item) => item.trim());
        
    const [firstName, lastName] = fullName.split(" ");
    const personInfo = { lastName, age: parseInt(age)};
        if (gender.toLowerCase() === 'female') {
            result.females[firstName] = personInfo;
        } else if (gender.toLowerCase() === 'male'){
            result.males[firstName] = personInfo;
        }
    }
    return result;
}
console.log(SortByGender(array))
