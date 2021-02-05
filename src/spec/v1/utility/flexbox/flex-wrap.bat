# TURBO-SPEC-FORMAT-V1

# TITLE
Flex wrap

# SHORT
Force flex items onto a single line or let them wrap into multiple lines.

# LONG
Force flex items onto a single line or let them wrap into multiple lines.


# SYNTAX
flex-wrap
flex-wrap: wrap;

# SYNTAX
flex-wrap-reverse
flex-wrap: wrap-reverse;

# SYNTAX
flex-nowrap
flex-wrap: nowrap;



# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Wrap into multiple lines.
==================================================
t1 flex-wrap
--------------------------------------------------
.t1.flex-wrap {
	flex-wrap: wrap;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Do not wrap.
==================================================
t1 flex-nowrap
--------------------------------------------------
.t1.flex-nowrap {
	flex-wrap: nowrap;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Wrap in reverse order.
==================================================
t1 flex-wrap-reverse
--------------------------------------------------
.t1.flex-wrap-reverse {
	flex-wrap: wrap-reverse;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


