<script>

// Your selected Skeleton theme:
import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/skeleton.css';

// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../app.postcss';
    import { redirect } from '@sveltejs/kit';
</script>
<svelte:head>
    <!-- Fonts -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
    />
  
    <!-- Material Typography -->
  
   <style>
    .body{    
    background: linear-gradient(rgba(0, 0, 0, 0.801), rgba(0, 0, 0, 0.801)), url(https://legarconboucher.com/img/cms/Recette/%5BGetPaidStock-com%5D-62e2950915d06.jpg) center/cover;
    
}

    .nav{
      color: white;
      background: white;

    }
    .nav:hover{
      background:red;
    }
    .active::after{
      background: white;
    }
  </style>
    <!-- SMUI -->
    <link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />
  </svelte:head>
 
<slot />
