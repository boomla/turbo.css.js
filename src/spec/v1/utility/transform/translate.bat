# TURBO-SPEC-FORMAT-V1

# TITLE
Translate

# SHORT
Shift an element.

# LONG
Shift an element.

# SYNTAX
transform-(translate-{x}-{y})
transform: translateX({x}) translateY({y});

# ARGUMENT
x <length-percentage default-unit=1px>

# ARGUMENT
y <length-percentage default-unit=1px>



# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Shift by 2px to the right and by 3px downwards.
==================================================
t1 transform-translate-2-3
--------------------------------------------------
.t1.transform-translate-2-3 {
	transform: translate(2px, 3px);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Shift by 20px to the left and by 30px upwards.
==================================================
t1 transform-translate--20--30
--------------------------------------------------
.t1.transform-translate--20--30 {
	transform: translate(-20px, -30px);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Shift by 20px to the left and by 30px upwards.
==================================================
t1 transform-translate--50%-0%
--------------------------------------------------
.t1.transform-translate--50\%-0\% {
	transform: translate(-50%, 0%);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


