import type { Preview } from '@storybook/react'
import Modal from 'react-modal';

// Set the app element for react-modal when Storybook initializes
Modal.setAppElement('#storybook-root');

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;