import { useContext } from "react"
import ChatsContext from "../context/ChatsContext"
import { Chats } from "./Chats"
import { Messenger } from "./Messenger"
import { Warn } from "./warn"

export const Chat = () => {

  const { message } = useContext(ChatsContext);

  return (
    <div className="flex w-full h-max bg-slate-200">
        <Chats />
        {
          message.length ? <Messenger message={message} /> : <Warn />
        }
    </div>
  )
}
