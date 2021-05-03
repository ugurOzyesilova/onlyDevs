import React, { createContext, useContext, useReducer } from 'react'


export const StateContext = createContext(); //Prepare Data layer

export const StateProvider = ({ reducer, initialState, children }) => ( //Higher order Component, StateProvider wrap our App
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext); // For pull something in the Data Layer