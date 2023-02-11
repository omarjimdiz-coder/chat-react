import { useContext } from "react";
import ChatsContext from "../context/ChatsContext";
import { OnlyChat } from "./OnlyChat";


export const Chats = () => {

    const { chats } = useContext(ChatsContext);

	return (
		<div className="w-full h-screen max-w-md p-4 bg-white border border-gray-200 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
			<div className="flow-root">
				<ul
					role="list"
					className="divide-y divide-gray-200 dark:divide-gray-700">
                    {
                        chats.map(chat => (
                            <OnlyChat 
                                key={chat.id}
                                chat={chat}
                            />
                        ))
                    }
				</ul>
			</div>
		</div>
	);
};
