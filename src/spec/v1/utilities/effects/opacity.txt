# TURBO-SPEC-FORMAT-V1

# TITLE
Opacity

# SHORT
Set the opacity of an element, the opposite of transparency.

# LONG
Set the opacity of an element, the opposite of transparency.

# SYNTAX
opacity-{value}
opacity: {value};


# ARGUMENT
value <uint32 default-unit=0.01>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Fully opaque.
==================================================
t1 opacity-100
--------------------------------------------------
.t1.opacity-100 {
	opacity: 1;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Half transparent.
==================================================
t1 opacity-50
--------------------------------------------------
.t1.opacity-50 {
	opacity: 0.5;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Transparent
==================================================
t1 opacity-0
--------------------------------------------------
.t1.opacity-0 {
	opacity: 0;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


