# TURBO-SPEC-FORMAT-V1

# TITLE
Even

# SHORT
Only apply a utility when the element has an even numeric position among its siblings.

# LONG
Only apply a utility when the element has an even numeric position among its siblings.

# SYNTAX
{...}even:{...}
{...}:nth-child(even){...}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Give even elements a subtle gray background.
==================================================
t1 even:bg-c-hex-F8F8F8
--------------------------------------------------
.t1.even\:bg-c-hex-F8F8F8:nth-child(even) {
	background-color: #F8F8F8;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


