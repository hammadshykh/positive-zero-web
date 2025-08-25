"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
 Form,
 FormControl,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,
} from "@/components/ui/form";
import { PhoneInput, getPhoneData } from "../phone-input";
import { toast } from "sonner";

// Define Zod validation schema
const formSchema = z.object({
 firstName: z.string().min(2, {
  message: "First name must be at least 2 characters.",
 }),
 lastName: z.string().min(2, {
  message: "Last name must be at least 2 characters.",
 }),
 email: z.string().email({
  message: "Please enter a valid email address.",
 }),
 phone: z.string().min(10, {
  message: "Phone number must be at least 10 digits.",
 }),
 message: z.string().min(10, {
  message: "Message must be at least 10 characters.",
 }),
 privacy: z.boolean().refine((val) => val === true, {
  message: "You must agree to the privacy policy.",
 }),
});

export function ContactFormSection() {
 // Initialize React Hook Form with Zod resolver

 const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
   firstName: "",
   lastName: "",
   email: "",
   phone: "",
   message: "",
   privacy: false,
  },
 });

 // Handle form submission
 function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
  const phoneData = getPhoneData(values.phone);

  if (!phoneData.isValid) {
   form.setError("phone", {
    type: "manual",
    message: "Invalid phone number",
   });
   return;
  }
  toast.success("Phone number is valid");
  // Here you would typically send the form data to your backend or API
 }

 return (
  <div className="relative bg-black z-10 py-20">
   <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
    <div className="space-y-6">
     <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-ralway font-medium text-white">
      Lets Talk!
     </h1>
     <p className="text-gray-400 text-lg leading-relaxed max-w-xs">
      Our friendly team would love to consult you for free.
     </p>
    </div>

    <Form {...form}>
     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
       {/* First Name Field */}
       <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
         <FormItem className="space-y-2">
          <FormLabel className="text-gray-400 text-sm">First name</FormLabel>
          <FormControl>
           <Input placeholder="First name" {...field} />
          </FormControl>
          <FormMessage className="text-xs text-red-400" />
         </FormItem>
        )}
       />

       {/* Last Name Field */}
       <FormField
        control={form.control}
        name="lastName"
        render={({ field }) => (
         <FormItem className="space-y-2">
          <FormLabel className="text-gray-400 text-sm">Last name</FormLabel>
          <FormControl>
           <Input placeholder="Last name" {...field} />
          </FormControl>
          <FormMessage className="text-xs text-red-400" />
         </FormItem>
        )}
       />
      </div>

      {/* Email Field */}
      <FormField
       control={form.control}
       name="email"
       render={({ field }) => (
        <FormItem className="space-y-2">
         <FormLabel className="text-gray-400 text-sm">Email</FormLabel>
         <FormControl>
          <Input type="email" placeholder="you@company.com" {...field} />
         </FormControl>
         <FormMessage className="text-xs text-red-400" />
        </FormItem>
       )}
      />

      {/* Phone Field */}
      <FormField
       control={form.control}
       name="phone"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Phone</FormLabel>
         <FormControl>
          <PhoneInput {...field} />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />

      {/* Message Field */}
      <FormField
       control={form.control}
       name="message"
       render={({ field }) => (
        <FormItem className="space-y-2">
         <FormLabel className="text-gray-400 text-sm">Message</FormLabel>
         <FormControl>
          <Textarea rows={6} placeholder="Your message..." {...field} />
         </FormControl>
         <FormMessage className="text-xs text-red-400" />
        </FormItem>
       )}
      />

      {/* Privacy Agreement Field */}
      <FormField
       control={form.control}
       name="privacy"
       render={({ field }) => (
        <FormItem className="flex items-start space-x-3">
         <FormControl>
          <Checkbox
           checked={field.value}
           onCheckedChange={field.onChange}
           className="mt-1 border-gray-600 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
          />
         </FormControl>
         <div className="space-y-1 leading-none">
          <FormLabel className="text-gray-400 text-sm leading-relaxed cursor-pointer">
           You agree to our friendly privacy policy.
          </FormLabel>
          <FormMessage className="text-xs text-red-400" />
         </div>
        </FormItem>
       )}
      />

      {/* Submit Button */}
      <Button
       type="submit"
       className="w-full rounded-md h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium"
      >
       Send message
      </Button>
     </form>
    </Form>
   </div>
  </div>
 );
}
