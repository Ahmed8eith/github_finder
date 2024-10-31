import React from 'react';

const Spinner = () => {
  console.log('Spinner is rendering');
  return (
    <div className="flex justify-center items-center h-48">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="200"
        height="200"
        style={{ shapeRendering: 'auto', display: 'block', background: 'none' }}
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <g transform="translate(80,50)">
            <g transform="rotate(0)">
              <circle fillOpacity="1" fill="#cfa8d3" r="6" cy="0" cx="0">
                <animateTransform
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  values="1.5 1.5;1 1"
                  begin="-0.875s"
                  type="scale"
                  attributeName="transform"
                />
                <animate
                  begin="-0.875s"
                  values="1;0"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  attributeName="fill-opacity"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(71.21320343559643,71.21320343559643)">
            <g transform="rotate(45)">
              <circle fillOpacity="0.875" fill="#cfa8d3" r="6" cy="0" cx="0">
                <animateTransform
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  values="1.5 1.5;1 1"
                  begin="-0.75s"
                  type="scale"
                  attributeName="transform"
                />
                <animate
                  begin="-0.75s"
                  values="1;0"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  attributeName="fill-opacity"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(50,80)">
            <g transform="rotate(90)">
              <circle fillOpacity="0.75" fill="#cfa8d3" r="6" cy="0" cx="0">
                <animateTransform
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  values="1.5 1.5;1 1"
                  begin="-0.625s"
                  type="scale"
                  attributeName="transform"
                />
                <animate
                  begin="-0.625s"
                  values="1;0"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  attributeName="fill-opacity"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(28.786796564403577,71.21320343559643)">
            <g transform="rotate(135)">
              <circle fillOpacity="0.625" fill="#cfa8d3" r="6" cy="0" cx="0">
                <animateTransform
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  values="1.5 1.5;1 1"
                  begin="-0.5s"
                  type="scale"
                  attributeName="transform"
                />
                <animate
                  begin="-0.5s"
                  values="1;0"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;1"
                  attributeName="fill-opacity"
                />
              </circle>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Spinner;
