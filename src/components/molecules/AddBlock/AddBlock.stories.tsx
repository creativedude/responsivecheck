import { storiesOf } from '@storybook/react';
import * as React from 'react';
import AddBlock from "./AddBlock";
const addFn = (w:any, h:any, n:any) => {
	console.log('adding', n, w, h);
}
const linkFn = (link:any) => {
	console.log('changing link', link);
}
storiesOf("AddBlock", module)
  .add("1280, 768", () => (
    <AddBlock addBlock={addFn} changeLink={linkFn} />
  ))