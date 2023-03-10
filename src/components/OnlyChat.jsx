import { useContext, useEffect, useState } from "react";
import ChatsContext from "../context/ChatsContext";
import { pattern } from "../helpers/pattern";

export const OnlyChat = ({chat}) => {

    const { newMessages, getId } = useContext(ChatsContext);
    const [newText, setNewText] = useState('');

    useEffect(() => {
        pattern(chat, setNewText);
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
