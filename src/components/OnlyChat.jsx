import { useContext, useEffect, useState } from "react";
import ChatsContext from "../context/ChatsContext";

export const OnlyChat = ({chat}) => {

    const { newMessages, getId } = useContext(ChatsContext);
    const [newText, setNewText] = useState('');

    // const bolder = chat.lastMessage.replace(/[*]+[\s\a-zA-Z0-9]+[*]/, '<p class="font-extrabold">BOLD</p>')

    let palabra = "jdsksd jdskdjs *reprehe nderit* jdksds kflfk jfdkdjfk";
    //Negritas
    // console.log(/[*]+[\s\a-zA-Z0-9]+[*]/.test(palabra));

    useEffect(() => {
        if(/[*]+[\s\a-zA-Z0-9]+[*]/.test(chat.lastMessage)){
            const getText = /[*]+[\s\a-zA-Z0-9]+[*]/.exec(chat.lastMessage);
            console.log(getText[0]);
            setNewText(chat.lastMessage.replace(/[*]+[\s\a-zA-Z0-9]+[*]/, `<span class="font-bold">${getText[0].slice(1, -1)}</span>`));
        }else if(/[_]+[\s\a-zA-Z0-9]+[_]/.test(chat.lastMessage)){
            const getText = /[_]+[\s\a-zA-Z0-9]+[_]/.exec(chat.lastMessage);
            console.log(getText[0]);
            setNewText(chat.lastMessage.replace(/[_]+[\s\a-zA-Z0-9]+[_]/, `<span class="italic">${getText[0].slice(1, -1)}</span>`));
        }else if(/[~]+[\s\a-zA-Z0-9]+[~]/.test(chat.lastMessage)){
            const getText = /[~]+[\s\a-zA-Z0-9]+[~]/.exec(chat.lastMessage);
            console.log(getText[0]);
            setNewText(chat.lastMessage.replace(/[~]+[\s\a-zA-Z0-9]+[~]/, `<span class="line-through">${getText[0].slice(1, -1)}</span>`));
        }else{
            setNewText(chat.lastMessage);
        }
    }, [chat]);


    //console.log(/[*]+[\s\a-zA-Z0-9]+[*]/.test(chat.lastMessage));


   // const cambio = chat.lastMessage.replace(/[*]+[\s\a-zA-Z0-9]+[*]/, );
    
    //palabra.replace(/[*]+[\s\a-zA-Z0-9]+[*]/, "Cambio");

    //cursiva
    //console.log(/[_]+[\s\a-zA-Z0-9]+[_]/.test(palabra));

    //tachado
    //console.log(/[~]+[\s\a-zA-Z0-9]+[~]/.test(palabra));

    //tachado y negritas
    //console.log(/[*~][~*]+[\s\a-zA-Z0-9]+[~*][*~]/.test(palabra));

    //cursiva y negritas
    //console.log(/[*_][_*]+[\s\a-zA-Z0-9]+[_*][*_]/.test(palabra));

    //cursiva y tachado
    //console.log(/[~_][_~]+[\s\a-zA-Z0-9]+[_~][~_]/.test(palabra));

    
  return (
    <li 
        onClick={ () => getId(chat.id) }
        className="py-3 sm:py-4 cursor-pointer"
    >
        <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
                <img
                    className="w-8 h-8 rounded-full"
                    src={chat.profile}
                    alt="Neil image"
                />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {chat.name}
                </p>
                <p 
                    className="text-sm text-gray-500 truncate dark:text-gray-400" 
                    dangerouslySetInnerHTML={{__html: newText}}
                />
            </div>
            {
                newMessages?.map(message => (
                    <div key={message.userId} >
                    {
                        chat.id === message.userId && <div className="px-2 py-1 text-xs rounded-full font-semibold text-white bg-cyan-600">
                            {message.totalUnread}
                        </div> 
                    }
                    </div>
                ))
            }
            </div>
    </li>
  )
}
