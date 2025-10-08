import React from 'react'
import { useInputValue } from './useInputValue.js'

export default {
  title: 'Base/useInputValue',
  component: useInputValue
}

const Story = () => {
  const [username, setUsername] = useInputValue()
  return (
    <>
      <input
        id="path"
        type="text"
        placeholder="Username"
        value={username}
        onChange={setUsername}
      />
      <span>your username is: {username}</span>
    </>
  )
}

export const Default = Story.bind({});
Default.args = {
  children: 'Oh no! Something went wrong'
};
