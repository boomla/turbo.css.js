# TURBO-SPEC-FORMAT-V1

# TITLE
Top

# SHORT
Set the top position of positioned elements.

# LONG
Set the top position of positioned elements.


# SYNTAX
top-{value}
top: {value};


# ARGUMENT NAME
value

# ARGUMENT TYPE
<length-percentage default-unit=1px>

# ARGUMENT TYPE
auto


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set top to 1px without specifying the px unit.
==================================================
t1 top-1
--------------------------------------------------
.t1.top-1 {
	top: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set top to 1px with specifying the px unit.
==================================================
t1 top-1px
--------------------------------------------------
.t1.top-1px {
	top: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set top to 50% of its container.
==================================================
t1 top-50%
--------------------------------------------------
.t1.top-50\% {
	top: 50%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set top to auto.
==================================================
t1 top-auto
--------------------------------------------------
.t1.top-auto {
	top: auto;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


