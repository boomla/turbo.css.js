# TURBO-SPEC-FORMAT-V1

# TITLE
Device type

# SHORT
Only apply a utility for a certain device type.

# LONG
Only apply a utility for a certain device type.

# SYNTAX
screen:
@media screen { ... }

# SYNTAX
print:
@media print { ... }

# SYNTAX
speech:
@media speech { ... }


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Set the text color to black on screen media.
==================================================
t1 screen:color-black
--------------------------------------------------
@media screen {
	.t1.screen\:color-black {
		color: #000000;
	}
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Underline text on print media.
==================================================
t1 print:underline
--------------------------------------------------
@media print {
	.t1.print\:underline {
		text-decoration: underline;
	}
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Hide text on speech media.
==================================================
t1 speech:hidden
--------------------------------------------------
@media speech {
	.t1.speech\:hidden {
		display: none;
	}
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


