import { z } from "zod";

export const registrationSchema = z.object({
  // Section 1: Personal Information
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  country: z.string().min(1, "Country is required"),
  organization: z.string().min(2, "Organization / Institution is required"),
  department: z.string().min(2, "Department is required"),
  designation: z.string().min(2, "Designation / Role is required"),

  // Section 2: Participant Category
  category: z.enum([
    "STUDENT",
    "RESEARCHER_ACADEMIC",
    "INDUSTRY_PROFESSIONAL",
    "MEDICAL_PROFESSIONAL",
    "ENFORCEMENT_AUTHORITY",
    "OTHER"
  ], {
    error: "Please select a participant category",
  }),

  // Section 3: Membership Type
  membershipType: z.enum([
    "ASI_MEMBER",
    "USI_MEMBER",
    "NON_MEMBER",
    "INTL_DELEGATE",
    "INTL_NON_MEMBER"
  ], {
    error: "Please select a membership type",
  }),

  // Section 4: Paper Submission
  isSubmittingPaper: z.boolean().default(false),
  paperTitle: z.string().optional(),
  abstractFile: z.any().optional(),
  topicArea: z.enum([
    "Aero, Hydro & Underwater Acoustics",
    "Architectural & Building Acoustics",
    "Bioacoustics",
    "Environmental Noise",
    "Instrumentation & Signal Processing",
    "Musical Acoustics",
    "Physical Acoustics & Ultrasonics",
    "Speech",
    "Sound Perception",
    "Transducers & Electro-acoustics",
    "Vibro-acoustics & Noise"
  ], {
    error: "Please select a topic area",
  }).optional(),

  // Section 5: Registration Type
  registrationType: z.enum(["EARLY_BIRD", "REGULAR"]).default("EARLY_BIRD"),

  // Section 8: Additional Preferences
  hasAccompanyingPerson: z.boolean().default(false),
  dietaryPreference: z.enum(["VEG", "NON_VEG", "OTHER"]).default("VEG"),
  accommodationRequired: z.boolean().default(false),
  arrivalDate: z.string().optional(),
  departureDate: z.string().optional(),

  // Section 9: Payment
  paymentMethod: z.enum(["UPI", "CARD", "NET_BANKING", "INTL_PAYMENT"], {
    error: "Please select a payment method",
  }),

  // Section 10: Confirmation
  agreedToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;

// Pricing logic helper
export const getRegistrationPrice = (data: Partial<RegistrationFormData>) => {
  const isSAARC = ["IN", "AF", "BD", "BT", "MV", "NP", "PK", "LK"].includes(data.country || "IN");
  const isEarly = data.registrationType === "EARLY_BIRD";
  const membership = data.membershipType;
  const isStudent = data.category === "STUDENT";
  const hasAccompanying = data.hasAccompanyingPerson;

  let basePrice = 0;
  let currency = isSAARC ? "₹" : "$";

  if (isSAARC) {
    if (isStudent) {
      basePrice = isEarly ? 2000 : 3000;
    } else if (membership === "ASI_MEMBER" || membership === "USI_MEMBER") {
      basePrice = isEarly ? 4000 : 5000;
    } else {
      basePrice = isEarly ? 5000 : 6000;
    }
    
    if (hasAccompanying) {
      basePrice += isEarly ? 2000 : 3000;
    }
  } else {
    // Foreign Delegates
    if (isStudent) {
      basePrice = isEarly ? 125 : 175;
    } else if (membership === "INTL_DELEGATE") {
      basePrice = isEarly ? 250 : 300;
    } else {
      basePrice = isEarly ? 350 : 400;
    }

    if (hasAccompanying) {
      basePrice += isEarly ? 125 : 175;
    }
  }

  return { amount: basePrice, currency };
};
