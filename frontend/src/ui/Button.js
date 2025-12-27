// Button.js

export const Button = ({
    children,
    variant = 'primary',
    isLoading = false,
    className = '',
    ...props
}) => {
    const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-vs-bg-dark disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center";

    const variants = {
        primary: "bg-vs-primary text-white hover:bg-purple-600 focus:ring-vs-primary shadow-lg hover:shadow-vs-glow",
        secondary: "bg-vs-card-bg text-gray-200 border border-vs-border hover:border-vs-primary focus:ring-gray-500 hover:text-white",
        danger: "bg-red-500/10 text-red-500 border border-red-500/50 hover:bg-red-500/20 focus:ring-red-500",
        ghost: "bg-transparent text-vs-text-secondary hover:text-white hover:bg-white/5",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading ? (
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : null}
            {children}
        </button>
    );
};
