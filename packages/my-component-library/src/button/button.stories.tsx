import * as React from "react";
import { Button } from "../../src/button";

export default { title: "Button" };

export const withLabel = () => <Button label="Hello Button" />;

export const withLink = () => (
  <Button label="Learn React" href="https://reactjs.org" target="_blank" />
);
