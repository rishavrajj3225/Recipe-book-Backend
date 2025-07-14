
# 📖 Recipe-Book API Documentation

## 🧑 User Endpoints

### 🔍 Get User Details
**Endpoint:**  
`GET /api/v1/users/{userId}`

**Description:**  
Retrieves detailed information about a specific user.

**Request:**  
- Method: `GET`  
- Path Parameter:
  - `userId` (string): The user's unique ID.

**Example:**  
`GET http://localhost:8000/api/v1/users/687211f7a2a9ca02b051b1fd`

**Response:**  
```json
{
  "success": true,
  "data": {
    "_id": "",
    "username": "",
    "email": "",
    "password": "",
    "savedRecipes": [],
    "createdAt": "",
    "updatedAt": "",
    "__v": 0
  }
}
```

---

### 📝 Register User
**Endpoint:**  
`POST /api/v1/users/register`

**Request Body (JSON):**
```json
{
  "username": "rishavraij",
  "email": "rishav@example.com",
  "password": "password123"
}
```

---

### 🔐 Login User
**Endpoint:**  
`POST /api/v1/users/login`

**Request Body (JSON):**
```json
{
  "username": "your_username",
  "password": "your_password"
}
```

**Response:**  
- Status: `200 OK`  
- Returns session info or token on successful authentication.

---

## 🍲 Recipe Endpoints

### 📚 Get All Recipes
**Endpoint:**  
`GET /api/v1/recipe`

**Response:**
```json
{
  "statusCode": 0,
  "data": [
    {
      "_id": "",
      "name": "",
      "description": "",
      "ingredients": [""],
      "instructions": "",
      "recipeImg": "",
      "cookingTime": 0,
      "userOwner": "",
      "createdAt": "",
      "updatedAt": "",
      "__v": 0
    }
  ],
  "message": "",
  "success": true
}
```

---

### ➕ Create Recipe
**Endpoint:**  
`POST /api/v1/recipe/create`

**Request Body (JSON):**
```json
{
  "name": "Paneer Butter Masala",
  "ingredients": ["Paneer", "Butter", "Tomato", "Spices"],
  "instructions": "mujhe kya pta",
  "description": "Cook everything together.",
  "recipeImg": "https://...",
  "userOwner": "687211f7a2a9ca02b051b1fd",
  "cookingTime": "10"
}
```

**Response:**
```json
{
  "statusCode": 0,
  "data": {
    "name": "",
    "description": "",
    "ingredients": [""],
    "instructions": "",
    "recipeImg": "",
    "cookingTime": 0,
    "userOwner": "",
    "_id": "",
    "createdAt": "",
    "updatedAt": "",
    "__v": 0
  },
  "message": "",
  "success": true
}
```

---

### ✏️ Update Recipe
**Endpoint:**  
`PUT /api/v1/recipe/update/{recipeId}`

**Request Body (JSON):**
```json
{
  "title": "Updated Recipe Title",
  "description": "New description",
  "ingredients": ["Ingredient1", "Ingredient2"],
  "instructions": "Updated instructions",
  "cookingTime": 15
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Recipe updated successfully",
  "recipe": {
    ...
  }
}
```

---

### 💾 Get Saved Recipe
**Endpoint:**  
`GET /api/v1/recipe/savedRecipes/{recipeId}`

**Description:**  
Fetches a saved recipe's details by its ID.

**Response Example:**
```json
{
  "title": "",
  "ingredients": [],
  "instructions": "",
  "metadata": {}
}
```

---

### 👨‍🍳 Get My Recipes (User Recipes)
**Endpoint:**  
`GET /api/v1/recipe/userRecipes/{userId}`

**Example:**  
`GET http://localhost:8000/api/v1/recipe/userRecipes/687211f7a2a9ca02b051b1fd`

**Response:**
```json
{
  "statusCode": 0,
  "data": [
    {
      "_id": "",
      "name": "",
      "description": "",
      "ingredients": [""],
      "instructions": "",
      "recipeImg": "",
      "cookingTime": 0,
      "userOwner": "",
      "createdAt": "",
      "updatedAt": "",
      "__v": 0
    }
  ],
  "message": "",
  "success": true
}
```

---

## 📝 Notes
- Use proper `Content-Type: application/json` headers.
- Always validate userId and recipeId to prevent invalid requests.
- Use HTTPS in production environments to protect sensitive data.
