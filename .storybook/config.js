import { configure } from '@storybook/react';

import '../src/Web/index.css';

const requires = require.context('../src/Web', true, /storybook\.js$/);
const loadStories = () => requires.keys().forEach(requires);

configure(loadStories, module);
