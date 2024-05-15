import { newsResolver } from "./resolvers/news.js";

const resolvers = {
    Query: {
        info: () => "CSTJEAN NEWS",
        feed: newsResolver.index,
    },
    Mutation: {
        post: newsResolver.post,
    },
};
export { resolvers };