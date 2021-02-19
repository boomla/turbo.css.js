# TURBO-SPEC-FORMAT-V1

# TITLE
Flex

# SHORT
Shorthand for controlling how flex items grow and shrink.

# LONG
Shorthand for controlling how flex items grow and shrink.


# SYNTAX
flex-1
flex: 1 1 0%;

# SYNTAX
flex-auto
flex: 1 1 auto;

# SYNTAX
flex-initial
flex: 0 1 auto;

# SYNTAX
flex-none
flex: none;

# SYNTAX
flex-{grow}-{shrink}
flex: {grow} {shrink} 0%;

# SYNTAX
flex-{grow}-{shrink}-{basis}
flex: {grow} {shrink} {basis};

# ARGUMENT
grow <float32 unsigned>

# ARGUMENT
shrink <float32 unsigned>

# ARGUMENT
basis <length-percentage unsigned>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Stretch flex items to fit the available space, ignoring initial sizes.
==================================================
t1 flex-1
--------------------------------------------------
.t1.flex-1 {
	flex: 1 1 0%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Stretch flex items to fit the available space, considering their initial sizes.
==================================================
t1 flex-auto
--------------------------------------------------
.t1.flex-auto {
	flex: 1 1 auto;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Shrink flex items to fit the available space if necessary, considering their initial sizes.
==================================================
t1 flex-initial
--------------------------------------------------
.t1.flex-initial {
	flex: 0 1 auto;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Do not grow or shrink.
==================================================
t1 flex-none
--------------------------------------------------
.t1.flex-none {
	flex: none;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Flex with 2 arguments.
==================================================
t1 flex-1-2
--------------------------------------------------
.t1.flex-1-2 {
	flex: 1 2 0%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Flex with 3 arguments.
==================================================
t1 flex-1-2-0%
--------------------------------------------------
.t1.flex-1-2-0\% {
	flex: 1 2 0%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Flex with 3 arguments, the flex-basis argument
provided in pixel unit.
==================================================
t1 flex-1-2-20px
--------------------------------------------------
.t1.flex-1-2-20px {
	flex: 1 2 20px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Flex with 3 arguments, the flex-basis being 0px.
The CSS declaration uses 0%.
==================================================
t1 flex-1-2-0px
--------------------------------------------------
.t1.flex-1-2-0px {
	flex: 1 2 0%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE THAT FAILS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
When using flex with 3 arguments, the unit must be
provided for the flex-basis argument.
==================================================
t1 flex-1-2-3
--------------------------------------------------
Error: invalid arguments passed to utility function [flex] in [flex-1-2-3]
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


