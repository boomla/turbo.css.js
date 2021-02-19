# TURBO-SPEC-FORMAT-V1

# TITLE
Font smoothing

# SHORT
Configure font smoothing.

# LONG
Configure font smoothing.

# SYNTAX
antialiased
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;

# SYNTAX
subpixel-antialiased
-webkit-font-smoothing: auto;
-moz-osx-font-smoothing: auto;


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
antialiased
==================================================
t1 antialiased
--------------------------------------------------
.t1.antialiased {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
subpixel-antialiased
==================================================
t1 subpixel-antialiased
--------------------------------------------------
.t1.subpixel-antialiased {
	-webkit-font-smoothing: auto;
	-moz-osx-font-smoothing: auto;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


