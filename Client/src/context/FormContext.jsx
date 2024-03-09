import { createContext, useContext, useState } from "react"

const Context = createContext();

export const FormElementsProvider = ({ children }) => {
    const [userName, setUserName] = useState("");
    const [roomId, setRoomId] = useState("");

    const data = {
        userName, roomId,
        setUserName, setRoomId
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useFormElements = () => useContext(Context)