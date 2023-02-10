import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dataApi from "../api/dataApi";

const ChatsContext = createContext();

const ChatsProvider = ({children}) => {

    const [chats, setChats] = useState([]);
    const [newMessages, setNewMessages] = useState([]);
    const [message, setMessage] = useState([]);
    const [moreMessages, setMoreMessages] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('token')){
            return navigate("/");
        }
    }, []);

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

            if(id){
                return setInterval(() => {
                    getNewMessageById(id);
                }, 15000);
            }

        } catch (error) {
            console.log(error);
        }
	}

    const getNewMessageById = async(id) => {
        try {
            const {data} = await dataApi.get(`/messages/has-more/${id}`);
            setMoreMessages(data);
        } catch (error) {
            console.log(error);
        }
    }

    const data = { 
        chats, 
        newMessages, 
        getId, 
        message, 
        moreMessages 
    }

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