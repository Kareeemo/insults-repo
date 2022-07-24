const express = require("express");
const path = require("path");

const complements = [
  "You like great today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

const insults = [
  "You suck at this",
  "That's one of the worst shirts i've ever seen",
  "Don’t be ashamed of who you are. That’s your parent’s job.",
  "Your teeth are so yellow that when you smile traffic slows down",
  "If being a loser was a competition you'd still come in last place",
  "I get so emotional when you're not around. That emotion is happiness.",
  "You look like the type of person to wash their hands after taking a shower",
  "if idiots were hills you'd be mount everest",
  "You are so ugly that when your mom dropped you off at school, she got a ticket for littering."
];
function getRandomInsult() {
  const randomIndex = Math.floor(Math.random() * insults.length);
  return insults[randomIndex];
}
const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res) {
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
});

app.get("/insults", function(req, res) {
  res
    .json({
      insults: getRandomInsult()
    })
    .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");