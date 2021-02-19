# TURBO-SPEC-FORMAT-V1

# TITLE
Left

# SHORT
Set the left position of positioned elements.

# LONG
Set the left position of positioned elements.


# SYNTAX
left-{value}
left: {value};


# ARGUMENT NAME
value

# ARGUMENT TYPE
<length-percentage default-unit=1px>

# ARGUMENT TYPE
auto


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set left to 1px without specifying the px unit.
==================================================
t1 left-1
--------------------------------------------------
.t1.left-1 {
	left: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set left to 1px with specifying the px unit.
==================================================
t1 left-1px
--------------------------------------------------
.t1.left-1px {
	left: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set left to 50% of its container.
==================================================
t1 left-50%
--------------------------------------------------
.t1.left-50\% {
	left: 50%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set left to auto.
==================================================
t1 left-auto
--------------------------------------------------
.t1.left-auto {
	left: auto;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


