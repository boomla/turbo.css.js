# TURBO-SPEC-FORMAT-V1

# TITLE
Mode selector

# SHORT
Only apply a utility if the element has a certain mode class applied.

# LONG
Only apply a utility if the element has a certain mode class applied.
This is typically used for controlling views via JavaScript.

# SYNTAX
{...}mode-{...word}:{...}
{...}.mode-{...word}{...}

# ARGUMENT
word string


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Only show an element when the mode-show class is
added.
==================================================
t1 mode-show:flex
--------------------------------------------------
.t1.mode-show\:flex.mode-show {
	display: flex;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Mode selector with multiple words.
==================================================
t1 mode-show-with-multiple-words:flex
--------------------------------------------------
.t1.mode-show-with-multiple-words\:flex.mode-show-with-multiple-words {
	display: flex;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Only show an element when the grand-parent element
has the mode-show class added.
==================================================
t1 mode-show://flex
--------------------------------------------------
.mode-show > * > .t1.mode-show\:\/\/flex {
	display: flex;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Only show the element when any of its ancestors
has the mode-show class added.
==================================================
t1 mode-show:/../flex
--------------------------------------------------
.mode-show .t1.mode-show\:\/\.\.\/flex {
	display: flex;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Mode selectors may contain numbers and uppercase
letters.
==================================================
t1 mode-havingNumbers-1-2-3:flex
--------------------------------------------------
.t1.mode-havingNumbers-1-2-3\:flex.mode-havingNumbers-1-2-3 {
	display: flex;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
When using mode-open as a class, it does nothing.
It is not namespaced, no CSS is generated and no
error is thrown. It is used to match thus activate
other mode selectors.
==================================================
t1 mode-open
--------------------------------------------------
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Mode class name with multiple segments.
==================================================
t1 mode-class-name-with-multiple-segments
--------------------------------------------------
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Mode class with numbers in it.
==================================================
t1 mode-1-2-3
--------------------------------------------------
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


