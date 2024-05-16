import { Produit, getProduits } from "../../models/Produit.js";

let produits = [
 new Produit("produit-0", "https://informatique.cstjean.qc.ca/", "Informatique"),
];


const produitsResolver = {
    index: getProduits,
    post: async (parent, args) => {
      // Validation des données
      if (!args.url || !args.description) {
        throw new Error("La description et l'URL du produit sont obligatoires.");
      }
  
      // Création du nouveau produit
      const produit = new Produit(null, args.url, args.description);
  
      // Sauvegarde du produit
      if (!(await produit.save())) {
        throw new Error("Erreur lors de la sauvegarde du produit.");
      }
  
      // Retourne le produit créé
      return produit;
    },
  };

export { produitsResolver };