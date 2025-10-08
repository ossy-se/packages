import React from 'react'
import { Button } from './Button.jsx'

export default {
  title: 'Actions/Button',
  component: Button
}

const Story = (props) => (
  <div style={{ display: 'flex', gap: '16px' }}>

    <Button variant={props.variant}>
      Button
    </Button>

    <Button prefix="select" variant={props.variant}>
      Icon Left
    </Button>

    <Button suffix="math-plus" variant={props.variant}>
      Icon right
    </Button>

    <Button disabled variant={props.variant} >
      Disabled Button
    </Button>

  </div>
);

export const Default = Story.bind({});
Default.args = {
};

export const Neutral = Story.bind({});
Neutral.args = {
  variant: 'neutral'
};

export const Link = Story.bind({});
Link.args = {
  variant: 'link'
};

export const CallToAction = Story.bind({});
CallToAction.args = {
  variant: 'cta'
};

export const Danger = Story.bind({});
Danger.args = {
  variant: 'danger'
};

export const Tab = Story.bind({});
Tab.args = {
  variant: 'tab'
};

export const TabActive = Story.bind({});
TabActive.args = {
  variant: 'tab-active'
};

export const Tag = Story.bind({});
Tag.args = {
  variant: 'tag'
};

export const TagActive = Story.bind({});
TagActive.args = {
  variant: 'tag-active'
};
