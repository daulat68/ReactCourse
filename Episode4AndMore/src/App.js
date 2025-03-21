import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import GroceryComponent from "./components/GroceryComponent"; 
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

//not using keys (not accaptable) <<<< index as key <<<<<<<<<<<<<<< unique id (best practice)

const GroceryComponent = lazy(() => import("./components/GroceryComponent"));

const AppLayout = () =>{
    const [userName, setUserName] = useState("");
    useEffect(() => {
        const data = {
            name: "Hell",
        };
        setUserName(data.name)
    }, [])
   
    return(
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="app">
            <Header/> 
            <Outlet />
        </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/", 
        element: <AppLayout />, 
        errorElement: <Error />, 
        children: [
            { path: "/", element: <Body /> }, 
            { path: "about", element: <About /> }, 
            { path: "contact", element: <Contact /> }, 
            { path: "grocery", element: <Suspense fallback={<h1>Loading...</h1>}><GroceryComponent /> </Suspense>}, 
            { path: "restaurants/:resId", element: <RestaurantMenu /> }
        ],
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
 