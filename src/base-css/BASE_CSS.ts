
const BASE_CSS = `
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

.t1 {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body.t1 {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main.t1 {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1.t1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr.t1 {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre.t1 {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a.t1 {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title].t1 {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b.t1,
strong.t1 {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code.t1,
kbd.t1,
samp.t1 {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small.t1 {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub.t1,
sup.t1 {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub.t1 {
  bottom: -0.25em;
}

sup.t1 {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img.t1 {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button.t1,
input.t1,
optgroup.t1,
select.t1,
textarea.t1 {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button.t1,
input.t1 { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button.t1,
select.t1 { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button.t1,
.t1[type="button"],
.t1[type="reset"],
.t1[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button.t1::-moz-focus-inner,
.t1[type="button"]::-moz-focus-inner,
.t1[type="reset"]::-moz-focus-inner,
.t1[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button.t1:-moz-focusring,
.t1[type="button"]:-moz-focusring,
.t1[type="reset"]:-moz-focusring,
.t1[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset.t1 {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend.t1 {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress.t1 {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea.t1 {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

.t1[type="checkbox"],
.t1[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

.t1[type="number"]::-webkit-inner-spin-button,
.t1[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

.t1[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

.t1[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

.t1::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details.t1 {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary.t1 {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template.t1 {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

.t1[hidden] {
  display: none;
}

/**
 * Manually forked from SUIT CSS Base: https://github.com/suitcss/base
 * A thin layer on top of normalize.css that provides a starting point more
 * suitable for web applications.
 */

/**
 * Removes the default spacing and border for appropriate elements.
 */

blockquote.t1,
dl.t1,
dd.t1,
h1.t1,
h2.t1,
h3.t1,
h4.t1,
h5.t1,
h6.t1,
hr.t1,
figure.t1,
p.t1,
pre.t1 {
  margin: 0;
}

button.t1 {
  background-color: transparent;
  background-image: none;
  padding: 0;
}

/**
 * Work around a Firefox/IE bug where the transparent \`button\` background
 * results in a loss of the default \`button\` focus styles.
 */

button.t1:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

fieldset.t1 {
  margin: 0;
  padding: 0;
}

ol.t1,
ul.t1 {
  list-style: none;
  margin: 0;
  padding: 0;
}

/**
 * Turbo CSS custom reset styles
 */

/**
 * Use sane defaults.
 *
 * 1. See https://github.com/mozdevs/cssremedy/issues/4
 */

.t1,
.t1::before,
.t1::after {
  box-sizing: border-box; /* 1 */
  border-width: 0;
}

/**
 * 1. Use the user's configured \`sans\` font-family with a default sans-serif
 *    font stack as a fallback. Inspired by Tailwind CSS.
 * 2. Use a default "normal" line-height so the user isn't forced to override it.
 *    Inspired by Tailwind CSS.
 */

.t1 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 1 */
  line-height: 1.5; /* 2 */
}

/**
 * Use sane default.
 */

textarea.t1 {
  resize: vertical;
}

/**
 * Use sane default.
 */

button.t1,
.t1[role="button"] {
  cursor: pointer;
}

/**
 * Use sane default.
 */

table.t1 {
  border-collapse: collapse;
}

/**
 * Use opt-in styling.
 */

h1.t1,
h2.t1,
h3.t1,
h4.t1,
h5.t1,
h6.t1 {
  font-size: inherit;
  font-weight: inherit;
}

/**
 * Use opt-in styling.
 */

a.t1 {
  color: inherit;
  text-decoration: inherit;
}

/**
 * Use opt-in styling.
 */

button.t1,
input.t1,
optgroup.t1,
select.t1,
textarea.t1 {
  padding: 0;
  line-height: inherit;
  color: inherit;
}

/**
 * Use sane default.
 * Font-family stack is inspired by Tailwind CSS.
 */

pre.t1,
code.t1,
kbd.t1,
samp.t1 {
  font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

/**
 * Use sane defaults for replaced elements.
 * Vertical-align applies only when the elements
 * display property is turned back to inline.
 *
 * https://github.com/mozdevs/cssremedy/issues/14
 */

img.t1,
svg.t1,
video.t1,
canvas.t1,
audio.t1,
iframe.t1,
embed.t1,
object.t1 {
  display: block;
  vertical-align: middle;
}

/**
 * Constrain images and videos to the parent width and preserve
 * their instrinsic aspect ratio.
 *
 * https://github.com/mozdevs/cssremedy/issues/14
 */

img.t1,
video.t1 {
  max-width: 100%;
  height: auto;
}
`;

export default BASE_CSS;

