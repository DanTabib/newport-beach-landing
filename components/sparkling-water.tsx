"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import Container from "@/components/container";

function SparklingWater() {
	// useEffect(() => {
	// 	// Animate an element with GSAP
	// 	gsap.to(".my-element", { duration: 1, x: 100, opacity: 0.5 });
	// }, []);

	return <section className="sparkling-water py-16 z-[999] relative"></section>;
}

export default SparklingWater;
