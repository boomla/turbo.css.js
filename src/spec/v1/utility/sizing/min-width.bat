# TURBO-SPEC-FORMAT-V1

# TITLE
Min width

# SHORT
Set the minimum width of an element.

# LONG
Set the minimum width of an element.


# SYNTAX
min-w-{value}
min-width: {value};

# SYNTAX
min-w-min
min-width: min-content;

# SYNTAX
min-w-max
min-width: max-content;

# SYNTAX
min-w-full
min-width: 100%;


# ARGUMENT NAME
value

# ARGUMENT TYPE
<length-percentage unsigned default-unit=1px>

# ARGUMENT TYPE
auto


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set minimum width to 1px without specifying the px unit.
==================================================
t1 min-w-1
--------------------------------------------------
.t1.min-w-1 {
	min-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set minimum width to 1px with specifying the px unit.
==================================================
t1 min-w-1px
--------------------------------------------------
.t1.min-w-1px {
	min-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set minimum width to 50% of its container.
==================================================
t1 min-w-50%
--------------------------------------------------
.t1.min-w-50\% {
	min-width: 50%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set minimum width to 100% of its container using
the alias `full`.
==================================================
t1 min-w-full
--------------------------------------------------
.t1.min-w-full {
	min-width: 100%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set minimum width to auto.
==================================================
t1 min-w-auto
--------------------------------------------------
.t1.min-w-auto {
	min-width: auto;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set minimum width to min-content.
==================================================
t1 min-w-min
--------------------------------------------------
.t1.min-w-min {
	min-width: min-content;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set minimum width to max-content.
==================================================
t1 min-w-max
--------------------------------------------------
.t1.min-w-max {
	min-width: max-content;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


