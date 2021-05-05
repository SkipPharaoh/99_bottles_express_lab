[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# 99 Bottles of Express Beer

Build an application that enables users to count down the numbers of bottles of
beer.

## Prerequisites

- Node
- Express

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Fulfill the listed requirements.

You are required to turn in your submission by making a pull request on the
original repository. Submissions are due by the time listed on the cohort
calendar.

## Setup
- Create an Express entry file (app.js) and setup your express application here: `touch app.js` 
- Initialize your Express project at the root of this repository:  `npm init -y` 
- Install the express and ejs packages
- We will be using 'EJS' as our 'view engine' - create a `views` directory to store an `index.ejs` file.  

## Requirements
- When a number is given in the url (i.e. `/bottles/:number_of_bottles`), the application  should render a view that displays the following:
    - An `<h1>` tag that shows`'<number> bottles of beer on the wall'` where `<number>` is the value of the request's param `:number_of_bottles`. 
    - An anchor tag that links to the next route (i.e. `<number>` minus 1)
- If there are 0 bottles left, the user should see a view that displays:
   - An `<h1>` tag that shows`'0 bottles of beer on the wall'`. 
   - An anchor tag that links to the next route (i.e. `/bottles/99` )
- When a user navigates to  (i.e. `/`), the application should redirect the client to (`/bottles/99`).

## Bonus
1. See if you can implement styling: configure the app's static files and customize your CSS
1. See if you can figure out how to do all of this with a single route. You'll need to research how to make parameters optional.

## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
