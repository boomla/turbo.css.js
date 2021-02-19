# TURBO-SPEC-FORMAT-V1

# TITLE
Outline

# SHORT
Shorthand utility to set outline width, style and color.

# LONG
Shorthand utility to set outline width, style and color.


# SYNTAX
outline-{width}-{...color}
outline: {width} solid {color};

# SYNTAX
outline-{width}-{style}-{...color}
outline: {width} {style} {color};


# ARGUMENT
width <length unsigned default-unit=1px>

# ARGUMENT
style solid | dashed | dotted | double | none

# ARGUMENT
...color <...color>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px black outline in default solid style.
==================================================
t1 outline-1-black
--------------------------------------------------
.t1.outline-1-black {
	outline: 1px solid #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px dashed black outline.
==================================================
t1 outline-1-dashed-black
--------------------------------------------------
.t1.outline-1-dashed-black {
	outline: 1px dashed #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


