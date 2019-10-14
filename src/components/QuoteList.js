
import React from "react";
import QuoteCard from './QuoteCard';

// An array of objects
const quotes = [
  {
    quote:
   "Talk is cheap. Show me the code.",
    character: "Jacob Johnson",
    image:
    "https://randomuser.me/api/portraits/men/24.jpg"
  },
  {
    quote: "when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.",
    character: "Clara Graham",
    image:
    "https://randomuser.me/api/portraits/women/57.jpg"
  },
  {
    quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
    character: "Sebastian Richards",
    image:
    "https://randomuser.me/api/portraits/men/33.jpg"
  },
  {
    quote:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
    character: "Berta Little",
    image:
      "https://randomuser.me/api/portraits/women/16.jpg"
  },
  {
    quote:
      "Is it possible that software is not like anything else, that it is meant to be discarded: that the whole point is to always see it as a soap bubble?",
    character: "Carla Szabo",
    image:
      "https://randomuser.me/api/portraits/women/79.jpg"
  }
];

const QuoteList = () => (
  <div>
    {quotes.map(item => (
  <QuoteCard quote={item.quote} image={item.image} character={item.character} />
))}
  </div>
);

export default QuoteList;