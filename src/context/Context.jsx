import { createContext, useState } from 'react';

export const TimContext = createContext();

export const TimProvider = ({ children }) => {
    const [timId, setTimId] = useState(null);

    return (
        <TimContext.Provider value={{ timId, setTimId }}>
            {children}
        </TimContext.Provider>
    );
};
