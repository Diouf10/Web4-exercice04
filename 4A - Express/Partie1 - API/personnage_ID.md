## **Fin d'une partie**

Ressource qui permet d'accéder à un personnage.

-   **URL**

    /personnages/_[ID]_

    exemple : http://localhost/personnages/1

-   **Méthode:**

    `GET` : Obtenir un personnage.
    `UPDATE` : Modifier un personnage.
    `DELETE` : Supprimer un personnage.

-   **Réponse de succès:**

        -   **Code:** 200 <br />
            **Contenu:** `{
        "data": {
            "id":1,
            "name":"Batman",
            "realname":"Bruce Wayne"
        }

    }`

-   **Réponse d'erreur:**

    -   **Code:** 401 UNAUTHORIZED <br />
        **Contenu:** `{ "message": "Non authentifié." }`

    -   **Code:** 404 NOT FOUND <br />
        **Contenu:** `{ "message": "Personnage non trouvé." }`
