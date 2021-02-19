# TURBO-SPEC-FORMAT-V1

# TITLE
Skew

# SHORT
Skew an element.

# LONG
Skew an element.

# SYNTAX
transform-(skew-{x}-{y})
transform: skew({x}, {y});

# ARGUMENT
x <angle>

# ARGUMENT
y <angle>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Skew by 10deg, 20deg.
==================================================
t1 transform-skew-10-20
--------------------------------------------------
.t1.transform-skew-10-20 {
	transform: skew(10deg, 20deg);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Skew by -10deg, -20deg.
==================================================
t1 transform-skew--10--20
--------------------------------------------------
.t1.transform-skew--10--20 {
	transform: skew(-10deg, -20deg);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


