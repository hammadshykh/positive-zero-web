import Image from "next/image";
import { InfiniteSlider } from "./ui/InfiniteSlider";

export function InfiniteSliderBasic() {
 return (
  <div className=" bg-black py-10">
   <div className=" flex max-w-7xl mx-auto md:px-0 px-4  flex-col items-start">
    <div className="md:w-[550px] py-4 ">
     <h2 className="text-primary uppercase leading-tight tracking-tighter">
      our Supporters
     </h2>
    </div>
    <InfiniteSlider
     gap={100}
     reverse
     className="bg-black mt-5 w-full flex items-center justify-start"
    >
     <Image
      width={100}
      height={100}
      src="/brands/logo-1.svg"
      alt="Apple Music logo"
      className="h-[60px] w-[160px] "
     />
     <Image
      src="/brands/logo-2.svg"
      alt="Apple Music logo"
      className="h-[60px] w-[160px]"
      width={100}
      height={100}
     />
     <Image
      src="/brands/logo-3.svg"
      alt="Apple Music logo"
      className="h-[60px] w-[160px]"
      width={100}
      height={100}
     />
     <Image
      src="/brands/logo-4.svg"
      alt="Apple Music logo"
      className="h-[60px] w-[160px]"
      width={100}
      height={100}
     />
     <Image
      src="/brands/logo-5.svg"
      alt="Apple Music logo"
      className="h-[60px] w-[160px]"
      width={100}
      height={100}
     />
     <Image
      src="/brands/logo-6.svg"
      alt="Apple Music logo"
      className="h-[60px] w-[160px]"
      width={100}
      height={100}
     />
    </InfiniteSlider>
   </div>
  </div>
 );
}
