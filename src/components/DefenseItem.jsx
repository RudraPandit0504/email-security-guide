import React from 'react';

export default function DefenseItem({ title, desc, isDarkMode = false }) {
    return (
        <div className="flex gap-4">
            <div className="mt-2">
                <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-sky-400' : 'bg-sky-600'}`}></div>
            </div>
            <div>
                <h4 className={`text-lg md:text-xl font-bold mb-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>{title}</h4>
                <p className={`text-base md:text-lg leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{desc}</p>
            </div>
        </div>
    );
}
