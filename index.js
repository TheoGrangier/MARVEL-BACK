const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

require("dotenv").config();

app.use(cors());

app.get("/comics", (req, res) => {
  axios
    .get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}`
    ) //&skip=100
    .then((response) => {
      console.log(response.data); // Affichera la réponse du serveur
      res.json({ comics: response.data });
    })
    .catch((error) => {
      console.log(error.message); // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.
    });
});

app.get("/comics/skip/:skip", (req, res) => {
  let skip = req.params.skip;
  axios
    .get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/?apiKey=${process.env.MARVEL_API_KEY}&skip=${skip}`
    ) //&skip=100
    .then((response) => {
      console.log("skip => ", skip);
      console.log(response.data); // Affichera la réponse du serveur
      res.json({ comics: response.data });
    })
    .catch((error) => {
      console.log(error.message); // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.
    });
});

app.get("/comics/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  axios
    .get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${id}?apiKey=${process.env.MARVEL_API_KEY}`
    ) //&skip=100
    .then((response) => {
      console.log(response.data); // Affichera la réponse du serveur
      res.json({ comicsDetail: response.data });
    })
    .catch((error) => {
      //res.json({ comicsDetail: 0 });
      console.log(error.message); // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.
    });
});

app.get("/comics/skip/:skip", (req, res) => {
  let skip = req.params.skip;
  console.log("skip => ", skip);
  axios
    .get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/?apiKey=${process.env.MARVEL_API_KEY}&skip=${skip}`
    ) //&skip=100
    .then((response) => {
      console.log("skip => ", skip);
      console.log(response.data); // Affichera la réponse du serveur
      res.json({ comics: response.data });
    })
    .catch((error) => {
      console.log(error.message); // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.
    });
});

app.get("/comics/search/:name/:skip", (req, res) => {
  let name = req.params.name;
  let skip = req.params.skip;
  console.log(name);
  axios
    .get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}&title=${name}&skip=${skip}`
    ) //&skip=100
    .then((response) => {
      console.log(response.data); // Affichera la réponse du serveur
      res.json({ comics: response.data });
    })
    .catch((error) => {
      console.log(error.message); // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.
    });
});

app.get("/comics/search/:title", (req, res) => {
  let title = req.params.title;
  console.log(
    `https://lereacteur-marvel-api.herokuapp.com/comic/?apiKey=${process.env.MARVEL_API_KEY}&title=${title}`
  );
  axios
    .get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/?apiKey=${process.env.MARVEL_API_KEY}&title=${title}`
    ) //&skip=100
    .then((response) => {
      console.log(response.data); // Affichera la réponse du serveur
      res.json({ comics: response.data });
    })
    .catch((error) => {
      //res.json({ comicsDetail: 0 });
      console.log(error.message); // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.
    });
});

app.get("/personnages", (req, res) => {
  axios
    .get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}`
    ) //&skip=100
    .then((response) => {
      console.log(response.data); // Affichera la réponse du serveur
      res.json({ personnages: response.data });
    })
    .catch((error) => {
      console.log(error.message); // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.
    });
});

app.get("/personnages/skip/:skip", (req, res) => {
  let skip = req.params.skip;
  console.log("skip => ", skip);
  axios
    .get(
      `https://lereacteur-marvel-api.herokuapp.com/characters/?apiKey=${process.env.MARVEL_API_KEY}&skip=${skip}`
    ) //&skip=100
    .then((response) => {
      console.log("skip => ", skip);
      console.log(response.data); // Affichera la réponse du serveur
      res.json({ personnages: response.data });
    })
    .catch((error) => {
      console.log(error.message); // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.
    });
});

app.get("/personnages/search/:name/:skip", (req, res) => {
  let name = req.params.name;
  let skip = req.params.skip;
  console.log(name);
  axios
    .get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}&name=${name}&skip=${skip}`
    ) //&skip=100
    .then((response) => {
      console.log(response.data); // Affichera la réponse du serveur
      res.json({ personnages: response.data });
    })
    .catch((error) => {
      console.log(error.message); // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.
    });
});

app.get("/personnages/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  axios
    .get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${id}?apiKey=${process.env.MARVEL_API_KEY}`
    ) //&skip=100
    .then((response) => {
      console.log(response.data); // Affichera la réponse du serveur
      res.json({ personnageComics: response.data });
    })
    .catch((error) => {
      res.json({ personnages: 0 });
      console.log(error.message); // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.
    });
});

// Démarrer le serveur :
// Pour écouter les requêtes du port 3000
app.listen(process.env.PORT, () => {
  console.log("Server has started");
});
// Remarquez que le `app.listen` doit se trouver après les déclarations des routes
