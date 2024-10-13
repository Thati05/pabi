"use client"
import { asText, Content } from "@prismicio/client";
import { PrismicRichText ,SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
 
import { Bounded } from "@/components/Bounded";
import Button from "@/components/Button";
import { TextSplitter } from "@/components/TextSplitter";

gsap.registerPlugin(useGSAP)
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {

useGSAP (() => {
  const introTL = gsap.timeline()
  introTL
  .set('.hero', {opacity:1})
  .from('.hero-header-word',{
    scale:3,
    opacity:0,
    ease:"power4.in",
    delay:0.3,
    stagger:1,

  })
  .from(".hero_subheading",{
    opacity:0,
    y:30,
  },
  "+=.3")
  .from(".hero-body", {
    opacity:0,
    y:10,
  })
  .from(".hero-button", {
    opacity:0,
    y:10,
    duration:.7,
  })

})

















  return (
    <Bounded
      className="hero opacity-0 "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid">

        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center ">

      <h1 className=" hero-header text-center text-[#FFF9C7]  lg:text-[150px] text-9xl font-black uppercase leading-[.8] md:text-[144px] ">

   <TextSplitter text={asText(slice.primary.heading)} wordDisplayStyle="block" className="hero-header-word"   /> {/* fixes the hydration error*/}
      </h1>


<div className="hero_subheading font-semibold text-5xl lg:text-[50px] mt-12 text-[#0B4924] ">
 <PrismicRichText field={slice.primary.subheading} />
</div>  

<div className="hero-body text-2xl font-normal text-[#0B4924]  ">
   <PrismicRichText field={slice.primary.body} />
</div>
<div className=" mt-12">
<div>
  <Button butttonLink={slice.primary.button_link} buttonText={slice.primary.button_text} 
className="hero-button mt-12"
/>
</div>

</div>
          </div>
        </div>



 <div className="grid text-side relative z-[80] h-screen items-center gap-4 md:grid-cols-2 ">


   <PrismicNextImage className=" w-full md:hidden" field={slice.primary.shampoo_image} />
   
    <div>

     <h2 className="text-side-heading text-balance text-5xl font-black uppercase text-[#0B4924] lg:text-7xl  ">
     <TextSplitter text={asText(slice.primary.second_heading)}/>
     </h2>
    <div className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-[#0B4924] ">

   <PrismicRichText field={slice.primary.second_body} />
    </div>

    </div>



        </div>
      </div>
    </Bounded>
    
  );
};

export default Hero;
