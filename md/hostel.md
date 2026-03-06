Below are **all fields of the Hostel model**, grouped logically so it’s easy to understand and document for backend development.

---

# 1️⃣ Basic Hostel Information

| Field       | Type          | Description                                      |
| ----------- | ------------- | ------------------------------------------------ |
| name        | String        | Hostel name (default: **Kaveri Livings Hostel**) |
| description | String        | Short description of the hostel                  |
| images      | Array<String> | Hostel image URLs                                |
| isActive    | Boolean       | Hostel active status                             |
| createdAt   | Date          | Automatically added timestamp                    |
| updatedAt   | Date          | Automatically added timestamp                    |

---

# 2️⃣ Location Information

| Field            | Type   | Description                    |
| ---------------- | ------ | ------------------------------ |
| location.address | String | Full hostel address            |
| location.city    | String | City (default: Meerut)         |
| location.state   | String | State (default: Uttar Pradesh) |
| location.country | String | Country (default: India)       |
| location.pincode | String | Postal code                    |

---

# 3️⃣ Contact Information

| Field                | Type   | Description          |
| -------------------- | ------ | -------------------- |
| contactInfo.phone    | String | Hostel contact phone |
| contactInfo.email    | String | Hostel email         |
| contactInfo.whatsapp | String | WhatsApp number      |

---

# 4️⃣ Facilities

| Field      | Type          | Description                    |
| ---------- | ------------- | ------------------------------ |
| facilities | Array<String> | Facilities available in hostel |

Example:

```
WiFi
Laundry
Parking
Water
Security
CCTV
Power Backup
Hot Water
Study Room
```

---

# 5️⃣ Hostel Rules

| Field | Type          | Description  |
| ----- | ------------- | ------------ |
| rules | Array<String> | Hostel rules |

Example:

```
No smoking
No alcohol
Visitors allowed till 8PM
Maintain cleanliness
```

---

# 6️⃣ Pricing Information

| Field                       | Type    | Description                 |
| --------------------------- | ------- | --------------------------- |
| pricing.monthlyRent         | Number  | Monthly hostel rent         |
| pricing.securityDeposit     | Number  | Security deposit            |
| pricing.electricityIncluded | Boolean | Electricity included or not |
| pricing.wifiIncluded        | Boolean | WiFi included               |
| pricing.foodIncluded        | Boolean | Food included               |

---

# 7️⃣ Room Information

| Field                | Type   | Description           |
| -------------------- | ------ | --------------------- |
| rooms.totalRooms     | Number | Total number of rooms |
| rooms.availableRooms | Number | Available rooms       |

### Room Types

| Field                     | Type   | Description                                   |
| ------------------------- | ------ | --------------------------------------------- |
| rooms.roomTypes.type      | String | Room type (single, double, triple, dormitory) |
| rooms.roomTypes.price     | Number | Room price                                    |
| rooms.roomTypes.total     | Number | Total rooms of this type                      |
| rooms.roomTypes.available | Number | Available rooms                               |

---

# 8️⃣ Amenities

| Field     | Type          | Description      |
| --------- | ------------- | ---------------- |
| amenities | Array<String> | Hostel amenities |

Example:

```
CCTV
24/7 Security
Parking
Water Purifier
Common Kitchen
Study Area
```

---

# 9️⃣ Owner Information

| Field         | Type   | Description          |
| ------------- | ------ | -------------------- |
| owner.name    | String | Owner name           |
| owner.contact | String | Owner contact number |

---

# 🔟 System Fields

| Field     | Type | Description           |
| --------- | ---- | --------------------- |
| createdAt | Date | Document created time |
| updatedAt | Date | Document updated time |

These are added automatically using:

```
timestamps: true
```

---

# Final Structure Overview

```
Hostel
│
├── name
├── description
├── images[]
├── isActive
│
├── location
│     ├── address
│     ├── city
│     ├── state
│     ├── country
│     └── pincode
│
├── contactInfo
│     ├── phone
│     ├── email
│     └── whatsapp
│
├── facilities[]
├── rules[]
├── amenities[]
│
├── pricing
│     ├── monthlyRent
│     ├── securityDeposit
│     ├── electricityIncluded
│     ├── wifiIncluded
│     └── foodIncluded
│
├── rooms
│     ├── totalRooms
│     ├── availableRooms
│     └── roomTypes[]
│
├── owner
│     ├── name
│     └── contact
│
├── createdAt
└── updatedAt
```

---

✅ This structure is **good for a single hostel system (non-SaaS)** and works well for:

* hostel landing page
* admin dashboard
* hostel details API
* room management

---

If you want, I can also show **3 very important fields most hostel systems forget (but are critical in production)** that will make your backend **much stronger and scalable.**
