import "@/styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

const client = new ApolloClient({
  uri: "https://graphqlpokemon.favware.tech/v7",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getAllPokemon: offsetLimitPagination(),
        },
      },
    },
  }),
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
