# Restaurant App

## Description
This is a food ordering application built using **React** and **Parcel**. It fetches restaurant data from an API and displays restaurant menus, categories, and food items. Users can check online status, log in/out, and view their details.

## Features
- 📦 **Built with Parcel** for fast bundling.
- 🔥 **Shimmer UI** for loading placeholders.
- 🌐 **Online Status Indicator**.
- 👤 **User Context API** for global state management.
- 📍 **Dynamic Routing** using React Router.
- 🍽️ **Fetch & Display Restaurant Menus** from an API.
- 📌 **Higher-Order Component (HOC)** for promotional tags.
- 🛒 **Add to Cart Button (UI only)**.

## Tech Stack
- **Frontend:** React, Tailwind CSS
- **Bundler:** Parcel
- **State Management:** React Context API
- **Routing:** React Router DOM

## Installation & Setup
### Clone the repository
```sh
git clone <repo-url>
cd restaurant-app
```

### Install dependencies
```sh
npm install
```

### Start the development server
```sh
npm start
```
Parcel will start the dev server and hot-reload changes.

## Project Structure
```
restaurant-app/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── RestaurantCard.js
│   │   ├── RestaurantMenu.js
│   │   ├── Shimmer.js
│   │   ├── Error.js
│   │   ├── ItemList.js
│   │   ├── RestaurantCategory.js
│   ├── utils/
│   │   ├── constants.js
│   │   ├── useOnlineStatus.js
│   │   ├── useRestaurantMenu.js
│   │   ├── UserContext.js
│   ├── App.js
│   ├── index.js
├── package.json
├── README.md
```

## API Used
- The app fetches restaurant data from an API using `fetch()`.
- **API Endpoint:** `MENU_API + resId`

## Available Scripts
```sh
npm start   # Starts the development server
npm run build   # Creates a production build
npm run serve   # Serves the production build
```

## Future Enhancements
- ✅ Implement Redux for better state management.
- ✅ Add cart functionality.
- ✅ Improve UI animations.

## Visit Site
https://daulat68.github.io/ReactCourse/
