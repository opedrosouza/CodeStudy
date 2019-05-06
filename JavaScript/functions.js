// What is function?
// Function is a block of code that can be reused in different times, it's very helpfull when you think about code abstraction;
// You can use functions for anything, like say a massege for a user, sum two numbers, etc. Is ilimited what you can do with FUNCTIONS.

// A simple and pure function of a wellcome message
const wellcome = function(user){
  return console.log('Wellcome' + ' ' + user);
}

wellcome('Pedro');

// A array of objects of users, with name and gender
let users = [
  {
    name: 'Pedro',
    gender: 'Male'
  },
  {
    name: 'Anne',
    gender: 'Female'
  },
  {
    name: 'Jonh',
    gender: 'Male'
  },
  {
    name: 'Maria',
    gender: 'Female'
  }
];

// A pure arrow function that checks if user is male or female
const isMale = (user) => {
  if(user.gender == 'Male'){
    console.log(`${user.name} is male`);
  }else{
    console.log(`${user.name} is female`);
  }
};

isMale(users[0]);


// Filter all males users
users.filter( user => {
  if(user.gender == 'Male'){
    return console.log(user.name)
  }
});