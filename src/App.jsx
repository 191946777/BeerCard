import { useState, useEffect } from "react";
import "./App.css";
import Searchfunc from "./components/Searchfunc";
import Card from "./components/Card";

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBeers, setFilteredBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await fetch("https://api.sampleapis.com/beers/ale");
        const data = await response.json();
        setBeers(data);
        setFilteredBeers(data);
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    };
    fetchBeers();
  }, []);

  useEffect(() => {
    const results = beers.filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBeers(results);
  }, [searchTerm, beers]);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Beer Cards</h1>
        <Searchfunc setSearchTerm={setSearchTerm} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBeers.map((beer) => (
            <Card key={beer.id} beer={beer} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
