import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@components';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

type Story = StoryObj<typeof Button>;
export default meta;

export const Primary: Story = {
  args: { color: 'primary', variant: 'contained', children: 'Text' },
};
