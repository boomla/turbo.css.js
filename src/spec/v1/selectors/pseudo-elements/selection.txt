# TURBO-SPEC-FORMAT-V1

# TITLE
Selection

# SHORT
Apply styles to the area has been highlighted by the user.

# LONG
Apply styles to the area has been highlighted by the user.

# SYNTAX
{...}selection:{...}
{...}::selection{...}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set the background color of highlighted text to purple.
==================================================
t1 selection:bg-c-hex-C070F0
--------------------------------------------------
.t1.selection\:bg-c-hex-C070F0::selection {
	background-color: #C070F0;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


