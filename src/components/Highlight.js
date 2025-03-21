import React from 'react';

export default function Highlight({children, color}) {
  var underlineColor = color
  
  if (color == null) {
	color = "#ff990050"
	underlineColor = "#ff9900FF"
  }
  
  return (
    <span
      style={{
		textDecoration: "underline",
		textDecorationColor: underlineColor,
		fontStyle: 'italic',
		backgroundColor: color,
        borderRadius: '5px',
        color: '#000',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  );
}