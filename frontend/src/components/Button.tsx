import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'white' | 'secondary' | 'outline' | 'dark' | 'ghost';
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
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-[3px] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none group uppercase tracking-wider';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-[11px] gap-1.5',
    md: 'px-6 py-2.5 text-xs gap-2 min-h-[42px]',
    lg: 'px-7 py-3 text-xs sm:text-sm gap-2.5 font-semibold min-h-[46px]',
  };

  const variantStyles = {
    primary: 'bg-[#0865F5] text-white hover:bg-[#0052D6] focus:ring-[#0865F5] shadow-md shadow-blue-500/20 active:translate-y-0.5',
    white: 'bg-white text-[#171B26] hover:bg-slate-100 focus:ring-slate-300 shadow-md shadow-black/10 active:translate-y-0.5 font-semibold',
    secondary: 'bg-[#F3F6FD] text-[#0865F5] hover:bg-blue-100/70 font-semibold focus:ring-[#0865F5] border border-blue-100',
    outline: 'border border-[#EBEEF4] text-[#171B26] hover:bg-slate-50 hover:border-slate-300 focus:ring-slate-300 bg-white',
    dark: 'bg-[#171B26] text-white hover:bg-[#090F1E] focus:ring-[#0865F5] shadow-md',
    ghost: 'text-[#777B86] hover:text-[#171B26] hover:bg-[#F3F6FD] focus:ring-slate-300',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const renderIcon = () => {
    if (!icon) return null;
    return (
      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
        {icon}
      </span>
    );
  };

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {icon && iconPosition === 'left' && renderIcon()}
        <span>{children}</span>
        {icon && iconPosition === 'right' && renderIcon()}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedStyles}>
        {icon && iconPosition === 'left' && renderIcon()}
        <span>{children}</span>
        {icon && iconPosition === 'right' && renderIcon()}
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
      {icon && iconPosition === 'left' && renderIcon()}
      <span>{children}</span>
      {icon && iconPosition === 'right' && renderIcon()}
    </button>
  );
};
