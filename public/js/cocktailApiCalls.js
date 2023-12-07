const drinkEl = document.getElementById('cocktail-name');
const drinkImg = document.getElementById('drinkImg');
const discoverCocktailRow = document.getElementById('discover-cocktail-row');

//setting the search up for homepage
const discoverForm = document.getElementById('search-for-drink');
const searchByName = document.getElementById('drink-by-name-btn');
const searchInput = document.getElementById('search-drink');

const newDrinkSearch = async (event) => {
  event.preventDefault();

  const drinkName = document.querySelector('#search-drink').value.trim();

  if (drinkName == '') {
    $('#search-drink').attr(
      'style',
      'background-color: rgb(255, 245, 235); border-color: red; '
    );
    $('#search-drink').attr(
      'placeholder',
      ' Please enter a drink name, like "Tequila Sunrise'
    );
  } else {
    const data = await getDrinkByName(drinkName);
    if (data && data.length > 0) {
      discoverCocktailRow.hidden = false;
      buildCocktailPage(data[0]);
    } else {
      $('#search-drink').attr(
        'style',
        'background-color: rgb(255, 245, 235); border-color: red; '
      );
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

  const discoverTitle = document.getElementById('title');
  const discoverDrinkType = document.getElementById('drinkType');
  const discoverIngredients = document.getElementById('ingredients');
  const discoverInstructions = document.getElementById('instructions');
  const discoverGlass = document.getElementById('glassware');

  discoverDrinkType.src = data.strDrinkThumb + '/preview';
  discoverTitle.textContent = data.strDrink;
  discoverGlass.textContent = data.strGlass;
  discoverIngredients.replaceChildren();

  for (key in ingredientList) {
    var entry = document.createElement('li');
    entry.textContent = ingredientList[key];
    discoverIngredients.appendChild(entry);
  }
  discoverInstructions.textContent = data.strInstructions;
}

//event listener for homepage
document
  .querySelector('.discover-form')
  .addEventListener('submit', newDrinkSearch);

//search cocktail by name
const getDrinkByName = async (name) => {
  // discoverCocktailRow.hidden = false;
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  );
  const data = await response.json();
  return data.drinks;
};

const getRandomDrink = async () => {
  const response = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  );
  const data = await response.json();
  return data.drinks;
};

const displayRandomDrink = async () => {
  const random = await getRandomDrink();
  const ingredientKeys = Object.keys(random[0])
    .filter((key) => key.includes('Ingredient'))
    .reduce((obj, key) => {
      obj[key] = random[0][key];
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

  randomDrinkType.src = random[0].strDrinkThumb + '/preview';

  randomTitle.textContent = random[0].strDrink;
  randomGlass.textContent = random[0].strGlass;

  for (key in ingredientList) {
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(ingredientList[key]));
    randomIngredients.appendChild(entry);
  }

  randomInstructions.textContent = random[0].strInstructions;
};

displayRandomDrink();

const searchForm = document.getElementById('searchForm');
if (searchForm) {
  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const searchInput = document.getElementById('searchCocktail');
    const searchTerm = searchInput.value.trim();

    if (searchTerm) {
      window.location.href = `/cocktailDisplay?name=${encodeURIComponent(
        searchTerm
      )}`;
    }
  });
}
