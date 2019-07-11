import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Iframe from "./Iframe";
const link = "http://nml.co.za";
const Iwidth = "1280";
const Iheight = "768";
storiesOf("Iframe", module)
  .add("1280, 768", () => (
    <Iframe name="Desktop" Iwidth={Iwidth} Iheight={Iheight} ID={"1"} link={link} />
  ))
  .add("mobile", () => (
    <Iframe name="Mobile" Iwidth="320" Iheight="640" ID={"1"} link={link} />
  ))