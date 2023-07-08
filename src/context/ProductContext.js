import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    // WE CAN ALSO MAKE API CALL HERE TO GET THE DATA FROM API
    const getProducts = async (url) => {
        // const response = await fetch(url);
        // const data = await response.json();
        dispatch({ type: "SET_LOADING" });
        try {
            const response = await axios.get(url);
            const products = await response.data;
            dispatch({type:"MY_API_DATA", payload: products});
        } catch (error) {
            dispatch({type:"API_ERROR"});
        }
    }

    useEffect(() => {
        getProducts(API);
    }, []);

    return <AppContext.Provider value={{ ...state }}>
                {children}
            </AppContext.Provider>
}

//Custom hook
const useGlobalProductContext = () => {
    return useContext(AppContext);
}

export {AppProvider, AppContext, useGlobalProductContext};