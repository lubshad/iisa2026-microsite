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
    description: "Constructive reviews, experimental investigations, case studies of national importance, simulation studies, and instrument or software design contributions are welcome.",
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
    date: "To Be Announced",
    title: "Deadline for Receipt of Abstracts",
    description: "Important date listed in the brochure. The exact deadline has not been published yet.",
  },
  {
    date: "To Be Announced",
    title: "Acceptance and Invitation to Submit Manuscripts",
    description: "The brochure includes this milestone, but does not specify the date yet.",
  },
  {
    date: "To Be Announced",
    title: "Deadline for Receipt of Manuscripts",
    description: "The manuscript deadline is listed in the brochure without a published date.",
  },
  {
    date: "To Be Announced",
    title: "End of Early Bird Registration",
    description: "Early bird registration is announced in the brochure, with the final date pending confirmation.",
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
