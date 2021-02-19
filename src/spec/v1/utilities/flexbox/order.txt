# TURBO-SPEC-FORMAT-V1

# TITLE
Order

# SHORT
Set the order of an item in a flex or grid container.

# LONG
Set the order of an item in a flex or grid container.


# SYNTAX
order-{value}
order: {value};

# SYNTAX
order-first
order: -9999;

# SYNTAX
order-last
order: 9999;


# ARGUMENT
value <int32>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Make it the first among the items.
==================================================
t1 order-first
--------------------------------------------------
.t1.order-first {
	order: -9999;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Make it the last among the items.
==================================================
t1 order-last
--------------------------------------------------
.t1.order-last {
	order: 9999;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Make it the second among the items.
==================================================
t1 order-2
--------------------------------------------------
.t1.order-2 {
	order: 2;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


