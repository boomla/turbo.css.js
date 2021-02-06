# TURBO-SPEC-FORMAT-V1

# TITLE
Fill

# SHORT
Set the SVG fill color.

# LONG
Set the SVG fill color.

# SYNTAX
fill-{...color}
fill: {...};

# ARGUMENT
...color <...color>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Passing color name.
==================================================
t1 fill-blue
--------------------------------------------------
.t1.fill-blue {
	fill: #12A4E2;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Passing color name and shade.
==================================================
t1 fill-blue-500
--------------------------------------------------
.t1.fill-blue-500 {
	fill: #12A4E2;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Passing color name, shade, opacity.
==================================================
t1 fill-blue-500-50
--------------------------------------------------
.t1.fill-blue-500-50 {
	fill: #12A4E280;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Passing HEX color value in lowercase format.
==================================================
t1 fill-hex-abcdef
--------------------------------------------------
.t1.fill-hex-abcdef {
	fill: #ABCDEF;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Passing HEX color value in uppercase format.
==================================================
t1 fill-hex-ABCDEF
--------------------------------------------------
.t1.fill-hex-ABCDEF {
	fill: #ABCDEF;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Passing HEX color value with alpha channel.
==================================================
t1 fill-hex-12345678
--------------------------------------------------
.t1.fill-hex-12345678 {
	fill: #12345678;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Passing rgb color value.
==================================================
t1 fill-rgb-12-34-56
--------------------------------------------------
.t1.fill-rgb-12-34-56 {
	fill: rgb(12, 34, 56);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Passing rgba color value.
==================================================
t1 fill-rgb-12-34-56-78
--------------------------------------------------
.t1.fill-rgb-12-34-56-78 {
	fill: rgba(12, 34, 56, 78%);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Passing hsl color value.
==================================================
t1 fill-hsl-60-20-40
--------------------------------------------------
.t1.fill-hsl-60-20-40 {
	fill: hsl(60deg, 20%, 40%);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Passing hsla color value.
==================================================
t1 fill-hsl-60-20-40-66
--------------------------------------------------
.t1.fill-hsl-60-20-40-66 {
	fill: hsla(60deg, 20%, 40%, 66%);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE THAT FAILS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Unknown color name.
==================================================
t1 fill-unknownname
--------------------------------------------------
Error: unknown color definition [unknownname]
in class name [fill-unknownname]
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

