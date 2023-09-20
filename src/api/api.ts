// src/api/api.js

// Importez les fonctionnalités requises de Svelte
import { onMount } from 'svelte';

// Définissez une interface pour décrire la structure des données de burger
interface Burger {
  id: number;
  nom: string;
  description: string;
  prix: number;
}

// Créez une variable réactive pour stocker les burgers
let burgers: Burger[] = [];

// Utilisez onMount pour effectuer l'appel fetch une fois que le composant est monté
onMount(async () => {
  try {
    const response = await fetch('http://localhost:3000/api/burgers');
    const data = await response.json();
    burgers = data;
  } catch (error) {
    console.error('Erreur lors de la récupération des burgers :', error);
  }
});

// Exportez la fonction fetchData pour qu'elle puisse être utilisée dans d'autres composants
export function fetchData() {
  return burgers;
}

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

let nom = '';
let description = '';
let prix = 0;
let photo = '';

async function handleSubmit() {
  const formData = {
    nom,
    description,
    prix,
    photo
  };

  // Utilisez la méthode HTTP POST pour envoyer les données du formulaire au serveur
  const response = await fetch('http://localhost:3000/api/burgers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  if (!response.ok) {
    console.error('Erreur lors de l\'ajout du burger');
  } else {
    // Burger ajouté avec succès, émettez un événement pour informer les autres composants de la mise à jour
    dispatch('burgerAdded');
  }
}