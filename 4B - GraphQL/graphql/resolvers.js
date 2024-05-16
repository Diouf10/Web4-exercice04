import { produitsResolver } from "./resolvers/produits.js";

const resolvers = {
    Query: {
        info: () => "PRODUITS PERSONNAGE",
        feed: produitsResolver.index,
    },
    Mutation: {
        post: produitsResolver.post,
    },
};
export { resolvers };