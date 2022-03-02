import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RemoveButton } from "./RemoveButton";

export default {
  component: RemoveButton,
  args: {},
} as ComponentMeta<typeof RemoveButton>;

const Template: ComponentStory<typeof RemoveButton> = (args) => (
  <RemoveButton {...args} />
);

export const Remove_Button = Template.bind({});
Remove_Button.args = {
  row: 1,
  ToolTipText: "Remove",
};