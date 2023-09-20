<!-- BurgerList.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    import Tab, { Label } from '@smui/tab';
    import TabBar from '@smui/tab-bar';
    import Paper, { Content } from '@smui/paper';
    import Card from '@smui/card';
    import BurgerForm from './BurgerForm.svelte'; // Assurez-vous d'avoir le bon chemin vers le composant BurgerForm
  
    let clicked = 0;
    let active = 'Home';
    let burgers = [];
  
    // Utilisez onMount pour effectuer l'appel fetch une fois que le composant est monté
    onMount(async () => {
      try {
        const response = await fetch('http://localhost:3000/api/burgers');
        burgers = await response.json();
      } catch (error) {
        console.error('Erreur lors de la récupération des burgers :', error);
      }
    });
  </script>
 
  <div >
   
    <TabBar tabs={['Accueil', 'Produits', 'Nous contacter']} let:tab bind:active>
      <!-- Note: the `tab` property is required! -->
      <Tab class='nav'  {tab}>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>
    
    {#if active === 'Accueil'}
      <Paper variant="unelevated">
        <Content>Bienvenue sur le site La Grilladerie</Content>
      </Paper>
    {:else if active === 'Produits'}
      <Paper variant="unelevated">
     
        <Content>
          <!-- Ajoutez le bouton BurgerForm ici -->
          <BurgerForm />
         
          <div class="card-display">
            <div class="card-container">
              <Card>
                <Content>
                  {#if burgers.length > 0}
                    <ul>
                      {#each burgers as burger}
                        <img src={burger.photo} alt={burger.nom} style="width: 100px; height: 100px;">
                        <li>{burger.nom} - {burger.description} - Prix : {burger.prix}€</li>
                      {/each}
                    </ul>
                  {:else}
                    <p>Aucun burger disponible pour le moment.</p>
                  {/if}
                </Content>
              </Card>
            </div>
          </div>
  
          <pre class="status">Clicked: {clicked}</pre>
        </Content>
      </Paper>
    {:else if active === 'Nous contacter'}
      <Paper variant="unelevated">
        <Content>
          Petit test connexion du serveur back-end nodeJs avec une databse mysql 
        </Content>
      </Paper>
    {/if}
  </div>
  