import { useContext, useEffect, useState } from "react";
import ChatsContext from "../context/ChatsContext";

export const OnlyChat = ({chat}) => {

    const { newMessages, getId } = useContext(ChatsContext);
    const [newText, setNewText] = useState('');

    useEffect(() => {
        //Negrita
        if(/[*]+[\s\a-zA-Z0-9]+[*]/.test(chat.lastMessage)){
            const getText = /[*]+[\s\a-zA-Z0-9]+[*]/.exec(chat.lastMessage);
            console.log(getText[0]);
            setNewText(chat.lastMessage.replace(/[*]+[\s\a-zA-Z0-9]+[*]/, `<span class="font-bold">${getText[0].slice(1, -1)}</span>`));
        }
        //Cursiva
        else if(/[_]+[\s\a-zA-Z0-9]+[_]/.test(chat.lastMessage)){
            const getText = /[_]+[\s\a-zA-Z0-9]+[_]/.exec(chat.lastMessage);
            console.log(getText[0]);
            setNewText(chat.lastMessage.replace(/[_]+[\s\a-zA-Z0-9]+[_]/, `<span class="italic">${getText[0].slice(1, -1)}</span>`));
        }
        // Line cruzada
        else if(/[~]+[\s\a-zA-Z0-9]+[~]/.test(chat.lastMessage)){
            const getText = /[~]+[\s\a-zA-Z0-9]+[~]/.exec(chat.lastMessage);
            console.log(getText[0]);
            setNewText(chat.lastMessage.replace(/[~]+[\s\a-zA-Z0-9]+[~]/, `<span class="line-through">${getText[0].slice(1, -1)}</span>`));
        }
        //tachado y negritas
        else if(/[*~][~*]+[\s\a-zA-Z0-9]+[~*][*~]/.test(chat.lastMessage)){
            const getText = /[*~][~*]+[\s\a-zA-Z0-9]+[~*][*~]/.exec(chat.lastMessage);
            console.log(getText[0]);
            setNewText(chat.lastMessage.replace(/[*~][~*]+[\s\a-zA-Z0-9]+[~*][*~]/, `<span class="line-through font-bold">${getText[0].slice(1, -1)}</span>`))
        }
        //cursiva y negritas
        else if(/[*_][_*]+[\s\a-zA-Z0-9]+[_*][*_]/.test(chat.lastMessage)){
            const getText = /[*_][_*]+[\s\a-zA-Z0-9]+[_*][*_]/.exec(chat.lastMessage);
            console.log(getText[0]);
            setNewText(chat.lastMessage.replace(/[*_][_*]+[\s\a-zA-Z0-9]+[_*][*_]/, `<span class="italic font-bold">${getText[0].slice(1, -1)}</span>`))
        }
        //cursiva y tachado
        else if(/[~_][_~]+[\s\a-zA-Z0-9]+[_~][~_]/.test(chat.lastMessage)){
            const getText = /[~_][_~]+[\s\a-zA-Z0-9]+[_~][~_]/.exec(chat.lastMessage);
            console.log(getText[0]);
            setNewText(chat.lastMessage.replace(/[~_][_~]+[\s\a-zA-Z0-9]+[_~][~_]/, `<span class="italic line-through">${getText[0].slice(1, -1)}</span>`))
        }
        //Texto normal
        else{
            setNewText(chat.lastMessage);
        }
    }, [chat]);
;    
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
