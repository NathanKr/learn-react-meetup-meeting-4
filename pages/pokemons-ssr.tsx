import React from "react";
import { POKEMONS_URL } from "../src/constants";
import IPokemon from "../src/IPokemon";
import Image from "next/image";
import Link from "next/link";

// --- SSR --> invoke on each request

export async function getServerSideProps() {
  console.log("getStaticProps");
  const res = await fetch(POKEMONS_URL);
  const pokemons: IPokemon[] = await res.json();

  return {
    props: { pokemons }, // will be passed to the page component as props
  };
}

const PokemonsSSR = (props: { pokemons: IPokemon[] }) => {
  const { pokemons } = props;

  const elems = pokemons.map((it, i) => (
    <div key={i}>
      <span>{it.name}</span>
      <br />
      <Image src={`/${it.image}`} width={100} height={100} alt="pokemon" />
    </div>
  ));

  return (
    <div>
      <Link href="/about">About</Link>
      <br />
      <Link href="/">Home</Link>
      <br />
      <h1>PokemonsSSR page</h1>
      {elems}
    </div>
  );
};

export default PokemonsSSR;
