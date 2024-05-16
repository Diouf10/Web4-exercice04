
import { query } from "../database/mariadb.js";
import crypto from "crypto";

class Produit {
    constructor(id, url, description) {
        this.id = id || crypto.randomBytes(10).toString("hex");
        this.url = url;
        this.description = description;
    }

    async save() {
        // TODO Update ...
        const res = await query("INSERT INTO produits value (?, ?, ?)", [
        this.id,
        this.url,
        this.description,
        ]);
        return res.affectedRows;
        }
   }

   
   async function getProduits() {
    const res = await query("SELECT * FROM produits");
    let produits = [];
    for (const produit of res) {
        produits.push(new Produit(produit.id, produit.url, produit.description));
    }
    return produits;
   }

   export { Produit, getProduits };