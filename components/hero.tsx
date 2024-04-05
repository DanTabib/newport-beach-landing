"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
	const heroRef = useRef(null);
	const frontLayerRef = useRef(null);

	useEffect(() => {
		const heroElement = heroRef.current;
		const frontLayer = frontLayerRef.current;

		if (!heroElement || !frontLayer) return;

		const updateMaxHeight = () => {
			const windowHeight = window.innerHeight;
			const scrollProgress = window.scrollY / windowHeight;
			const maxFrontHeight = (1 - scrollProgress) * 100 + "%";
			gsap.set(frontLayer, { maxHeight: maxFrontHeight });
		};

		ScrollTrigger.create({
			trigger: heroElement,
			start: "top top",
			end: "bottom top",
			onUpdate: updateMaxHeight,
		});
	}, []);

	return (
		<section className="mm-home-hero" ref={heroRef}>
			<div className="mm-home-hero__wrapper absolute">
				<div className="mm-home-hero__content">
					{/* Front Layer */}
					<div className="mm-home-hero__layer front-layer" ref={frontLayerRef}>
						<div className="mm-home-hero__layer__background">
							<picture className="w-full h-screen absolute top-0 left-0 z-10 object-cover">
								<source srcSet="/hero.jpg" />
								<img
									src="/background.jpg"
									alt="Background"
									className="object-cover w-full h-full"
								/>
								{/* Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-50 z-10"></div>
							</picture>
						</div>
						<div className="mm-home-hero__layer__content z-40">
							<h1 className="lg:text-8xl text-4xl" style={{ color: "white" }}>
								LUXURY <em>at your leisure</em>
							</h1>
						</div>
					</div>
					{/* Back Layer */}
					<div className="mm-home-hero__layer back-layer">
						<picture className="w-full h-screen absolute top-0 left-0 z-10 object-cover">
							<source srcSet="/sailboat-bg.jpg" />
							<img
								src="/background.jpg"
								alt="Background"
								className="object-cover w-full h-full"
							/>
						</picture>
						<div className="mm-home-hero__layer__content flex flex-col relative text-primary px-12 z-40">
							<h1 className="lg:text-8xl text-4xl">
								LUXURY <em>at your leisure</em>
							</h1>
							<p className="lg:text-3xl text-xl max-w-6xl mt-8 text-center">
								Discover the epitome of luxury and charm in Newport beach, a
								coastal heaven known for its world-class food, picturesque
								shoreline, and tranquil bay waters. From the iconic Newport Pier
								to the renowned Balboa Island, go where the good life calls from
								sunrise to sunset.
							</p>
						</div>

						<img
							className="absolute bottom-[15%] left-[4%] w-[465px] z-30"
							src="/boat.svg"
						/>
						<div className="sparkle-container absolute inset-0 pointer-events-none z-20">
							<img
								className="sparkle w-24 absolute"
								id="sparkle-1"
								src="/sparkle.png"
								alt="decorative sparkle"
								width="400"
								height="400"
								loading="lazy"
							/>
							<img
								className="sparkle w-24 absolute"
								id="sparkle-2"
								src="/sparkle.png"
								alt="decorative sparkle"
								width="400"
								height="400"
								loading="lazy"
							/>
							<img
								className="sparkle w-24 absolute"
								id="sparkle-3"
								src="/sparkle.png"
								alt="decorative sparkle"
								width="400"
								height="400"
								loading="lazy"
							/>
							<img
								className="sparkle w-24 absolute"
								id="sparkle-4"
								src="/sparkle.png"
								alt="decorative sparkle"
								width="400"
								height="400"
								loading="lazy"
							/>
							<img
								className="sparkle w-16 absolute"
								id="sparkle-5"
								src="/sparkle.png"
								alt="decorative sparkle"
								width="400"
								height="400"
								loading="lazy"
							/>
							<img
								className="sparkle w-16 absolute"
								id="sparkle-6"
								src="/sparkle.png"
								alt="decorative sparkle"
								width="400"
								height="400"
								loading="lazy"
							/>
							<img
								className="sparkle w-16 absolute"
								id="sparkle-7"
								src="/sparkle.png"
								alt="decorative sparkle"
								width="400"
								height="400"
								loading="lazy"
							/>
							<img
								className="sparkle w-8 absolute"
								id="sparkle-8"
								src="/sparkle.png"
								alt="decorative sparkle"
								width="400"
								height="400"
								loading="lazy"
							/>
							<img
								className="sparkle w-8 absolute"
								id="sparkle-9"
								src="/sparkle.png"
								alt="decorative sparkle"
								width="400"
								height="400"
								loading="lazy"
							/>
							<img
								className="sparkle w-8 absolute"
								id="sparkle-10"
								src="/sparkle.png"
								alt="decorative sparkle"
								width="400"
								height="400"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
