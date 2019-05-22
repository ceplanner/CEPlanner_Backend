**Event Endpoints**
----

**Get all events**

* **URL**

  /api/events

* **Method:**

  `GET`

  * **Success Response:**

  * **Code:** 200 <br />
  ```
    **Content:**
    [
  {
    "id": 7,
    "eventName": "End Of Year Party",
    "eventType": "Celebration",
    "eventDate": "03/12/2019",
    "eventDescription": "Celebrating another year of success",
    "eventBudget": "1000",
    "location": "room 220",
    "agenda": "agenda for event",
    "user_id": 1
  },
  {
    "id": 8,
    "eventName": "Corporate Welcoming ",
    "eventType": "Casual",
    "eventDate": "07/23/2019",
    "eventDescription": "Casual event to introduce new members",
    "eventBudget": "321",
    "location": "room 130",
    "agenda": "agenda for event",
    "user_id": 1
  },
  {
    "id": 9,
    "eventName": "Bake Sale",
    "eventType": "Fundraising",
    "eventDate": "01/13/2019",
    "eventDescription": "selling baked good for a great cause",
    "eventBudget": "543",
    "location": "room 130",
    "agenda": "agenda for event",
    "user_id": 1
  },
]


    
----

**Post new event**
* **URL**

  /api/events

* **Method:**

  `POST`
```
  **Required:**
 eventName=[string]
 eventType=[string]
 eventDate=[string]
 eventDescription=[string]
 eventBudget=[string]
 location=[string]
 agenda=[string]
 user_id=[integer]
  ```

  **Example Body**
  ```json
  
{
  "firstName": "test",
  "lastName": "test",
  "email": "test@email.com",
  "password": "password",
  "yearOfBirth": 1976,
  "jobTitle": "test",
  "company": "test",
  user_id: 1
}
  
  ```
  ----
  **Update Events**

* **URL**

  /api/events/:id

* **Method:**

  `PUT`

  * **Success Response:**

  * **Code:** 200 <br />
  ```
    **Content:**
  {
    "id": 7,
    "eventName": "End Of Year Party",
    "eventType": "Celebration",
    "eventDate": "03/12/2019",
    "eventDescription": "Celebrating another year of success",
    "eventBudget": "1000",
    "location": "room 220",
    "agenda": "agenda for event",
    "user_id": 1
  },
----

**Delete event**
* **URL**

  /api/events/:id

* **Method:**

  `DELETE`

  **Example Body**
```No Response```

  
