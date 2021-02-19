# TURBO-SPEC-FORMAT-V1

# TITLE
Invalid

# SHORT
Only apply a utility if the element's content is invalid.

# LONG
Only apply a utility if the element's content is invalid.

# SYNTAX
{...}invalid:{...}
{...}:invalid{...}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set text color to green when invalid.
==================================================
t1 invalid:color-hex-FF0000
--------------------------------------------------
.t1.invalid\:color-hex-FF0000:invalid {
	color: #FF0000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


