// CocktailPage will render: 
// Cocktail name 
// Cocktail ingredients 
// Cocktail instructions
// Cocktail <stuff>

// Cocktailname = strDrink 
// Cocktail ingredients = map function for strIngredient
// Cocktail instructions = strInstructions

// cocktailDisplay.js
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const cocktailName = urlParams.get('name');
    const ingredients = JSON.parse(urlParams.get('ingredients'));
    const instructions = urlParams.get('instructions');
    const cocktailImage = urlParams.get('image');
  
    // Update the cocktailDisplay page with the fetched details
    document.getElementById('cocktailName').innerText = cocktailName;
    document.getElementById('cocktailImage').src = cocktailImage;
  
    // Update the ingredients list
    const ingredientsList = document.getElementById('ingredientsList');
    if (ingredientsList) {
      ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.innerText = ingredient;
        ingredientsList.appendChild(li);
      });
    }
  
    // Update the instructions
    document.getElementById('instructions').innerText = instructions;
  });
  