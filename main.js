// What is left? 6, 9, 10

// 1) Use a do...while loop to console.log the numbers from 1 to 1000.
    let thousand = '';
    let i = 0;

    do {
    i = i + 1;
    thousand = thousand + i + ", ";
    } while (i < 1001);

    console.log(thousand);

// 2) Create an object (with keys and values) called person:

    const person = {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1991",
        gender: "female"
        }

// 3) Create a function that logs out the keys of the object using Object.keys().

    console.log(Object.keys(person))

// 4) Create a function that logs out the keys and values of the object using Object.entries().
    console.log(Object.entries(person))

// 5) Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. 
// Feel free to change the values to reflect multiple people you might have in your database.

    const arrayOfPersons = [
        {
            firstName: "Jane",
            lastName: "Doe",
            birthDate: "Jan 5, 2001",
            gender: "female"
        }, 
        {
            firstName: "Dan",
            lastName: "Tyler",
            birthDate: "March 10, 1986",
            gender: "male"
            }
    ]

// 6) Create a function that uses a for...of loop and an if statement to console.log the value 
// associated with the key birthDate of each object if the birth year is an odd number.

    for (const person of arrayOfPersons) {
        const birthYear = Number(person.birthDate.slice(-4))
        if((birthYear %2 !== 0)){
            console.log(person.firstName,"has an odd year birthday. It is", person.birthDate)
        }
    }

// 7) Use .map() to map over the arrayOfPersons and console.log() their information.
    let ourPeople = arrayOfPersons.map(person => {
       const x = person
       return x;
    })
    console.log("The arrayOfPersons is", ourPeople)

// 8) Use .filter() to filter the persons array and console.log only males in the array.

   const result = arrayOfPersons.filter(person => person.gender === "male");
    
   // should return Dan
   console.log("The male member is:", result);

// 9) Create a function that returns true if the value of birthDate is before Jan 1, 1990.

    let x = arrayOfPersons.map(person => {
        const birthYear = Number(person.birthDate.slice(-4));
        if(birthYear < 1990){
            return true
        } 
        return false
    })

    console.log("The game is", x)
    

// 10) Use .filter() to filter the arrayOfPersons and console.log only people that were born before Jan 1, 1990.

    let m = arrayOfPersons.map(person => {
        const birthYear = Number(person.birthDate.slice(-4));
        if(birthYear < 1990){
            console.log(person)
        } 
    })