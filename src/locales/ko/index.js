import common from './common.js';
import layout from './layout.js';
import pages from './pages.js';
import tools from './tools.js';
import categories from './categories.js';
import errors from './errors.js';
import tags from './tags.js';
import feedback from './feedback.js';

export default {
  common,
  ...layout,
  ...pages,
  tools,
  categories,
  errors,
  tags,
  feedback,
}; 