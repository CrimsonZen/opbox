import React from 'react';

const CStick = () => (
  <svg className="c-stick">
  </svg>
)

const RoundButton = (classNames, content) => (
  // alignment here guaranteed wonky, gotta look up that text-anchor weirdness
  <svg className={["round-button", ...classNames].join(" ")} viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="18" />
    <text className="button-content" textAnchor="middle" x="20" y="28">{ content }</text>
  </svg>
)

const AButton = () => RoundButton(["a-button"], "A")
const BButton = () => RoundButton(["b-button"], "B")

export {
  CStick,
  RoundButton,
  AButton,
  BButton,
};
