"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema, type RegistrationFormData } from "./types";
import { PersonalInfo, ParticipantSelection, PaperSubmission, RegistrationType, AdditionalInfo, PaymentMethod, Confirmation } from "./form-sections";
import { SummaryCard } from "./summary-card";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    control,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema) as any,
    defaultValues: {
      category: "STUDENT",
      membershipType: "NON_MEMBER",
      isSubmittingPaper: false,
      registrationType: "EARLY_BIRD",
      hasAccompanyingPerson: false,
      dietaryPreference: "VEG",
      accommodationRequired: false,
      paymentMethod: "UPI",
      agreedToTerms: false,
    },
  });

  const onSubmit = async (data: RegistrationFormData) => {
    // Artificial delay for effect
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form data submitted:", data);
    toast.success("Ready for Payment!", {
      description: "Redirecting you to the secure payment portal...",
    });
  };

  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      {/* Subtle Background Gradients */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(30,78,121,0.06)_0%,rgba(255,255,255,0)_100%)]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(116,91,4,0.04)_0%,rgba(255,255,255,0)_100%)]" />

      <header className="mb-12 max-w-4xl md:mb-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-label text-xs font-black uppercase tracking-[0.4em] text-primary mb-4"
        >
          Secure Registration Portal
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-5xl md:text-7xl font-black text-slate-900 leading-none tracking-tight mb-8"
        >
          IISA 2026 Registration
        </motion.h1>
        <div className="space-y-4 border-l-4 border-primary py-2 pl-4 md:pl-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-xl font-black text-slate-800"
          >
            India International Symposium on Acoustics 2026
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.3 }}
             className="font-body text-lg italic text-slate-500 font-medium"
          >
            "AI for Acoustics: Innovation, Inclusion and Impact for Social Good"
          </motion.p>
          <motion.p
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.4 }}
             className="font-body text-sm font-bold text-primary flex items-center gap-4"
          >
            <span>November 19–22, 2026</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>University of Calicut, Kerala, India</span>
          </motion.p>
        </div>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8 space-y-12">
          <PersonalInfo register={register} errors={errors} watch={watch} />
          <ParticipantSelection register={register} errors={errors} watch={watch} />
          <PaperSubmission register={register} errors={errors} watch={watch} />
          <RegistrationType register={register} errors={errors} watch={watch} />
          <AdditionalInfo register={register} errors={errors} watch={watch} />
          <PaymentMethod register={register} errors={errors} watch={watch} />
          <Confirmation register={register} errors={errors} watch={watch} />
        </div>

        <div className="lg:col-span-4">
          <SummaryCard watch={watch} isSubmitting={isSubmitting} />
        </div>
      </form>
    </div>
  );
}
