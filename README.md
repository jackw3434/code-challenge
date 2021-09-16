Some things to consider:

- What are some natural limits we would want to impose on any form created?
    - limits such as a character limit for questions and answers.
    - how many questions a form can have.

- What are additional featues/ideas somebody creating a form may want to have access to?
    - attachments to questions and answers such as images.
    - colour coding
    - ordering
    - only allowing certain answers. e.g red, yellow or blue


Including testing is not expected due to the added complexity and time. However, please submit a few paragraphs about how, why and what you would test if building out the features above.

How:
I am familier with frisby.js, a jasmine style assertion testing suite.
I would create a series of individual test cases to test against.

Why:
Testing is important as it helps to create more robust code.
To prove that any and all edge cases have been handled.

What:
I would want to test that what is being posted is being saved in correct formats.
e.g only certain types are allowed therefor if after creating a new form and retreiving you could expect
all the types to be either a string, number or boolean.

Also testing different edge cases such as character limit and that any natural limits applied cannot be exceeded.