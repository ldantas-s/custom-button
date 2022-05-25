import styled from "styled-components";

import { colorTypes } from "./Colors";
import { variants, variantTypes } from "./Variants";
import { sizes, sizeTypes } from "./Sizes";

type ButtonProps = {
	variant: variantTypes;
	color: colorTypes;
	size: sizeTypes;
	disableShadow: boolean;
};

export const Button = styled.button<ButtonProps>`
	align-items: center;
	background-color: transparent;
	border: none;
	border-radius: 6px;
	box-sizing: border-box;
	cursor: pointer;
	display: flex;
	font: normal 500 14px/20px "Noto Sans JP", sans-serif;
	justify-content: center;
	transition: 0.2s;

	${({ disableShadow }) =>
		disableShadow ? "" : "box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);"}
	${({ variant, color }) => variants[variant](color).style}
	${({ size }) => sizes[size]}

	&:hover,
	&:focus {
		${({ variant, color }) => variants[variant](color).hover}
		transition: 0.2s;
	}

	&:disabled {
		${variants["default"]("default").style}
		border: none;
		color: "#9E9E9E";
		cursor: auto;

		&:hover,
		&:focus {
		}
	}
`;
