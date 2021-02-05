# TURBO-SPEC-FORMAT-V1

# TITLE
List style type

# SHORT
Set the style of list item marker.

# LONG
Set the style of list item marker (bullet points, numbering).

# SYNTAX
list-none
list-style-type: none;

# SYNTAX
list-disc
list-style-type: disc;

# SYNTAX
list-decimal
list-style-type: decimal;


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Hide list item marker.
==================================================
t1 list-none
--------------------------------------------------
.t1.list-none {
	list-style-type: none;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Show bullet points before list entries.
==================================================
t1 list-disc
--------------------------------------------------
.t1.list-disc {
	list-style-type: disc;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Show numbers before list entries.
==================================================
t1 list-decimal
--------------------------------------------------
.t1.list-decimal {
	list-style-type: decimal;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


