**Authentication Endpoints**
----

**Register**
----
Registers one user given a valid information.
* **URL**

  /register

* **Method:**

  `POST`
  **Required:**
  ```
  firtName=[string]
  lastName=[string]
  email=[string]
  password=[string]
  ```
    **Optional:**<br>
  ```
  yearOfBirth=[integer]
  jobTitle=[string]
  company=[string]
  ```
  * **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```json
  {
      "id": 4,
      "firstName": "test",
      "lastName": "test",
      "email": "test@email.com",
      "password": "$2a$10$KSgkHFIVGbuPghS3XXdBku1cnapuAbCI7kU.lAUqBU0WVEvh0LDV.",
      "yearOfBirth": 1976,
      "jobTitle": "test",
      "company": "test"
    }
  
    ```
    **Login**
----
Generates an Authentication token given valid email and password.

* **URL**

  /login

* **Method:**

  `POST`

* **Data Params**

  **Required:**
  ```
  email=[string]
  password=[string]
  ```

  **Example Body**
  ```json
  {
    "email": "test@email.com",
    "password": "password"
  }
  ```
