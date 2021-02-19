# TURBO-SPEC-FORMAT-V1

# TITLE
Border

# SHORT
Shorthand utility to set border width, style and color.

# LONG
Shorthand utility to set border width, style and color.


# SYNTAX
b-{width}-{...color}
border: {width} solid {color};

# SYNTAX
bx-{width}-{...color}
border-left: {width} solid {color};
border-right: {width} solid {color};

# SYNTAX
by-{width}-{...color}
border-top: {width} solid {color};
border-bottom: {width} solid {color};

# SYNTAX
bt-{width}-{...color}
border-top: {width} solid {color};

# SYNTAX
br-{width}-{...color}
border-right: {width} solid {color};

# SYNTAX
bb-{width}-{...color}
border-bottom: {width} solid {color};

# SYNTAX
bl-{width}-{...color}
border-left: {width} solid {color};

# SYNTAX
b-{width}-{style}-{...color}
border: {width} {style} {color};

# SYNTAX
bx-{width}-{style}-{...color}
border-left: {width} {style} {color};
border-right: {width} {style} {color};

# SYNTAX
by-{width}-{style}-{...color}
border-top: {width} {style} {color};
border-bottom: {width} {style} {color};

# SYNTAX
bt-{width}-{style}-{...color}
border-top: {width} {style} {color};

# SYNTAX
br-{width}-{style}-{...color}
border-right: {width} {style} {color};

# SYNTAX
bb-{width}-{style}-{...color}
border-bottom: {width} {style} {color};

# SYNTAX
bl-{width}-{style}-{...color}
border-left: {width} {style} {color};


# ARGUMENT
width <length unsigned default-unit=1px>

# ARGUMENT
style solid | dashed | dotted | double | none

# ARGUMENT
...color <...color>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px black border in default solid style.
==================================================
t1 b-1-black
--------------------------------------------------
.t1.b-1-black {
	border: 1px solid #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px solid black border.
==================================================
t1 b-1-dashed-black
--------------------------------------------------
.t1.b-1-dashed-black {
	border: 1px dashed #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px black left and right border in default solid
style.
==================================================
t1 bx-1-black
--------------------------------------------------
.t1.bx-1-black {
	border-left: 1px solid #000000;
	border-right: 1px solid #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px dashed black left and right border.
==================================================
t1 bx-1-dashed-black
--------------------------------------------------
.t1.bx-1-dashed-black {
	border-left: 1px dashed #000000;
	border-right: 1px dashed #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px black top and bottom border in default solid style.
==================================================
t1 by-1-black
--------------------------------------------------
.t1.by-1-black {
	border-top: 1px solid #000000;
	border-bottom: 1px solid #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px dashed black top and bottom border.
==================================================
t1 by-1-dashed-black
--------------------------------------------------
.t1.by-1-dashed-black {
	border-top: 1px dashed #000000;
	border-bottom: 1px dashed #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px black top border in default solid style.
==================================================
t1 bt-1-black
--------------------------------------------------
.t1.bt-1-black {
	border-top: 1px solid #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px solid black top border.
==================================================
t1 bt-1-dashed-black
--------------------------------------------------
.t1.bt-1-dashed-black {
	border-top: 1px dashed #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px black right border in default solid style.
==================================================
t1 br-1-black
--------------------------------------------------
.t1.br-1-black {
	border-right: 1px solid #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px solid black right border.
==================================================
t1 br-1-dashed-black
--------------------------------------------------
.t1.br-1-dashed-black {
	border-right: 1px dashed #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px black bottom border in default solid style.
==================================================
t1 bb-1-black
--------------------------------------------------
.t1.bb-1-black {
	border-bottom: 1px solid #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px solid black bottom border.
==================================================
t1 bb-1-dashed-black
--------------------------------------------------
.t1.bb-1-dashed-black {
	border-bottom: 1px dashed #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px black left border in default solid style.
==================================================
t1 bl-1-black
--------------------------------------------------
.t1.bl-1-black {
	border-left: 1px solid #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
1px solid black left border.
==================================================
t1 bl-1-dashed-black
--------------------------------------------------
.t1.bl-1-dashed-black {
	border-left: 1px dashed #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Definition order. `bl` shall override `bx` which
in turn shall override the most generic `b`.
==================================================
t1
b-1-black
bx-1-black
by-1-black
bt-1-black
bl-1-black
bb-1-black
br-1-black
--------------------------------------------------
.t1.b-1-black {
	border: 1px solid #000000;
}
.t1.bx-1-black {
	border-left: 1px solid #000000;
	border-right: 1px solid #000000;
}
.t1.by-1-black {
	border-top: 1px solid #000000;
	border-bottom: 1px solid #000000;
}
.t1.bt-1-black {
	border-top: 1px solid #000000;
}
.t1.br-1-black {
	border-right: 1px solid #000000;
}
.t1.bb-1-black {
	border-bottom: 1px solid #000000;
}
.t1.bl-1-black {
	border-left: 1px solid #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Definition order. `bl` shall override `bx` which
in turn shall override the most generic `b`.
==================================================
t1
b-1-dashed-black
bx-1-dashed-black
by-1-dashed-black
bt-1-dashed-black
br-1-dashed-black
bb-1-dashed-black
bl-1-dashed-black
--------------------------------------------------
.t1.b-1-dashed-black {
	border: 1px dashed #000000;
}
.t1.bx-1-dashed-black {
	border-left: 1px dashed #000000;
	border-right: 1px dashed #000000;
}
.t1.by-1-dashed-black {
	border-top: 1px dashed #000000;
	border-bottom: 1px dashed #000000;
}
.t1.bt-1-dashed-black {
	border-top: 1px dashed #000000;
}
.t1.br-1-dashed-black {
	border-right: 1px dashed #000000;
}
.t1.bb-1-dashed-black {
	border-bottom: 1px dashed #000000;
}
.t1.bl-1-dashed-black {
	border-left: 1px dashed #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

