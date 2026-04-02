export type Guideline = {
  description: string;
  icon: "description" | "article";
  title: string;
};

export type ImportantDate = {
  date: string;
  description: string;
  title: string;
};

export type Track = {
  icon: "brain" | "waves" | "hub" | "lock" | "chip" | "antenna" | "shield" | "robot" | "bolt" | "eye";
  id: string;
  title: string;
  wide?: boolean;
};

export const submissionGuidelines: Guideline[] = [
  {
    icon: "description",
    title: "Originality & Length",
    description: "Full papers must be 6-8 pages in length, including references. Short papers are limited to 4 pages.",
  },
  {
    icon: "article",
    title: "Formatting Standards",
    description: "Papers must follow the standard IEEE two-column conference template (A4 size).",
  },
];

export const importantDates: ImportantDate[] = [
  {
    date: "OCT 15, 2025",
    title: "Abstract Submission",
    description: "Mandatory preliminary abstract submission for all tracks.",
  },
  {
    date: "NOV 30, 2025",
    title: "Full Paper Deadline",
    description: "Final date for complete paper upload via EasyChair.",
  },
  {
    date: "JAN 20, 2026",
    title: "Acceptance Notification",
    description: "Decision emails sent to corresponding authors.",
  },
  {
    date: "FEB 15, 2026",
    title: "Camera Ready",
    description: "Final version submission and early-bird registration.",
  },
];

export const technicalTracks: Track[] = [
  { id: "TRACK 01", title: "Artificial Intelligence & Neural Networks", icon: "brain" },
  { id: "TRACK 02", title: "Advanced Signal Processing Algorithms", icon: "waves" },
  { id: "TRACK 03", title: "Internet of Things & Edge Computing", icon: "hub" },
  { id: "TRACK 04", title: "Cyber-Physical Systems Security", icon: "lock" },
  { id: "TRACK 05", title: "Embedded Hardware Design & VLSI", icon: "chip" },
  { id: "TRACK 06", title: "Wireless Communication & 6G Networks", icon: "antenna" },
  { id: "TRACK 07", title: "Biomedical Engineering & Informatics", icon: "shield", wide: true },
  { id: "TRACK 08", title: "Robotics & Autonomous Systems", icon: "robot" },
  { id: "TRACK 09", title: "Renewable Energy & Smart Grids", icon: "bolt" },
  { id: "TRACK 10", title: "Human-Computer Interaction & Data Visualization", icon: "eye", wide: true },
];
