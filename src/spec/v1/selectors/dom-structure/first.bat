# TURBO-SPEC-FORMAT-V1

# TITLE
First

# SHORT
Only apply a utility when the element is the first among its siblings.

# LONG
Only apply a utility when the element is the first among its siblings.

# SYNTAX
{...}first:{...}
{...}:first-child{...}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
First elements shall have a top border width of 2px.
==================================================
t1 first:bt-2
--------------------------------------------------
.t1.first\:bt-2:first-child {
	border-top-width: 2px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


