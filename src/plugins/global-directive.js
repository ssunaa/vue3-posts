import focus from '@/directives/focus';
import color from '@/directives/color.js'
export default {
  install(app) {
    app.directive('focus', focus);
    app.directive('color', color);
  },
};