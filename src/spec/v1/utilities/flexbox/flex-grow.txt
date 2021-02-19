# TURBO-SPEC-FORMAT-V1

# TITLE
Flex grow

# SHORT
Set flex item's growth factor.

# LONG
Set flex item's growth factor.


# SYNTAX
flex-grow-{value}
flex-grow: {value};


# ARGUMENT
value <float32 unsigned>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Disable growing flex item.
==================================================
t1 flex-grow-0
--------------------------------------------------
.t1.flex-grow-0 {
	flex-grow: 0;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Growing flex item by a factor of 2.
==================================================
t1 flex-grow-2
--------------------------------------------------
.t1.flex-grow-2 {
	flex-grow: 2;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


