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
  | "mail"
  | "description"
  | "article"
  | "upload"
  | "external-link"
  | "info"
  | "brain"
  | "waves"
  | "hub"
  | "lock"
  | "chip"
  | "antenna"
  | "health"
  | "robot"
  | "bolt"
  | "arrow-left"
  | "eye"
  | "shield"
  | "check"
  | "map"
  | "search"
  | "star"
  | "user"
  | "credit-card"
  | "file-up"
  | "id-card"
  | "settings"
  | "globe"
  | "flight"
  | "train"
  | "bus"
  | "verified"
  | "science"
  | "psychology"
  | "explore"
  | "music"
  | "speaker"
  | "construction";

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
      {name === "description" && (
        <>
          <path d="M7 3h7l5 5v13H7z" />
          <path d="M14 3v5h5M10 13h6M10 17h6M10 9h2" />
        </>
      )}
      {name === "article" && (
        <>
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </>
      )}
      {name === "upload" && (
        <>
          <path d="M12 20V9" />
          <path d="m7 13 5-5 5 5" />
          <path d="M5 4h14" />
        </>
      )}
      {name === "external-link" && (
        <>
          <path d="M14 5h5v5" />
          <path d="M10 14 19 5" />
          <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
        </>
      )}
      {name === "info" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 10v6M12 7h.01" />
        </>
      )}
      {name === "brain" && (
        <>
          <path d="M9.5 7.5a3 3 0 1 1 6 0 3 3 0 0 1 1.5 5.6 3.5 3.5 0 0 1-3 5.4H11a3.5 3.5 0 0 1-3-5.4 3 3 0 0 1 1.5-5.6Z" />
          <path d="M12 7v11M9.5 10.5H12M12 13.5h2.5" />
        </>
      )}
      {name === "waves" && (
        <>
          <path d="M3 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
          <path d="M3 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
          <path d="M3 7c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
        </>
      )}
      {name === "hub" && (
        <>
          <rect x="10" y="10" width="4" height="4" rx="1" />
          <path d="M12 4v6M12 14v6M4 12h6M14 12h6" />
          <circle cx="12" cy="4" r="2" />
          <circle cx="12" cy="20" r="2" />
          <circle cx="4" cy="12" r="2" />
          <circle cx="20" cy="12" r="2" />
        </>
      )}
      {name === "lock" && (
        <>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 1 1 8 0v3" />
        </>
      )}
      {name === "chip" && (
        <>
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M10 10h4v4h-4zM9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4" />
        </>
      )}
      {name === "antenna" && (
        <>
          <path d="M12 18v3M8 21h8" />
          <path d="M12 3a7 7 0 0 1 7 7" />
          <path d="M12 7a3 3 0 0 1 3 3" />
          <path d="M12 10a1 1 0 1 1 0 .01" />
          <path d="M5 10a7 7 0 0 1 7-7" />
        </>
      )}
      {name === "health" && (
        <>
          <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z" />
          <path d="M10 12h4M12 10v4" />
        </>
      )}
      {name === "robot" && (
        <>
          <rect x="6" y="8" width="12" height="10" rx="2" />
          <path d="M12 4v4M9 13h.01M15 13h.01M9 18v2M15 18v2M6 12H4M20 12h-2" />
        </>
      )}
      {name === "bolt" && (
        <>
          <path d="M13 2 6 13h5l-1 9 8-12h-5l0-8Z" />
        </>
      )}
      {name === "arrow-left" && (
        <>
          <path d="M19 12H5" />
          <path d="m11 6-6 6 6 6" />
        </>
      )}
      {name === "eye" && (
        <>
          <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
          <circle cx="12" cy="12" r="2.5" />
        </>
      )}
      {name === "shield" && (
        <>
          <path d="M12 3 6 5v5c0 4.2 2.3 8 6 11 3.7-3 6-6.8 6-11V5l-6-2Z" />
          <path d="M10 12h4M12 10v4" />
        </>
      )}
      {name === "check" && (
        <>
          <path d="m5 12 4 4L19 7" />
        </>
      )}
      {name === "map" && (
        <>
          <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6zM9 3v15M15 6v15" />
        </>
      )}
      {name === "search" && (
        <path d="M19 19l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
      )}
      {name === "star" && (
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      )}
      {name === "user" && (
        <>
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </>
      )}
      {name === "credit-card" && (
        <>
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </>
      )}
      {name === "file-up" && (
        <>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M12 18V12" />
          <polyline points="9 15 12 12 15 15" />
        </>
      )}
      {name === "id-card" && (
        <>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M6 10h.01M6 14h.01M10 10h6M10 14h6" />
        </>
      )}
      {name === "settings" && (
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </>
      )}
      {name === "flight" && (
        <>
          <path d="M17.8 19.2L16 11l3.5-3.5c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0L13.5 8.5 5.2 6.8c-.8-.2-1.6.3-1.8 1.1l-.8 2.3c-.3.8.1 1.7.9 2.1l5.1 2.6-2.5 2.5-2.1-.4c-.4-.1-.9.1-1.1.5l-.5.8c-.2.4 0 .9.3 1.1L6.5 21l3.7 3.7c.2.2.6.3.9.1l.8-.5c.4-.2.6-.7.5-1.1l-.4-2.1 2.5-2.5 2.6 5.1c.4.8 1.3 1.2 2.1.9l2.3-.8c.8-.2 1.3-1 1.1-1.8z" />
        </>
      )}
      {name === "train" && (
        <>
          <rect x="4" y="3" width="16" height="15" rx="2" />
          <path d="M4 11h16M8 15h.01M16 15h.01M12 3v8M12 21l-3-3M12 21l3-3" />
        </>
      )}
      {name === "bus" && (
        <>
          <rect x="4" y="3" width="16" height="12" rx="2" />
          <path d="M4 11h16M8 15h.01M16 15h.01M6 15v3M18 15v3" />
          <path d="M12 3v8" />
        </>
      )}
      {name === "verified" && (
        <>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          <path d="M9 11l2 2 4-4" />
        </>
      )}
      {name === "science" && (
        <>
          <path d="M7 2v5l5 5v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-7l5-5V2" />
          <path d="M6 2h12M8.5 7h7" />
        </>
      )}
      {name === "psychology" && (
        <>
          <path d="M9.5 7.5a3 3 0 1 1 6 0 3 3 0 0 1 1.5 5.6 3.5 3.5 0 0 1-3 5.4H11a3.5 3.5 0 0 1-3-5.4 3 3 0 0 1 1.5-5.6Z" />
          <path d="M12 7v11M9.5 10.5H12M12 13.5h2.5" />
        </>
      )}
      {name === "explore" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="m14.5 9.5-5 2 2 5 5-2-2-5Z" />
        </>
      )}
      {name === "music" && (
        <>
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </>
      )}
      {name === "speaker" && (
        <>
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <circle cx="12" cy="14" r="4" />
          <line x1="12" y1="6" x2="12" y2="6.01" />
        </>
      )}
      {name === "construction" && (
        <>
          <rect x="2" y="12" width="20" height="8" rx="2" />
          <path d="M5 12V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5" />
          <path d="M9 5v7M15 5v7" />
        </>
      )}
    </svg>
  );
}
