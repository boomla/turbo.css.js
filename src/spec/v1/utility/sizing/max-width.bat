# TURBO-SPEC-FORMAT-V1

# TITLE
Max width

# SHORT
Set the maximum width of an element.

# LONG
Set the maximum width of an element.


# SYNTAX
max-w-{value}
max-width: {value};

# SYNTAX
max-w-min
max-width: min-content;

# SYNTAX
max-w-max
max-width: max-content;

# SYNTAX
max-w-full
max-width: 100%;


# ARGUMENT NAME
value

# ARGUMENT TYPE
<length-percentage unsigned default-unit=1px>

# ARGUMENT TYPE
none


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set maximum width to 1px without specifying the px unit.
==================================================
t1 max-w-1
--------------------------------------------------
.t1.max-w-1 {
	max-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set maximum width to 1px with specifying the px unit.
==================================================
t1 max-w-1px
--------------------------------------------------
.t1.max-w-1px {
	max-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set maximum width to 50% of its container.
==================================================
t1 max-w-50%
--------------------------------------------------
.t1.max-w-50\% {
	max-width: 50%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set maximum width to 100% of its container using
the alias `full`.
==================================================
t1 max-w-full
--------------------------------------------------
.t1.max-w-full {
	max-width: 100%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set maximum width to none.
==================================================
t1 max-w-none
--------------------------------------------------
.t1.max-w-none {
	max-width: none;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set maximum width to min-content.
==================================================
t1 max-w-min
--------------------------------------------------
.t1.max-w-min {
	max-width: min-content;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set maximum width to max-content.
==================================================
t1 max-w-max
--------------------------------------------------
.t1.max-w-max {
	max-width: max-content;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


