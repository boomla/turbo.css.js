# TURBO-SPEC-FORMAT-V1

# TITLE
Checked

# SHORT
Only apply a utility if the element is checked.

# LONG
Only apply a utility if the element is checked.

# SYNTAX
{...}checked:{...}
{...}:checked{...}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set opacity to 100% when checked.
==================================================
t1 checked:opacity-100
--------------------------------------------------
.t1.checked\:opacity-100:checked {
	opacity: 1;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


