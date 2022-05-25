import React from "react";

import Icon from "@material-ui/core/Icon";

import * as S from "./styles";
import { colorTypes } from "./Colors";
import { variantTypes } from "./Variants";
import { sizeTypes } from "./Sizes";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: variantTypes;
	color?: colorTypes;
	size?: sizeTypes;
	startIcon?: String;
	endIcon?: String;
	disableShadow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	variant = "default",
	color = "default",
	size = "md",
	disableShadow = false,
	startIcon,
	endIcon,
	children,
	...props
}) => {
	console.log(process.env.TOKEN);
	return (
		<S.Button {...{ disableShadow, variant, color, size, ...props }}>
			{startIcon && (
				<Icon fontSize="small" aria-label={`start icon ${startIcon}`}>
					{startIcon}
				</Icon>
			)}
			{children}
			{endIcon && (
				<Icon fontSize="small" aria-label={`end icon ${endIcon}`}>
					{endIcon}
				</Icon>
			)}
		</S.Button>
	);
};

export default Button;
