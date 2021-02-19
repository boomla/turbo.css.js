# TURBO-SPEC-FORMAT-V1

# TITLE
Not empty

# SHORT
Only apply a utility when the element is not empty.

# LONG
Only apply a utility when the element is not empty.

# SYNTAX
{...}not-empty:{...}
{...}:not(:empty){...}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Show element when not empty.
==================================================
t1 not-empty:block
--------------------------------------------------
.t1.not-empty\:block:not(:empty) {
	display: block;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


