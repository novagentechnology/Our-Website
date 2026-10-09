import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon,
  iconPosition = 'right',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary: 'bg-[#6366F1] text-white hover:bg-[#4F46E5] focus:ring-[#6366F1] shadow-md shadow-indigo-500/20 active:translate-y-0.5',
    secondary: 'bg-[#22D3EE] text-[#0B1020] hover:bg-[#06B6D4] font-semibold focus:ring-[#22D3EE] shadow-md shadow-cyan-500/20 active:translate-y-0.5',
    outline: 'border border-slate-300 text-[#0B1020] hover:bg-slate-100 hover:border-slate-400 focus:ring-slate-400 bg-white/80 backdrop-blur-sm',
    dark: 'bg-[#0B1020] text-white hover:bg-[#161F37] border border-slate-800 focus:ring-[#6366F1] shadow-md shadow-black/20',
    ghost: 'text-slate-600 hover:text-[#0B1020] hover:bg-slate-100/70 focus:ring-slate-300',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {icon && iconPosition === 'left' && icon}
        {children}
        {icon && iconPosition === 'right' && icon}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedStyles}>
        {icon && iconPosition === 'left' && icon}
        {children}
        {icon && iconPosition === 'right' && icon}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </button>
  );
};
