import React from 'react';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '', disabled = false }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-600 ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;