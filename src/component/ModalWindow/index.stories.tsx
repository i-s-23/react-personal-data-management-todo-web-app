import type { Meta, StoryObj } from '@storybook/react';

import ModalWindow from './index';

const meta: Meta<typeof ModalWindow> = {
  title: 'Components/ModalWindow',
  component: ModalWindow,
  tags: ['autodocs'],
  // Define args and argTypes for props
  argTypes: {
    modalIsOpen: {
      control: 'boolean',
      name: 'ウインドウ表示', // This is how you can name it in the controls panel
    },
    handleModalClose: { action: 'handleModalClose' },
    handleModalConfirm: { action: 'handleModalConfirm' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    modalIsOpen: true,
  },
};