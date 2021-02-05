# TURBO-SPEC-FORMAT-V1

# TITLE
Flex box alignment

# SHORT
Shorthand utility for aligning flex box items in a flex container.

# LONG
Shorthand utility for aligning flex box items in a flex container.


# SYNTAX
flex-center
justify-content: center;
align-items: center;

# SYNTAX
flex-{justifyContent}-{alignItems}
justify-content: {justifyContent};
align-items: {alignItems};

# SYNTAX
flex-{justifyContent}-{alignItems}-{alignContent}
justify-content: {justifyContent};
align-items: {alignItems};
align-content: {alignContent};


# ARGUMENT
justifyContent start | center | end | between | around | evenly

# ARGUMENT
alignItems start | center | end | baseline | stretch

# ARGUMENT
alignContent start | center | end | between | around | evenly


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Center an item within a flex container.
==================================================
t1 flex-center
--------------------------------------------------
.t1.flex-center {
	justify-content: center;
	align-items: center;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Define a flex container, horizontally start-align,
vertically center items in it.
==================================================
t1 flex-start-center
--------------------------------------------------
.t1.flex-start-center {
	justify-content: flex-start;
	align-items: center;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Define a flex container, horizontally center,
vertically center items in it.
==================================================
t1 flex-center-center
--------------------------------------------------
.t1.flex-center-center {
	justify-content: center;
	align-items: center;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Define a flex container, horizontally end-align,
vertically center items in it.
==================================================
t1 flex-end-center
--------------------------------------------------
.t1.flex-end-center {
	justify-content: flex-end;
	align-items: center;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Define a flex container, distribute horizontal
space between the items, vertically center them.
==================================================
t1 flex-between-center
--------------------------------------------------
.t1.flex-between-center {
	justify-content: space-between;
	align-items: center;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Define a flex container, distribute horizontal
space around the items, vertically center them.
==================================================
t1 flex-around-center
--------------------------------------------------
.t1.flex-around-center {
	justify-content: space-around;
	align-items: center;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Define a flex container, distribute horizontal
space evenly around the items, vertically center
them.
==================================================
t1 flex-evenly-center
--------------------------------------------------
.t1.flex-evenly-center {
	justify-content: space-evenly;
	align-items: center;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Define a flex container, horizontally center,
vertically align items to the start.
==================================================
t1 flex-center-start
--------------------------------------------------
.t1.flex-center-start {
	justify-content: center;
	align-items: flex-start;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Define a flex container, horizontally center,
vertically align items to the end.
==================================================
t1 flex-center-end
--------------------------------------------------
.t1.flex-center-end {
	justify-content: center;
	align-items: flex-end;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Define a flex container, horizontally center,
vertically align items to the baseline.
==================================================
t1 flex-center-baseline
--------------------------------------------------
.t1.flex-center-baseline {
	justify-content: center;
	align-items: baseline;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Define a flex container, horizontally center,
vertically stretch items in it.
==================================================
t1 flex-center-stretch
--------------------------------------------------
.t1.flex-center-stretch {
	justify-content: center;
	align-items: stretch;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Define a flex container, horizontally and
vertically center items in it, vertically align
multiple rows to the start.
==================================================
t1 flex-center-center-start
--------------------------------------------------
.t1.flex-center-center-start {
	justify-content: center;
	align-items: center;
	align-content: flex-start;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Define a flex container, horizontally and
vertically center items in it, vertically center
multiple rows.
==================================================
t1 flex-center-center-center
--------------------------------------------------
.t1.flex-center-center-center {
	justify-content: center;
	align-items: center;
	align-content: center;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Define a flex container, horizontally and
vertically center items in it, vertically align
multiple rows to the end.
==================================================
t1 flex-center-center-end
--------------------------------------------------
.t1.flex-center-center-end {
	justify-content: center;
	align-items: center;
	align-content: flex-end;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Define a flex container, horizontally and
vertically center items in it, vertically
distribute space between multiple rows.
==================================================
t1 flex-center-center-between
--------------------------------------------------
.t1.flex-center-center-between {
	justify-content: center;
	align-items: center;
	align-content: space-between;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Define a flex container, horizontally and
vertically center items in it, vertically
distribute space around multiple rows.
==================================================
t1 flex-center-center-around
--------------------------------------------------
.t1.flex-center-center-around {
	justify-content: center;
	align-items: center;
	align-content: space-around;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Define a flex container, horizontally and
vertically center items in it, vertically
distribute space evenly around multiple rows.
==================================================
t1 flex-center-center-evenly
--------------------------------------------------
.t1.flex-center-center-evenly {
	justify-content: center;
	align-items: center;
	align-content: space-evenly;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


