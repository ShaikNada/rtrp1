// Nutritionix API integration example
// Replace with your own API credentials from https://developer.nutritionix.com/
const APP_ID = 'YOUR_APP_ID'; // Your Nutritionix App ID
const APP_KEY = 'YOUR_APP_KEY'; // Your Nutritionix API Key

// Base URL for Nutritionix API
const BASE_URL = 'https://api.nutritionix.com/v1_1/';

// Function to search for foods
async function searchFood(query) {
  try {
    const response = await fetch(
      `${BASE_URL}search?q=${encodeURIComponent(query)}&appId=${APP_ID}&appKey=${APP_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Search Results:', data);
    return data;
  } catch (error) {
    console.error('Error searching food:', error);
    return null;
  }
}

// Function to get detailed nutrition info for a specific food item
async function getFoodDetails(foodId) {
  try {
    const response = await fetch(
      `${BASE_URL}item?id=${foodId}&appId=${APP_ID}&appKey=${APP_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Food Details:', data);
    return data;
  } catch (error) {
    console.error('Error fetching food details:', error);
    return null;
  }
}

// Example usage
async function main() {
  // Search for a food item (e.g., "apple")
  const searchQuery = 'apple';
  const searchResults = await searchFood(searchQuery);

  if (searchResults && searchResults.hits && searchResults.hits.length > 0) {
    // Get the first food item's ID
    const foodId = searchResults.hits[0].fields.item_id;

    // Fetch detailed nutrition info for the first result
    const foodDetails = await getFoodDetails(foodId);

    if (foodDetails) {
      console.log(`Nutrition Info for ${foodDetails.item_name}:`);
      console.log(`Calories: ${foodDetails.nf_calories} kcal`);
      console.log(`Protein: ${foodDetails.nf_protein} g`);
      console.log(`Fat: ${foodDetails.nf_total_fat} g`);
      console.log(`Carbs: ${foodDetails.nf_total_carbohydrate} g`);
    }
  } else {
    console.log('No results found for:', searchQuery);
  }
}

// Run the example
main();
