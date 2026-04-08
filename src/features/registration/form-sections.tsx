"use client";

import { UseFormRegister, UseFormWatch, FieldErrors, Control } from "react-hook-form";
import type { RegistrationFormData } from "./types";
import Icon from "@/components/icon";
import { motion } from "framer-motion";

type SectionProps = {
  register: UseFormRegister<RegistrationFormData>;
  errors: FieldErrors<RegistrationFormData>;
  watch: UseFormWatch<RegistrationFormData>;
  control?: Control<RegistrationFormData>;
};

export const FloatingInput = ({
  label,
  name,
  type = "text",
  register,
  error,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  register: any;
  error?: string;
  placeholder?: string;
}) => (
  <div className="relative group flex flex-col">
    <input
      type={type}
      {...register}
      placeholder={placeholder || " "}
      className={`peer w-full px-4 pt-6 pb-2 border-b-2 bg-transparent transition-all outline-none 
        ${error ? "border-red-500 focus:border-red-600" : "border-slate-200 focus:border-primary"}
        placeholder-transparent`}
    />
    <label className="absolute left-4 top-2 text-xs font-medium text-slate-500 transition-all 
      peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs">
      {label}
    </label>
    {error && <span className="mt-1 text-[10px] font-bold text-red-500 uppercase tracking-tighter">{error}</span>}
  </div>
);

