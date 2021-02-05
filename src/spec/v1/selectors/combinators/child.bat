# TURBO-SPEC-FORMAT-V1

# TITLE
Child combinator

# SHORT
Match only direct children of certain elements.

# LONG
Match only elements that are direct children of those on the left side of the child combinator.

# SYNTAX
A>B
A > B {
	...
}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Only apply utility if the element has a parent.
==================================================
t1 /color-black
--------------------------------------------------
* > .t1.\/color-black {
	color: #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Only apply utility if the element has three parents.
==================================================
t1 ///color-black
--------------------------------------------------
* > * > * > .t1.\/\/\/color-black {
	color: #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Change the text color to black if the element's parent is hovered.
==================================================
t1 hover:/color-black
--------------------------------------------------
:hover > .t1.hover\:\/color-black {
	color: #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Change the text color to black if the element's grand-grand-parent is hovered.
==================================================
t1 hover:///color-black
--------------------------------------------------
:hover > * > * > .t1.hover\:\/\/\/color-black {
	color: #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


