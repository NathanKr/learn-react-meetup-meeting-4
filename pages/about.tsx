import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <br />
      <Link href="/pokemons-csr">Pokemons</Link>
      <br />
      <h1>About Page</h1>
    </div>
  );
};

export default About;
