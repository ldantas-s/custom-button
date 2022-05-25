import { colors, colorTypes } from "./Colors";

export const variants = {
	default: (color: colorTypes) => ({
		style: {
			backgroundColor: colors[color].backgroundColor,
			color: colors[color].color,
		},
		hover: {
			backgroundColor: colors[color].bgColorHover,
		},
	}),
	outline: (color: colorTypes) => ({
		style: {
			backgroundColor: "transparent",
			border: `1px solid ${colors[color].backgroundColor}`,
			color: colors[color].backgroundColor,
		},
		hover: {
			border: "none",
			backgroundColor: `${colors[color].backgroundColor}1a`,
		},
	}),
	text: (color: colorTypes) => ({
		style: {
			color: colors[color].backgroundColor,
			boxShadow: "none",
		},
		hover: {
			backgroundColor: `${colors[color].backgroundColor}1a`,
		},
	}),
};

export type variantTypes = keyof typeof variants;
