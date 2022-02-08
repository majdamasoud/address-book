# Address Book

A project that utilizes the random user API displaying a list of users that can be clicked on to expand their details

## Usage

### To install packages
```
yarn install
```

### To run dev server (http://localhost:3000)

```
yarn start
```

### To run tests

```
yarn test
```

### To build for production

```
yarn build
```

## Summary

### Approach
I took a top down approach breaking down how the user will be interacting with the client:
1. There are two main interfaces. The first is the initial page with all of the people. The second is a page with expanded details of a person
2. The way these two interfaces interact is that the user starts on a scrollable page of people, they can select a person to go to the expanded details page, and they can exit that page returning to the inital page with the same list of people
3. Each page had to has 3 cases to consider what to display. The first is while the API is being called. The second is if the API sucessfully returns a list of people. The third is if the API fails. Cases 1 and 3 were merged into one solution in that on both pages, both display the same message. When the API is successful, a list of people and their details are shown in their respective pages

### Features Implemented
The features are very simply in that you can scroll through a list of people in the initial page, expand on their details by clicking on them, and exiting the details page returning you back to the list of people

### Features I Wanted to Implement
1. Customizing Address Book: The current implementation returns a random list of 100 people as thats who the basic call of the API works. Even on the details page, you will get a new person when you refresh the page as a new call was made to the API generating a new list of people. I would have liked to add a feature that lets you customize the API call in order to predictably get the same list of people whenever a call is made, as well as the number of people wished to see
2. Next and Prev buttons: Instead of only having to exit the details page to see another person, I would have liked to add buttons that would allow you to see the details of the next or previous person on the list

These features could be implemented with a weekend of uninterrupted work

### More Robust Features
The code's primary point for potential failure is with the API call upon mounting the App component. To make this area more Robust I would have distinguished how each interface handles the API call currently loading vs when it fails to complete the API call
