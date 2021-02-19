# TURBO-SPEC-FORMAT-V1

# TITLE
Rotate

# SHORT
Rotate an element.

# LONG
Rotate an element.

# SYNTAX
transform-(rotate-{value})
transform: rotate({value});

# ARGUMENT
value <angle>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Rotate 90 degrees clockwise.
==================================================
t1 transform-rotate-90
--------------------------------------------------
.t1.transform-rotate-90 {
	transform: rotate(90deg);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Rotate 90 degrees anti-clockwise.
==================================================
t1 transform-rotate--90
--------------------------------------------------
.t1.transform-rotate--90 {
	transform: rotate(-90deg);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


