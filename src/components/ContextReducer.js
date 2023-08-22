import React, { useReducer, useContext, createContext } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            console.log("ADD action dispatched with:", action);

            return [...state, { id: action.id, name: action.fname, price: action.price, img: action.imgsource }]
        case "REMOVE":
            console.log("REMOVE action dispatched with:", action);
            let newArr = [...state]
            return state.filter((food)=>food.id !== action.id);
        case "DROP":
            let empArray = []
            return empArray
        case "UPDATE":
            let arr = [...state]
            arr.find((food, index) => {
                if (food.id === action.id) {
                    console.log(action.price + food.price)
                    arr[index] = { ...food, price: action.price + food.price }
                }
                return arr
            })
            return arr
        default:
            console.log("Unhandled action type:", action.type);
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);