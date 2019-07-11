import { configure } from '@storybook/react';
import '../src/css/main.scss';

const req = require.context('../src/components', true, /\.tsx?$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);