import React from 'react'
import { Alert } from './Alert.jsx'

export default {
  title: 'Design System/Feedback/Alert',
  component: Alert,
};


const Story = (args) => <Alert {...args} />;

export const Default = Story.bind({});
Default.args = {
  children: 'Oh no! Something went wrong'
};
