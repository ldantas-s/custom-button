import { css } from "styled-components";

export const sizes = {
	sm: css`
		width: 73px;
		height: 32px;
	`,
	md: css`
		width: 81px;
		height: 36px;
	`,
	lg: css`
		width: 93px;
		height: 42px;
	`,
};

export type sizeTypes = keyof typeof sizes;
