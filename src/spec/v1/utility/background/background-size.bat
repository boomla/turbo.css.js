# TURBO-SPEC-FORMAT-V1

# TITLE
Background size

# SHORT
Set how the element's background image shall be sized.

# LONG
Set how the element's background image shall be sized.

# SYNTAX
bg-cover
background-size: cover;

# SYNTAX
bg-contain
background-size: contain;

# SYNTAX
bg-size-auto
background-size: auto;

# SYNTAX
bg-size-{width}-{height}
background-size: {width} {height};


# ARGUMENT NAME
width

# ARGUMENT TYPE
<length-percentage unsigned default-unit=1px>

# ARGUMENT TYPE
auto

# ARGUMENT NAME
height

# ARGUMENT TYPE
<length-percentage unsigned default-unit=1px>

# ARGUMENT TYPE
auto




# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Cover the element by the background image.
==================================================
t1 bg-cover
--------------------------------------------------
.t1.bg-cover {
	background-size: cover;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
The element shall contain the entire background image.
==================================================
t1 bg-cover
--------------------------------------------------
.t1.bg-cover {
	background-size: cover;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Show the background image at its intrinsic size.
==================================================
t1 bg-size-auto
--------------------------------------------------
.t1.bg-size-auto {
	background-size: auto;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Show the background image at width and height values provided as unitless numbers.
==================================================
t1 bg-size-10-20
--------------------------------------------------
.t1.bg-size-10-20 {
	background-size: 10px 20px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Show the background image at width and height values provided in pixel units.
==================================================
t1 bg-size-10px-20px
--------------------------------------------------
.t1.bg-size-10px-20px {
	background-size: 10px 20px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Show the background image at width and height values provided in percentages.
==================================================
t1 bg-size-50%-100%
--------------------------------------------------
.t1.bg-size-50\%-100\% {
	background-size: 50% 100%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Show the background image at given size where
the width is defined as `auto`.
==================================================
t1 bg-size-auto-100
--------------------------------------------------
.t1.bg-size-auto-100 {
	background-size: auto 100px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Show the background image at given size where
the height is defined as `auto`.
==================================================
t1 bg-size-50-auto
--------------------------------------------------
.t1.bg-size-50-auto {
	background-size: 50px auto;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


