# **Pill Git It** [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](#isc-license)
---

## Overview
---
**'Pill Git It'** is a webpage application powered by dynamic JavaScript via a "back-end" structure utilizing ```Express.js API``` with a dependency on ```Express-Handlebars```, ```Dotenv```, ```MySQL```, ```Sequelize``` and ```JAWS_DB``` all combined with dynamic ```HTML``` as the "front-end" structure, using ```Heroku CLI``` to run the databse.

**'Pill Git It'** features pill identification function via user shared data in the form of various medication names, types, colors, imprints and images. User are able to create an account in order to view the medication data and share various information in the form of a "blog post" system. Additionally, users have the ability to edit their posts & comment on other user's posts in order to ensure data accuracy and growth.

## Table of Contents
---

  * [Overview](#overview)
  * [User Story](#user-story)
  * [Acceptance Criteria](#acceptance-criteria)
  * [Installation](#installation)
  * [Mock Up](#mock-up)
  * [Deployed Application](#deployed-application)
  * [GitHUB Repository](#github-repository)
  * [Evaluation Guideline](#evaluation-guideline)
  * [Questions](#questions)
  * [License](#isc-license)

## User Story
---

```md
AS A everyday consumer
I WANT to be able to search various data related to medication
SO THAT I can retrieve specific aspects of pills such as type, color, shape & images
```

## Acceptance Criteria
---
> **Note:** The following criteria is used to determine if the standards set for **'Pill Git It'** have been met:

```md
GIVEN a pill identification interface
WHEN I open the web application
THEN I am presented with a landing page with various links to login, a dashboard, signup & modify data
WHEN I click on the link to the dashboard page
THEN I am presented with a page with existing data posts listed in table format, plus a link to a route where I am able to post additional data & edit my own existing contributions
WHEN I enter a pill's name, type, color, shape, imprint & images
THEN a Submit button appears at the bottom of the form page
WHEN I click on the Save button
THEN the new data I have entered is saved and appears in the dashboard table along with the previous entered data
WHEN I click on an existing data in the table I am able to modify it
THEN it will redirect me to the 'Edit' form to change the desired information
WHEN I click on the various dropdown menus to select the appropriate type, color, shape & imprint
THEN I am able to submit the newly entered information & compare it to existing data posted by other users
```
## Installation
----
> **Important:** Once, the source code has been cloned from the repository @https://github.com/AASports89/pill-git-it:

 Enter the following:

 ```
 npm i express
 ```
 -followed by-
 ```
 npm i express-handlebars
 ```
 -followed by-
 ```
 npm i mysql2
 ```
 -followed by-
 ```
 npm i dotenv
 ```
 -followed by-
 ```
 npm i sequelize
 ```
 -followed by-
 ```
 node seed/index.js
 ```
 -followed by-
 ```
 node server.js
 ```
 in the terminal cmd to install & run locally:

## Mock-Up
---
> **Note:**  The following animation shows the application's look and functionality:

> **Application Look:** !["**'Pill Git It'** features numerous pages designed for various medication data storage & modication as demonstrated in the following GIF."](./seeds/images/pill-git-it.gif)

> **Dashboard:** !["The user has access to a dashboard tool that organizes all of the user associated data & renders easy access."](./seeds/images/dashboard.png)

> **Login:** !["Account creation is required to fully access all application features secured via a user entered hash-encrypted password & desired username/email."](./seeds/images/login.png)

> **Sign Up:** !["Any user is able to create a new account via **'Pill Git It'** sign up page, which is user-friendly & intuitive."](./seeds/images/signup.png)

> **Data Modification:** !["**'Pill Git It'** offers the user the ability to access & modify pill related data through various routes."](./seeds/images/data-modification.png)

> **Image Uploads:** !["The user has the ability to upload all types of images whether local or third party via the ```Cloudinary``` Upload Widget."](./seeds/images/upload-image.png)

## Deployed Application
---

https://pill-git-it.herokuapp.com/

## GitHUB Repository
---

https://github.com/AASports89/pill-git-it

## Evaluation Guideline
---

> **Note**: The following evaluation guideline is used to determine if ***'Pill Git It'** meets the requirements for a minimum viable product:
```
INSERT EVALUATION GUIDELINE HERE
```

## Questions
---
> **Note:** For any troubleshooting and/or functionality related questions, please visit my GitHUB @https://github.com/AASports89.

## **ISC License**
---
**Copyright © 2022 - ChillPillz™ 💊**

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---
---