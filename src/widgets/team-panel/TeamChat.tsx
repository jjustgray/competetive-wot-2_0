import React from 'react';

export const TeamChat: React.FC = () => {
    return (
        <div className="team-chat-container shadow-md">
            <h1 className="text-lg font-semibold">Chat</h1>
            <div className="chat-messages mt-4 h-48 overflow-y-auto bg-gray-800 p-2 rounded">
            </div>
            <div className="chat-input mt-4 flex">
                <input
                    type="text"
                    placeholder="Введите сообщение..."
                    className="flex-1 p-2 rounded-l bg-gray-600 text-white focus:outline-none"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r">
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default TeamChat;