import React from 'react';

export default function DefenseItem({ title, desc }) {
    return (
        <div className="flex gap-4">
            <div className="mt-1">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
            </div>
            <div>
                <h4 className="font-bold text-slate-200 mb-1">{title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}