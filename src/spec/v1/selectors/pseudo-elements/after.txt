# TURBO-SPEC-FORMAT-V1

# TITLE
After

# SHORT
Create a last-child pseudo element and apply styles to it.

# LONG
Create a last-child pseudo element and apply styles to it.

# SYNTAX
{...}after:{...}
{...}:after{...}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Add a horizontal line at the bottom within the element.
==================================================
t1 after:bb-1 after:block
--------------------------------------------------
.t1.after\:block:after {
	display: block;
	content: "";
}
.t1.after\:bb-1:after {
	border-bottom-width: 1px;
	content: "";
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


