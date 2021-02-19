# TURBO-SPEC-FORMAT-V1

# TITLE
Before

# SHORT
Create a first-child pseudo element and apply styles to it.

# LONG
Create a first-child pseudo element and apply styles to it.

# SYNTAX
{...}before:{...}
{...}:before{...}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Add a horizontal line at the top within the element.
==================================================
t1 before:bt-1 before:block
--------------------------------------------------
.t1.before\:block:before {
	display: block;
	content: "";
}
.t1.before\:bt-1:before {
	border-top-width: 1px;
	content: "";
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


