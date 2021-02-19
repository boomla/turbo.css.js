# TURBO-SPEC-FORMAT-V1

# TITLE
Pointer events

# SHORT
Select whether an element shall respond to pointer events.

# LONG
Select whether an element shall respond to pointer events.


# SYNTAX
pointer-events-none
pointer-events: none;

# SYNTAX
pointer-events-auto
pointer-events: auto;


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Do not respond to pointer events.
==================================================
t1 pointer-events-none
--------------------------------------------------
.t1.pointer-events-none {
	pointer-events: none;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Respond to pointer events.
==================================================
t1 pointer-events-auto
--------------------------------------------------
.t1.pointer-events-auto {
	pointer-events: auto;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


