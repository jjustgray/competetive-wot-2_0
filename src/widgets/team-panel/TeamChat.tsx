"use client"

import React, { useState } from 'react';

export const TeamChat: React.FC = () => {
    const [collapsed, setCollapsed] = useState(true)

    return (
        <div className="relative w-150">
            {/* всегда занимает место (НЕ меняется!) */}
            <div className="rounded-xl border border-gray-600 bg-gray-900 p-2 shadow-lg">
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Введите текст сообщения"
                        onFocus={() => setCollapsed(false)}
                        className="flex-1 rounded-l bg-gray-700 px-2 py-1 text-sm text-white focus:outline-none"
                    />
                    <button className="rounded-r bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600">
                        Отправить
                    </button>
                </div>
            </div>

            {/* overlay */}
            <div
                className={`
                    absolute bottom-full left-0 right-0
                    transition-all duration-300
                    ${collapsed ? 'opacity-0 translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'}
                `}
            >
                <div className="rounded-xl border border-gray-600 bg-gray-900 p-2 shadow-2xl">
                    <div className="flex items-center justify-between mb-2">
                        <h1 className="text-sm font-semibold text-white">Чат команды</h1>
                        <button
                            onClick={() => setCollapsed(true)}
                            className="text-xs text-gray-300 hover:text-white"
                        >
                            Свернуть
                        </button>
                    </div>

                    <div className="h-44 overflow-y-auto bg-gray-800/90 p-2 rounded text-white mb-3">
                        <p className="text-xs text-gray-400">здесь будут сообщения</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamChat;