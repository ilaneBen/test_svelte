// database.mjs
import mysql from 'mysql';
import express from 'express';
import cors from 'cors';

const app = express();

// Utilisez le middleware cors
app.use(cors());

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'site_dynamique',
});

// Établir la connexion à la base de données
connection.connect((error) => {
  if (error) {
    console.error('Erreur lors de la connexion à la base de données :', error);
  } else {
    console.log('Connexion à la base de données réussie');
  }
});

// Route pour récupérer les burgers depuis la base de données
app.get('/api/burgers', (req, res) => {
  const sql = 'SELECT * FROM burgers';

  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Erreur lors de l\'exécution de la requête :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    } else {
      res.json(results);
    }
  });
});
// ...

// Route pour ajouter un nouveau burger à la base de données
app.post('/api/burgers', (req, res) => {
  const { nom, description, prix, photo } = req.body;

  // Ici, vous devez utiliser les données reçues depuis le front-end (nom, description, prix, photo)
  // pour insérer un nouveau burger dans la base de données
  // Utilisez les méthodes SQL appropriées pour effectuer cette opération, par exemple, INSERT INTO ...

  // Une fois l'opération d'ajout terminée, vous pouvez renvoyer une réponse à votre application front-end
  res.json({ message: 'Burger ajouté avec succès' });
});

// Démarrer le serveur sur le port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur Node.js en cours d'exécution sur le port ${port}`);
});
