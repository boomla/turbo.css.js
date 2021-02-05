# TURBO-SPEC-FORMAT-V1

# TITLE
Text overflow

# SHORT
Set how hidden cropped content is visualized to users.

# LONG
Set how hidden cropped content is visualized to users.

# SYNTAX
text-overflow-ellipsis
text-overflow: ellipsis;

# SYNTAX
text-overflow-clip
text-overflow: clip;

# SYNTAX
text-truncate
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;



# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Show an ellipsis where overflowing content is cropped.
==================================================
t1 text-overflow-ellipsis
--------------------------------------------------
.t1.text-overflow-ellipsis {
	text-overflow: ellipsis;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Just crop overflowing content, do not provide any hint.
==================================================
t1 text-overflow-clip
--------------------------------------------------
.t1.text-overflow-clip {
	text-overflow: clip;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Shorthand utility to force text on a single line and show an ellipsis when the text is overflowing.
==================================================
t1 text-truncate
--------------------------------------------------
.t1.text-truncate {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


