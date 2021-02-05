# TURBO-SPEC-FORMAT-V1

# TITLE
Ununchecked

# SHORT
Only apply a utility if the element is unchecked.

# LONG
Only apply a utility if the element is unchecked.

# SYNTAX
{...}unchecked:{...}
{...}:not(:checked){...}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set opacity to 100% when unchecked.
==================================================
t1 unchecked:opacity-100
--------------------------------------------------
.t1.unchecked\:opacity-100:not(:checked) {
	opacity: 1;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


