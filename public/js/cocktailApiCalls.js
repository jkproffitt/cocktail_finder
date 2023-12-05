//enter all js files here

const imgEl = document.getElementById('thumbnailImg');
const drinkEl = document.getElementById('cocktail-name');
const drinkImg = document.getElementById('drinkImg');

//setting the search up for homepage
const discoverForm = document.getElementById('search-for-drink');
const searchByName = document.getElementById('drink-by-name-btn');
const searchInput = document.getElementById('search-drink');

const newExploreFormHandler = async (event) => {
  event.preventDefault();

  const drinkName = document.querySelector('#search-drink').value.trim();

  console.log('out ' + drinkName);

  if (drinkName == '') {
    $('#search-drink').attr(
      'style',
      'background-color: rgb(255, 245, 235); border-color: red; '
    );
    $('#search-drink').attr('placeholder', ' Please enter a drink name');
  }

  if (drinkName) {
    console.log('in if' + drinkName);
    const data = await getDrinkByName(drinkName);
    console.log(data);
  }
};
//event listener for homepage
document
  .querySelector('.discover-form')
  .addEventListener('submit', newExploreFormHandler);

//search cocktail by name
const getDrinkByName = async (name) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  );
  const data = await response.json();
  return data.drinks;
};

if (!drinkEl) {
  console.log('no favorite drinks');
} else {
  getDrinkByName(drinkEl.innerHTML).then((data) => {
    console.log(data);
    drinkImg.src = data[0].strDrinkThumb;
  });
}

//look up cocktail by ID
const getDrinkById = async (id) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
  return data.drinks;
};

// getDrinkById('11007').then((data) => console.log(data));

//search for ingredient by name
const getIngredientByName = async (name) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`
  );
  const data = await response.json();
  return data.ingredients;
};

// getIngredientByName('lemon').then((data) => console.log(data));

//get random cocktail
const getRandomDrink = async () => {
  const response = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  );
  const data = await response.json();
  return data.drinks;
};

getRandomDrink().then((data) => {
  console.log(data);
  console.log(data[0].strDrinkThumb);
  imgEl.src = data[0].strDrinkThumb;
});

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

const displayCocktailDetails = async (cocktailName) => {
  const drinks = await getDrinkByName(cocktailName);
  if (drinks && drinks.length > 0) {
    const cocktail = drinks[0];
    // Assuming ingredients are stored in strIngredient1, strIngredient2, ...
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      } else {
        break;
      }
    }

    // Redirect to cocktailDisplay page with details
    window.location.href = `/cocktailDisplay?name=${encodeURIComponent(
      cocktailName
    )}&ingredients=${encodeURIComponent(
      JSON.stringify(ingredients)
    )}&instructions=${encodeURIComponent(
      cocktail.strInstructions
    )}&image=${encodeURIComponent(cocktail.strDrinkThumb)}`;
  }
};

function temp(value) {
  console.log('jere');
  console.log(value);
  console.log(searchInput);
}
