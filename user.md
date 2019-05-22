**User Endpoints**
----

**get all Users**
* **URL**

  /api/users

* **Method:**

  `GET`

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
  
**Get all user events**

* **URL**

  /api/users/:id/events

* **Method:**

  `GET`

  * **Success Response:**

  * **Code:** 200 <br />
  ```
    **Content:**
```{
  "id": 1,
  "firstName": "John",
  "lastName": "Sparks",
  "email": "john.sparks@email.com",
  "password": "password",
  "yearOfBirth": 1993,
  "jobTitle": "HR",
  "company": "Apple",
  "events": [
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
    }
  ]
}
```

