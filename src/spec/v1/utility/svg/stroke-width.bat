# TURBO-SPEC-FORMAT-V1

# TITLE
Stroke width

# SHORT
Set the stroke width of SVG an element.

# LONG
Set the stroke width of SVG an element.


# SYNTAX
stroke-{value}
stroke-width: {value};


# ARGUMENT NAME
value

# ARGUMENT TYPE
<length-percentage unsigned default-unit=1px>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set stroke width to 1px without specifying the px unit.
==================================================
t1 stroke-1
--------------------------------------------------
.t1.stroke-1 {
	stroke-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set stroke width to 1px with specifying the px unit.
==================================================
t1 stroke-1px
--------------------------------------------------
.t1.stroke-1px {
	stroke-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set stroke width to 5% of the SVG element.
==================================================
t1 stroke-5%
--------------------------------------------------
.t1.stroke-5\% {
	stroke-width: 5%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


