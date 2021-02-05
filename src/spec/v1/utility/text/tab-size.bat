# TURBO-SPEC-FORMAT-V1

# TITLE
Tab size

# SHORT
Set the width of tab characters.

# LONG
Set the width of tab characters.

# SYNTAX
tab-{value}
tab-size: {value};


# ARGUMENT NAME
value

# ARGUMENT TYPE
<uint32>
Number of characters.

# ARGUMENT TYPE
<length unsigned>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Tab size as number
==================================================
t1 tab-4
--------------------------------------------------
.t1.tab-4 {
	tab-size: 4;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Tab size as length
==================================================
t1 tab-20px
--------------------------------------------------
.t1.tab-20px {
	tab-size: 20px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


