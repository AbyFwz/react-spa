// LocalStorageContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

const LocalStorageContext = createContext();

export const LocalStorageProvider = ({ children }) => {
    const [storedData, setStoredData] = useState(() => {
        const storedData = localStorage.getItem('myData');
        return storedData ? JSON.parse(storedData) : {};
    });

    const updateLocalStorage = (data) => {
        localStorage.setItem('myData', JSON.stringify(data));
    };

    const clearLocalStorage = () => {
        localStorage.removeItem('myData');
        setStoredData({});
    };

    useEffect(() => {
        if (storedData !== null) {
            updateLocalStorage(storedData);
        }
    }, [storedData]);

    return (
        <LocalStorageContext.Provider value={{ storedData, setStoredData, clearLocalStorage }}>
            {children}
        </LocalStorageContext.Provider>
    );
};

export const useLocalStorage = () => useContext(LocalStorageContext);

export const useSetLocalStorage = () => {
    const { setStoredData } = useContext(LocalStorageContext);

    const setData = (key, value) => {
        setStoredData((prevData) => ({
            ...prevData,
            [key]: value
        }));
    };

    return setData;
};

export const useGetLocalStorage = () => {
    const { storedData } = useContext(LocalStorageContext);

    return storedData;
};

export const useClearLocalStorage = () => {
    const { clearLocalStorage } = useContext(LocalStorageContext);

    return clearLocalStorage;
};
