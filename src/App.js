import "./styles.css";

import {useState} from "react"

const bookList = {
  "Motivational Books": [
    { name: "The 7 Habits of Highly Effective People", 
    author: "Steven R.covey" ,
    rating : "⭐⭐⭐⭐",
    description: "It is rightly said that habits make or break a man. If you want to know why you are not doing something right, sometimes all you need is to perform an analysis of your habits and consider altering them. Because sometimes it’s not about what you do, but more about how you do it! And that’s where your habits play a very important role."
   },

    { name: "Think and Grow Rich", 
    author: "Nepollian Hill" ,
    rating : "⭐⭐⭐⭐⭐",
    description: "Napoleon Hill's classic Think and Grow Rich, has made more millionaires and inspired more successes than any other book in history. For three decades Napoleon Hill collaborated with America's most creative and successful entrepreneurs, learning firsthand why they succeeded while others failed. Some of the most famous self-made multimillionaires personally revealed to Hill the secrets they had used to pull themselves out of poverty and create their own success."
  },

    { name: "The Alchemist", 
    author: "Paulo Coelho" ,
    rating : "⭐⭐⭐⭐⭐",
    description: "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and inspiring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried in the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself "
  },

    { name: "The Monk Who Sold his Ferrari", 
    author: "Robin Sharma" ,
    rating : "⭐⭐⭐⭐",
    description: "A renowned inspirational fiction, The Monk Who Sold His Ferrari is a revealing story that offers the readers a simple yet profound way to live life. The plot of this story revolves around Julian Mantle, a lawyer who has made his fortune and name in the profession. "
  }
  ],

  "Marketing Books": [
    { name: "Selling the invisible", 
    author: "Harry Beckwith" ,
    rating : "⭐⭐⭐",
    description: "SELLING THE INVISIBLE is a succinct and often entertaining look at the unique characteristics of services and their prospects, and how any service, from a home-based consultancy to a multinational brokerage, can turn more prospects into clients and keep them. "
  },

    { name: "Building A Story Brand", 
    author: "Donald Miller" ,
    rating : "⭐⭐⭐⭐⭐",
    description: "New York times bestselling author Donald Miller uses the seven universal elements of powerful stories to teach readers how to dramatically improve how they connect with customers and grow their businesses."
  },

    { name: "Hooked: How to Build Habit-Forming Products", 
    thor: "Nir Eyal" ,
    rating : "⭐⭐",
    description: "A must-read for everyone who cares about driving customer engagement' Eric Ries, author of The Lean Startup"
  },
    
    { name: "Blink: The Power of Thinking Without Thinking",
     author: "Malcolm Gladwell ",
     rating : "⭐⭐⭐⭐" ,
     description: "How can an art expert differentiate between a fake and an original piece of art within seconds? How can a marriage analyst know within minutes whether the couple will stay together or not? Some ideas like this and much more gain a true resolution in Blink"
    }
  ],

  "Fiction Books": [
    { name: "The Lord of the Rings", 
    author: "J.R.R. Tolkien",
    rating : "⭐⭐⭐",
    description: "Continuing the story begun in The Hobbit, all three parts of the epic masterpiece, The Lord of the Rings, in one paperback. Features the definitive edition of the text, fold-out flaps with the original two-colour maps, and a revised and expanded index."
   },

    { name: "The Hobbit ", 
    author: "J.R.R. Tolkien",
    rating : "⭐⭐⭐⭐⭐",
    description: "Immerse yourself in Middle-earth with Tolkien’s classic masterpiece, telling the complete story of Bilbo Baggins and the Hobbits’ epic encounters with Gandalf, Gollum, dragons and monsters, in the quest to destroy the One Ring."
   },

    { name: "All the Light We Cannot See  ",
     author: " Anthony Doerr " ,
     rating : "⭐⭐",
     description: "When Marie Laure goes blind, aged six, her father builds her a model of their Paris neighbourhood, so she can memorize it with her fingers and then navigate the real streets. But when the Germans occupy Paris, father and daughter flee to Saint-Malo on the Brittany coast, where Marie-Laure’s agoraphobic great uncle lives in a tall, narrow house by the sea wall. "
    },

    { name: "One Hundred Years of Solitude  ", 
    author: " Gabriel García Márquez" ,
    rating : "⭐⭐⭐",
    description: "The novel One Hundred Years of Solitude is an absolute master piece. It manages to capture the various phases and glories of the human history. The book has had a major impact on young minds that have taken up literature as a subject. "
  }
  ]
};

export default function App() {
  const [selectedBook, setBook] = useState("Motivational Books");
  function phoneClickHandler(book) {
    setBook(book);
  }
  return (
    <div className="App">
      <h1>Book Recommendation App</h1>
      <p style={{ fontSize: "small" }}>
        {" "}
        Click on the type of books that you want to know have good rating.
      </p>

      <div>
        {Object.keys(bookList).map((book) => (
          <button
            onClick={() => phoneClickHandler(book)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {book}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookList[selectedBook].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.author} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              <div className = "booklist" id= "des"><details>
      <summary> <b> Read Description </b></summary>
      <p>{book.description}</p>
      </details></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
