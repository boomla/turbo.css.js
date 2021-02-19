# TURBO-SPEC-FORMAT-V1

# TITLE
Overflow

# SHORT
Set how to display the element's contents if they don't fit into the container.

# LONG
Set how to display the element's contents if they don't fit into the container.


# SYNTAX
overflow-{value}
overflow: {value};

# SYNTAX
overflow-x-{value}
overflow-x: {value};

# SYNTAX
overflow-y-{value}
overflow-y: {value};


# ARGUMENT NAME
value

# ARGUMENT TYPE
auto

# ARGUMENT TYPE
hidden

# ARGUMENT TYPE
visible

# ARGUMENT TYPE
scroll


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Clip overflowing contents.
==================================================
t1 overflow-hidden
--------------------------------------------------
.t1.overflow-hidden {
	overflow: hidden;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Show overflowing contents.
==================================================
t1 overflow-visible
--------------------------------------------------
.t1.overflow-visible {
	overflow: visible;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Scroll contents.
==================================================
t1 overflow-scroll
--------------------------------------------------
.t1.overflow-scroll {
	overflow: scroll;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Scroll contents only when necessary.
==================================================
t1 overflow-auto
--------------------------------------------------
.t1.overflow-auto {
	overflow: auto;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Clip overflowing contents along the X axis.
==================================================
t1 overflow-x-hidden
--------------------------------------------------
.t1.overflow-x-hidden {
	overflow-x: hidden;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Clip overflowing contents along the y axis.
==================================================
t1 overflow-y-hidden
--------------------------------------------------
.t1.overflow-y-hidden {
	overflow-y: hidden;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


