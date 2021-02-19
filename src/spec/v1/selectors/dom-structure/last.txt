# TURBO-SPEC-FORMAT-V1

# TITLE
Last

# SHORT
Only apply a utility when the element is the last among its siblings.

# LONG
Only apply a utility when the element is the last among its siblings.

# SYNTAX
{...}last:{...}
{...}:last-child{...}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Last elements shall have a bottom border width of 2px.
==================================================
t1 last:bb-2
--------------------------------------------------
.t1.last\:bb-2:last-child {
	border-bottom-width: 2px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


