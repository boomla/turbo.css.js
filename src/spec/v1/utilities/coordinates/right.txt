# TURBO-SPEC-FORMAT-V1

# TITLE
Right

# SHORT
Set the right position of positioned elements.

# LONG
Set the right position of positioned elements.


# SYNTAX
right-{value}
right: {value};


# ARGUMENT NAME
value

# ARGUMENT TYPE
<length-percentage default-unit=1px>

# ARGUMENT TYPE
auto


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set right to 1px without specifying the px unit.
==================================================
t1 right-1
--------------------------------------------------
.t1.right-1 {
	right: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set right to 1px with specifying the px unit.
==================================================
t1 right-1px
--------------------------------------------------
.t1.right-1px {
	right: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set right to 50% of its container.
==================================================
t1 right-50%
--------------------------------------------------
.t1.right-50\% {
	right: 50%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set right to auto.
==================================================
t1 right-auto
--------------------------------------------------
.t1.right-auto {
	right: auto;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


