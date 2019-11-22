import merge from 'lodash/merge'

const fonts = {
    serif: "PlayfairDisplay-Regular, 'Merriweather', Georgia, Serif",
    sansSerif:
      "'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif",
    monospace: `"Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  };

export default merge({
    
    hover: "#6166DC",
    unaccent: "#bbb",
    black: "#000",
    navColor: "#CECECE",
    background: "#FAFAFA",
    fonts,
});