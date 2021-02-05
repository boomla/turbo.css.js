# TURBO-SPEC-FORMAT-V1

# TITLE
Scale

# SHORT
Scale an element.

# LONG
Scale an element.

# SYNTAX
transform-(scale-{value})
transform: scale({value});

# SYNTAX
transform-(scale-{x}-{y})
transform: scaleX({x}) scaleY({y});

# ARGUMENT
value <int32 unit=0.01>

# ARGUMENT
x <int32 unit=0.01>

# ARGUMENT
y <int32 unit=0.01>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Scale down to 50%
==================================================
t1 transform-scale-50
--------------------------------------------------
.t1.transform-scale-50 {
	transform: scale(0.5);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Scale up 2x along the X axis, 3x along the Y axis.
==================================================
t1 transform-scale-200-300
--------------------------------------------------
.t1.transform-scale-200-300 {
	transform: scale(2, 3);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


