const fam = [
    {
        fatherName: "karangwa",
        motherName: "Mimi",
        childrenNumber: 3,
    },
    {
        fatherName: "wayne",
        motherName: "Lilian",
        childrenNumber: 2,
    },
    {
        fatherName: "Dash",
        motherName: "Dodos",
        childrenNumber: 1,
    },
    {
        fatherName: "Grand",
        motherName: "Alian",
        childrenNumber: 4,
    },
    {
        fatherName: "wayne",
        motherName: "Patrick",
        childrenNumber: 5,
    },
]

function family(arr){

    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            const newArr= arr.map((item)=> {
                if(item.fatherName === item.fatherName.toUpperCase()){
                reject(new Error (item.fatherName + " is not a father name in 2022"));
            }
            return {...item, familyNumber: item.childrenNumber + 2}
        })
        resolve(newArr);
        }, 1000)
    })
}



const familyAPI =  async()=>{
try {
    const result = await family(fam);
    console.log(result);
    
} catch (error) {
    throw Error(error.message);
    }
}
familyAPI()