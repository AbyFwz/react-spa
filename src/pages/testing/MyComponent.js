import React from 'react';
import { useClearLocalStorage, useGetLocalStorage, useLocalStorage, useSetLocalStorage } from '../../contexts/LocalStorageContext';

const MyComponent = () => {
    const { storedData } = useLocalStorage();
    const setStoredData = useSetLocalStorage();
    const storedDataFromHook = useGetLocalStorage('myKey');
    const clearLocalStorage = useClearLocalStorage();

    const handleButtonClick = () => {
        // Update the stored data
         // Update the stored data with multiple keys
        setStoredData('key1', 'value1');
        setStoredData('key2', 'value2');
        setStoredData('key3', 'value3');
        setStoredData('1', '2');
    };

    const handleClearLocalStorage = () => {
        clearLocalStorage();
    };

    return (
        <div>
            <p>Stored Data: {JSON.stringify(storedData)}</p>
            <p>Stored Data from hook: {JSON.stringify(storedDataFromHook)}</p>
            <button onClick={handleButtonClick}>Update Data</button>
            <button onClick={handleClearLocalStorage}>Clear Data</button>
        </div>
    );
};

export default MyComponent;
