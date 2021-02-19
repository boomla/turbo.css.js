# TURBO-SPEC-FORMAT-V1

# TITLE
Inset

# SHORT
Set the top, right, bottom, left position of positioned elements.

# LONG
A convenience utility to set the top, right, bottom, left position of positioned elements at once.


# SYNTAX
inset-{value}
top: {value};
right: {value};
bottom: {value};
left: {value};


# ARGUMENT NAME
value

# ARGUMENT TYPE
<length-percentage default-unit=1px>

# ARGUMENT TYPE
auto


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Make the current element have the same size as its container.
==================================================
t1 inset-0
--------------------------------------------------
.t1.inset-0 {
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Make the current element 1px smaller than its container.
==================================================
t1 inset-1
--------------------------------------------------
.t1.inset-1 {
	top: 1px;
	right: 1px;
	bottom: 1px;
	left: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Make the current element 5% smaller than its container on each side.
==================================================
t1 inset-5%
--------------------------------------------------
.t1.inset-5\% {
	top: 5%;
	right: 5%;
	bottom: 5%;
	left: 5%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Automatically calculate top, right, bottom, left position.
==================================================
t1 inset-auto
--------------------------------------------------
.t1.inset-auto {
	top: auto;
	right: auto;
	bottom: auto;
	left: auto;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


