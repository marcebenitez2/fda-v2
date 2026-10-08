interface ChatIconProps {
  className?: string;
}

export function ChatIcon({ className }: ChatIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
    >
      <path
        d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 7.6c.3-.1.6 0 .7.3l.8 1.8c.1.3 0 .6-.2.8l-.6.6c.6 1.2 1.6 2.2 2.8 2.8l.6-.6c.2-.2.5-.3.8-.2l1.8.8c.3.1.4.4.3.7l-.3 1c-.2.6-.8 1-1.4.9-3.4-.4-6.1-3.1-6.5-6.5-.1-.6.3-1.2.9-1.4Z"
        fill="currentColor"
      />
    </svg>
  );
}
