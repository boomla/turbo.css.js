# TURBO-SPEC-FORMAT-V1

# TITLE
Viewport width

# SHORT
Only apply a utility when the viewport has at least a certain width.

# LONG
Only apply a utility when the viewport has at least a certain width.

# SYNTAX
w6:
@media (min-width: 640px) { ... }

# SYNTAX
w7:
@media (min-width: 768px) { ... }

# SYNTAX
w10:
@media (min-width: 1024px) { ... }

# SYNTAX
w12:
@media (min-width: 1280px) { ... }

# SYNTAX
w14:
@media (min-width: 1440px) { ... }

# SYNTAX
w15:
@media (min-width: 1536px) { ... }

# SYNTAX
w19:
@media (min-width: 1920px) { ... }


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set the text color to black on viewports at least 375px wide.
==================================================
t1 w3:color-black
--------------------------------------------------
@media (min-width: 375px) {
	.t1.w3\:color-black {
		color: #000000;
	}
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set the text color to black on viewports at least 640px wide.
==================================================
t1 w6:color-black
--------------------------------------------------
@media (min-width: 640px) {
	.t1.w6\:color-black {
		color: #000000;
	}
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set the text color to black on viewports at least 768px wide.
==================================================
t1 w7:color-black
--------------------------------------------------
@media (min-width: 768px) {
	.t1.w7\:color-black {
		color: #000000;
	}
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set the text color to black on viewports at least 1024px wide.
==================================================
t1 w10:color-black
--------------------------------------------------
@media (min-width: 1024px) {
	.t1.w10\:color-black {
		color: #000000;
	}
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set the text color to black on viewports at least 1280px wide.
==================================================
t1 w12:color-black
--------------------------------------------------
@media (min-width: 1280px) {
	.t1.w12\:color-black {
		color: #000000;
	}
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set the text color to black on viewports at least 1440px wide.
==================================================
t1 w14:color-black
--------------------------------------------------
@media (min-width: 1440px) {
	.t1.w14\:color-black {
		color: #000000;
	}
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set the text color to black on viewports at least 1536px wide.
==================================================
t1 w15:color-black
--------------------------------------------------
@media (min-width: 1536px) {
	.t1.w15\:color-black {
		color: #000000;
	}
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set the text color to black on viewports at least 1920px wide.
==================================================
t1 w19:color-black
--------------------------------------------------
@media (min-width: 1920px) {
	.t1.w19\:color-black {
		color: #000000;
	}
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Media blocks shall be ordered by min-width.
==================================================
t1
color-black
w3:color-black
w6:color-black
w7:color-black
w10:color-black
w12:color-black
w14:color-black
w15:color-black
w19:color-black
--------------------------------------------------
.t1.color-black {
	color: #000000;
}
@media (min-width: 375px) {
	.t1.w3\:color-black {
		color: #000000;
	}
}
@media (min-width: 640px) {
	.t1.w6\:color-black {
		color: #000000;
	}
}
@media (min-width: 768px) {
	.t1.w7\:color-black {
		color: #000000;
	}
}
@media (min-width: 1024px) {
	.t1.w10\:color-black {
		color: #000000;
	}
}
@media (min-width: 1280px) {
	.t1.w12\:color-black {
		color: #000000;
	}
}
@media (min-width: 1440px) {
	.t1.w14\:color-black {
		color: #000000;
	}
}
@media (min-width: 1536px) {
	.t1.w15\:color-black {
		color: #000000;
	}
}
@media (min-width: 1920px) {
	.t1.w19\:color-black {
		color: #000000;
	}
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Media blocks shall be ordered by min-width.
==================================================
t1
w19:color-black
w15:color-black
w14:color-black
w12:color-black
w10:color-black
w7:color-black
w6:color-black
w3:color-black
color-black
--------------------------------------------------
.t1.color-black {
	color: #000000;
}
@media (min-width: 375px) {
	.t1.w3\:color-black {
		color: #000000;
	}
}
@media (min-width: 640px) {
	.t1.w6\:color-black {
		color: #000000;
	}
}
@media (min-width: 768px) {
	.t1.w7\:color-black {
		color: #000000;
	}
}
@media (min-width: 1024px) {
	.t1.w10\:color-black {
		color: #000000;
	}
}
@media (min-width: 1280px) {
	.t1.w12\:color-black {
		color: #000000;
	}
}
@media (min-width: 1440px) {
	.t1.w14\:color-black {
		color: #000000;
	}
}
@media (min-width: 1536px) {
	.t1.w15\:color-black {
		color: #000000;
	}
}
@media (min-width: 1920px) {
	.t1.w19\:color-black {
		color: #000000;
	}
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


