const { TestScheduler } = require('jest');
const Person = require('./Person');

test("What is your name?", () => {

    let person = new Person("Bobby", "Digital", 51, "M", "Making Phat Beats");
    let expected = "Bobby";
    let actual = person.name.firstName;

    expect(actual).toEqual(expected);
});

test("Greeting", () => {
    let person = new Person("Bobby", "Digital", 51, "M", "Making Phat Beats");
    let expected = "Hi, my name is Bobby";
    let actual = person.greeting();
    expect(actual).toEqual(expected);
});

// test("Bio", () => {
//     const person = new Person(Bobby, Digital, 51, "M', Making Phat Beats");
//     const expected = "This persons is name is Bobby Digital and I am 51 years old. He likes making Phat beats, and Ill Rhymes";
// });

test("Array of interests ", () => {
    let person = new Person("Sally", "Mae", 49, "F", ["Working Out ", "Building Cars", "Cooking"]);
    let expected = " This persons name is Sally Mae and she is 49 years old. She likes Working Out, Building Cars, and Cooking"
    let actual = person.bio();
    expect(actual).toEqual(expected);
})
