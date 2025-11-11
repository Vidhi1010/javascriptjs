//The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

const user = {
    name: 'Vidhi',
    address: {
        city: 'Mumbai'
    }
}

//console.log(user.address.street);//undefined

//Case 1: Parent exists but property doesn’t
//user.address ✅ exists (it’s an object)
//But .street ❌ does not exist inside it
//👉 So JS looks for street inside the object and simply returns undefined.
//No error, because it successfully reached the address object.



const user2 = {
    name: 'Vaibhav'
}

//console.log(user2.address.street); // Error

//Case 2: Parent does not exist
//user2.address ❌ does not exist (undefined)
//JS tries to access .street on undefined
//👉 Boom 💥 → TypeError



// Using Optional Chaining
console.log(user2.address?.street); // undefined

//Is user2.address null or undefined?
//Yes → immediately returns undefined (no error)
//No → safely goes ahead and tries .street
//So, optional chaining prevents errors only when the parent property might not exist.