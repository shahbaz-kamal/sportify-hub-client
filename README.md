<div align="center">
  <img height="400" src="https://raw.githubusercontent.com/shahbaz-kamal/sportify-hub-client/refs/heads/main/src/assets/github_banner.jpg"  />
</div>

###

<h1 align="left">Sportify Hub – One-Stop Sports Equipment Store 🤾🏼‍♂️</h1>

###

<p align="left">Sportify Hub is a responsive and feature-rich e-commerce platform for sports enthusiasts. The platform allows users to browse, manage, and purchase high-quality sports equipment while enjoying a seamless user experience. With secure user authentication, dynamic product management, and interactive features like sorting, dark/light mode toggle, and engaging animations, Sportify Hub is designed to cater to diverse sports disciplines and customer needs.</p>

###

## 🔗 Live Link

<!-- <h3 align="left"></h3> -->

###

<p align="left">https://sportify-hub-website.netlify.app/</p>

###

## ✨ Features:

###

1. **Responsive Design**

   - Fully responsive layout built with Tailwind CSS, ensuring a seamless experience on mobile, tablet, and desktop devices.

2. **User Authentication**

   - Secure login and registration using Firebase Authentication with Google Sign-in for quick access.
   - Conditional navigation based on the user's login state, displaying user information or authentication options.

3. **Product Management**

   - Add, update, and delete sports equipment data with features like stock status, customization options, and more.
   - Private routes ensure data privacy and secure access.

4. **Dynamic Home Page**

   - Features a banner slider, product showcase with "View Details" functionality, sports categories, and additional meaningful sections for an engaging user experience.

5. **Equipment Pages**

   - **All Sports Equipment Page**: Displays all products in a table format with sorting functionality by price.
   - **My Equipment List**: Lists equipment added by the logged-in user with options to update or delete items.

6. **View Details Page**

   - Displays full product details in an appealing design on a private route.

7. **Dark/Light Theme Toggle**

   - Users can switch between dark and light modes for a personalized browsing experience.

8. **Interactive Animations**

   - Includes engaging animations using **Lottie React** and **React Awesome Reveal** for a modern touch.

9. **Error Handling**

   - Custom 404 page for non-existing routes and toast notifications for errors and successes.

10. **Loading Spinner**
    - Displays a spinner during data loading to enhance the user experience.

###

## 🛠 Technology Used

###

 <div align="left">
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" height="40" alt="firebase logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="40" alt="mongodb logo"  />
</div>

###

## 💥 Dependencies:

<!-- <h3 align="left"></h3> -->

###

<h3 align="left">"@emotion/react": "^11.13.5",<br>    "dotenv": "^16.4.7",<br>    "firebase": "^11.0.2",<br>    "lottie-react": "^2.4.0",<br>    "react": "^18.3.1",<br>    "react-awesome-reveal": "^4.2.14",<br>    "react-dom": "^18.3.1",<br>    "react-icons": "^5.4.0",<br>    "react-router-dom": "^7.0.2",<br>    "react-stars": "^2.2.5",<br>    "react-tooltip": "^5.28.0",<br>    "sweetalert2": "^11.14.5",<br>    "swiper": "^11.1.15"</h3>

###

## 🔧 Installation Guidline:

<div align="center" style="display: flex; align-items: center; justify-content: center; gap: 10px;">
  <h3>Front End</h3>
  <img src="https://cdn-icons-png.flaticon.com/128/1055/1055666.png" alt="Front End Icon" width="20" height="20" />
</div>


1. First clone the project by running

```bash
  git clone https://github.com/shahbaz-kamal/sportify-hub-client.git
```

2. Change your directory to the cloned folder by

```bash
  cd folder_name
```

3. Run the following to install dependencies:

```bash
npm install
```

4. Run the following to install dependencies:

```bash
npm install
```

5. Create a firebase project and a file named .env.local in your root folder & use your firebase credintials as follows:

```bash
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messagingSenderId
VITE_appId=your_api_id
```

6. Run the following command and open the website locally on port 5173:

```bash
npm run dev
```

###
