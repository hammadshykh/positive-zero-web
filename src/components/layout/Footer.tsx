import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function PositiveZeroFooter() {
 return (
  <footer className="bg-background text-white py-14 px-6">
   <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
     <div className="lg:col-span-4">
      <div className="flex items-center gap-2 mb-4">
       <div className="relative -ms-2 -mt-2">
        <Image src="/positive-zero.svg" alt="Logo" width={120} height={120} />
       </div>
      </div>
      <p className="text-[#B9B3B3] mb-6 text-sm leading-relaxed">
       Get started on your decarbonization journey with Positive Zero.
      </p>
      <div className="flex gap-3">
       <Button
        variant="secondary"
        size="icon"
        className=" hover:bg-gray-700 text-[#B9B3B3] hover:text-white rounded-full"
       >
        <Icon icon="mdi:twitter" className="w-6 h-6" />
       </Button>
       <Button
        variant="secondary"
        size="icon"
        className=" hover:bg-gray-700 text-[#B9B3B3] hover:text-white rounded-full"
       >
        <Icon icon="mdi:facebook" className="w-6 h-6" />
       </Button>
       <Button
        variant="secondary"
        size="icon"
        className=" hover:bg-gray-700 text-[#B9B3B3] hover:text-white rounded-full"
       >
        <Icon icon="mdi:instagram" className="w-6 h-6" />
       </Button>
       <Button
        variant="secondary"
        size="icon"
        className=" hover:bg-gray-700 text-[#B9B3B3] hover:text-white rounded-full"
       >
        <Icon icon="mdi:github" className="w-6 h-6" />
       </Button>
      </div>
     </div>
     <div className="lg:col-span-4 grid grid-cols-2 gap-8">
      <div>
       <h3 className="font-semibold text-white mb-4  md:text-xl">Company</h3>
       <ul className="space-y-3">
        <li>
         <a
          href="#"
          className="text-[#B9B3B3] text-sm hover:text-white transition-colors"
         >
          Service
         </a>
        </li>
        <li>
         <a
          href="#"
          className="text-[#B9B3B3] text-sm hover:text-white transition-colors"
         >
          Resources
         </a>
        </li>
        <li>
         <a
          href="#"
          className="text-[#B9B3B3] text-sm hover:text-white transition-colors"
         >
          About us
         </a>
        </li>
       </ul>
      </div>
      <div>
       <h3 className="font-semibold text-white mb-4  md:text-xl">Help</h3>
       <ul className="space-y-3">
        <li>
         <a
          href="#"
          className="text-[#B9B3B3] text-sm hover:text-white transition-colors"
         >
          Customer Support
         </a>
        </li>
        <li>
         <a
          href="#"
          className="text-[#B9B3B3] text-sm hover:text-white transition-colors"
         >
          Terms & Conditions
         </a>
        </li>
        <li>
         <a
          href="#"
          className="text-[#B9B3B3] text-sm hover:text-white transition-colors"
         >
          Privacy Policy
         </a>
        </li>
       </ul>
      </div>
     </div>
     <div className="lg:col-span-4">
      <h3 className="font-semibold md:text-xl text-white mb-4">
       Subscribe to Newsletter
      </h3>
      <div className="flex h-20">
       <Input
        type="email"
        placeholder="Enter email address"
        className=" border-0 text-white rounded-r-none  focus:border-purple-500 flex-1"
       />
       <Button className="bg-purple-600 hover:bg-purple-700 text-white px-10 rounded-e-md rounded-s-none h-[44px]">
        Join
       </Button>
      </div>
     </div>
    </div>
    <div className="pt-8 border-t border-[#333333] text-center">
     <p className="text-white text-sm">
      © Copyright 2024. All Rights Reserved by Positive Zero
     </p>
    </div>
   </div>
  </footer>
 );
}
