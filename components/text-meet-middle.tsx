"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextMeetMiddle = () => {
	const containerRef = useRef(null);
	const leftTextRef = useRef(null);
	const rightTextRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		const leftText = leftTextRef.current;
		const rightText = rightTextRef.current;

		if (!container || !leftText || !rightText) return;

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				start: "top bottom",
				end: "bottom center",
				scrub: true,
			},
		});

		tl.to(leftText, {
			x: "0",
		}).to(
			rightText,
			{
				x: "0",
			},
			"<"
		);
	}, []);

	return (
		<div
			className="relative w-full flex items-center justify-center py-12"
			ref={containerRef}
		>
			<div
				className="left-0 top-1/2 transform -translate-x-[100%] mx-2"
				ref={leftTextRef}
			>
				<h2 className="text-6xl">PLAN</h2>
			</div>
			<div
				className="right-0 top-1/2 transform translate-x-[100%] mx-2"
				ref={rightTextRef}
			>
				<h2 className="text-6xl">your stay</h2>
			</div>
		</div>
	);
};

export default TextMeetMiddle;
