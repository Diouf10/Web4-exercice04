import { Produit } from "../../models/Produit.js";

let produits = [
 new Produit("produit-0", "https://informatique.cstjean.qc.ca/", "Informatique"),
];


   const newsResolver = {
    index: () => produits,
    post: (parent, args) => {
            let idCount = produits.length;

            const produit = new Produit(`produit-${idCount++}`, args.url, args.description);

            produits.push(produit);
            
            return produit;
        },
   };
   export { newsResolver };