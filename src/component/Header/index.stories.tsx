import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";

import Header from ".";

const Headercomponents = storiesOf("Components", module);
Headercomponents.addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(withInfo)
  .addParameters({ info: { inline: true } })
  .add("Header", () => <Header />);
