import React from "react";
import { ComponentStory } from "@storybook/react";
import Toaster from "./Toaster";

export default {
  title: "Dashboard/Toaster",
  component: Toaster,
};

const Template: ComponentStory<typeof Toaster> = args => {
  return <Toaster {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  message: "Would you like to be notified when this dashboard is done loading?",
  show: true,
  onConfirm: () => {
    alert("Confirmed");
  },
  onDismiss: () => {
    alert("Dismissed");
  },
};
