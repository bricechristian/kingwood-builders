"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const DarkModeToggle = () => {
	const { theme, setTheme } = useTheme();
	return (
		<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
			{theme === "dark" ? (
				<SunIcon className={`w-10 h-10`} />
			) : (
				<MoonIcon className={`w-10 h-10 fill-black stroke-black`} />
			)}
		</button>
	);
};

export default DarkModeToggle;
