# TURBO-SPEC-FORMAT-V1

# TITLE
Flex basis

# SHORT
Set the initial size of a flex item.

# LONG
Set the initial size of a flex item.


# SYNTAX
flex-basis-{value}
flex-basis: {value};


# ARGUMENT NAME
value

# ARGUMENT TYPE
auto

# ARGUMENT TYPE
0

# ARGUMENT TYPE
<length-percentage unsigned>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Flex basis auto.
==================================================
t1 flex-basis-auto
--------------------------------------------------
.t1.flex-basis-auto {
	flex-basis: auto;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Flex basis 0.
==================================================
t1 flex-basis-0
--------------------------------------------------
.t1.flex-basis-0 {
	flex-basis: 0;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Flex basis in pixel unit.
==================================================
t1 flex-basis-10px
--------------------------------------------------
.t1.flex-basis-10px {
	flex-basis: 10px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Flex basis in percent unit.
==================================================
t1 flex-basis-10%
--------------------------------------------------
.t1.flex-basis-10\% {
	flex-basis: 10%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE THAT FAILS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
The unit must be provided.
==================================================
t1 flex-basis-10
--------------------------------------------------
Error: invalid arguments passed to utility function [flex-basis] in [flex-basis-10]
invalid arguments passed to utility function [flex] in [flex-basis-10]
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

