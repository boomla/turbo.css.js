# TURBO-SPEC-FORMAT-V1

# TITLE
Empty

# SHORT
Only apply a utility when the element is empty.

# LONG
Only apply a utility when the element is empty.

# SYNTAX
{...}empty:{...}
{...}:empty{...}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Hide element when empty.
==================================================
t1 empty:hidden
--------------------------------------------------
.t1.empty\:hidden:empty {
	display: none;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


