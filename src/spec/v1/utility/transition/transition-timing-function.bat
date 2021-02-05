# TURBO-SPEC-FORMAT-V1

# TITLE
Transition timing function

# SHORT
Set how intermediate values are calculated during the time of a transition animation.

# LONG
Set how intermediate values are calculated during the time of a transition animation.

# SYNTAX
ease-linear
transition-timing-function: linear;

# SYNTAX
ease-in
transition-timing-function: cubic-bezier(0.4, 0, 1, 1);

# SYNTAX
ease-out
transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

# SYNTAX
ease-in-out
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);



# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
ease-linear
==================================================
t1 ease-linear
--------------------------------------------------
.t1.ease-linear {
	transition-timing-function: linear;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
ease-in
==================================================
t1 ease-in
--------------------------------------------------
.t1.ease-in {
	transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
ease-out
==================================================
t1 ease-out
--------------------------------------------------
.t1.ease-out {
	transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
ease-in-out
==================================================
t1 ease-in-out
--------------------------------------------------
.t1.ease-in-out {
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


