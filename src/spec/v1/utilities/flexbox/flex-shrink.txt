# TURBO-SPEC-FORMAT-V1

# TITLE
Flex shrink

# SHORT
Set flex item's shrink factor.

# LONG
Set flex item's shrink factor.


# SYNTAX
flex-shrink-{value}
flex-shrink: {value};


# ARGUMENT NAME
value

# ARGUMENT TYPE
<float32 unsigned>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Disable shrinking flex item.
==================================================
t1 flex-shrink-0
--------------------------------------------------
.t1.flex-shrink-0 {
	flex-shrink: 0;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Shrinking flex item by a factor of 2.
==================================================
t1 flex-shrink-2
--------------------------------------------------
.t1.flex-shrink-2 {
	flex-shrink: 2;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


