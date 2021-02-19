# TURBO-SPEC-FORMAT-V1

# TITLE
Transition delay

# SHORT
Set the duration to wait before starting a transition animation.

# LONG
Set the duration to wait before starting a transition animation.

# SYNTAX
delay-{value}
transition-delay: {value};

# ARGUMENT
value <time default-unit=1ms>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
100ms delay
==================================================
t1 delay-100
--------------------------------------------------
.t1.delay-100 {
	transition-delay: 100ms;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


