import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

const Card = ({ pokemon }) => {
  return (
    <Link href={`pokemon/${pokemon.key}`}>
      <div className="max-w-xs text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-[50rem]">
        <Image
          src={pokemon.sprite}
          height={150}
          width={150}
          alt={pokemon.sprite}
          class="rounded-t-lg object-center inline h-[150px] w-[150px]"
        />

        <div class="p-5">
          <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {pokemon.key}
          </h5>
          <p class="mb-2 text-md text-gray-400">{pokemon.species}</p>
          <p className="font-white text-left font-semibold">Status</p>
          <p className="font-white text-left text-gray-300">
            Attack : {pokemon.baseStats.attack || "-"}
          </p>
          <p className="font-white text-left text-gray-300">
            Defense : {pokemon.baseStats.defense || "-"}
          </p>
          <p className="font-white text-left text-gray-300">
            HP : {pokemon.baseStats.hp || "-"}
          </p>
          <p className="font-white text-left text-gray-300">
            Special Attack : {pokemon.baseStats.specialattack || "-"}
          </p>
          <p className="font-white text-left text-gray-300">
            Special Defense : {pokemon.baseStats.specialdefense || "-"}
          </p>
          <p className="font-white text-left text-gray-300">
            Speed : {pokemon.baseStats.speed || "-"}
          </p>
          <div className="grid grid-cols-4 gap-5 content-center mt-5">
            {pokemon.types.map((type, index) => (
              <p
                key={index}
                class="bg-yellow-600 rounded-md text-white mb-3 font-normal"
              >
                {type.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(Card);
