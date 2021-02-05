# TURBO-SPEC-FORMAT-V1

# TITLE
Enabled

# SHORT
Only apply a utility if the element is enabled.

# LONG
Only apply a utility if the element is enabled.

# SYNTAX
{...}enabled:{...}
{...}:enabled{...}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set opacity to 100% when enabled.
==================================================
t1 enabled:opacity-100
--------------------------------------------------
.t1.enabled\:opacity-100:enabled {
	opacity: 1;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


