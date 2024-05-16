const typeDefs = `
  type Query {
    """
    Retourne l'info sur notre projet.
    """
    info: String!
    """
    Retourne la liste des liens d'intérêts.
    """
    feed: [Produit!]!
  }

  """
  Un lien d'intérêt.
  """
  type Produit {
    id: ID!
    description: String!
    url: String!
  }

  type Mutation {
    """
    Pour ajouter des liens d'intérêts.
    """
    post(url: String!, description: String!): Produit!
  }
`;
export { typeDefs };