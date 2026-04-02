type IconName =
  | "calendar"
  | "location"
  | "download"
  | "hearing"
  | "water"
  | "document"
  | "building"
  | "microphone"
  | "school"
  | "foundation"
  | "apartment"
  | "globe"
  | "public"
  | "bank"
  | "mask"
  | "beach"
  | "utensils"
  | "arrow-right"
  | "share"
  | "mail";

type IconProps = {
  className?: string;
  name: IconName;
};

export default function Icon({ className, name }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {name === "calendar" && (
        <>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M3 10h18" />
        </>
      )}
      {name === "location" && (
        <>
          <path d="M12 21s-6-5.3-6-11a6 6 0 1 1 12 0c0 5.7-6 11-6 11Z" />
          <circle cx="12" cy="10" r="2.2" />
        </>
      )}
      {name === "download" && (
        <>
          <path d="M12 4v11" />
          <path d="m7 11 5 5 5-5" />
          <path d="M5 20h14" />
        </>
      )}
      {name === "hearing" && (
        <>
          <path d="M14.7 7.4a4.6 4.6 0 0 0-7.9 3.2" />
          <path d="M8.2 14.2v.7a3.8 3.8 0 0 0 7.6 0V13" />
          <path d="M12.2 9.5a2.3 2.3 0 0 1 2.3 2.3c0 1.3-1.3 1.9-2.1 2.5-.7.5-1 1-1 1.7" />
        </>
      )}
      {name === "water" && (
        <>
          <path d="M12 3c2.8 3.3 5 6 5 9a5 5 0 1 1-10 0c0-3 2.2-5.7 5-9Z" />
          <path d="M9.2 14.3c.6.8 1.5 1.3 2.8 1.3 1 0 1.9-.3 2.6-1" />
        </>
      )}
      {name === "document" && (
        <>
          <path d="M7 3h7l5 5v13H7z" />
          <path d="M14 3v5h5M10 13h4M10 17h4" />
        </>
      )}
      {name === "building" && (
        <>
          <path d="M4 21V7l8-4 8 4v14" />
          <path d="M9 21v-4h6v4M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
        </>
      )}
      {name === "microphone" && (
        <>
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" />
        </>
      )}
      {name === "school" && (
        <>
          <path d="m3 10 9-5 9 5-9 5-9-5Z" />
          <path d="M7 12v4.5c0 1.5 2.2 2.5 5 2.5s5-1 5-2.5V12" />
        </>
      )}
      {name === "foundation" && (
        <>
          <path d="M4 21h16" />
          <path d="M6 21V10h4v11M14 21V6h4v15" />
          <path d="M8 10V7h8v3" />
        </>
      )}
      {name === "apartment" && (
        <>
          <path d="M4 21V4h10v17M14 8h6v13M8 8h2M8 12h2M8 16h2M14 12h2M14 16h2" />
        </>
      )}
      {name === "globe" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </>
      )}
      {name === "bank" && (
        <>
          <path d="M3 9 12 4l9 5M5 10v8M9 10v8M15 10v8M19 10v8M3 21h18" />
        </>
      )}
      {name === "public" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 4 5.8 4 9s-1.5 6.4-4 9M12 3c-2.5 2.6-4 5.8-4 9s1.5 6.4 4 9" />
        </>
      )}
      {name === "mask" && (
        <>
          <path d="M6 7c1.4-1.7 3.7-3 6-3s4.6 1.3 6 3" />
          <path d="M5 9c1.2 3.7 3.6 6 7 6s5.8-2.3 7-6" />
          <path d="M9 11h.01M15 11h.01M10 14c.6.5 1.2.8 2 .8s1.4-.3 2-.8" />
        </>
      )}
      {name === "beach" && (
        <>
          <path d="M4 19h16M12 19v-8" />
          <path d="M12 7c1.1-1.7 3.2-3 5.4-3a4.6 4.6 0 0 1 2.6.8c-.7 3.1-3.6 5.2-6.8 5.2H12" />
          <path d="M12 9c-1.1-1.7-3.2-3-5.4-3A4.6 4.6 0 0 0 4 6.8C4.7 9.9 7.6 12 10.8 12H12" />
        </>
      )}
      {name === "utensils" && (
        <>
          <path d="M7 3v8M5 3v5M9 3v5M7 11v10M15 3v18M15 3c2 2 3 4.2 3 7h-3" />
        </>
      )}
      {name === "arrow-right" && (
        <>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </>
      )}
      {name === "share" && (
        <>
          <circle cx="18" cy="5" r="2" />
          <circle cx="6" cy="12" r="2" />
          <circle cx="18" cy="19" r="2" />
          <path d="m8 12 8-6M8 12l8 6" />
        </>
      )}
      {name === "mail" && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </>
      )}
    </svg>
  );
}
