const typeDefs = `
  type Query {
    """
    Retourne l'info sur notre projet.
    """
    info: String!
    """
    Retourne la liste des liens d'intérêts.
    """
    feed: [Link!]!
  }

  """
  Un lien d'intérêt.
  """
  type Link {
    id: ID!
    description: String!
    url: String!
  }

  type Mutation {
    """
    Pour ajouter des liens d'intérêts.
    """
    post(url: String!, description: String!): Link!
  }
`;
export { typeDefs };