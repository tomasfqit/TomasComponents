import type { Preview } from '@storybook/react-vite'
import React from 'react'
import { ConfigProvider } from 'antd'
import '../src/index.css'

const preview: Preview = {
  decorators: [
    (Story) =>
      React.createElement(
        ConfigProvider,
        null,
        React.createElement(Story),
      ),
  ],
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