# Tandem Trivia!

## Getting Started

$ git clone https://github.com/jonah-ullman/tandem-trivia.git  
$ cd tandem-trivia  
$ npm install  
$ npm start  

Visit localhost:3000 to play!

## Things to Note

- This application is designed to be viewed on a medium-large screen. Given more time,
  I'd like to make the layout responsive.
- The statistics feature that appears after a round is dependant on having local
  storage enabled on your browser.
- A word on complexity: the Game component has a little bit of added complexity
  (the second useEffect in particular). I wanted to preserve the visual feedback
  and timed progression to the next question upon submission of an answer.
  This meant that I had to get a little creative to make the setTimeout API
  get along with React's batched/asynchronous state changes. This was definitely
  the most fun problem to solve in this exercise!

## What I'd Add or Improve

- Statistics: I'd like to add a little graph to show the user's average score
  over time. I'd also add a contingency plan for users who don't have local storage
  enabled.
- Layout: as I mentioned above, I'd like to make the layout responsive and mobile
  friendly.
- Unit testing coverage.
- An interface for adding custom questions.
