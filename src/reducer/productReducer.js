const productReducer = (state, action) => {
    // console.log(state)
    switch(action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "MY_API_DATA": 
            const featureData = action.payload.filter((curElement) => {
                return curElement.featured === true;
            });

            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featuredProducts: featureData,
            };
        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        default: 
            return state;
    }
    
}

export default productReducer
