# JobSearch Web Application Documentation

![logo](https://www.dice.com/binaries/medium/content/gallery/dice/insights/2015/06/Screen-Shot-2015-06-22-at-10.41.14-AM.png)

🗂️ **JobSearch** is a web platform for employment and management aimed at facilitating interaction between candidates
and managers. The project is a product of SoftServe's project lab, where we focus on learning and improving our skills.

[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Material Design](https://img.shields.io/badge/Material_Design-757575?style=flat&logo=material-design&logoColor=white)](https://material.io/)
[![Kotlin](https://img.shields.io/badge/Kotlin-007396?style=flat&logo=kotlin&logoColor=white)](https://kotlinlang.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Spring](https://img.shields.io/badge/Spring_Framework-6DB33F?style=flat&logo=spring&logoColor=white)](https://spring.io/)
[![Pull request](https://img.shields.io/badge/PRs-welcome-success?style=flat)](https://github.com/DonSaul/CLKOTLINPROJECT/pulls)
[![RESTful API](https://img.shields.io/badge/RESTful_API-005571?style=flat&logo=http&logoColor=white)](https://restfulapi.net/)

## Features

### User Authentication and Authorization:

| Feature                                                               | Description                                                                         |
|-----------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| Users can register an account                                         | 📝 Users provide Last Name, First Name, password, and email to create an account.   |
| Users can log in                                                      | 🔑 Users can log in using their credentials.                                        |
| Different roles (candidate, manager, admin) with specific permissions | 🛡️ Supports roles with specific permissions such as candidate, manager, and admin. |
| Managers can create new user accounts with specific roles             | 🧾 Managers have the ability to create new user accounts with predefined roles.     |

### Candidate Features:

| Feature                                   | Description                                                                                                                            |
|-------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| Candidates can create and manage their CV | 📄 Candidates can add and update information about their years of experience, projects, education, and salary expectation in their CV. |
| Candidates can search for vacancies       | 🔍 Candidates can search for job vacancies based on job family, years of experience, and salary expectation.                           |
| Candidates can apply to vacancies         | 📋 Candidates can apply to vacancies that match their skills and expectations.                                                         |

### Manager Features:

| Feature                                             | Description                                                                                                                                  |
|-----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Managers can create and manage vacancies            | 📋 Managers can create and manage job vacancies, specifying job family, company name, description, required years of experience, and salary. |
| Managers can search for candidates                  | 🔍 Managers can search for candidates based on filters such as years of experience, job family, and salary expectation.                      |
| Managers can send vacancy invitations to candidates | 💌 Managers can invite candidates who match the job requirements to apply for vacancies.                                                     |

### Communication Features:

| Feature                                         | Description                                                                                                  |
|-------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| Users can communicate with other users          | 💬 Users can send and receive messages within the app.                                                       |
| Users receive email notifications               | 📧 Users receive email notifications for important actions such as new vacancies, invitations, and messages. |
| Users can respond to messages and notifications | ✉️ Users can respond to messages and notifications directly from their email.                                |

### Integration and Testing:

| Feature                     | Description                                                                         |
|-----------------------------|-------------------------------------------------------------------------------------|
| Seamless integration        | 🔄 All features are seamlessly integrated to ensure they work together effectively. |
| Thorough testing            | 🕵️‍♂️ Thorough testing is conducted to identify and fix any bugs or issues.        |
| Optimization and refinement | 🛠️ The codebase is optimized and refined for better performance and reliability.   |

### Documentation and Finalization:

| Feature                | Description                                                                                            |
|------------------------|--------------------------------------------------------------------------------------------------------|
| Thorough documentation | 📚 The codebase is thoroughly documented, including APIs and usage instructions, for future reference. |
| Finalization           | 🎉 Any remaining tasks or bug fixes are finalized before deployment.                                   |
| Production readiness   | 🚀 The project is prepared for deployment and ensured to be production-ready.                          |

## Links

- [Documentation](#documentation)
- [Demo](https://google.com)

## Discussion

Please visit our [issues discussions](https://github.com/DonSaul/CLKOTLINPROJECT/issues) for general questions. **Issues
are for bug reports and feature requests only.**

## Contributors

[<img src="https://github.com/jamirou.png?size=70" alt="jamirou" style="border-radius: 50%;">](https://github.com/jamirou)
[<img src="https://github.com/s0alken.png?size=70" alt="s0alken" style="border-radius: 50%;">](https://github.com/s0alken)
[<img src="https://github.com/Santisu.png?size=70" alt="Santisu" style="border-radius: 50%;">](https://github.com/Santisu)
[<img src="https://github.com/RafaUribeG.png?size=70" alt="RafaUribeG" style="border-radius: 50%;">](https://github.com/RafaUribeG)
[<img src="https://github.com/ndevia.png?size=70" alt="ndevia" style="border-radius: 50%;">](https://github.com/ndevia)
[<img src="https://github.com/Gabe239.png?size=70" alt="Gabe239" style="border-radius: 50%;">](https://github.com/Gabe239)
[<img src="https://github.com/EdgarAraya.png?size=70" alt="EdgarAraya" style="border-radius: 50%;">](https://github.com/EdgarAraya)

## Acknowledgements

[<img src="https://github.com/DonSaul.png?size=70" alt="DonSaul" style="border-radius: 50%;">](https://github.com/DonSaul)

We would like to express our sincere gratitude to [**@DonSaul**](https://github.com/DonSaul) for his invaluable guidance
and mentorship throughout the development of this project. His expertise, insights, and support have been instrumental
in shaping our journey and helping us overcome various challenges.

Thank you, [**@DonSaul**](https://github.com/DonSaul), for being an exceptional mentor and for believing in our
potential.

_______________________________________________

## *Documentation*

## Table of Contents

1. [Getting Started](#getting-started) <br>
   2.2. [Prerequisites](#prerequisites) <br>
   2.3. [Initial Setup and Configuration](#initial-setup-and-configuration)
2. [Basic Usage](#basic-usage) <br>
   2.1. [Basic Operations and Examples as a Candidate](#basic-operations-and-examples-as-a-candidate) <br>
   2.2. [Basic Operations and Examples as a Manager](#basic-operations-and-examples-as-a-manager)
3. [Project Architecture](#project-architecture) <br>
   3.1. [API restful](#api-restful) <br>
4. [Security Features and Best Practices](#security-features-and-best-practices)
5. [Advanced Functionalities](#advanced-functionalities) <br>
   5.1. [Data Query](#data-query) <br>
   5.2. [Communication](#communication-between-frontend-and-backend) <br>
   5.3. [Frontend files](#frontend-helper-files) <br>
   5.4. [Router files](#router-files) <br>
   5.5. [ApplicationController](#application-controller) <br>
   5.6. [ConversationController](#conversation-controller) <br>
   5.7. [ProfileController](#profile-controller) <br>
   5.8. [InvitationController](#invitation-controller) <br>

--------------------------------------------------------

## Getting Started

### Prerequisites

Ensure you have the following installed:

| Technology          | Installation/Dependency                                       | Version |
|---------------------|---------------------------------------------------------------|---------|
| SpringFramework     | [Spring initializr](https://start.spring.io/)                 | 3.2.2   |
| React               | [React Installation](https://es.react.dev/learn/installation) | 9.6.2   |
| Spring Security     | [Add Dependency SpringSecurity](https://start.spring.io/)     |         |
| Kotlin language     | [Kotlin Installation](https://oregoom.com/kotlin/instalar/)   |         |
| PostgreSQL          | [Add Dependency PostgreSQL Driver](https://start.spring.io/)  |         |
| JWT(Json web token) |                                                               | 0.9.1   |
| JVM                 |                                                               | 1.9.22  |
| Docker              | [Docker download](https://www.docker.com/)                    |         |

### Initial Setup and Configuration

1. Clone the repository. `git clone https://github.com/DonSaul/CLKOTLINPROJECT.git`
2. Install dependencies. [follow the Prerequisites step](#prerequisites)
3. Configure application properties.
4. Run the application.

### Setting up the docker database

1. Clone the repository git clone `https://github.com/EdgarAraya/docker-postgres`
2. Follow the instructions from the README.md in the repository

--------------------------------------------------------

## Basic Usage

### Basic Operations and examples as a Candidate

| Operation                      | Description                                                                                                                         | Example                                                                                                 |
|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| **Candidate Basic Operations** |                                                                                                                                     |                                                                                                         |
| Candidate Registration         | Register as a candidate in the system.                                                                                              |                                                                                                         |
| Candidate Login                | Log in to the system as a registered candidate.                                                                                     |                                                                                                         |
| Search for Vacancies           | Search for job vacancies based on criteria such as job family, years of experience, and salary expectation.                         | Search for vacancies in 'IT' with '5+ years exp.' and '70k+ salary'.                                    |
| Job Filtering                  | Filter job vacancies based on criteria such as job family, years of experience, and salary expectation.                             | Filter vacancies by 'Engineering' with '3-5 years exp.' and '80k-100k salary'.                          |
| Create and Manage CV           | Create and manage the candidate's CV, including details about experience, projects, education, and salary expectation.              | Create a CV with '3 years exp.', 'completed projects', 'Master's degree', and '80k salary expectation'. |
| Apply to Vacancies             | Apply to job vacancies that match the candidate's skills and expectations.                                                          | Apply to 'Software Engineer' vacancy with '5+ years exp.' and '90k salary expectation'.                 |
| Communication with Manager     | Communicate with the hiring manager regarding job applications or other inquiries.                                                  | Contact manager of 'Engineering Manager' position for further details.                                  |
| **Manager Basic Operations**   |                                                                                                                                     |                                                                                                         |
| Create and Manage Vacancies    | Create and manage job vacancies, specifying details such as job family, company name, description, required experience, and salary. | Create a vacancy for 'Software Developer' at 'XYZ Corp' with '5+ years exp.' and '100k salary'.         |
| Search for Candidates          | Search for candidates based on filters such as years of experience, job family, and salary expectation.                             | Search for candidates with '10+ years exp.' in 'Finance' with '100k+ salary expectation'.               |
| Send Vacancy Invitations       | Send invitations to potential candidates who match the job requirements.                                                            | Send invitation to 'Java Developer' with '5+ years exp.' and '90k salary expectation'.                  |

## Project Architecture

### API restful

```
| Backend            | Frontend                   |
| ------------------ | -------------------------- |
| jobsearch/         | /fronted/job-search/       |
| ├── .gradle        | ├── node_modules           |
| ├── .idea          | ├── public                 |
| ├── build          | ├── src                    |
| ├── gradle         | │   ├── api                |
| ├── out            | │   ├── assets             |
| └── src/           | │   ├── components         |
| ├── main/          | │   ├── helpers            |
| └── kotlin/        | │   ├── hooks              |
| └── com.jobsearch/ | │   ├── pages              |
| ├── config         | │   ├── router             |
| ├── controller     | │   │   ├── paths.js       |
| ├── dto            | │   │   ├── RequireAuth.js |
| ├── entity         | │   │   └── router.js      |
| ├── exception      | │   ├── App.css            |
| ├── interceptor    | │   ├── App.js             |
| ├── jwt            | │   ├── App.test.js        |
| ├── repository     | │   ├── index.css          |
| └── response       | │   ├── index.js           |
| ├── resources      | │   ├── logo.svg           |
| └── test           | │   ├── reportWebVitals.js |
|                    | │   └── setupTests.js      |

```

Organized architecture for separation of concerns, such as:

| Aspect                     | Description                                                                                                                                                                                                                                                                   |
|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Separation of Concerns** | API Rest for the structure. This separation allows for better organization of code and clear distinction between different aspects of the application logic, making it easier to maintain and update.                                                                         |
| **Scalability**            | The API Rest architecture facilitates scalability by enabling developers to modify or extend one component without affecting the others. This modular approach allows for the addition of new features or changes to existing ones without disrupting the entire application. |
| **Code Reusability**       | The API Rest architecture promotes code reusability through the use of separate components. For example, business logic encapsulated in the Controller can be reused across different views, enhancing development efficiency and reducing duplication of code.               |
| **Testability**            | With REST, each component can be tested independently, leading to more effective testing strategies. Unit tests can be written for the Controller logic, while integration tests can be performed on the interaction between the Model, View, and Controller components.      |

### Security Features and Best Practices

Robust security measures:

- Authentication
- Authorization
- Encryption
- Input validation

#### Related Classes

1. ### Work Order Filtering

Advanced filtering options for job seekers.

2. ### Search Technician By Name

Functionality to search for technicians.

3. ### Report Generation

Analytics and decision-making reports.

4. ### Testing

Comprehensive testing suite.

5. ### Login
#### Authentication and Security Documentation

This document outlines the authentication and security mechanisms implemented in the JobSearch web application.

### Overview

The `CandidateDTO` represents the details of a candidate.

### AuthService 

The `AuthService` class handles user authentication and registration.

Check the class:

```kotlin
@Service
class AuthService(
   private val userRepository: UserRepository,
   val userService: UserService,
) : UserDetailsService {
   @Autowired
   private lateinit var passwordEncoder: PasswordEncoder
   @Autowired
   private lateinit var jwtProvider: JwtProvider
   fun register(userDto: UserDTO) {
      userService.createUser(userDto)
   }
}
```
### JwtProvider
The JwtProvider class generates and validates JWT tokens.
```kotlin
@Component
class JwtProvider {
   @Value("\${jwt.secret}")
   private val jwtSecret: String? = null

   @Value("\${jwt.expiration}")
   private val jwtExpiration: Int? = null

   fun generateJwtToken(userDetails: UserDetails): String {
      val claims = Jwts.claims().setSubject(userDetails.username)
      claims["roles"] = userDetails.authorities
      return Jwts.builder()
         .setClaims(claims)
         .setIssuedAt(Date())
         .setExpiration(Date(System.currentTimeMillis() + jwtExpiration!! * 1000))
         .signWith(SignatureAlgorithm.HS512, jwtSecret)
         .compact()
   }
   //we also implement validateJwtToken for the validation and getUserNameFromJwtToken 
   //get the name based on the token
}
```

### JwtAuthenticationFilter
The JwtAuthenticationFilter intercepts HTTP requests and validates JWT tokens.
```kotlin
@Component
class JwtAuthenticationFilter(
    private val jwtProvider: JwtProvider,
    private val userDetailsService: UserDetailsService,
    private val userRepository: UserRepository,
) : OncePerRequestFilter() {
    // Method for filtering and validating JWT tokens in HTTP requests
}
```
### AuthInterceptor
The AuthInterceptor class intercepts HTTP requests and extracts JWT tokens.
```kotlin
@Component
class AuthInterceptor : HandlerInterceptor {
    // Method for extracting JWT tokens from HTTP requests
}
```

### AuthController
The AuthController class handles user registration and authentication endpoints.
```kotlin
@RestController
@RequestMapping("/api/v1/auth")
class AuthController(private val authService: AuthService) {
    // Methods for registering and authenticating users
}
```

### SecurityConfig
The SecurityConfig class configures security settings and filters for HTTP requests.
```kotlin
@Configuration
@EnableWebSecurity
@EnableMethodSecurity(securedEnabled = true, jsr250Enabled = true, prePostEnabled = true)
class SecurityConfig(private val userDetailsService: UserDetailsService) {
    // Configuration for security filters and authentication manager
}
```
### WebConfig
The WebConfig class configures CORS settings for HTTP requests.
```kotlin
@Configuration
@EnableWebMvc
class WebConfig() : WebMvcConfigurer {
    // Configuration for Cross-Origin Resource Sharing (CORS)
}
```

### Security Features

- **Password Encryption**: User passwords are encrypted using a password encoder to enhance security.
- **Token-Based Authentication**: JWT tokens are used for authentication, providing a stateless and secure authentication mechanism.
- **Token Validation**: JWT tokens are validated to ensure their authenticity and prevent tampering.
- **Authorization**: Access to protected resources is restricted based on user roles and permissions.

### Implementation Details

- **User Registration**: Users can register for an account using the `/api/v1/auth/register` endpoint.
- **User Authentication**: Users can authenticate using their credentials (username and password) via the `/api/v1/auth/login` endpoint.
- **Token Generation**: Upon successful authentication, a JWT token is generated and returned to the client for subsequent requests.
- **Token Validation**: JWT tokens are validated before granting access to protected resources, ensuring their integrity.
- **User Role-Based Access Control**: Access to different endpoints is restricted based on user roles (e.g., candidate, manager, administrator).





6. ### Data Query

Efficient database querying.

The following tables are part of the database schema:

| Table Name         | Description                                                        |
|--------------------|--------------------------------------------------------------------|
| application_status | Stores various application statuses such as "Not Applied"          |
|                    | and "Accepted".                                                    |
| applications       | Represents job applications submitted by candidates.               |
| chat_messages      | Stores chat messages exchanged between users.                      |
| conversations      | Manages conversations between users, containing multiple messages. |
| invitations        | Stores invitations sent to candidates to apply to vacancies.       |
| cvs                | Contains CV (curriculum vitae) information of users.               |
| interests          | Tracks user interests in specific job families.                    |
| job_family         | Represents different job categories or families.                   |
| notification       | Stores notifications sent to users regarding vacancies, messages,  |
|                    | invitations, etc.                                                  |
| notification_types | Defines types of notifications such as "vacancies" and "messages". |
| person             | Contains basic personal information of users.                      |
| project            | Represents projects listed in users' CVs.                          |
| roles              | Stores user roles such as "candidate", "manager", and "admin".     |
| skill              | Stores various skills that users possess.                          |
| users              | Stores user account information including email, password, etc.    |
| vacancy            | Represents job vacancies posted by companies.                      |

--------------------------------------------------------

### Communication between Frontend and Backend

The frontend and backend of JobSearch communicate via HTTP requests using the RESTful protocol. When a user interacts
with the frontend user interface, requests are sent to the backend to perform operations such as logging in, registering
a user, searching for vacancies, creating CVs, etc.

This communication occurs through files in the hooks folder, as well with files like paths.js, **RequireAuth.js**, **router.js**,  where endpoints and
authentication mechanisms are defined and utilized. The backend processes these requests and returns corresponding
responses, which the frontend utilizes to update the user interface and display information to the user. The
communication between the frontend and backend is based on a set of RESTful endpoints defined in the backend, which the
frontend utilizes to perform various operations.

--------------------------------------------------------
### Basic frontend layout

The frontend layout is structured around three primary elements: the toolbar, the content area, and the footer. Navigation primarily occurs through the toolbar located at the top of the page. 

- **Toolbar**: The toolbar dynamically adjusts based on the user's role. If the user is not logged in, only the login and register tabs are visible. Once logged in, additional navigation options become available, customized based on the user's role.

- **Content Area**: The content area adapts dynamically based on the page the user is visiting. It displays relevant information, forms, or interactive elements corresponding to the selected navigation option.

- **Footer**: The footer section provides additional information, links, or acknowledgments relevant to the application.

This layout design ensures a user-friendly experience by providing intuitive navigation and context-aware content presentation.


### Frontend Helper Files

The frontend helper files in the `/helpers` directory provide essential functionalities and constants used throughout
the application. Here's an overview:

| File           | Purpose                                                                                               |
|----------------|-------------------------------------------------------------------------------------------------------|
| constants.js   | Defines constants such as the authentication token name (`AUTH_TOKEN_NAME`) and user roles (`ROLES`). |
| endpoints.js   | Contains endpoint URLs for various API requests used in the application.                              |
| queryClient.js | Creates a React Query Client instance used for data fetching and caching.                             |
| tokenHelper.js | Provides helper functions to decode and extract information from authentication tokens.               |
| userContext.js | Defines the authentication context and provides hooks to access user authentication information.      |

These helper files play a crucial role in managing authentication, API communication, and user context within the
frontend application.

--------------------------------------------------------

### Router Files

The router files in the `/router` directory define the application's navigation and route authentication logic. Here's a
breakdown:

| File           | Purpose                                                                                                 |
|----------------|---------------------------------------------------------------------------------------------------------|
| paths.js       | Defines path constants for different routes within the application.                                     |
| RequireAuth.js | Implements a component to ensure route access is restricted to authenticated users with specific roles. |
| router.js      | Configures the application routes using React Router, including route guarding and role-based access.   |

These router files ensure proper navigation and access control within the frontend application, enhancing overall user
experience and security.

--------------------------------------------------------

### Hooks

In our project, we utilize React Query for handling data fetching, caching, and synchronization. React Query provides a powerful solution for managing server state in React applications.

React Query hooks, such as useQuery and useMutation, allow us to easily fetch and mutate data from our backend API endpoints. These hooks handle caching, automatic refetching, and error handling, providing a seamless data fetching experience for our users.

- Hooks Folder: The React Query hooks are primarily used in components that require data fetching or mutation capabilities. They are located in the /hooks directory of our project.

Some examples of these hooks:

| Hook            | Function                                                     |
|-----------------|--------------------------------------------------------------|
| useLogin        | Handles user authentication and login functionality.          |
| useRegister     | Manages user registration process.                            |
| useGetVacancies | Fetches vacancies data from the backend API.                 |


By leveraging React Query, we ensure efficient and optimized data fetching, resulting in improved performance and user experience in our frontend application.

--------------------------------------------------------

### ApplicationController

This controller handles requests related to applications in the backend of the application.

#### Endpoints

| HTTP Method | URL                        | Description                           | Input Parameters                        | Response Codes                                                                                                        |
|-------------|----------------------------|---------------------------------------|-----------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| POST        | `/api/v1/application`      | Creates a new application.            | `ApplicationDTO` Object                 | `201 Created`: If the application is successfully created.<br>Other possible error codes.                             |
| GET         | `/api/v1/application/{id}` | Retrieves an application by its ID.   | Application ID                          | `200 OK`: If the application is found and returned successfully.<br>`404 Not Found`: If the application is not found. |
| GET         | `/api/v1/application`      | Retrieves all applications.           | -                                       | `200 OK`: If applications are retrieved successfully.<br>Other possible error codes.                                  |
| PUT         | `/api/v1/application/{id}` | Updates the status of an application. | Application ID, `ApplicationDTO` Object | `200 OK`: If the application is updated successfully.<br>Other possible error codes.                                  |
| DELETE      | `/api/v1/application/{id}` | Deletes an application.               | Application ID                          | `204 No Content`: If the application is deleted successfully.<br>Other possible error codes.                          |

- All endpoints are protected with authorization.
- Users with the 'manager' role can access endpoints to update and delete applications.


### ConversationController

This controller handles requests related to the messaging in the backend of the application.

#### Endpoints

| HTTP Method | URL                        | Description                           | Input Parameters                        | Response Codes                                                                                                        |
|-------------|----------------------------|---------------------------------------|-----------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| POST        | `/api/v1/conversation/send-message`      | Sends a message to another user.            | `ChatMessageRequestDTO` Object                 | `200 OK`: If the message is sent successfully                             |
| GET         | `/api/v1/conversation/user/all` | Retrieves the conversations for the current user  | -                      | `200 OK`: If the conversations are retrieved.
| GET         | `/api/v1/conversation/messages`      | Retrieves all the messages of the current conversation of the user | email:String                                     | `200 OK`: If applications are retrieved successfully.<br>Other possible error codes.                                  |

- All endpoints are protected with authorization.


### ProfileController

This controller handles requests related to the user profile in the backend of the application.

#### Endpoints

| HTTP Method | URL                        | Description                           | Input Parameters                        | Response Codes                                                                                                        |
|-------------|----------------------------|---------------------------------------|-----------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| GET        | `/api/v1/profiles/my-profile`      | Retieves the current user's profile.            | `ProfileDTO`                 | `200 OK`: If profile information is retrieved successfully                             |
| GET         | `/api/v1/profiles/{id}` | Retrieves the profile of other user  | `User ID`                      | `200 OK`: If the profile information is retrieved.
| PUT         | `/api/v1/profiles/{id}`      | Updates the user's first name and last name | `User ID, ProfileDTO`                                     | `200 OK`: If information is updated successfully.                                 |

- All endpoints are protected with authorization.


### InvitationController

This controller handles requests related to the invitations in the backend of the application.

#### Endpoints

| HTTP Method | URL                        | Description                           | Input Parameters                        | Response Codes                                                                                                        |
|-------------|----------------------------|---------------------------------------|-----------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| POST       | `/api/v1/invitations`      | Sends an invitation from current manager to a candidate.            | `InvitationDTO`                 | `201 CREATED`: If the initation is created successfully                             |

- All endpoints are protected with authorization.
- Users with the 'manager' role can access endpoints to send invitations.
