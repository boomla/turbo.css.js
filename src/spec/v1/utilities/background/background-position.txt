# TURBO-SPEC-FORMAT-V1

# TITLE
Background position

# SHORT
Set the position of the element's background image.

# LONG
Set the position of the element's background image.

# SYNTAX
bg-{xPosName}
background-position: {xPosName};

# SYNTAX
bg-{yPosName}
background-position: {yPosName};

# SYNTAX
bg-{xPosName}-{yPosName}
background-position: {xPosName} {yPosName};

# SYNTAX
bg-{yPosName}-{xPosName}
background-position: {yPosName} {xPosName};

# SYNTAX
bg-pos-{xPos}-{yPos}
background-position: {xPos} {yPos};

# SYNTAX
bg-pos-x-{xPos}
background-position-x: {xPos};

# SYNTAX
bg-pos-y-{yPos}
background-position-y: {yPos};

# ARGUMENT
xPosName left | center | right
Horizontal background position.

# ARGUMENT
yPosName top | center | bottom
Vertical background position.

# ARGUMENT
xPos <length-percentage default-unit=1%>
Horizontal background position.

# ARGUMENT
yPos <length-percentage default-unit=1%>
Vertical background position.




# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Center
==================================================
t1 bg-center
--------------------------------------------------
.t1.bg-center {
	background-position: center;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Top
==================================================
t1 bg-top
--------------------------------------------------
.t1.bg-top {
	background-position: top;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Right top
==================================================
t1 bg-right-top
--------------------------------------------------
.t1.bg-right-top {
	background-position: right top;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Top right
==================================================
t1 bg-top-right
--------------------------------------------------
.t1.bg-top-right {
	background-position: top right;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Right
==================================================
t1 bg-right
--------------------------------------------------
.t1.bg-right {
	background-position: right;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Right bottom
==================================================
t1 bg-right-bottom
--------------------------------------------------
.t1.bg-right-bottom {
	background-position: right bottom;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Bottom right
==================================================
t1 bg-bottom-right
--------------------------------------------------
.t1.bg-bottom-right {
	background-position: bottom right;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Bottom
==================================================
t1 bg-bottom
--------------------------------------------------
.t1.bg-bottom {
	background-position: bottom;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Left bottom
==================================================
t1 bg-left-bottom
--------------------------------------------------
.t1.bg-left-bottom {
	background-position: left bottom;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Bottom left
==================================================
t1 bg-bottom-left
--------------------------------------------------
.t1.bg-bottom-left {
	background-position: bottom left;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Left
==================================================
t1 bg-left
--------------------------------------------------
.t1.bg-left {
	background-position: left;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Left top
==================================================
t1 bg-left-top
--------------------------------------------------
.t1.bg-left-top {
	background-position: left top;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Top left
==================================================
t1 bg-top-left
--------------------------------------------------
.t1.bg-top-left {
	background-position: top left;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Position provided as percentage.
==================================================
t1 bg-pos-10%-20%
--------------------------------------------------
.t1.bg-pos-10\%-20\% {
	background-position: 10% 20%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Position provided in px units.
==================================================
t1 bg-pos-10px-20px
--------------------------------------------------
.t1.bg-pos-10px-20px {
	background-position: 10px 20px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE THAT FAILS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Units must be provided when providing position in
numeric form
==================================================
t1 bg-pos-10-20
--------------------------------------------------
Error: invalid arguments passed to utility function [bg-pos] in [bg-pos-10-20]
invalid arguments passed to utility function [bg] in [bg-pos-10-20]
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Position X.
==================================================
t1 bg-pos-x-10%
--------------------------------------------------
.t1.bg-pos-x-10\% {
	background-position-x: 10%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Position Y.
==================================================
t1 bg-pos-y-10%
--------------------------------------------------
.t1.bg-pos-y-10\% {
	background-position-y: 10%;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


