# TURBO-SPEC-FORMAT-V1

# TITLE
Letter spacing

# SHORT
Set the horizontal spacing between letters.

# LONG
Set the horizontal spacing between letters.

# SYNTAX
letter-spacing-{value}
letter-spacing: {value};


# ARGUMENT NAME
value

# ARGUMENT TYPE
<length default-unit=0.1px>

# ARGUMENT TYPE
normal


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Letter spacing as number
==================================================
t1 letter-spacing-10
--------------------------------------------------
.t1.letter-spacing-10 {
	letter-spacing: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Letter spacing as length
==================================================
t1 letter-spacing-0.5px
--------------------------------------------------
.t1.letter-spacing-0\.5px {
	letter-spacing: 0.5px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set letter spacing to normal.
==================================================
t1 letter-spacing-normal
--------------------------------------------------
.t1.letter-spacing-normal {
	letter-spacing: normal;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


