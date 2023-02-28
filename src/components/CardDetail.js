import Image from "next/image";
import React, { memo } from "react";

const CardDetail = ({ pokemon, isDetail }) => {
  return (
    <div className="min-w-[20rem] text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[30rem]">
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

        {isDetail ? (
          <>
            <p className="font-white text-left font-semibold mt-5 mb-1">
              Egg Groups
            </p>
            <div className="grid grid-cols-4 gap-5 content-center">
              {pokemon.eggGroups.map((type, index) => (
                <p
                  key={index}
                  class="bg-indigo-300 mr-3 rounded-md text-white mb-3 font-normal"
                >
                  {type}
                </p>
              ))}
            </div>
            <p className="font-white text-left font-semibold mt-5 mb-1">
              Previous Evolutions
            </p>
            <div className="grid grid-cols-4 gap-2 content-center">
              {pokemon.preevolutions?.map((prev, index) => (
                <div key={index} className="overflow-scroll">
                  <Image
                    src={prev.sprite}
                    height={150}
                    width={150}
                    alt={pokemon.sprite}
                    class="rounded-t-lg object-center inline h-[150px] w-[150px]"
                  />
                  <p className="font-white text-center text-gray-300">
                    {prev.key}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : null}
        <p className="font-white text-left font-semibold mt-5 mb-1">Types</p>
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
  );
};

export default memo(CardDetail);
