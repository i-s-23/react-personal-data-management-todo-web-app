import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import ModalWindow from ".";

const testFunc = (): void => {
  action("clicked");
};

const ModalWindowcomponents = storiesOf("Components", module);
ModalWindowcomponents.addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(withInfo)
  .addParameters({ info: { inline: true } })
  .add("ModalWindow", () => (
    <ModalWindow
      modalIsOpen={boolean("ウインドウ表示", true)}
      handleModalClose={testFunc}
      handleModalConfirm={testFunc}
    />
  ));
