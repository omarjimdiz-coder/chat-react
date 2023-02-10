import { createContext, useEffect, useState } from "react";
import dataApi from "../api/dataApi";

const ChatsContext = createContext();

const ChatsProvider = ({children}) => {

    const [chats, setChats] = useState([]);
    const [newMessages, setNewMessages] = useState([]);
    const [message, setMessage] = useState([]);

    useEffect(() => {
        getChats();
        const interval = setInterval(() => {
            getChats();
        }, 30000);

        return () => clearInterval(interval);
    }, [] );

    useEffect(() => {
        getNewMessages();
        const interval = setInterval(() => {
            getNewMessages();
        }, 30000)

        return () => clearInterval(interval);
    }, []);

    const getChats = async() => {
        try{
            const {data} = await dataApi.get('/users/connected');
            setChats(data);
        }catch(err){
            console.log(err);
        }
    }

    const getNewMessages = async() => {
        try{
            const {data} = await dataApi.get('/messages/status');
            setNewMessages(data);
        }catch(err){
            console.log(err);
        }
    }

    const getId = async(id) => {
		try {
            const {data} = await dataApi.get(`/messages/${id}`);
            setMessage(data);
        } catch (error) {
            console.log(error);
        }
	}

    const data = { chats, newMessages, getId, message }

    return(
        <ChatsContext.Provider
             value={data}
        >
            {children}
        </ChatsContext.Provider>
    )
}

export {ChatsProvider};
export default ChatsContext;