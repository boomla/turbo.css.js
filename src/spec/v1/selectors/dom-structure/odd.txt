# TURBO-SPEC-FORMAT-V1

# TITLE
Odd

# SHORT
Only apply a utility when the element has an odd numeric position among its siblings.

# LONG
Only apply a utility when the element has an odd numeric position among its siblings.

# SYNTAX
{...}odd:{...}
{...}:nth-child(odd){...}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Give odd elements a subtle gray background.
==================================================
t1 odd:bg-c-hex-F8F8F8
--------------------------------------------------
.t1.odd\:bg-c-hex-F8F8F8:nth-child(odd) {
	background-color: #F8F8F8;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


