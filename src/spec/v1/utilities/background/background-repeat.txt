# TURBO-SPEC-FORMAT-V1

# TITLE
Background repeat

# SHORT
Set how background imagese are repeated.

# LONG
Set how background imagese are repeated.

# SYNTAX
bg-repeat
background-repeat: repeat;

# SYNTAX
bg-no-repeat
background-repeat: no-repeat;

# SYNTAX
bg-repeat-x
background-repeat: repeat-x;

# SYNTAX
bg-repeat-y
background-repeat: repeat-y;

# SYNTAX
bg-repeat-round
background-repeat: round;

# SYNTAX
bg-repeat-space
background-repeat: space;



# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Repeat
==================================================
t1 bg-repeat
--------------------------------------------------
.t1.bg-repeat {
	background-repeat: repeat;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
No repeat
==================================================
t1 bg-no-repeat
--------------------------------------------------
.t1.bg-no-repeat {
	background-repeat: no-repeat;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Repeat along X axis only
==================================================
t1 bg-repeat-x
--------------------------------------------------
.t1.bg-repeat-x {
	background-repeat: repeat-x;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Repeat along Y axis only
==================================================
t1 bg-repeat-y
--------------------------------------------------
.t1.bg-repeat-y {
	background-repeat: repeat-y;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Repeat and stretch the background image to cover the entire element
whole number of times, using the closest (round) number of repetitions.
==================================================
t1 bg-repeat-round
--------------------------------------------------
.t1.bg-repeat-round {
	background-repeat: round;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Repeat the background image as many times as it fits onto the element without stretching.
The background will shine through in the gaps.
==================================================
t1 bg-repeat-space
--------------------------------------------------
.t1.bg-repeat-space {
	background-repeat: space;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


