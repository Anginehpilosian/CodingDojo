/* 
  Given an array of objects, a searchFor string, and searchBy key that exists in the object
  return a new array of only those objects whose value for the given key starts with the given search string

  You can assume the key will exist on the object and the value of that key will be a string

  Bonus: make the search case insensitive
  Bonus: re-write it with functional programming in mind, using built in methods
  Bonus: allow the search method to be provided as a parameter, e.g., string methods: includes, startsWith, endsWith
    - you can assume the searchMethod will be valid
*/

const people = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
    {
      firstName: "Eddy",
      lastName: "Lee",
    },
    {
      firstName: "John",
      lastName: "Fawn",
    },
    {
      firstName: "Edward",
      lastName: "Kim",
    },
  ];
  
  const searchFor1 = "Jo";
  const searchBy1 = "firstName";
  const expected1 = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "John",
      lastName: "Fawn",
    },
  ];
  
  const searchFor2 = "ohn";
  const searchBy2 = "firstName";
  const expected2 = [];
  // Explanation: "John" contains "ohn", it does not start with "ohn"
  
  const searchFor3 = "Do";
  const searchBy3 = "lastName";
  const expected3 = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
  ];
  
  // Bonus
  const searchFor4 = "E";
  const searchBy4 = "lastName";
  const searchMethod4 = "includes";
  const expected4 = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
    {
      firstName: "Eddy",
      lastName: "Lee",
    },
  ];
  
  /**
   * Filters the @items based on the search criteria.
   * @param   {Array<Object>} items
   *          To be filtered
   * @param   {string} searchBy
   *          The key to search by.
   * @param   {string} searchFor
   *          The value of @searchBy key to match.
   * @return  {Array<Objects>}
   *          The filtered @items
   * Time:    O()
   * Space:   O()
   */
  
   // String.startswith(); => returns a boolean (true/false)
  
   // Make empty array for our results
   // Loop over the "items"
   //  - For each item, look at the "searchBy" key
   //  - Make sure that key's value starts with "searchFor" value
   //  - If it does match, then push that item into the results array
  function filterByKey(items, searchBy, searchFor, methodName) {
  
    let filteredArray = [];
  
    for(let i = 0; i < items.length; i++){
      if(items[i][searchBy][methodName](searchFor)){
        filteredArray.push(items[i]);
      }
    }
  
    return filteredArray;
  }
  
  module.exports = { filterByKey };

  

  /* 
  Given an array of person objects with the following keys:
    firstName[string]
    lastName[string]
    friends[arr of friend objects]
    isSocialDistancing[bool]

    Friend object keys:
      firstName[string]
      lastName[string]
      isSocialDistancing[bool]
      hasCovid[bool]

    return a new array of the names of people (not friends) who are at high risk of infection

    A person is at high risk of catching the virus if they meet all the below criteria:
    1. not practicing social distancing
    2. have a friend who is not practicing social distancing whom hasCovid

    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const friend1 = {
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    hasCovid: true,
  };
  
  const friend2 = {
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    hasCovid: true,
  };
  
  const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    hasCovid: false,
  };
  
  const people = [
    {
      firstName: "Person",
      lastName: "One",
      isSocialDistancing: false,
      friends: [friend2, friend3],
    },
    {
      firstName: "Person",
      lastName: "Two",
      isSocialDistancing: true,
      friends: [friend2, friend1],
    },
    {
      firstName: "Person",
      lastName: "Three",
      isSocialDistancing: false,
      friends: [friend2, friend1],
    },
  ];
  
  const expected = ["Person One", "Person Three"];
  
  /**
   * Finds the people who are at risk.
   * @typedef   {Object} Friend
   * @property  {string} firstName
   * @property  {string} lastName
   * @property  {boolean} isSocialDistancing
   * @property  {boolean} hasCovid
   *
   * @typedef   {Object} Person
   * @property  {string} firstName
   * @property  {string} lastName
   * @property  {boolean} isSocialDistancing
   * @property  {Array<Friend>} friends
   * @param     {Array<Person>} persons
   * @return    {Array<string>}
   *            An array of @Person full names for those people
   *            who are at risk. A @Person is at risk if:
   *            1. not practicing social distancing
   *            2. have a friend who is not practicing social distancing whom hasCovid
   * Time:      O()
   * Space:     O()
   */
  
  
  function coronaVirusAtRisk(persons) {
    let covidArray = [];
  
    for (let eachPerson of persons){
      for (let eachFriend of eachPerson["friends"]){
        if (!eachPerson.isSocialDistancing && !eachFriend.isSocialDistancing && eachFriend.hasCovid){
          covidArray.push(`${eachPerson.firstName} ${eachPerson.lastName}`);
        }
      }
    }
    
    return covidArray;
  }
  
  function coronaVirusAtRiskFunctional(persons) {}
  
  module.exports = {
    coronaVirusAtRisk,
  };
  