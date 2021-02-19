# TURBO-SPEC-FORMAT-V1

# TITLE
After sibling combinator

# SHORT
Match all successive siblings after a certain element.

# LONG
Match only elements that are successive siblings of those on the left side of the after sibling combinator.

# SYNTAX
A~B
A ~ B {
	...
}


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Change the text color to black if any of the element's previous siblings are hovered.
==================================================
t1 hover:~color-black
--------------------------------------------------
:hover ~ .t1.hover\:\~color-black {
	color: #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Change the text color to black if any of the element's parent's previous siblings are hovered.
==================================================
t1 hover:~/color-black
--------------------------------------------------
:hover ~ * > .t1.hover\:\~\/color-black {
	color: #000000;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


