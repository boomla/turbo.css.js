# TURBO-SPEC-FORMAT-V1

# TITLE
Max height

# SHORT
Set the maximum height of an element.

# LONG
Set the maximum height of an element.


# SYNTAX
max-h-{value}
max-height: {value};

# SYNTAX
max-h-min
max-height: min-content;

# SYNTAX
max-h-max
max-height: max-content;

# SYNTAX
max-h-full
max-height: 100%;


# ARGUMENT NAME
value

# ARGUMENT TYPE
<length-percentage unsigned default-unit=1px>

# ARGUMENT TYPE
none


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set maximum height to 1px without specifying the px unit.
==================================================
t1 max-h-1
--------------------------------------------------
.t1.max-h-1 {
	max-height: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set maximum height to 1px with specifying the px unit.
==================================================
t1 max-h-1px
--------------------------------------------------
.t1.max-h-1px {
	max-height: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set maximum height to 50% of its container.
==================================================
t1 max-h-50%
--------------------------------------------------
.t1.max-h-50\% {
	max-height: 50%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set maximum height to 100% of its container using
the alias `full`.
==================================================
t1 max-h-full
--------------------------------------------------
.t1.max-h-full {
	max-height: 100%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set maximum height to none.
==================================================
t1 max-h-none
--------------------------------------------------
.t1.max-h-none {
	max-height: none;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set maximum height to min-content.
==================================================
t1 max-h-min
--------------------------------------------------
.t1.max-h-min {
	max-height: min-content;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set maximum height to max-content.
==================================================
t1 max-h-max
--------------------------------------------------
.t1.max-h-max {
	max-height: max-content;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


