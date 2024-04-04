import { useState } from "react";

interface GhostButtonProps {
	text: string;
}

const GhostButton: React.FC<GhostButtonProps> = ({ text }) => {
	return (
		<button className="px-8 py-6 rounded-lg border-primary text-primary inter tracking-widest uppercase bg-transparent border border-teal-400 hover:bg-primary hover:text-white transition-all duration-300 inline-flex font-semibold">
			<span>
				{text}
				<span className="ms-2">→</span>
			</span>
		</button>
	);
};

export default GhostButton;
