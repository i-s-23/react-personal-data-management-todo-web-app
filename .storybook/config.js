import { configure, addDecorator } from "@storybook/react";
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import requireContext from 'require-context.macro';

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(withA11y);


// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.tsx$/), module);
