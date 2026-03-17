"use client"

import React, { useState } from 'react';

export const TeamChat: React.FC = () => {
    const [collapsed, setCollapsed] = useState(true)

    if (collapsed) {
        return (
            <div
                onClick={() => setCollapsed(false)}
                className="fixed left-24 bottom-6 z-40 w-72 rounded-xl border border-gray-600 bg-gray-900 p-2 shadow-lg transition hover:border-blue-400 hover:bg-gray-800"
            >
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Введите текст сообщения"
                        onFocus={() => setCollapsed(false)}
                        className="flex-1 rounded-l bg-gray-700 px-2 py-1 text-sm text-white focus:outline-none"
                    />
                    <button className="rounded-r bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600">Отправить</button>
                </div>
            </div>
        )
    }

    return (
        <div className="fixed left-24 bottom-6 z-40 w-72 rounded-xl border border-gray-500 bg-gray-900/80 p-3 shadow-2xl backdrop-blur transition hover:border-blue-400">
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-sm font-semibold text-white">Чат команды</h1>
                <button
                    onClick={() => setCollapsed(true)}
                    className="text-xs text-gray-300 hover:text-white"
                >
                    Свернуть
                </button>
            </div>
            <div className="h-44 overflow-y-auto bg-gray-800/90 p-2 rounded text-white">
                <p className="text-xs text-gray-400">здесь будут сообщения</p>
            </div>
            <div className="chat-input mt-3 flex">
                <input
                    type="text"
                    placeholder="Введите текст сообщения"
                    className="flex-1 rounded-l bg-gray-700 px-2 py-1 text-sm text-white focus:outline-none"
                />
                <button className="rounded-r bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600">Отправить</button>
            </div>
        </div>
    );
};

export default TeamChat;