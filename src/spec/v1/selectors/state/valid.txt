# TURBO-SPEC-FORMAT-V1

# TITLE
Valid

# SHORT
Only apply a utility if the element's content is valid.

# LONG
Only apply a utility if the element's content is valid.

# SYNTAX
{...}valid:{...}
{...}:valid{...}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set text color to green when valid.
==================================================
t1 valid:color-hex-10B010
--------------------------------------------------
.t1.valid\:color-hex-10B010:valid {
	color: #10B010;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


