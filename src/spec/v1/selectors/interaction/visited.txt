# TURBO-SPEC-FORMAT-V1

# TITLE
Visited

# SHORT
Only apply a utility when the element is a link that the user has visited before.

# LONG
Only apply a utility when the element is a link that the user has visited before.

# SYNTAX
{...}visited:{...}
{...}:visited{...}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Visited elements shall have a purple color.
==================================================
t1 visited:color-hex-8030C0
--------------------------------------------------
.t1.visited\:color-hex-8030C0:visited {
	color: #8030C0;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


