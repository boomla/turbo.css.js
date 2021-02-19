# TURBO-SPEC-FORMAT-V1

# TITLE
Transition property

# SHORT
Select the CSS properties to which transition effects should be applied to.

# LONG
Select the CSS properties to which transition effects should be applied to.


# SYNTAX
transition-prop-none
transition-property: none;

# SYNTAX
transition-prop-all
transition-property: all;

# SYNTAX
transition-prop-{...properties}
transition-property: {properties...};

# ARGUMENT NAME
...properties

# ARGUMENT TYPE
color
transition-property: color

# ARGUMENT TYPE
bgColor
transition-property: background-color

# ARGUMENT TYPE
borderColor
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



# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-prop-color
==================================================
t1 transition-prop-color
--------------------------------------------------
.t1.transition-prop-color {
	transition-property: color;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-prop-bgColor
==================================================
t1 transition-prop-bgColor
--------------------------------------------------
.t1.transition-prop-bgColor {
	transition-property: background-color;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-prop-borderColor
==================================================
t1 transition-prop-borderColor
--------------------------------------------------
.t1.transition-prop-borderColor {
	transition-property: border-color;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-prop-fill
==================================================
t1 transition-prop-fill
--------------------------------------------------
.t1.transition-prop-fill {
	transition-property: fill;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-prop-stroke
==================================================
t1 transition-prop-stroke
--------------------------------------------------
.t1.transition-prop-stroke {
	transition-property: stroke;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-prop-opacity
==================================================
t1 transition-prop-opacity
--------------------------------------------------
.t1.transition-prop-opacity {
	transition-property: opacity;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-prop-shadow
==================================================
t1 transition-prop-shadow
--------------------------------------------------
.t1.transition-prop-shadow {
	transition-property: box-shadow;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-prop-transform
==================================================
t1 transition-prop-transform
--------------------------------------------------
.t1.transition-prop-transform {
	transition-property: transform;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-prop-width
==================================================
t1 transition-prop-width
--------------------------------------------------
.t1.transition-prop-width {
	transition-property: width;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-prop-height
==================================================
t1 transition-prop-height
--------------------------------------------------
.t1.transition-prop-height {
	transition-property: height;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-prop-top
==================================================
t1 transition-prop-top
--------------------------------------------------
.t1.transition-prop-top {
	transition-property: top;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-prop-right
==================================================
t1 transition-prop-right
--------------------------------------------------
.t1.transition-prop-right {
	transition-property: right;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-prop-bottom
==================================================
t1 transition-prop-bottom
--------------------------------------------------
.t1.transition-prop-bottom {
	transition-property: bottom;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-prop-left
==================================================
t1 transition-prop-left
--------------------------------------------------
.t1.transition-prop-left {
	transition-property: left;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-prop-none
==================================================
t1 transition-prop-none
--------------------------------------------------
.t1.transition-prop-none {
	transition-property: none;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-prop-all
==================================================
t1 transition-prop-all
--------------------------------------------------
.t1.transition-prop-all {
	transition-property: all;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
transition-prop-colors
==================================================
t1 transition-prop-colors
--------------------------------------------------
.t1.transition-prop-colors {
	transition-property: color, background-color, border-color, fill, stroke;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Multiple properties listed.
==================================================
t1 transition-prop-color-bgColor-borderColor-width-height
--------------------------------------------------
.t1.transition-prop-color-bgColor-borderColor-width-height {
	transition-property: color, background-color, border-color, width, height;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


