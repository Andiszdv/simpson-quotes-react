
import React from "react";
import QuoteCard from './QuoteCard';

// An array of objects
const quotes = [
  {
    quote:
      "Facts are meaningless. You can use facts to prove anything that’s even remotely true. Facts schmacts.",
    character: "The Simpsons",
    image:
      "https://www.thewrap.com/wp-content/uploads/2015/11/The-Simpsons-family-couch.png"
  },
  {
    quote:
   "It takes two to lie. One to lie, and one to listen.",
    character: "Homer Simpson",
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyq8ftD06bq45T3O9_Rx9lae30NQduSaS2_m_r5Gxzl4RlvNhQ&s"
  },
  {
    quote: "As long as everybody is videotaping everybody else, justice will be done.",
    character: "Maude Flanders",
    image:
    "https://i2-prod.mirror.co.uk/incoming/article5851553.ece/ALTERNATES/s615b/ustv-the-simpsons-maude-flanders-02.jpg"
  },
  {
    quote: "Most of you will never fall in love, and marry out of fear of dying alone.",
    character: "Ned Flanders",
    image:
    "https://images.complex.com/complex/images/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/ppqf3a60rzdblmkwkex6/best-simpsons-characters-lisa-simpson"
  },
  {
    quote:
      "But surely you can’t put a price on family.I wouldn’t have thought so either, but here we are.",
    character: "Charles Montgomery",
    image:
      "https://cinemathread.com/wp-content/uploads/2017/02/the-old-man-and-the-lisa-season-8-episode-21.jpg"
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