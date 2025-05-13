import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "h-8 w-8", size = 8 }: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3146.34 1024.39" className={className}>
          <g transform="scale(7.317) translate(10, 10)">
            <g fill="currentColor">
              <path d="M46.7 10.5a8 8 0 11-16 0 8 8 0 0116 0zM65.9 31.1l-7.2-1.1c-.4-.1-.8-.3-1-.6-4.9-7.2-6.7-8.9-8.1-9.3l-2.7 6-.7-4h.1c.3 0 .6-.2.7-.6l.1-1c0-.3-.2-.6-.6-.7l-1.3-.1c-.3 0-.6.2-.7.6l-.1 1c0 .3.2.6.6.7h.1l-1.1 3.9-1.9-6.3c-1.1.1-3.2.9-10.3 5.1-1.9 1.1-3.4 2.7-4.4 4.6l-3.8 7.3c-.2.3-.3.7-.3 1.1h-.3c-.6.2-1.1.6-1.4 1.1l-1.1 2-2-1.1c-1-.5-2.3-.1-2.8.9l-4.2 8c-.5 1-.1 2.3.9 2.8l12 6.3c1 .5 2.3.1 2.8-.9l4.2-8c.5-1 .1-2.3-.9-2.8l-2-1.1 1.1-2c.4-.8.3-1.7-.2-2.4.2-.2.4-.5.5-.8l3.8-7.2c.4-.8 1-1.4 1.7-1.8.3-.2.5-.3.8-.4l-2.2 9.6c-.4 1.9-.1 3.9 1 5.5 1 1.5 2.6 2.6 4.3 2.9L33.8 72c-.5 2.2.9 4.4 3.1 4.9.3.1.6.1.9.1 1.9 0 3.6-1.3 4-3.2l5.5-24 4.8.9 2.7 12.1c.4 1.9 2.1 3.2 4 3.2.3 0 .6 0 .9-.1 2.2-.5 3.6-2.7 3.1-4.9L60 48.1c-.6-2.8-2.8-4.9-5.7-5.4l-5.2-.9 2.1-9.1c.2.3.3.5.5.8 1.3 2 3.5 3.3 5.9 3.7l7.2 1.1c2 .3 3.8-1.1 4.1-3 .3-2.1-1-3.9-3-4.2z"/>
            </g>
          </g>
        </svg>
      </div>
      <div className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-xl">
        idpicker
      </div>
    </div>
  );
}
