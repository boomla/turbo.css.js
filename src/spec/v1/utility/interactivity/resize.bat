# TURBO-SPEC-FORMAT-V1

# TITLE
Resize

# SHORT
Select in which directions an element shall be resizable.

# LONG
Select in which directions an element shall be resizable.


# SYNTAX
resize-none
resize: none;

# SYNTAX
resize-x
resize: vertical;

# SYNTAX
resize-y
resize: horizontal;

# SYNTAX
resize
resize: both;


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Do not allow resizing.
==================================================
t1 resize-none
--------------------------------------------------
.t1.resize-none {
	resize: none;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Allow horizontal resizing only.
==================================================
t1 resize-x
--------------------------------------------------
.t1.resize-x {
	resize: horizontal;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Allow vertical resizing only.
==================================================
t1 resize-y
--------------------------------------------------
.t1.resize-y {
	resize: vertical;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Allow both horizontal and vertical resizing.
==================================================
t1 resize
--------------------------------------------------
.t1.resize {
	resize: both;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


