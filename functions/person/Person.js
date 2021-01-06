class Person {
  constructor(firstName, lastName, age, gender, interests) {
    this.name = { firstName, lastName };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    let response = "Hi, my name is " + this.name.firstName;
    return response;
  }

  bio() {
    let personPronoun = "They"
    let inputGender = this.gender.toLowerCase();
    if (inputGender === "f" || inputGender === "female") {
      personPronoun = "She";
    } else if (inputGender === "m" || inputGender === "male") {
      personPronoun = "He";
    }
    let userInterest = "";
    if (typeof this.interests === "string") {
      userInterest = this.interests;
    } else {
      for (let i = 0; i < this.interests.length; i++) {
        if (i === this.interests.length - 1) {
          userInterest += "and " + this.interests[i];
        } else {
          userInterest += this.interests[i] + ", ";
        }
      }
    }
    let stringOut = `This persons name is ${this.name.firstName} ${this.name.lastName} and ${personPronoun.toLowerCase()} is ${this.age} years old. ${personPronoun} likes ${userInterest}.`;
    return stringOut;
  }
}
module.exports = Person;