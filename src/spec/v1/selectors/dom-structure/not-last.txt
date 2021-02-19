# TURBO-SPEC-FORMAT-V1

# TITLE
Not last

# SHORT
Only apply a utility when the element is not the last among its siblings.

# LONG
Only apply a utility when the element is not the last among its siblings.

# SYNTAX
{...}not-last:{...}
{...}:not(:last-child){...}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Non-last elements shall have a bottom border width of 1px.
==================================================
t1 not-last:bb-1
--------------------------------------------------
.t1.not-last\:bb-1:not(:last-child) {
	border-bottom-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


