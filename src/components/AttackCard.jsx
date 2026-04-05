import React from 'react';

export default function AttackCard({ icon, title, description, isDarkMode = false }) {
    return (
        <div className={`p-7 md:p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow min-h-[260px] ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center border mb-5 ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                {icon}
            </div>
            <h3 className={`text-xl md:text-2xl font-bold mb-3 ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>{title}</h3>
            <p className={`text-base md:text-lg leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>
        </div>
    );
}
