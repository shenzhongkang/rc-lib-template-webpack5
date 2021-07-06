import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Comp } from './Comp';

export default {
  title: 'Components/Comp Name',
  component: Comp,
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Overview = Template.bind({});

Overview.args = {
  title: 'My Component Description',
  text: 'Component Content',
};
