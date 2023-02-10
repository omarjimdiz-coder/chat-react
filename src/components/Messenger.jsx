
export const Messenger = ({message}) => {

    //console.log(message);

  return (
        <div className="w-full px-5 overflow-x-auto h-screen">
        {
            message.map((data, i ) => (
                <div 
                    key={i}
                    className="mt-1"
                >
                    <div className={`flex ${data.sendBy === 'me' ? 'justify-end flex-row' : 'justify-end flex-row-reverse'} mb-4`}>
                        <div className={`mr-2 py-3 px-4 ${data.sendBy === 'me' ? 'bg-blue-400 rounded-tr-xl rounded-bl-3xl rounded-tl-3xl' 
                                                                                : 'dark:bg-gray-800 rounded-tl-xl rounded-br-3xl rounded-tr-3xl'} w-1/2 text-white`}>
                            {data.message}
                        </div>
                        <img
                            src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                            className="object-cover h-8 w-8 rounded-full m-1"
                            alt="photo"
                        />
                    </div>
                </div>
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
