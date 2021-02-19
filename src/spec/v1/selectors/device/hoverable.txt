# TURBO-SPEC-FORMAT-V1

# TITLE
Hoverable

# SHORT
Only apply a utility on devices that support hovering.

# LONG
Only apply a utility on devices that support hovering.

# SYNTAX
hoverable:
@media (hover: hover) { ... }

# SYNTAX
not-hoverable:
@media (hover: none) { ... }


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Show element on devices that support hovering.
==================================================
t1 hoverable:block
--------------------------------------------------
@media (hover: hover) {
	.t1.hoverable\:block {
		display: block;
	}
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Show element on devices that do not support hovering.
==================================================
t1 not-hoverable:block
--------------------------------------------------
@media (hover: none) {
	.t1.not-hoverable\:block {
		display: block;
	}
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


