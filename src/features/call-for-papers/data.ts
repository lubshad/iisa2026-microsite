export type Guideline = {
  description: string;
  icon: "description" | "article" | "check" | "file-up";
  title: string;
};

export type ImportantDate = {
  date: string;
  description: string;
  title: string;
};

export type Track = {
  icon: "waves" | "building" | "health" | "bolt" | "settings" | "music" | "science" | "psychology" | "microphone" | "speaker" | "construction";
  id: string;
  title: string;
  wide?: boolean;
};

export const submissionGuidelines: Guideline[] = [
  {
    icon: "check",
    title: "Originality",
    description: "Papers must be original and not published elsewhere.",
  },
  {
    icon: "article",
    title: "Contribution Types",
    description: "Submissions can include experimental investigations, case studies, simulation studies, or instrument/system designs.",
  },
  {
    icon: "description",
    title: "Manuscript Format",
    description: "Maximum 6 pages in A4 size format.",
  },
  {
    icon: "file-up",
    title: "Submission Portal",
    description: "All submissions must be made through the official conference website.",
  },
];

export const importantDates: ImportantDate[] = [
  {
    date: "TBA",
    title: "Abstract Submission",
    description: "Opening soon for all technical tracks.",
  },
  {
    date: "TBA",
    title: "Full Paper Deadline",
    description: "Deadline for complete paper upload.",
  },
  {
    date: "TBA",
    title: "Acceptance Notification",
    description: "Notifications sent to corresponding authors.",
  },
  {
    date: "TBA",
    title: "Camera Ready",
    description: "Final version and registration deadline.",
  },
];

export const technicalTracks: Track[] = [
  { id: "Track 01", title: "Aero, Hydro & Underwater Acoustics", icon: "waves" },
  { id: "Track 02", title: "Architectural & Building Acoustics", icon: "building" },
  { id: "Track 03", title: "Bioacoustics", icon: "health" },
  { id: "Track 04", title: "Environmental Noise", icon: "bolt" },
  { id: "Track 05", title: "Instrumentation & Signal Processing", icon: "settings" },
  { id: "Track 06", title: "Musical Acoustics", icon: "music" },
  { id: "Track 07", title: "Physical Acoustics & Ultrasonics", icon: "science" },
  { id: "Track 08", title: "Speech", icon: "microphone" },
  { id: "Track 09", title: "Sound Perception", icon: "psychology" },
  { id: "Track 10", title: "Transducers & Electro-acoustics", icon: "speaker" },
  { id: "Track 11", title: "Vibro-acoustics & Noise", icon: "construction", wide: true },
];
