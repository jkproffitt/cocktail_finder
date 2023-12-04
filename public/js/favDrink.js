// favDrink.js - temporary file for now
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addFavoriteDrinkForm').addEventListener('submit', async function (e) {
      e.preventDefault();
  
      // Get the value from the input field
      const cocktailId = document.getElementById('cocktailId').value;
  
      // Clear the input field
      document.getElementById('cocktailId').value = '';
  
      try {
        // Send a POST request to the server endpoint with the cocktailId
        const response = await fetch('/api/favDrink', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ cocktail_id: cocktailId }),
        });
  
        if (response.ok) {
          const result = await response.json();
          console.log('Favorite drink added successfully:', result);
          // You can update the UI or take further actions based on the server response
        } else {
          console.error('Failed to add favorite drink:', response.statusText);
          // Handle the error, show a message, or take appropriate actions
        }
      } catch (error) {
        console.error('Error adding favorite drink:', error);
        // Handle the error, show a message, or take appropriate actions
      }
    });
  });
  

