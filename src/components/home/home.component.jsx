import React, { useState, useEffect } from "react";
import { Cocktail, Head, Search } from "./home.style";

export const Home = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  console.log(data);

  const { drinks = [] } = data;
  return (
    <div>
      <Head>
        {drinks.map((stuff, idx) => {
          return (
            <div key={idx}>
              <Cocktail>{stuff.strDrink}</Cocktail>
            </div>
          );
        })}
        <div cocktail={drinks} />
      </Head>
      <Search></Search>
    </div>
  );
};

export default Home;
