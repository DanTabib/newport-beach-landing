import React, { ReactNode } from "react";

interface ContainerProps {
	children: ReactNode;
	className?: string; // Make className optional
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
	return (
		<div className={`container max-w-7xl mx-auto ${className || ""}`}>
			{children}
		</div>
	);
};

export default Container;
