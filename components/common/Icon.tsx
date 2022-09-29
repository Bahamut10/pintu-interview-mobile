import React, { SVGProps } from 'react';
import Svg, {
  Path,
  Mask,
  Circle,
  Rect,
  Ellipse,
  G,
  Defs,
  ClipPath,
  Line,
  SvgProps,
} from 'react-native-svg';

export const UpIcon = (props: SvgProps) => {
  return (
    <Svg
      width="16"
      height="14"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"
      />
    </Svg>
  );
};

export const DownIcon = (props: SvgProps) => {
  return (
    <Svg
      width="16"
      height="14"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"
      />
    </Svg>
  );
};
