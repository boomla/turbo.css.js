# TURBO-SPEC-FORMAT-V1

# TITLE
User select

# SHORT
Set whether text contained by the element is user selectable.

# LONG
Set whether text contained by the element is user selectable.


# SYNTAX
select-none
user-select: none;

# SYNTAX
select-text
user-select: text;

# SYNTAX
select-all
user-select: all;

# SYNTAX
select-auto
user-select: auto;


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Disallow selecting the text.
==================================================
t1 select-none
--------------------------------------------------
.t1.select-none {
	user-select: none;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Allow selecting the text.
==================================================
t1 select-text
--------------------------------------------------
.t1.select-text {
	user-select: text;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Select the entire text contents all at once.
==================================================
t1 select-all
--------------------------------------------------
.t1.select-all {
	user-select: all;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Let the user agent determine.
==================================================
t1 select-auto
--------------------------------------------------
.t1.select-auto {
	user-select: auto;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


