import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { POKEMONS_URL } from "../src/constants";
import IPokemon from "../src/IPokemon";

// CSR

const PokemonsCSR = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  useEffect(getPokemons, []);

  function getPokemons() {
    fetch(POKEMONS_URL)
      .then((res) => res.json())
      .then((data) => setPokemons(data));
  }

  const elems = pokemons.map((it, i) => (
    <div key={i}>
      <span>{it.name}</span>
      <br />
      <Image src={`/${it.image}`} width={100} height={100} alt='pokemon'/>
    </div>
  ));

  return (
    <div>
      <Link href="/about">About</Link>
      <br />
      <Link href="/">Home</Link>
      <br />
      <h1>PokemonsCSR page</h1>
      {elems}
    </div>
  );
};

export default PokemonsCSR;
