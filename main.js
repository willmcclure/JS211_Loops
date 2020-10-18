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
            birthDate: "Jan 5, 1991",
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

    for (i = 0; i < arrayOfPersons.length; i++) {
        if(arrayOfPersons.filter(person => person.birthDate == "Jan 5, 1991")){
            console.log("This is a fun game!")
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



    // const w = arrayOfPersons.filter(person => person.birthDate == "March 10, 1948");
    
    // // should return Dan
    // console.log("The birthDate is:", w);

    // const newResult = arrayOfPersons.filter(function(a,b){
    //     // Turn your strings into dates, and then subtract them
    //     // to get a value that is either negative, positive, or zero.
    //     return new Date(b.date) - new Date(a.date);
    // });

    // console.log("Year result =", newResult)

// 10) Use .filter() to filter the arrayOfPersons and console.log only people that were born before Jan 1, 1990.

//     const l = arrayOfPersons.filter(person => person.birthDate === "March 10, 1986")

//     console.log("The birthday is before January 1st, 1990", l)

//     let compare_dates = function(date1,date2){
//         if (date1>date2) return ("Date1 > Date2");
//         else if (date1<date2) return ("Date2 > Date1");
//         else return ("Date1 = Date2"); 
//      }
   
//    console.log(compare_dates(new Date(arrayOfPersons.birthDate[0]), new Date(arrayOfPersons.birthDate[1])));
//    console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
//    console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));

    
