type Person = {
  name : string,
  age : number,
  isAgent : boolean,
  current : {
     misson : string,
     location : string,
     onTime : number,
     isAvailable : boolean,
  },
 
}

let person1 : Person = {
  name : 'leon scot kenedy',
  age : 26,
  isAgent : true,
  current : {
     misson : 'retriving ashley',
     location : 'Easten Europe',
     onTime : 56,
     isAvailable : true,
  },
}

let person2 : Person = {
  name : 'Asley Graham',
  age : 16,
  isAgent : false,
  current : {
     misson : 'retriving ashley',
     location : 'Easten Europe',
     onTime : 63,
     isAvailable : false,
  },

}

type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

{/*const users: User[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brown", role: "member" },
];*/}

let nextUserId = 1

const users: User[] = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_smith", role: "contributor" }
];



function updateUser(id:number,update: Partial<User>){
   const user = users.find(user => user.id === id);
   if(!user){ console.error('user not found in this id'); return }
   Object.assign(user, update); 
}

updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

function addNewUser(newUser:Omit<User, "id">): User {
    
    const user :User= {
       id : nextUserId++,
       ...newUser
    }
    users.push(user);
    return user
    // Create a new variable called `user`, add an `id` property to it
    // and spread in all the properties of the `newUser` object. Think
    // about how you should set the type for this `user` object.
    // Push the new object to the `users` array, and return the object
    // from the function at the end
}

addNewUser({ username: "joe_schmoe", role: "member" })

console.log(users)
