import React from "react";

function Svg({ children, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function IconEmpleado({ className = "h-5 w-5" }) {
  return (
    <Svg className={className}>
      <path d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
      <path d="M5.5 9.2h13A2.5 2.5 0 0 1 21 11.7v6.8A2.5 2.5 0 0 1 18.5 21h-13A2.5 2.5 0 0 1 3 18.5v-6.8A2.5 2.5 0 0 1 5.5 9.2Z" />
      <path d="M3.2 13.2h17.6" />
    </Svg>
  );
}

export function IconCliente({ className = "h-5 w-5" }) {
  return (
    <Svg className={className}>
      <path d="M12 12.2a4 4 0 1 0-4-4a4 4 0 0 0 4 4Z" />
      <path d="M4.5 20c1.8-4.2 13.2-4.2 15 0" />
    </Svg>
  );
}

export function IconAliado({ className = "h-5 w-5" }) {
  return (
    <Svg className={className}>
      <path d="M5.5 10h13v10a1.8 1.8 0 0 1-1.8 1.8H7.3A1.8 1.8 0 0 1 5.5 20V10Z" />
      <path d="M4 10h16V8.5A1.8 1.8 0 0 0 18.2 6.7H5.8A1.8 1.8 0 0 0 4 8.5V10Z" />
      <path d="M12 6.7V21.8" />
    </Svg>
  );
}

export function ClientsIcon({ className = "h-5 w-5" }) {
  return (
    <Svg className={className}>
      <path d="M8.8 12.2a3.2 3.2 0 1 0-3.2-3.2 3.2 3.2 0 0 0 3.2 3.2Z" />
      <path d="M15.2 11.4a2.6 2.6 0 1 0-2.6-2.6 2.6 2.6 0 0 0 2.6 2.6Z" opacity="0.9" />
      <path d="M3.8 20c1.2-3.4 8.6-3.4 9.8 0" />
      <path d="M13.5 19.5c.6-1.7 4.4-1.9 6.1.3" opacity="0.9" />
    </Svg>
  );
}

export function DocumentIcon({ className = "h-5 w-5" }) {
  return (
    <Svg className={className}>
      <path d="M7 3.8h7l3 3V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5.8a2 2 0 0 1 2-2Z" />
      <path d="M14 3.8V8h4" />
      <path d="M8 12h8M8 15.5h8" />
    </Svg>
  );
}

export function EyeIcon({ className = "h-5 w-5", open }) {
  return (
    <Svg className={className}>
      <path d="M2.8 12s3.3-6 9.2-6 9.2 6 9.2 6-3.3 6-9.2 6-9.2-6-9.2-6Z" />
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      {!open && <path d="M5 19L19 5" />}
    </Svg>
  );
}
export function LanguageIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 3 2.5 15 0 18" />
      <path d="M12 3c-2.5 3-2.5 15 0 18" />
    </svg>
  );
}
