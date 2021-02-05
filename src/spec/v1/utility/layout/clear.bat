# TURBO-SPEC-FORMAT-V1

# TITLE
Clear

# SHORT
Force an element after any floated elements that precede it.

# LONG
Force an element after any floated elements that precede it.


# SYNTAX
clear-{value}
clear: {value};


# ARGUMENT NAME
value

# ARGUMENT TYPE
left

# ARGUMENT TYPE
right

# ARGUMENT TYPE
both

# ARGUMENT TYPE
none


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Clear left.
==================================================
t1 clear-left
--------------------------------------------------
.t1.clear-left {
	clear: left;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Clear right.
==================================================
t1 clear-right
--------------------------------------------------
.t1.clear-right {
	clear: right;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Clear both.
==================================================
t1 clear-both
--------------------------------------------------
.t1.clear-both {
	clear: both;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Clear none.
==================================================
t1 clear-none
--------------------------------------------------
.t1.clear-none {
	clear: none;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


