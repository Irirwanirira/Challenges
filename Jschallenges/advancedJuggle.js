let setStudentAgeApi = (student, age) => {

    return new Promise(function(resolve, reject){
        setTimeout(()=> {
            student.age = age;
            if(student.age < 0){
                reject("Age cannot be negative");
            }
            else {
                resolve(student);
            }
        }, 500);

    })
}

setStudentAgeApi(35)
    .then((result)=> {
        console.log(result);
    })
    .catch((error)=> {
        console.log(error);
    })

    
setStudentAgeApi(-35)
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{ 
        console.log(error)})

