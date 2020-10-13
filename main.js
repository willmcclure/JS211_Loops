// 1) Use a do...while loop to console.log the numbers from 1 to 1000.
// 2) Create an object (with keys and values) called person:

    let person = [{
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female"
        }]

// 3) Create a function that logs out the keys of the object using Object.keys().

    console.log(Object.keys(person))

// 4) Create a function that logs out the keys and values of the object using Object.entries().
    console.log(Object.entries(person))

// 5) Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. 
// Feel free to change the values to reflect multiple people you might have in your database.

    let arrayOfPersons = [
        {
            firstName: "Jane",
            lastName: "Doe",
            birthDate: "Jan 5, 1925",
            gender: "female"
        }, 
        {
            firstName: "Dan",
            lastName: "Tyler",
            birthDate: "March 10, 1948",
            gender: "male"
            }
    ]

// 6) Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.

    console.log(arrayOfPersons.birthDate[0])

// 7) Use .map() to map over the arrayOfPersons and console.log() their information.
    console.log(arrayOfPersons.map(person => person.length >= 0))

// 8) Use .filter() to filter the persons array and console.log only males in the array.


   const result = arrayOfPersons.filter(person => person.gender.length < 5)

   console.log(result)

// 9) Create a function that returns true if the value of birthDate is before Jan 1, 1990.

// 10) Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.


