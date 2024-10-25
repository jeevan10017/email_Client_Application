<h1 align="center">Email Client Application</h1>

<p align="center">
  <table>
    <tr>
      <td>
        <img src="/frontend/src/assets/Screenshot 2024-10-25 062020.png" alt="Light Mode" width="500" />
      </td>
      <td>
        <img src="/frontend/src/assets/emails-dark.png" alt="Dark Mode" width="500" />
      </td>
    </tr>
  </table>
</p>

<p aligns="center">A single-page web application where users can efficiently manage emails with essential functionalities such as reading and marking emails as favorites. Built using React, Redux Toolkit, and Axios, this application fetches emails from a backend API, displays them in a list format, and provides interactive features for enhanced email management.</p>

<p align="center">
  <img src="https://img.shields.io/badge/frontend-ReactJS-blue?style=for-the-badge&logo=react">
  <img src="https://img.shields.io/badge/backend-NodeJS%20Express-green?style=for-the-badge&logo=node.js">
</p>

---

## Features

- **View Emails** : Display a list of emails fetched from the backend.
- **Read Email** : Fetch and display the detailed body of an individual email.
- **Mark as Read** : Keep track of read/unread emails.
- **Bookmark Emails** : Mark important emails as favorites for easy access.

---

## Technologies Used

| Frontend        | Backend         |
|-----------------|-----------------|
| ReactJS         | Node.js         |
| Redux Toolkit   | Express.js      |
| Axios           | PostgreSQL      |
| React Router    | Prisma ORM      |
| CSS             |                 |

---

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation Steps

1. **Clone the Repository**

    ```bash
    git clone https://github.com/username/email_Client_Application.git
    cd email_Client_Application
    ```

2. **Install Dependencies**
    - Install for both frontend and backend
      
    - For frontend:
      ```bash
      cd frontend
      npm install
      # or
      yarn install
      ```

    - For backend:
      ```bash
      cd backend
      npm install
      # or
      yarn install
      ```

3. **Run the Application**

    - For frontend:
      ```bash
      npm start
      # or
      yarn start
      ```
      The app will run on [http://localhost:3000](http://localhost:3000).

    - For backend:
      ```bash
      node index.js
      ```
      Runs on PORT 5000

---

## Usage

1. **Email List**:
   - Access a list of emails loaded from the backend.
   - Each email displays basic information like sender and subject.

2. **Read Emails**:
   - Click an email to view its full content.
   - This action also marks the email as "read."

3. **Mark as Favorite**:
   - Toggle the bookmark icon to mark/unmark an email as a favorite.
   - Favorite emails are visually distinguished in the list.
  
4. **Search Bar**:
   - search emails with the subject/email address.


---

## API Reference

### Base URL
`https://email-client-application.vercel.app/api/emails`

### Endpoints

- **Get All Emails**
  - **URL**: `/emails`
  - **Method**: `GET`
  - **Response**: List of emails.

- **Get Email by ID**
  - **URL**: `/emails/:id`
  - **Method**: `GET`
  - **Response**: Full details of a specific email.

- **Set Email as Read**
  - **URL**: `/emails/:id/read`
  - **Method**: `PUT`
  - **Response**: Updates the email's "read" status.

- **Toggle Bookmark**
  - **URL**: `/emails/:id/bookmark`
  - **Method**: `PUT`
  - **Response**: Toggles the email's bookmark status.

---

### Functions

1. **getEmails**: Fetches all emails from the API.
2. **getEmailById**: Fetches the content of an email by its ID.
3. **setEmailAsRead**: Marks an email as read.
4. **toggleEmailBookmark**: Toggles the bookmark status of an email.
