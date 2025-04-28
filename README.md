

# 📚 School Management APIs Documentation
## 📌 Base URL
> `https://school-management-api-assignment-jszw.onrender.com`



### 📖 Endpoints

---

#### ➡️ 1. Add a New School

- **Endpoint:** `/addSchool`
- **Method:** `POST`
- **Description:** Adds a new school record to the database.

#### 🔹 Request Body (JSON):

```json
{
  "name": "School Name",
  "address": "School Address",
  "latitude": 12.9716,
  "longitude": 77.5946
}
```

| Field     | Type    | Required | Description                   |
|-----------|---------|----------|-------------------------------|
| name      | string  | Yes      | Name of the school            |
| address   | string  | Yes      | Address of the school         |
| latitude  | float   | Yes      | Latitude coordinate of school |
| longitude | float   | Yes      | Longitude coordinate of school|

---

#### 🔹 Success Response (201 Created):

```json
{
  "message": "School added successfully",
  "schoolId": 1
}
```

#### 🔹 Error Response (400 Bad Request):

```json
{
  "message": "Invalid input data"
}
```

---

### ➡️ 2. List Schools Sorted by Proximity

- **Endpoint:** `/listSchools`
- **Method:** `GET`
- **Description:** Fetches all schools and sorts them based on the distance from the user's location.

#### 🔹 Query Parameters:

| Parameter | Type   | Required | Description              |
|-----------|--------|----------|--------------------------|
| latitude  | float  | Yes      | User's current latitude   |
| longitude | float  | Yes      | User's current longitude  |

> Example:  
> `GET /listSchools?latitude=12.9716&longitude=77.5946`

---

#### 🔹 Success Response (200 OK):

```json
[
  {
    "id": 1,
    "name": "Greenwood High School",
    "address": "Bangalore",
    "latitude": 12.8875,
    "longitude": 77.6408,
    "distance": "5.12"
  },
  {
    "id": 2,
    "name": "National Public School",
    "address": "Koramangala",
    "latitude": 12.9352,
    "longitude": 77.6245,
    "distance": "3.56"
  }
]
```

- The schools are sorted in ascending order of distance (nearest first).
- `distance` is in **kilometers**, rounded to **2 decimal places**.

---

#### 🔹 Error Response (400 Bad Request):

```json
{
  "message": "Invalid latitude or longitude"
}
```

---

# 📦 Postman Collection
- A Postman collection containing example requests for both endpoints is also available.
- [**Postman Collection Link**](https://logeshwarank-4069748.postman.co/workspace/Logeshwaran-K%27s-Workspace~669cc222-714c-4a12-8f4b-8df7dacd697e/collection/44494264-75687e22-051a-4ddb-955f-b60bda8484ee?action=share&creator=44494264)
---

# 🛠 Tech Stack
- **Backend Framework:** Node.js + Express.js
- **Database:** MySQL (hosted on Railway)
- **Hosting:** Render.com
- **Language:** JavaScript (ES6)

---

# 🧠 Notes
- Proper input validation is performed for all APIs.
- APIs are secured from SQL Injection by using parameterized queries.
- APIs are live and accessible for testing.

---

# ✨ How to Run Locally
```bash
git clone <repo-link>
cd <project-folder>
npm install
npm start
```

> Make sure to configure `.env` file with your MySQL DB credentials.

# 🚀 [API LINK](https://school-management-api-assignment-jszw.onrender.com/)
---

# 🎯 Conclusion

This project demonstrates simple, scalable, and production-ready API design for managing schools with location-based sorting.

---
