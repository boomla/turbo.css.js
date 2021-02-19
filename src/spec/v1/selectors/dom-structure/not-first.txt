# TURBO-SPEC-FORMAT-V1

# TITLE
Not first

# SHORT
Only apply a utility when the element is not the first among its siblings.

# LONG
Only apply a utility when the element is not the first among its siblings.

# SYNTAX
{...}not-first:{...}
{...}:not(:first-child){...}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Non-first elements shall have a top border width of 1px.
==================================================
t1 not-first:bt-1
--------------------------------------------------
.t1.not-first\:bt-1:not(:first-child) {
	border-top-width: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


