const tutorials = [
  "What Does the this Keyword Mean?",
"What is the Constructor OO Pattern?",
"Implementing Blockchain Web API",
"The Test Driven Development Workflow",
"What is NaN and How Can We Check for It",
"What is the Difference Between stopPropagation and preventDefault?",
"Immutable State and Pure Functions",
"What is the Difference Between == and ===?",
"What is the Difference Between Event Capturing and Bubbling?",
"What is JSONP?"
];
function titleCased() {
  return tutorials.map(function(tutorial) {
    const words = tutorial.split(' ');
    const titleCasedWords = words.map(function(word) {
      return word[0].toUpperCase() + word.slice(1);
    });
    return titleCasedWords.join(' ');
  });
}

