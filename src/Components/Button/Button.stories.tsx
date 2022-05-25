import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./";

export default {
	title: "Button",
	component: Button,
	argTypes: {
		startIcon: {
			type: { name: "string", required: false },
			defaultValue: "",
		},
		endIcon: {
			type: { name: "string", required: false },
			defaultValue: "",
		},
		disableShadow: {
			type: { name: "boolean" },
			defaultValue: false,
		},
		color: {
			options: ["default", "primary", "secondary", "danger"],
			defaultValue: "default",
			control: { type: "select" },
		},
		variant: {
			defaultValue: "default",
		},
		disabled: {
			type: { name: "boolean" },
			defaultValue: false,
		},
		size: { defaultValue: "md" },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: "Default",
	color: "default",
};

export const Primary = Template.bind({});
Primary.args = {
	color: "primary",
	children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
	children: "Secondary",
	color: "secondary",
};

export const Danger = Template.bind({});
Danger.args = {
	children: "Danger",
	color: "danger",
};
