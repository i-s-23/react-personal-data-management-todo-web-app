import { configure, addDecorator } from "@storybook/react";
import { setConsoleOptions } from '@storybook/addon-console';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

setConsoleOptions({
    panelExclude: []
  });

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(withA11y);

const req = require.context("../src", true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
  }

  configure(loadStories, module);
