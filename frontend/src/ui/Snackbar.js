// Snackbar.js
import { useEffect } from 'react';

export const Snackbar = ({
    message,
    isVisible,
    type = 'info',
    onClose,
    duration = 3000
}) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, duration, onClose]);

    if (!isVisible) return null;

    const types = {
        success: "bg-green-900/90 border-green-500 text-green-100",
        error: "bg-red-900/90 border-red-500 text-red-100",
        info: "bg-blue-900/90 border-blue-500 text-blue-100",
    };

    const icons = {
        success: (
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
        ),
        error: (
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        ),
        info: (
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        ),
    };

    return (
        <div className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-xl border flex items-center gap-3 min-w-[300px] transition-all duration-300 animate-slide-up ${types[type]}`}>
            {icons[type]}
            <span className="text-sm font-medium flex-1">{message}</span>
            <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    );
};
