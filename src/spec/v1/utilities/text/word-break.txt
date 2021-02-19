# TURBO-SPEC-FORMAT-V1

# TITLE
Word break

# SHORT
Set if line breaks shall appear where text would otherwise overflow.

# LONG
Set if line breaks shall appear where text would otherwise overflow.

# SYNTAX
break-normal
overflow-wrap: normal;
word-break: normal;

# SYNTAX
break-words
overflow-wrap: break-word;

# SYNTAX
break-all
word-break: break-all;



# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Add line breaks at word boundaries only.
==================================================
t1 break-normal
--------------------------------------------------
.t1.break-normal {
	overflow-wrap: normal;
	word-break: normal;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Add line breaks anywhere if necessary.
==================================================
t1 break-words
--------------------------------------------------
.t1.break-words {
	overflow-wrap: break-word;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Ignore word boundaries, happily break text by any letter.
==================================================
t1 break-all
--------------------------------------------------
.t1.break-all {
	word-break: break-all;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


