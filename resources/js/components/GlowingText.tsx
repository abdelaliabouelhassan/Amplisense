import { ReactNode } from 'react';

interface GlowingTextProps {
    children: ReactNode;
    className?: string;
    intensity?: 'low' | 'medium' | 'high';
}

export const GlowingText = ({ children, className = '', intensity = 'medium' }: GlowingTextProps) => {
    const glowStyles = {
        low: 'drop-shadow-[0_0_8px_rgba(202,162,74,0.3)]',
        medium: 'drop-shadow-[0_0_15px_rgba(202,162,74,0.5)]',
        high: 'drop-shadow-[0_0_25px_rgba(202,162,74,0.7)]',
    };

    return (
        <span className={`${glowStyles[intensity]} ${className}`}>
            {children}
        </span>
    );
};
