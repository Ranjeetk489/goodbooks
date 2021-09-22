import "./styles.css";
import ReactLogo from "./books.svg";
import { useState } from "react";
var books = {
  scifi: [
    {
      name: "Drune",
      rating: "4.1/5",
      description:
        "There is something very strange going on under the ground. Nuclear warheads are disappearing down holes, and Poppy's uncle has taken a picture of a flying saucer near to his farm."
    },
    {
      name: "The Hitchhiker's Guide To The Galaxy",
      rating: "3.8/5",
      description:
        "The Hitchhiker's Guide to the Galaxy has become an international multi-media phenomenon; the novels are the most widely distributed, having been translated into more than 30 languages by 2005 "
    },
    {
      name: "A Space Odyssey",
      rating: "4.3/5",
      description:
        "The classic science fiction novel that captures and expands on the vision of Stanley Kubrick's immortal film—and changed the way we look at the stars"
    },
    {
      name: "Earth Abides",
      rating: "2.4/5",
      description:
        "The novel tells the story of the fall of civilization from deadly disease and the emergence of a new culture with simpler tools. "
    },
    {
      name: "A Wrinkle in Time",
      rating: "4.9/5",
      description:
        " The novel offers a glimpse into the war between light and darkness, and good and evil, as the young characters mature into adolescents on their journey"
    }
  ],

  nonFiction: [
    {
      name: "A Brief History of Time",
      rating: "4.3/5",
      description:
        "In A Brief History of Time, Hawking writes in non-technical terms about the structure, origin, development and eventual fate of the Universe"
    },
    {
      name: "I Know Why the Caged Bird Sings",
      rating: "4/5",
      description:
        "I Know Why the Caged Bird Sings is a 1969 autobiography describing the early years of American writer and poet Maya Angelou. The first in a seven-volume series,"
    },
    {
      name: "H is For Hawk",
      rating: "4.2/5",
      description:
        "H is for Hawk tells Macdonald's story of the year she spent training a northern goshawk in the wake of her father's death. "
    },
    {
      name: "Bad Blood",
      rating: "3/4.5 ",
      description:
        "t covers the rise and fall of Theranos, the multibillion-dollar biotech startup headed by Elizabeth Holmes."
    },
    {
      name: "How to Cook a Wolf",
      rating: "4/5",
      description:
        "Written to inspire courage in those daunted by wartimes shortages, How to Cook a Wolf continues to rally cooks during times of plenty, reminding them that providing sustenance requires more than putting food on the table."
    },
    {
      name: "A Moveable Feast",
      rating: "3/5",
      description:
        "A Moveable Feast brilliantly evokes the exuberant mood of Paris after World War I and the unbridled creativity and unquenchable enthusiasm that Hemingway himself epitomized."
    }
  ],
  selfGrowth: [
    {
      name: "Thinking Fast and Slow",
      rating: "4/5",
      description:
        "Thinking Fast And Slow shows you how two systems in your brain are constantly fighting over control of your behavior and actions, and teaches you the many ways in which this leads to errors in memory, judgment and decisions, and what you can do about it"
    },
    {
      name: "Man's Search for Meaning",
      rating: "4.3/5",
      description:
        "Man's Search for Meaning is a 1946 book by Viktor Frankl chronicling his experiences as a prisoner in Nazi concentration camps during World War II, and describing his psychotherapeutic method, which involved identifying a purpose in life to feel positive about, and then immersively imagining that outcome"
    },
    {
      name: "The Happiness Advantage",
      rating: "3.1/5",
      description:
        "The Happiness Advantage teaches us how to control our brains in order to capitalize on positivity and improve our productivity and performance. It addresses important topics and concepts, all related to performance, success, and productivity"
    },
    {
      name: "The Monk Who Sold His Ferrari",
      rating: "4/5",
      description:
        "The Monk Who Sold His Ferrari is a self-help book by Robin Sharma, a writer and motivational speaker. The book is a business fable derived from Sharma's personal experiences after leaving his career as a litigation lawyer at the age of 25."
    },
    {
      name: "You Can Heal Your Life",
      rating: "4.98/5",
      description:
        "You Can Heal Your Life is a 1984 self-help and new thought book by Louise L. Hay"
    },
    {
      name: "The Master Key System",
      rating: "3.6/5",
      description:
        "The Master Key System is a personal development book by Charles F. Haanel (1866–1949) that was originally published as a 24-week correspondence course in 1912,"
    }
  ]
};
export default function App() {
  const [bookGenre, setbookGenre] = useState("scifi");
  function genreClickHandler(genre) {
    setbookGenre(genre);
  }
  return (
    <div className="App">
      <img id="logo" src={ReactLogo} alt="books logo" />
      <h1 id="header">
        <span id="good">good</span>
        <span id="books">books</span>
      </h1>
      <div id="btn">
        {Object.keys(books).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              background: "#E5E7EB",
              borderRadius: "0.7rem",
              padding: "0.6rem  0.8rem",
              border: "1px solid black",
              cursor: "pointer",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <div id="list" style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {books[bookGenre].map((book) => (
            <li
              key={book.name}
              style={{
                backgroundColor: "#42EADDFF",
                listStyle: "none",
                padding: "1rem",
                width: "60%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              <div style={{ fontSize: "smaller" }}> {book.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
