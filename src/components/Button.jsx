// Button.js
export default function Button({ bg, title, onPress, size = 'md', shadow = true, border = true, textColor = 'white' }) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  return (
    <button
      onClick={onPress}
      className={`
        ${sizeClasses[size]} 
        ${border ? 'border-2 border-gray-300' : ''}
        ${shadow ? 'shadow-lg' : ''} 
        w-auto max-w-xs
        rounded-lg font-bold
        transition-all duration-300 ease-in-out
        hover:bg-gray-200
        hover:shadow-xl
        hover:scale-105
      `}
      style={{ backgroundColor: bg, color: textColor }}
    >
      {title}
    </button>
  );
}
