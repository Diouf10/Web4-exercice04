// Importer le module dotenv pour charger les variables d'environnement depuis un fichier .env
import * as dotenv from "dotenv";
dotenv.config();

// Importer le module mariadb pour la gestion de la base de données MariaDB
import mariadb from "mariadb";

// Créer une piscine de connexions MariaDB avec les paramètres de configuration
const pool = mariadb.createPool({
    host: process.env.DB_HOST,         // Hôte de la base de données
    user: process.env.DB_USER,         // Nom d'utilisateur de la base de données
    password: process.env.DB_PASS,     // Mot de passe de la base de données
    database: process.env.DB_DATABASE, // Nom de la base de données
    connectionLimit: 5,                // Limite de connexions simultanées à la base de données
});

// Fonction pour exécuter des requêtes SQL sur la base de données
async function query(query, values) {
    let conn;
    try {
        conn = await pool.getConnection(); // Récupérer une connexion depuis la piscine
        return await conn.query(query, values); // Exécuter la requête SQL avec les valeurs fournies
    } catch (err) {
        throw err; // Lancer une erreur si la requête échoue
    } finally {
        if (conn) await conn.release(); // Libérer la connexion une fois la requête terminée
    }
}

// Exporter la fonction query pour l'utiliser dans d'autres modules
export { query };
