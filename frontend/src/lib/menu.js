const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

const headers = {
  'api-key': API_KEY,
  'Content-Type': 'application/json',
};
// Create a new menu item
export async function createMenu(data) {
  try {
    const response = await fetch(`${API_URL}/menu`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating menu:', error);
    throw error;
  }
}

// Get all menu items
export async function getAllMenus() {
  try {
    const url = `${API_URL}/menus`
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching menus:', error);
    throw error;
  }
}

// Get menu item by ID
export async function getMenuById(id) {
  try {
    const response = await fetch(`${API_URL}/menu/${id}`, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching menu with ID ${id}:`, error);
    throw error;
  }
}

// Update a menu item by ID
export async function updateMenu(id, data) {
  console.log(process.env.API_URL)
  try {
    const response = await fetch(`${process.env.API_URL}/menu/${id}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error updating menu with ID ${id}:`, error);
    throw error;
  }
}
