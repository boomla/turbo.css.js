# TURBO-SPEC-FORMAT-V1

# TITLE
Next sibling combinator

# SHORT
Match only immediate next siblings of certain elements.

# LONG
Match only elements that are immediate next siblings of those on the left side of the next sibling combinator.

# SYNTAX
A+B
A + B {
	...
}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Change the text color to black if the element's previous sibling is hovered.
==================================================
t1 hover:+color-black
--------------------------------------------------
:hover + .t1.hover\:\+color-black {
	color: #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Change the text color to black if the element's 3rd-previous sibling is hovered.
==================================================
t1 hover:+++color-black
--------------------------------------------------
:hover + * + * + .t1.hover\:\+\+\+color-black {
	color: #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Change the text color to black if the element's parent's previous sibling is hovered.
==================================================
t1 hover:+/color-black
--------------------------------------------------
:hover + * > .t1.hover\:\+\/color-black {
	color: #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


