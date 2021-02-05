# TURBO-SPEC-FORMAT-V1

# TITLE
Transition property

# SHORT
Shorthand utility for setting up transition effects.

# LONG
Shorthand utility for setting up transition effects.


# SYNTAX
transition
transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;

# SYNTAX
transition-none
transition-property: none;

# SYNTAX
transition-{...properties}
transition-property: {properties...};
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;

# ARGUMENT NAME
...properties

# ARGUMENT TYPE
color
transition-property: color

# ARGUMENT TYPE
bgc
transition-property: background-color

# ARGUMENT TYPE
bc
transition-property: border-color

# ARGUMENT TYPE
fill
transition-property: fill

# ARGUMENT TYPE
stroke
transition-property: stroke

# ARGUMENT TYPE
opacity
transition-property: opacity

# ARGUMENT TYPE
shadow
transition-property: box-shadow

# ARGUMENT TYPE
transform
transition-property: transform

# ARGUMENT TYPE
width
transition-property: width

# ARGUMENT TYPE
height
transition-property: height

# ARGUMENT TYPE
top
transition-property: top

# ARGUMENT TYPE
right
transition-property: right

# ARGUMENT TYPE
bottom
transition-property: bottom

# ARGUMENT TYPE
left
transition-property: left

# ARGUMENT TYPE
colors
transition-property: background-color, border-color, color, fill, stroke

# ARGUMENT TYPE
all
transition-property: all



# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition
==================================================
t1 transition
--------------------------------------------------
.t1.transition {
	transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-none
==================================================
t1 transition-none
--------------------------------------------------
.t1.transition-none {
	transition-property: none;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-color
==================================================
t1 transition-color
--------------------------------------------------
.t1.transition-color {
	transition-property: color;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-bgColor
==================================================
t1 transition-bgColor
--------------------------------------------------
.t1.transition-bgColor {
	transition-property: background-color;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-borderColor
==================================================
t1 transition-borderColor
--------------------------------------------------
.t1.transition-borderColor {
	transition-property: border-color;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-fill
==================================================
t1 transition-fill
--------------------------------------------------
.t1.transition-fill {
	transition-property: fill;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-stroke
==================================================
t1 transition-stroke
--------------------------------------------------
.t1.transition-stroke {
	transition-property: stroke;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-opacity
==================================================
t1 transition-opacity
--------------------------------------------------
.t1.transition-opacity {
	transition-property: opacity;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-shadow
==================================================
t1 transition-shadow
--------------------------------------------------
.t1.transition-shadow {
	transition-property: box-shadow;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-transform
==================================================
t1 transition-transform
--------------------------------------------------
.t1.transition-transform {
	transition-property: transform;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-width
==================================================
t1 transition-width
--------------------------------------------------
.t1.transition-width {
	transition-property: width;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-height
==================================================
t1 transition-height
--------------------------------------------------
.t1.transition-height {
	transition-property: height;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-top
==================================================
t1 transition-top
--------------------------------------------------
.t1.transition-top {
	transition-property: top;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-right
==================================================
t1 transition-right
--------------------------------------------------
.t1.transition-right {
	transition-property: right;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-bottom
==================================================
t1 transition-bottom
--------------------------------------------------
.t1.transition-bottom {
	transition-property: bottom;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-left
==================================================
t1 transition-left
--------------------------------------------------
.t1.transition-left {
	transition-property: left;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-all
==================================================
t1 transition-all
--------------------------------------------------
.t1.transition-all {
	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-colors
==================================================
t1 transition-colors
--------------------------------------------------
.t1.transition-colors {
	transition-property: color, background-color, border-color, fill, stroke;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Multiple properties listed.
==================================================
t1 transition-color-bgColor-borderColor-width-height
--------------------------------------------------
.t1.transition-color-bgColor-borderColor-width-height {
	transition-property: color, background-color, border-color, width, height;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Definition order.
==================================================
t1
transition-color
transition-prop-color
duration-100
ease-linear
--------------------------------------------------
.t1.transition-color {
	transition-property: color;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
}
.t1.transition-prop-color {
	transition-property: color;
}
.t1.duration-100 {
	transition-duration: 100ms;
}
.t1.ease-linear {
	transition-timing-function: linear;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