export const SectionCard = ({ children, title, icon, active = true }: { children: React.ReactNode; title: string; icon: any; active?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-white rounded-3xl p-5 md:p-8 shadow-sm ring-1 ring-slate-100 transition-opacity ${active ? "opacity-100" : "opacity-40 pointer-events-none"}`}
  >
    <div className="flex items-center gap-4 mb-6 md:mb-8">
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary">
        <Icon name={icon} className="w-6 h-6" />
      </div>
      <h3 className="font-headline text-2xl font-bold text-slate-800">{title}</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
  </motion.div>
);

export const PersonalInfo = ({ register, errors }: SectionProps) => (
  <SectionCard title="1. Personal Information" icon="user">
    <div className="col-span-full">
      <FloatingInput label="Full Name" name="fullName" register={register("fullName")} error={errors.fullName?.message} />
    </div>
    <FloatingInput label="Email Address" type="email" name="email" register={register("email")} error={errors.email?.message} />
    <FloatingInput label="Phone Number" name="phone" register={register("phone")} error={errors.phone?.message} />
    <div className="relative group flex flex-col">
      <select
        {...register("country")}
        className="peer w-full px-4 pt-6 pb-2 border-b-2 bg-transparent transition-all outline-none border-slate-200 focus:border-primary appearance-none"
      >
        <option value="">Select Country</option>
        <option value="IN">India</option>
        <option value="US">USA</option>
        <option value="UK">UK</option>
        <option value="AF">Afghanistan</option>
        <option value="BD">Bangladesh</option>
        <option value="BT">Bhutan</option>
        <option value="MV">Maldives</option>
        <option value="NP">Nepal</option>
        <option value="PK">Pakistan</option>
        <option value="LK">Sri Lanka</option>
        <option value="OTHER">Other</option>
      </select>
      <label className="absolute left-4 top-2 text-xs font-medium text-slate-500">Country</label>
      <div className="absolute right-4 top-6 pointer-events-none">
        <Icon name="globe" className="w-4 h-4 text-slate-400" />
      </div>
    </div>
    <FloatingInput label="Organization / Institution" name="organization" register={register("organization")} error={errors.organization?.message} />
    <FloatingInput label="Department" name="department" register={register("department")} error={errors.department?.message} />
    <FloatingInput label="Designation / Role" name="designation" register={register("designation")} error={errors.designation?.message} />
  </SectionCard>
);

export const ParticipantSelection = ({ register, errors, watch }: SectionProps) => (
  <>
  <SectionCard title="2. Participant Category" icon="id-card">
    <div className="col-span-full space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          "STUDENT",
          "RESEARCHER_ACADEMIC",
          "INDUSTRY_PROFESSIONAL",
          "MEDICAL_PROFESSIONAL",
          "ENFORCEMENT_AUTHORITY",
          "OTHER"
        ].map((cat) => (
          <label key={cat} className={`flex items-center gap-3 p-3 rounded-2xl border-2 transition-all cursor-pointer md:p-4 ${watch("category") === cat ? "border-primary bg-primary/5" : "border-slate-100 hover:border-slate-200"}`}>
            <input type="radio" {...register("category")} value={cat} className="sr-only" />
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${watch("category") === cat ? "border-primary" : "border-slate-300"}`}>
              {watch("category") === cat && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
            </div>
            <span className="font-body text-xs font-bold text-slate-800 uppercase tracking-tighter leading-tight">{cat.replace(/_/g, " ")}</span>
          </label>
        ))}
      </div>
      {errors.category && <span className="text-xs font-bold text-red-500">{errors.category.message}</span>}
    </div>
  </SectionCard>

  <SectionCard title="3. Membership Type" icon="shield">
    <div className="col-span-full space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { value: "ASI_MEMBER", label: "ASI Member" },
          { value: "USI_MEMBER", label: "USI Member" },
          { value: "NON_MEMBER", label: "Non-Member (Indian / SAARC)" },
          { value: "INTL_DELEGATE", label: "International Delegate (SAS/IIAV/IEEE)" },
          { value: "INTL_NON_MEMBER", label: "International Non-Member" }
        ].map((type) => (
          <label key={type.value} className={`flex items-center gap-3 p-3 rounded-2xl border-2 transition-all cursor-pointer md:p-4 ${watch("membershipType") === type.value ? "border-primary bg-primary/5" : "border-slate-100 hover:border-slate-200"}`}>
            <input type="radio" {...register("membershipType")} value={type.value} className="sr-only" />
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${watch("membershipType") === type.value ? "border-primary" : "border-slate-300"}`}>
              {watch("membershipType") === type.value && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
            </div>
            <div className="flex flex-col">
              <span className="font-body text-xs font-black text-slate-800 uppercase leading-none">{type.label}</span>
            </div>
          </label>
        ))}
      </div>
      {errors.membershipType && <span className="text-xs font-bold text-red-500">{errors.membershipType.message}</span>}
    </div>
  </SectionCard>
  </>
);

const TOPIC_AREAS = [
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
];

export const PaperSubmission = ({ register, watch, errors }: SectionProps) => (
  <SectionCard title="4. Paper Submission" icon="description">
    <div className="col-span-full flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
      <div className="flex flex-col">
        <span className="font-body font-bold text-slate-800">Are you submitting a paper?</span>
        <span className="text-xs text-slate-500">Enable this if you have a paper for presentation.</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" {...register("isSubmittingPaper")} className="sr-only peer" />
        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
    </div>

    {watch("isSubmittingPaper") && (
      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="col-span-full grid grid-cols-1 gap-6 mt-4">
        <FloatingInput label="Paper Title" name="paperTitle" register={register("paperTitle")} error={errors.paperTitle?.message} />
        
        <div className="relative group flex flex-col">
          <select
            {...register("topicArea")}
            className="peer w-full px-4 pt-6 pb-2 border-b-2 bg-transparent transition-all outline-none border-slate-200 focus:border-primary appearance-none"
          >
            <option value="">Select Topic Area</option>
            {TOPIC_AREAS.map(area => <option key={area} value={area}>{area}</option>)}
          </select>
          <label className="absolute left-4 top-2 text-xs font-medium text-slate-500">Topic Area</label>
        </div>

        <div className="col-span-full">
          <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Upload Abstract (PDF, max 6 pages, A4)</label>
          <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 hover:border-primary/50 transition-colors group cursor-pointer relative">
            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" {...register("abstractFile")} accept=".pdf" />
            <Icon name="file-up" className="w-10 h-10 text-slate-300 group-hover:text-primary transition-colors" />
            <div className="text-center">
              <span className="text-sm font-medium text-slate-600">Click to upload PDF or drag & drop</span>
            </div>
          </div>
          {errors.abstractFile && <span className="text-xs text-red-500">{errors.abstractFile.message as string}</span>}
        </div>
      </motion.div>
    )}
  </SectionCard>
);

export const RegistrationType = ({ register, watch }: SectionProps) => (
  <SectionCard title="5. Registration Timing" icon="calendar">
    <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        { value: "EARLY_BIRD", label: "Early Bird Rate", sub: "Until October 30, 2025" },
        { value: "REGULAR", label: "Regular Rate", sub: "After October 30, 2025" }
      ].map((type) => (
        <label key={type.value} className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all cursor-pointer md:gap-4 md:p-5 ${watch("registrationType") === type.value ? "border-primary bg-primary/5" : "border-slate-100 hover:border-slate-200"}`}>
          <input type="radio" {...register("registrationType")} value={type.value} className="sr-only" />
          <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center ${watch("registrationType") === type.value ? "border-primary bg-primary text-white" : "border-slate-200"}`}>
             {watch("registrationType") === type.value && <Icon name="check" className="w-4 h-4" />}
          </div>
          <div className="flex flex-col">
            <span className="font-body text-sm font-black text-slate-800 uppercase tracking-tight leading-none mb-1">{type.label}</span>
            <span className="text-[10px] text-slate-500 font-medium">{type.sub}</span>
          </div>
        </label>
      ))}
    </div>
  </SectionCard>
);

export const AdditionalInfo = ({ register, watch, errors }: SectionProps) => (
  <SectionCard title="8. Additional Preferences" icon="settings">
    <div className="col-span-full flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
       <div className="flex flex-col">
        <span className="font-body font-bold text-slate-800">Accompanying Person?</span>
        <span className="text-xs text-slate-500">Additional fees apply.</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" {...register("hasAccompanyingPerson")} className="sr-only peer" />
        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
    </div>

    <div className="col-span-full">
      <label className="text-xs font-bold text-slate-500 mb-3 block uppercase tracking-widest">Dietary Preference</label>
      <div className="flex gap-4">
        {[
          { value: "VEG", label: "Veg" },
          { value: "NON_VEG", label: "Non-Veg" },
          { value: "OTHER", label: "Other" }
        ].map(diet => (
          <label key={diet.value} className={`flex-1 flex items-center justify-center p-3 rounded-xl border-2 transition-all cursor-pointer ${watch("dietaryPreference") === diet.value ? "border-primary bg-primary/5 text-primary" : "border-slate-100 text-slate-500"}`}>
            <input type="radio" {...register("dietaryPreference")} value={diet.value} className="sr-only" />
            <span className="text-xs font-black uppercase">{diet.label}</span>
          </label>
        ))}
      </div>
    </div>

    <div className="col-span-full flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
      <div className="flex flex-col">
        <span className="font-body font-bold text-slate-800">Accommodation Required?</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" {...register("accommodationRequired")} className="sr-only peer" />
        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
    </div>

    {watch("accommodationRequired") && (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="col-span-full grid grid-cols-2 gap-4">
         <div className="relative">
          <input type="date" {...register("arrivalDate")} className="w-full px-4 pt-6 pb-2 border-b-2 border-slate-200 focus:border-primary outline-none text-sm" />
          <label className="absolute left-4 top-2 text-[10px] font-bold text-slate-400 uppercase">Arrival</label>
        </div>
        <div className="relative">
          <input type="date" {...register("departureDate")} className="w-full px-4 pt-6 pb-2 border-b-2 border-slate-200 focus:border-primary outline-none text-sm" />
          <label className="absolute left-4 top-2 text-[10px] font-bold text-slate-400 uppercase">Departure</label>
        </div>
      </motion.div>
    )}
  </SectionCard>
);

export const PaymentMethod = ({ register, watch, errors }: SectionProps) => (
  <SectionCard title="9. Payment Method" icon="credit-card">
    <div className="col-span-full grid grid-cols-2 gap-4">
      {[
        { value: "UPI", label: "UPI" },
        { value: "CARD", label: "Credit/Debit Card" },
        { value: "NET_BANKING", label: "Net Banking" },
        { value: "INTL_PAYMENT", label: "International Payment" }
      ].map((method) => (
        <label key={method.value} className={`flex flex-col p-4 rounded-2xl border-2 transition-all cursor-pointer ${watch("paymentMethod") === method.value ? "border-primary bg-primary/5" : "border-slate-100 hover:border-slate-200"}`}>
          <input type="radio" {...register("paymentMethod")} value={method.value} className="sr-only" />
          <span className={`text-xs font-black uppercase text-center ${watch("paymentMethod") === method.value ? "text-primary" : "text-slate-600"}`}>{method.label}</span>
        </label>
      ))}
    </div>
    {errors.paymentMethod && <span className="col-span-full text-xs font-bold text-red-500">{errors.paymentMethod.message}</span>}
  </SectionCard>
);

export const Confirmation = ({ register, errors, watch }: SectionProps) => (
  <div className="col-span-full bg-slate-900 rounded-[32px] p-5 md:p-8 text-white">
    <h3 className="font-headline text-2xl font-bold mb-6">10. Final Confirmation</h3>
    <label className="flex items-start gap-4 cursor-pointer group">
      <input type="checkbox" {...register("agreedToTerms")} className="sr-only" />
      <div className={`mt-1 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${watch("agreedToTerms") ? "border-primary bg-primary" : "border-slate-700"}`}>
        <Icon name="check" className="w-4 h-4" />
      </div>
      <div className="flex flex-col">
        <span className="font-body text-sm font-medium leading-relaxed group-hover:text-primary transition-colors">
          I confirm that the information provided is accurate and agree to the conference terms
        </span>
        {errors.agreedToTerms && <span className="mt-2 text-[10px] font-black uppercase text-red-400 tracking-widest">{errors.agreedToTerms.message}</span>}
      </div>
    </label>
  </div>
);
