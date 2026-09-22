import React from "react";
import heroImg from "../../assets/banner-stack.png";

export default function Hero() {
    return (
        <div className="container mx-auto flex justify-between">
            {/* left */}
            <div className="py-25 mb-28">
                {/* Heading */}
                <div className="font-display text-[60px] leading-[60px] font-extrabold tracking-[-1.5px] my-[24px]">
                    Build Your Ideal <br />
                    <span className="brand-gradient-text">
                        Development Stack
                    </span>
                </div>

                {/* SubHeading */}
                <div className="font-sans text-[18px] font-normal leading-[29.3px] max-w-xl text-secondary-black mb-[40px]">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that
                    fits your next project.
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                    <button className="px-4 py-3 rounded-lg bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white font-semibold font-display text-[14px]">
                        Explore Technologies
                    </button>
                    <button className="font-display font-normal text-[14px] text-[#374151] border-[#E5E7EB] border px-4 py-3 rounded-lg w-[170px]">
                        Learn More
                    </button>
                </div>
            </div>

            {/* right */}
            <div>
                <img src={heroImg} alt="" />
            </div>
        </div>
    );
}
