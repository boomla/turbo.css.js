# TURBO-SPEC-FORMAT-V1

# TITLE
Bottom

# SHORT
Set the bottom position of positioned elements.

# LONG
Set the bottom position of positioned elements.


# SYNTAX
bottom-{value}
bottom: {value};


# ARGUMENT NAME
value

# ARGUMENT TYPE
<length-percentage default-unit=1px>

# ARGUMENT TYPE
auto


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set bottom to 1px without specifying the px unit.
==================================================
t1 bottom-1
--------------------------------------------------
.t1.bottom-1 {
	bottom: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set bottom to 1px with specifying the px unit.
==================================================
t1 bottom-1px
--------------------------------------------------
.t1.bottom-1px {
	bottom: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set bottom to 50% of its container.
==================================================
t1 bottom-50%
--------------------------------------------------
.t1.bottom-50\% {
	bottom: 50%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set bottom to auto.
==================================================
t1 bottom-auto
--------------------------------------------------
.t1.bottom-auto {
	bottom: auto;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


