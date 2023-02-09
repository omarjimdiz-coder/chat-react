import { useContext, useState } from "react";
import ChatsContext from "../context/ChatsContext";


export const Chats = () => {

    const { chats, newMessages } = useContext(ChatsContext);

	return (
		<div className="w-full h-screen max-w-md p-4 bg-white border border-gray-200 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
			<div className="flow-root">
				<ul
					role="list"
					className="divide-y divide-gray-200 dark:divide-gray-700">
                    {
                        chats.map(chat => (
                            <li 
                                key={chat.id}
                                className="py-3 sm:py-4"
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
                                                chat.id === message.userId && <div className="p-1 rounded-full text-sm font-semibold text-white bg-cyan-600">
                                                    {message.totalUnread}
                                                </div> 
                                            }
                                            </div>
                                        ))
                                    }
                                    </div>
                            </li>
                        ))
                    }
				</ul>
			</div>
		</div>
	);
};
