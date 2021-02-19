# TURBO-SPEC-FORMAT-V1

# TITLE
Min height

# SHORT
Set the minimum height of an element.

# LONG
Set the minimum height of an element.


# SYNTAX
min-h-{value}
min-height: {value};

# SYNTAX
min-h-min
min-height: min-content;

# SYNTAX
min-h-max
min-height: max-content;

# SYNTAX
min-h-full
min-height: 100%;


# ARGUMENT NAME
value

# ARGUMENT TYPE
<length-percentage unsigned default-unit=1px>

# ARGUMENT TYPE
auto


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set minimum height to 1px without specifying the px unit.
==================================================
t1 min-h-1
--------------------------------------------------
.t1.min-h-1 {
	min-height: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set minimum height to 1px with specifying the px unit.
==================================================
t1 min-h-1px
--------------------------------------------------
.t1.min-h-1px {
	min-height: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set minimum height to 50% of its container.
==================================================
t1 min-h-50%
--------------------------------------------------
.t1.min-h-50\% {
	min-height: 50%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set minimum height to 100% of its container using
the alias `full`.
==================================================
t1 min-h-full
--------------------------------------------------
.t1.min-h-full {
	min-height: 100%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set minimum height to auto.
==================================================
t1 min-h-auto
--------------------------------------------------
.t1.min-h-auto {
	min-height: auto;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set minimum height to min-content.
==================================================
t1 min-h-min
--------------------------------------------------
.t1.min-h-min {
	min-height: min-content;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set minimum height to max-content.
==================================================
t1 min-h-max
--------------------------------------------------
.t1.min-h-max {
	min-height: max-content;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


