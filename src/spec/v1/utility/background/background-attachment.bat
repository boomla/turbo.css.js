# TURBO-SPEC-FORMAT-V1

# TITLE
Background attachment

# SHORT
Attach the background image to its containing block or the viewport.

# LONG
Attach the background image to its containing block or the viewport.

# SYNTAX
bg-fixed
background-attachment: fixed;

# SYNTAX
bg-local
background-attachment: local;

# SYNTAX
bg-scroll
background-attachment: scroll;



# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Attach the background image to the viewport.
==================================================
t1 bg-fixed
--------------------------------------------------
.t1.bg-fixed {
	background-attachment: fixed;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Attach the background image to the elements contents.
If scrolling is available, scroll with its contents.
==================================================
t1 bg-local
--------------------------------------------------
.t1.bg-local {
	background-attachment: local;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Attach the background image to the element itself.
Scrolling its contents doesn't affect the position of the background image.
==================================================
t1 bg-scroll
--------------------------------------------------
.t1.bg-scroll {
	background-attachment: scroll;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

