# TURBO-SPEC-FORMAT-V1

# TITLE
Self selector

# SHORT
Apply styles to the subtree of the current element.

# LONG
The self selector allows you to apply styles to the subtree of the current element.
Use this power only when you have no alternative options, like when applying styles
to the contents of a WYSIWYG editor where you can't influence the applied classes.

# SYNTAX
@/../B
.{self} B {
	...
}

# SYNTAX
@>B
.{self} > B {
	...
}

# SYNTAX
@~B
.{self} ~ B {
	...
}

# SYNTAX
@+B
.{self} + B {
	...
}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Give a top-border to all direct children except
the first one.
==================================================
t1 @/not-first:bt-1-black
--------------------------------------------------
.t1.\@\/not-first\:bt-1-black > *:not(:first-child) {
	border-top: 1px solid #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set the text color of all elements within the
subtree of the current element to black.
==================================================
t1 @/../color-black
--------------------------------------------------
.t1.\@\/\.\.\/color-black * {
	color: #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Adding the self selector by itself has no effects.
==================================================
t1 @color-black
--------------------------------------------------
.t1.\@color-black {
	color: #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set the text color of all anchors within the
subtree of the current element to black.
==================================================
t1 @/../a:color-black
--------------------------------------------------
.t1.\@\/\.\.\/a\:color-black a {
	color: #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


