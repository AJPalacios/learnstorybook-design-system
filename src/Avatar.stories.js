import React from 'react';

import { Avatar } from './Avatar';

const Template = args => <Avatar {...args} />

export const Controls = Template.bind({});

Controls.args = {
    loading:false,
    size: 'tiny',
    username: 'Dominic Nguyen',
    src: 'https://avatars2.githubusercontent.com/u/263385',
}