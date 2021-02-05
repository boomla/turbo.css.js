# TURBO-SPEC-FORMAT-V1

# TITLE
Transform

# SHORT
Apply geometric transformation to an element.

# LONG
Apply geometric transformation to an element.

# SYNTAX
transform-{transformFunction}
transform: {...};

# SYNTAX
transform-none
transform: none;

# ARGUMENT
transformFunction <...transformFunction>
One or more transform function specifications.


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
One transformation: scale down to 50%
==================================================
t1 transform-scale-50
--------------------------------------------------
.t1.transform-scale-50 {
	transform: scale(0.5);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Multiple transformations: scale, rotate, skew, translate.
==================================================
t1 transform-scale-50-rotate-90-skew-2-4-translate-10-20
--------------------------------------------------
.t1.transform-scale-50-rotate-90-skew-2-4-translate-10-20 {
	transform: scale(0.5) rotate(90deg) skew(2deg, 4deg) translate(10px, 20px);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Multiple transformations in different order:
translate, skew, rotate, scale.
==================================================
t1 transform-translate-10-20-skew-2-4-rotate-90-scale-50
--------------------------------------------------
.t1.transform-translate-10-20-skew-2-4-rotate-90-scale-50 {
	transform: translate(10px, 20px) skew(2deg, 4deg) rotate(90deg) scale(0.5);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
No transformation.
==================================================
t1 transform-none
--------------------------------------------------
.t1.transform-none {
	transform: none;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


