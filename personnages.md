---
---

Ressource qui permet à l'IA de terminer une partie.

-   **URL**

    /personnages

    exemple : http://localhost/personnages

-   **Méthode:**

    `GET` : La liste de personnages.

-   **Réponse de succès:**

    -   **Code:** 200 <br />
        **Contenu:** `{
        "data": {
        "msg":[
        {
        "id":1,
        "name":"Batman",
        "realname":"Bruce Wayne"
        },
        {
        "id":2,
        "name":"The Penguin",
        "realname":"Oswald Cobblepot"
        },
        {
        "id":3,
        "name":"Iron Man",
        "realname":"Tony Stark"
        },
        {
        "id":4,
        "name":"The Hulk",
        "realname":"Robert Bruce Banner"
        }
        ],
        "query":{}
        }
        }

-   **Réponse d'erreur:**

    -   **Code:** 401 UNAUTHORIZED <br />
        **Contenu:** `{ "message": "Non authentifié." }`

        OU

    -   **Code:** 404 NOT FOUND <br />
        **Contenu:** `{ "message": "La ressource n’existe pas." }`
