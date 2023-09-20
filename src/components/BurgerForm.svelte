<!-- BurgerForm.svelte -->

<script lang="ts">
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
  </script>
  
  <form on:submit|preventDefault={handleSubmit}>
    <input type="text" bind:value={nom} placeholder="Nom du burger" required />
    <input type="text" bind:value={description} placeholder="Description" required />
    <input type="number" bind:value={prix} placeholder="Prix" required />
    <input type="text" bind:value={photo} placeholder="URL de la photo" required />
    <button type="submit">Ajouter</button>
  </form>
  