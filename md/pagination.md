Pagination simply means **you don’t return all users at once**.
Instead, you return them **in small pages** (like page 1, page 2, page 3). This prevents heavy database queries and improves performance.

Let’s understand it **step by step with a simple example**.

---

## 1️⃣ Imagine Your Database

Suppose your database has **50 users**.

If the API returns all users:

```
GET /users
```

Response:

```
50 users
```

This is **bad practice** for large systems.

So we use pagination.

---

## 2️⃣ Pagination Idea

We tell the API:

```
Give me only 10 users per page
```

Example request:

```
GET /users?page=1&limit=10
```

Meaning:

```
page = which page
limit = how many users per page
```

---

## 3️⃣ What `skip` Does

Backend calculates:

```js
skip = (page - 1) * limit
```

Example:

| Page | Limit | Skip | Returned Users |
| ---- | ----- | ---- | -------------- |
| 1    | 10    | 0    | user 1–10      |
| 2    | 10    | 10   | user 11–20     |
| 3    | 10    | 20   | user 21–30     |

---

## 4️⃣ How MongoDB Query Works

Example code:

```js
const users = await User.find()
  .skip(skip)
  .limit(limit);
```

Meaning:

```
skip first X users
then return next Y users
```

Example:

```
skip(10)
limit(10)
```

Database ignores first 10 users and returns **11–20**.

---

## 5️⃣ Full Flow of Pagination

```
Client (Postman)
        ↓
GET /users?page=2&limit=10
        ↓
Controller reads query
        ↓
page = 2
limit = 10
        ↓
skip = (2 - 1) * 10 = 10
        ↓
MongoDB query:
User.find().skip(10).limit(10)
        ↓
Returns users 11–20
```

---

## 6️⃣ Example Response

```json
{
  "success": true,
  "users": [ ...10 users... ],
  "totalUsers": 50,
  "totalPages": 5,
  "currentPage": 2
}
```

Explanation:

```
50 users total
10 users per page
50 / 10 = 5 pages
```

---

## 7️⃣ Testing in Postman

Test different pages:

```
GET http://localhost:3000/api/v1/admin/users?page=1&limit=5
GET http://localhost:3000/api/v1/admin/users?page=2&limit=5
GET http://localhost:3000/api/v1/admin/users?page=3&limit=5
```

You will see **different users each time**.

---

## 8️⃣ Visual Example

Database:

```
[1][2][3][4][5][6][7][8][9][10]
[11][12][13][14][15][16][17][18][19][20]
```

Request:

```
page=2
limit=10
```

Result:

```
[11][12][13][14][15][16][17][18][19][20]
```

---

✅ **Key idea**

```
skip → ignore previous records
limit → how many records to return
page → which page you want
```

---

If you want, I can also show you **how big SaaS dashboards implement pagination with search, filtering, and sorting in one query** (very useful for admin panels like your hostel system).
