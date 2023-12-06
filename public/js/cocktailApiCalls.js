const drinkEl = document.getElementById('cocktail-name');
const drinkImg = document.getElementById('drinkImg');
const discoverCocktailRow = document.getElementById('discover-cocktail-row');

//setting the search up for homepage
const discoverForm = document.getElementById('search-for-drink');
const searchByName = document.getElementById('drink-by-name-btn');
const searchInput = document.getElementById('search-drink');

if (!searchInput.value.trim()) {
  console.log('no  drink search');
} else {
  console.log('drink search');
}

const newExploreFormHandler = async (event) => {
  event.preventDefault();

  const drinkName = document.querySelector('#search-drink').value.trim();

  if (drinkName == '') {
    $('#search-drink').attr(
      'style',
      'background-color: rgb(255, 245, 235); border-color: red; '
    );
    $('#search-drink').attr('placeholder', ' Please enter a drink name, like "Tequila Sunrise');
  } else {
    const data = await getDrinkByName(drinkName);

    if (data && data.length > 0) {
      buildCocktailPage(data[0]);
    } else {
      alert('This drink is not available. Please try with a different drink.');
    }
  }

  if (drinkName) {
    const data = await getDrinkByName(drinkName);
    buildCocktailPage(data[0]);
  }
};

function buildCocktailPage(data) {
  ingredientKeys = Object.keys(data)
    .filter((key) => key.includes('Ingredient'))
    .reduce((obj, key) => {
      obj[key] = data[key];
      return obj;
    }, {});
  let ingredientList = Object.fromEntries(
    Object.entries(ingredientKeys).filter(([_, v]) => v != null)
  );

  const cpTitle = document.getElementById('title');
  const cpDrinkType = document.getElementById('drinkType');
  const cpIngredients = document.getElementById('ingredients');
  const cpInstructions = document.getElementById('instructions');
  const cpGlass = document.getElementById('glassware');

  cpDrinkType.src = data.strDrinkThumb + '/preview';
  console.log(cpDrinkType.src);
  cpTitle.textContent = data.strDrink;
  cpGlass.textContent = data.strGlass;

  for (key in ingredientList) {
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(ingredientList[key]));
    cpIngredients.appendChild(entry);
  }
  // cpIngredients.textContent = ingredientList;
  cpInstructions.textContent = data.strInstructions;
}

//event listener for homepage
document
  .querySelector('.discover-form')
  .addEventListener('submit', newExploreFormHandler);

//search cocktail by name
const getDrinkByName = async (name) => {
  discoverCocktailRow.hidden = false;
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  );
  const data = await response.json();
  return data.drinks;
};

// if (!drinkEl) {
//   console.log('no favorite drinks');
// } else {
//   getDrinkByName(drinkEl.innerHTML).then((data) => {
//     drinkImg.src = data[0].strDrinkThumb;
//   });
// }

const getRandomDrink = async () => {
  const response = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  );
  const data = await response.json();
  return data.drinks;
};

const displayRandomCocktail = async () => {
  const drinks = await getRandomDrink();
  const ingredientKeys = Object.keys(drinks[0])
    .filter((key) => key.includes('Ingredient'))
    .reduce((obj, key) => {
      obj[key] = drinks[0][key];
      return obj;
    }, {});

  const ingredientList = Object.fromEntries(
    Object.entries(ingredientKeys).filter(([_, v]) => v != null)
  );

  const randomTitle = document.getElementById('randomtitle');
  const randomDrinkType = document.getElementById('randomdrinkType');
  const randomIngredients = document.getElementById('randomingredients');
  const randomInstructions = document.getElementById('randominstructions');
  const randomGlass = document.getElementById('randomglassware');

  randomDrinkType.src = drinks[0].strDrinkThumb + '/preview';
  console.log(randomDrinkType.src);

  randomTitle.textContent = drinks[0].strDrink;
  randomGlass.textContent = drinks[0].strGlass;

  for (key in ingredientList) {
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(ingredientList[key]));
    randomIngredients.appendChild(entry);
  }

  randomInstructions.textContent = drinks[0].strInstructions;
};

displayRandomCocktail();

//look up cocktail by ID
// const getDrinkById = async (id) => {
//   const response = await fetch(
//     `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
//   );
//   const data = await response.json();
//   return data.drinks;
// };

//search for ingredient by name
// const getIngredientByName = async (name) => {
//   const response = await fetch(
//     `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`
//   );
//   const data = await response.json();
//   return data.ingredients;
// };

const searchForm = document.getElementById('searchForm');
if (searchForm) {
  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const searchInput = document.getElementById('searchCocktail');
    const searchTerm = searchInput.value.trim();

    if (searchTerm) {
      // Redirect to cocktailDisplay page with the searched cocktail name
      window.location.href = `/cocktailDisplay?name=${encodeURIComponent(
        searchTerm
      )}`;
    }
  });
}

// const displayCocktailDetails = async (cocktailName) => {
//   const drinks = await getDrinkByName(cocktailName);
//   if (drinks && drinks.length > 0) {
//     const cocktail = drinks[0];
//     // Assuming ingredients are stored in strIngredient1, strIngredient2, ...
//     const ingredients = [];
//     for (let i = 1; i <= 15; i++) {
//       const ingredient = cocktail[`strIngredient${i}`];
//       if (ingredient) {
//         ingredients.push(ingredient);
//       } else {
//         break;
//       }
//     }

//     // Redirect to cocktailDisplay page with details
//     window.location.href = `/cocktailDisplay?name=${encodeURIComponent(
//       cocktailName
//     )}&ingredients=${encodeURIComponent(
//       JSON.stringify(ingredients)
//     )}&instructions=${encodeURIComponent(
//       cocktail.strInstructions
//     )}&image=${encodeURIComponent(cocktail.strDrinkThumb)}`;
//   }
// };
