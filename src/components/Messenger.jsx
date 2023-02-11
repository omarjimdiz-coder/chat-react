import { useContext } from "react";
import ChatsContext from "../context/ChatsContext";
import { Messages } from "./Messages";

export const Messenger = ({message}) => {

    const {moreMessages} = useContext(ChatsContext);
    const mixArrays = [...message, ...moreMessages];

  return (
        <div className="w-full px-5 overflow-x-auto h-screen">
        {
            mixArrays.map((data, i ) => (
                <Messages 
                    key={i}
                    data={data}
                />
            ))
        }
            <div className="py-5">
                <input
                    className="w-full dark:bg-gray-800 py-5 px-3 rounded-xl text-white"
                    type="text"
                    placeholder="type your message here..."
                />
            </div>
        </div>
  )
}
