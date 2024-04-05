"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GhostButton from "@/components/ghost-button";

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
	const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
	const rightSideImageRefs = useRef<(HTMLImageElement | null)[]>([]);
	const parentDivRef = useRef<HTMLDivElement | null>(null); // Ref for the parent div

	useEffect(() => {
		const breakpoint = 992;

		const setUpScrollTriggers = () => {
			sectionRefs.current.forEach((section, index) => {
				if (section) {
					gsap.to(rightSideImageRefs.current[index - 1], {
						yPercent: -100,
						ease: "none",
						scrollTrigger: {
							trigger: section,
							start: "top-=50px bottom",
							end: "bottom bottom",
							scrub: true,
							markers: true, // Remember to remove markers in production
						},
					});

					ScrollTrigger.create({
						trigger: section,
						start: "top center",
						end: "bottom center",
						onEnter: () => {
							setActiveSection(index);
							if (parentDivRef.current && section.dataset.color) {
								parentDivRef.current.style.backgroundColor =
									section.dataset.color;
							}
						},
						onEnterBack: () => {
							setActiveSection(index);
							if (parentDivRef.current && section.dataset.color) {
								parentDivRef.current.style.backgroundColor =
									section.dataset.color;
							}
						},
						onLeave: () => setActiveSection(index + 1),
						onLeaveBack: () => setActiveSection(index - 1),
					});
				}
			});
		};

		const isDesktop = window.innerWidth > breakpoint;

		if (isDesktop) {
			setUpScrollTriggers();
		}

		return () => {
			if (isDesktop) {
				ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			}
		};
	}, []);

	const [activeSection, setActiveSection] = useState(0);

	return (
		<section className="">
			<div
				className="lg:flex items-start transition"
				style={{ backgroundColor: "#ccccff" }}
				ref={parentDivRef}
			>
				<nav className="sticky top-0 lg:block hidden">
					<ul className="flex items-center justify-center gap-6 inter [writing-mode:vertical-lr] -scale-[1] h-full px-6">
						{["Things to do", "Dine", "Shop", "Stay"].map((item, index) => (
							<li
								key={index}
								className={`flex items-center justify-center gap-3 transition ${
									activeSection === index ? "opacity-100" : "opacity-25"
								}`}
							>
								<span className="w-3 h-3 rounded-full bg-neutral-500"></span>
								<span className="uppercase text-xl font-semibold">{item}</span>
							</li>
						))}
					</ul>
				</nav>
				<div className="left-side col-span-1 lg:w-1/2 flex flex-col gap-12">
					{/* Things to Do Section */}
					<div
						ref={(el) => {
							sectionRefs.current[0] = el;
						}}
						data-color="#ccccff"
						className="lg:h-screen max-w-3xl mx-auto text-center flex justify-center gap-3 flex-col"
					>
						<img
							src="/scroll-1.jpg"
							alt="Things to Do"
							className="rounded-b-[45px] lg:h-screen object-cover z-40 lg:hidden block"
						/>
						<div className="lg:p-0 p-12 flex flex-col gap-10">
							<h3 className="lg:text-6xl text-3xl">
								THINGS <em>to do</em>
							</h3>
							<p>Description of things to do...</p>
							<div>
								<GhostButton text="View More" />
							</div>
						</div>
					</div>
					{/* Dine Section */}
					<div
						ref={(el) => {
							sectionRefs.current[1] = el;
						}}
						data-color="#6a5acd"
						className="lg:h-screen max-w-3xl mx-auto text-center flex justify-center gap-3 flex-col"
					>
						<img
							src="/scroll-2.jpg"
							alt="Dine"
							className="rounded-b-[45px] lg:h-screen object-cover z-40 lg:hidden block"
						/>
						<div className="lg:p-0 p-12 flex flex-col gap-10">
							<h3 className="lg:text-6xl text-3xl">DINE</h3>
							<p>Description of places to dine...</p>
							<div>
								<GhostButton text="View More" />
							</div>
						</div>
					</div>
					{/* Shop Section */}
					<div
						ref={(el) => {
							sectionRefs.current[2] = el;
						}}
						data-color="#b0e0e6"
						className="lg:h-screen max-w-3xl mx-auto text-center flex justify-center gap-3 flex-col"
					>
						<img
							src="/scroll-3.jpg"
							alt="Shop"
							className="rounded-b-[45px] lg:h-screen object-cover z-40 lg:hidden block"
						/>
						<div className="lg:p-0 p-12 flex flex-col gap-10">
							<h3 className="lg:text-6xl text-3xl">SHOP</h3>
							<p>Description of places to shop...</p>
							<div>
								<GhostButton text="View More" />
							</div>
						</div>
					</div>
					{/* Stay Section */}
					<div
						ref={(el) => {
							sectionRefs.current[3] = el;
						}}
						data-color="#4682b4"
						className="lg:h-screen max-w-3xl mx-auto text-center flex justify-center gap-3 flex-col"
					>
						<img
							src="/scroll-4.jpg"
							alt="Stay"
							className="rounded-b-[45px] lg:h-screen object-cover z-40 lg:hidden block"
						/>
						<div className="lg:p-0 p-12 flex flex-col gap-10">
							<h3 className="lg:text-6xl text-3xl">
								HOTELS <em>to stay</em>
							</h3>
							<p>Description of hotels to stay...</p>
							<div>
								<GhostButton text="View More" />
							</div>
						</div>
					</div>
				</div>
				<div className="right-side h-screen col-span-1 relative lg:w-1/2 overflow-hidden sticky top-0 lg:block hidden">
					{/* Images corresponding to each section */}
					<img
						ref={(el) => {
							rightSideImageRefs.current[0] = el;
						}}
						src="/scroll-1.jpg"
						alt="Things to Do"
						className="rounded-b-[45px] lg:h-screen absolute top-0 object-cover z-40"
					/>
					<img
						ref={(el) => {
							rightSideImageRefs.current[1] = el;
						}}
						src="/scroll-2.jpg"
						alt="Dine"
						className="rounded-b-[45px] lg:h-screen absolute top-0 object-cover z-30"
					/>
					<img
						ref={(el) => {
							rightSideImageRefs.current[2] = el;
						}}
						src="/scroll-3.jpg"
						alt="Shop"
						className="rounded-b-[45px] lg:h-screen absolute top-0 object-cover z-20"
					/>
					<img
						ref={(el) => {
							rightSideImageRefs.current[3] = el;
						}}
						src="/scroll-4.jpg"
						alt="Stay"
						className="rounded-b-[45px] lg:h-screen absolute top-0 object-cover z-10"
					/>
				</div>
			</div>
		</section>
	);
};

export default ScrollSection;
