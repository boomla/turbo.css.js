# TURBO-SPEC-FORMAT-V1

# TITLE
Focus

# SHORT
Only apply a utility while the element is focused.

# LONG
Only apply a utility while the element is focused.

# SYNTAX
{...}focus:{...}
{...}:focus{...}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set the border-width to 3px while the element is focused.
==================================================
t1 focus:b-3
--------------------------------------------------
.t1.focus\:b-3:focus {
	border-width: 3px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


