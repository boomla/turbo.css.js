# TURBO-SPEC-FORMAT-V1

# TITLE
Descendant combinator

# SHORT
Match only descendants of certain elements.

# LONG
Match only elements that are descendants of those on the left side of the descendant combinator.

# SYNTAX
A/../B
A B {
	...
}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Change the text color to black if any of the element's ancestors are hovered.
==================================================
t1 hover:/../color-black
--------------------------------------------------
:hover .t1.hover\:\/\.\.\/color-black {
	color: #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Change the text color to black if element's grand-grand-parent or any of its ancestors are hovered.
==================================================
t1 hover:/../../../color-black
--------------------------------------------------
:hover * * .t1.hover\:\/\.\.\/\.\.\/\.\.\/color-black {
	color: #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


