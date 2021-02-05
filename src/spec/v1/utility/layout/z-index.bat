# TURBO-SPEC-FORMAT-V1

# TITLE
Z index

# SHORT
Set the order of positioned elements along the Z axis.

# LONG
Set the order of positioned elements along the Z axis.


# SYNTAX
z-{value}
z-index: {value};


# ARGUMENT NAME
value

# ARGUMENT TYPE
<int32>

# ARGUMENT TYPE
auto


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set z-index to 1.
==================================================
t1 z-1
--------------------------------------------------
.t1.z-1 {
	z-index: 1;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set z-index to auto.
==================================================
t1 z-auto
--------------------------------------------------
.t1.z-auto {
	z-index: auto;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


