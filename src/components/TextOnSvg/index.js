import React from 'react';
import { string, number } from 'prop-types';
import svgTextWrap from 'svg-text-wrap';

const TextOnSvg = (num) => {
    var unc = ""
      if (num == 1) {
        num = "#6852d2"
        unc = "!!"
      } else if (num == 2) {
        num = "#4222e2"
        unc = "<3"
      } else if (num == 3) {
        num = "#6852d2"
        unc = "_>"
      }
    var className = 'text-on-svg'
    var text = {unc}
    var width = 200
    var height = 200
    var textWidth = 0.8
    var fontSize = 48
    var fontWeight = 500
    var fontFamily = "DM Mono, Open Sans, Helvetica, Arial, sans-serif"
    var backgroundColor = {num}
    var color = '#FFFFFF'
  let lines = [];
  if (text) {
    lines = svgTextWrap(
      text,
      width * textWidth,
      {
        'letter-spacing': '1px',
        'style': `font-size: ${fontSize}px`,
      },
    ).map((line, index) => (
      <tspan
        key={index}
        x={width / 2}
        dy={fontSize + 2}>
        {line}
      </tspan>
    ));
  }
  const linesNumber = lines.length;

  return (
    <svg
      className={className}
      width={`${width}px`}
      height={`${height}px`}
      viewBox={`0 0 ${width} ${height}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect fill={backgroundColor} x="0" y="0" width={width} height={height} rx="10px"></rect>
        
        <text
          {...fontFamily !== '' ? {fontFamily: fontFamily} : {}}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fill={color}
          y={(height / 2) - 10 - ((fontSize / 2 + 1)  * linesNumber)}
          textAnchor="middle"
          alignmentBaseline="middle">
          {lines}
        </text>
      </g>
    </svg>
  )
};
export default TextOnSvg;