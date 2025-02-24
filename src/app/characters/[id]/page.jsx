"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function CharactersInfo() {
  const params = useParams();
  console.log(params);

  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `https://dragonball-api.com/api/characters/${params.id}`
        );
        const dgb = await response.json();
        setCharacter(dgb);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchCharacter();
  }, []);

  console.log(character);

  return (
    <div className="p-10">
      <Link
        className="bg-gray-500 text-white py-2 px-3 rounded-md shadow"
        href="/"
      >
        Back to Home
      </Link>
      <div className="flex justify-center items-center mt-5 text-center">
        <div className="shadow-md bg-slate-200 p-10 rounded-md space-y-3">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <h3 className="text-2xl text-amber-600 font-bold">
                {character.name}
              </h3>
              <Image
                src={character.image}
                width={200}
                height={200}
                alt={character.name}
                className="rounded-md"
              />
              <p className="text-2xl font-bold">Pricing:{' '} <span className="text-amber-600">{character.maxKi}</span> </p>
              <p className="text-2xl font-bold">Race:{' '} <span className="text-amber-600">{character.race}</span> </p>
              <p className="text-2xl font-bold">Gender:{' '} <span className="text-amber-600">{character.gender}</span> </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CharactersInfo;
