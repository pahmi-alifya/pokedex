import { GET_POKEMON } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";

const Loading = dynamic(() => import("@/components/Loading"));
const CardDetail = dynamic(() => import("@/components/CardDetail"));

const Detail = () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: {
      pokemon: router?.query?.slug,
    },
  });

  if (loading) return <Loading />;
  if (error) return `Error! ${error.message}`;
  console.log("recon", data);
  return (
    <main className="flex h-screen mt-10">
      <div className="m-auto">
        <CardDetail isDetail pokemon={data.getPokemon} />
      </div>
    </main>
  );
};

export default Detail;
