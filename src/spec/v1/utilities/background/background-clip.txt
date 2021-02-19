# TURBO-SPEC-FORMAT-V1

# TITLE
Background clip

# SHORT
Set the area that the element's background should be applied to.

# LONG
Set the area that the element's background should be applied to.

# SYNTAX
bg-clip-border
background-clip: border-box;

# SYNTAX
bg-clip-padding
background-clip: padding-box;

# SYNTAX
bg-clip-content
background-clip: content-box;

# SYNTAX
bg-clip-text
background-clip: text;


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Apply the background to the border-box, that is, including the border.
==================================================
t1 bg-clip-border
--------------------------------------------------
.t1.bg-clip-border {
	background-clip: border-box;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Apply the background to the padding-box, that is, include the padding but not the border.
==================================================
t1 bg-clip-padding
--------------------------------------------------
.t1.bg-clip-padding {
	background-clip: padding-box;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Apply the background to the content-box, that is, excluding the padding and the border.
==================================================
t1 bg-clip-content
--------------------------------------------------
.t1.bg-clip-content {
	background-clip: content-box;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Apply the background to the containing text only.
==================================================
t1 bg-clip-text
--------------------------------------------------
.t1.bg-clip-text {
	background-clip: text;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


