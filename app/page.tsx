import Image from "next/image";
import Hero from "@/components/hero";
import SparklingWater from "@/components/sparkling-water";
import TextMeetMiddle from "@/components/text-meet-middle";
import ScrollSection from "@/components/scroll-section";

export default function Home() {
	return (
		<main className="">
			<Hero />
			<TextMeetMiddle />
			<SparklingWater />
			<ScrollSection />
		</main>
	);
}
