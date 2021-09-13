# CP+R Technical Challenges

The challenge is broken into two parts:

- Part 1 is a more traditional technical challenge with two short problems to solve
- Part 2 is an express/mongo based challenge

## Part 1

Inside the folder marked `part_one` there are two JS files. Please complete the challenges for each as described below. We have given some basic test cases but feel free to add more to demonstrate the capability of your solution.

### deepCopy.js

Write a function that takes in an object as it's only argument and creates a copy of it. The challenge is to primarily return only primitive values but consider how the function might deal with more complex objects such as dates, functions or regex. There are test cases but they are not required; simply an example of the kind of things that you could possibly use to demonstrate your solution.

### fillArray.js

A real world example from our code base: a database helper has pulled the total number of hours worked per week for a particular employee. You need to manipulate the data to fit in a simple array format, in order to be displayed on a graph. The data has three problems: 1.) it has come back out of order 2.) It needs to be in a different data structure...

```javascript
// No missing data
const data = [
  { week: 1, hours: 17 },
  { week: 3, hours: 44 },
  { week: 2, hours: 7 },
];

// Required data structure (in week order)
const preparedData = [17, 7, 44];
```

...and 3.) the database will not return any values for weeks that were not worked. In the example below, you will see that by excluding week 4, the final array is deceptive:

```javascript
// Week 4 is missing
const data = [
  { week: 1, hours: 17 },
  { week: 3, hours: 44 },
  { week: 2, hours: 7 },
  { week: 6, hours: 40 },
  { week: 5, hours: 12 },
];

// Required data structure - week 5 and 6 will be misread as weeks 4 and 5
const preparedData = [17, 7, 44, 12, 40];
```

The correct result would be:

```javascript
const preparedData = [17, 7, 44, 0, 12, 40];
```

What would happen if we are in fact wanting to display ten weeks of data and the employee has been off for the past four weeks? The correct result would then be:

```javascript
const preparedData = [17, 7, 44, 0, 12, 40, 0, 0, 0, 0];
```

The challenge is to write a function that will take two arguments: the data object and the current numerical week. The functions should return an array of the hours worked, in week order, with any missing weeks represented by a 0.
Like the first challenge, there are example test cases but these are not mandatory. Please feel free to provide your own to show off your work.

## Part 2

In the folder `part_two` you will find a very basic pre-built express server. Please run `npm i` and `npm run dev` to start the server. If you examine the code, you will see that we are using an in-memory Mongo instance as our database. Traditionally this is used for testing but for the sake of this challenge, it removes the need for deployment or concern about persistence of data.

### Setup

- Once you have the dependencies installed and the server running, hit the endpoint `http://localhost:5002/test` and ensure you are returning a 200 status and 'Hello world'.
- Examine the file structure - there is an extremely simplified database and API instance already set up. There is a user model and two endpoints that allow you to post a new user and retrieve all users in the database.
- _The users collection and endpoints are purely for demonstrative purposes and play no role in the challenge._
- Please hit both the endpoints and ensure you can post and retrieve users before attempting the challenge
- **Note** - Remember the database is an **in-memory instance**. If you make a change to the code and restart the server, all existing data will be lost so don't panic.

### Challenge

The brief is as follows: Similar to Google Forms or SurveyMonkey, we would like the ability for a user to create a form that takes _n_ questions that take either a string, number or boolean value as an answer. This survey could then be retrieved and the relevant answers supplied and recorded by any number of respondants.

Your challenge is to design the database schema, endpoints and any associated logic.

Some things to consider:

- We do not require you to have any authentication or logging of the user who created the form. Whilst this would be the obvious thing to do in the real world, in the scope of this challenge it is unnecessary
- Think carefully about the data is stored. Scalability is important.
- Reusable and maintainable code is vital
- What are some natural limits we would want to impose on any form created?
- What are additional featues/ideas somebody creating a form may want to have access to?
- This is **NOT** a frontend challenge. Please do not submit any frontend work, it will be not be taken into consideration.

Including testing is not expected due to the added complexity and time. However, please submit a few paragraphs about how, why and what you would test if building out the features above.

### Submission

Please fork the repository, create a new branch and make a pull request against _your own_ main branch - not the original repositories. Once this has been done, please email me at `rory.flint@cpandr.co.uk` with a link to the pull request.
