import { storiesOf } from '@storybook/react';
import * as React from 'react';
import IframesContainer from "./IframesContainer";

const Iframes = [
	{
		"name": "Desktop",
		"width": 1320,
		"height": 1090
	},
	{
		"name": "mobile",
		"width": 360,
		"height": 768
	},
	{
		"name": "Tablet",
		"width": 748,
		"height": 1024
	}
]
const link = "https://nml.co.za";

storiesOf("IframesContainer", module)
  .add("multiples", () => (
    <IframesContainer Iframes={Iframes} link={link} />
  ))