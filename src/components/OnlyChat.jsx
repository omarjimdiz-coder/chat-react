import { useContext } from "react";
import ChatsContext from "../context/ChatsContext";

export const OnlyChat = ({chat}) => {

    const { newMessages, getId } = useContext(ChatsContext);

    const regEx = {
        bold: /[*]+[\s\a-zA-Z0-9]+[*]/,
        cursiva: /[_]+[\s\a-zA-Z0-9]+[_]/,
        tachado: /[~]+[\s\a-zA-Z0-9]+[~]/
    }

    if(regEx.bold.test(chat.lastMessage)){
        return <p className="font-bold">BOLDER</p>
    }
    if(regEx.cursiva.test(chat.lastMessage)){
        return <p className="italic">CURSIVA</p>
    }
    if(regEx.tachado.test(chat.lastMessage)){
        return <p className="line-through">TACHADO</p>
    }
    
    //let palabra = "jdsksd jdskdjs *reprehe nderit* jdksds kflfk jfdkdjfk";
    //Negritas
    //console.log(/[*]+[\s\a-zA-Z0-9]+[*]/.test(palabra));

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
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {chat.lastMessage} 
                </p>
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
