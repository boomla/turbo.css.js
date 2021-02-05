# TURBO-SPEC-FORMAT-V1

# TITLE
Float

# SHORT
Place an element on the side and let inline elements wrap around it.

# LONG
Place an element on the side of its container and let inline elements wrap around it.


# SYNTAX
float-{value}
float: {value};


# ARGUMENT NAME
value

# ARGUMENT TYPE
left

# ARGUMENT TYPE
right

# ARGUMENT TYPE
none


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Float left.
==================================================
t1 float-left
--------------------------------------------------
.t1.float-left {
	float: left;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Float right.
==================================================
t1 float-right
--------------------------------------------------
.t1.float-right {
	float: right;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Float none.
==================================================
t1 float-none
--------------------------------------------------
.t1.float-none {
	float: none;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


