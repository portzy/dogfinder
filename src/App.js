import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';

// Define defaultDogs before using it
const defaultDogs = [
  {
    name: "Whiskey",
    age: 5,
    src: "/images/whiskey.jpg", 
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    name: "Duke",
    age: 3,
    src: "/images/duke.jpg", 
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    name: "Perry",
    age: 4,
    src: "/images/perry.jpg", 
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  },
  {
    name: "Tubby",
    age: 4,
    src: "/images/tubby.jpg", 
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore."
    ]
  }
];

function App() {
  return (
    <Router>
      <Nav dogs={defaultDogs.map(dog => dog.name)} />
      <Routes>
        <Route path="/dogs" element={<DogList dogs={defaultDogs} />} />
        <Route path="/dogs/:name" element={<DogDetails dogs={defaultDogs} />} />
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
    </Router>
  );
}

export default App;
