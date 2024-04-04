"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
import GhostButton from "@/components/ghost-button";

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
	useEffect(() => {
		const images = gsap.utils.toArray<HTMLImageElement>(".right-side img");

		images.forEach((image, index) => {
			if (index !== 0) {
				ScrollTrigger.create({
					trigger: image,
					start: "top top",
					end: "bottom top",
					animation: gsap.to(image, { translateY: "0%", duration: 0.5 }),
					scrub: true,
				});
			}
		});
	}, []);

	return (
		<section className="">
			<div className="flex items-start">
				<div className="left-side col-span-1 bg-secondary w-1/2">
					{/* THINGS TO DO */}
					<div className="h-screen max-w-3xl mx-auto text-center flex justify-center gap-3 flex-col">
						<h3 className="text-6xl max-w-[250px] mx-auto text-primary font-semibold">
							THINGS <em>to do</em>
						</h3>
						<div className="relative w-full">
							<img
								className="mt-5 mx-auto"
								src="/sample2.png"
								width={557}
								height={443}
								alt=""
							/>
						</div>
						<p className="mt-4 text-xl text-primary max-w-md mx-auto">
							Discover the epitome of luxury and charm in Newport Beach, a
							coastal haven known for its world
						</p>
						<div className="mt-4">
							<GhostButton text="View More" />
						</div>
					</div>
					{/* THINGS TO SEE */}
					<div className="h-screen max-w-3xl mx-auto text-center flex justify-center gap-3 flex-col">
						<h3 className="text-6xl max-w-[250px] mx-auto text-primary font-semibold">
							THINGS <em>to see</em>
						</h3>
						<div className="relative w-full">
							<img
								className="mt-5 mx-auto"
								src="/sample.png"
								width={557}
								height={443}
								alt=""
							/>
						</div>
						<p className="mt-4 text-xl text-primary max-w-md mx-auto">
							Lorem ipsum dolor emet
						</p>
						<div className="mt-4">
							<GhostButton text="View More" />
						</div>
					</div>
					{/* PLACES TO SHOP */}
					<div className="h-screen max-w-3xl mx-auto text-center flex justify-center gap-3 flex-col">
						<h3 className="text-6xl max-w-[250px] mx-auto text-primary font-semibold">
							PLACES <em>to shop</em>
						</h3>
						<div className="relative w-full">
							<img
								className="mt-5 mx-auto"
								src="/sample.png"
								width={557}
								height={443}
								alt=""
							/>
						</div>
						<p className="mt-4 text-xl text-primary max-w-md mx-auto">
							Lorem ipsum dolor emet
						</p>
						<div className="mt-4">
							<GhostButton text="View More" />
						</div>
					</div>
					{/* HOTELS TO STAY */}
					<div className="h-screen max-w-3xl mx-auto text-center flex justify-center gap-3 flex-col">
						<h3 className="text-6xl max-w-[250px] mx-auto text-primary font-semibold">
							HOTELS <em>to stay</em>
						</h3>
						<div className="relative w-full">
							<img
								className="mt-5 mx-auto"
								src="/sample.png"
								width={557}
								height={443}
								alt=""
							/>
						</div>
						<p className="mt-4 text-xl text-primary max-w-md mx-auto">
							Lorem ipsum dolor emet
						</p>
						<div className="mt-4">
							<GhostButton text="View More" />
						</div>
					</div>
				</div>
				<div className="right-side col-span-1 relative w-1/2">
					{/* THINGS TO DO */}
					<img
						className="h-screen sticky top-0 object-cover"
						src="/scroll-1.jpg"
						alt=""
					/>
					{/* THINGS TO SEE */}
					<img
						className="h-screen sticky top-0 object-cover"
						src="/scroll-2.jpg"
						alt=""
					/>
					{/* PLACES TO SHOP */}
					<img
						className="h-screen sticky top-0 object-cover"
						src="/scroll-3.jpg"
						alt=""
					/>
					{/* HOTELS TO STAY */}
					<img
						className="h-screen sticky top-0 object-cover"
						src="/scroll-4.jpg"
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default ScrollSection;
