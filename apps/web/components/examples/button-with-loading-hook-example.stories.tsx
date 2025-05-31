import { ButtonWithLoadingHookExample } from "@/components/examples/button-with-loading-hook-example";
import { Toaster } from "sonner";

// This file demonstrates the ButtonWithLoadingHookExample component
// To use with Storybook, install @storybook/react and uncomment the meta configuration below

/*
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonWithLoadingHookExample> = {
  title: "Examples/ButtonWithLoadingHookExample",
  component: ButtonWithLoadingHookExample,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <Toaster position="bottom-right" />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ButtonWithLoadingHookExample>;

export const Default: Story = {};
*/

// For now, export a component that includes the Toaster for demonstration
export default function ButtonWithLoadingHookExampleWithToaster() {
  return (
    <div>
      <ButtonWithLoadingHookExample />
      <Toaster position="bottom-right" />
    </div>
  );
}
