import React from 'react';

export default class Star  extends React.Component {
  render() {
    const { fill, color, className } = this.props;
    return (
      <span className={className}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15">
          <defs>
            <clipPath id="sivka">
              <path
                fill="#fff"
                d="M11.446 9.359a.54.54 0 0 0-.142.47l.854 5.144-4.408-2.417a.488.488 0 0 0-.47 0L2.887 15l.824-5.151a.545.545 0 0 0-.146-.467L0 5.747l4.92-.768a.503.503 0 0 0 .376-.29L7.48 0l2.216 4.677a.515.515 0 0 0 .38.29L15 5.704z"/>
            </clipPath>
          </defs>
          <g>
            <g>
              <path
                fill={fill ? color : '#fff'}
                d="M11.446 9.359a.54.54 0 0 0-.142.47l.854 5.144-4.408-2.417a.488.488 0 0 0-.47 0L2.887 15l.824-5.151a.545.545 0 0 0-.146-.467L0 5.747l4.92-.768a.503.503 0 0 0 .376-.29L7.48 0l2.216 4.677a.515.515 0 0 0 .38.29L15 5.704z"/>
                <path 
                  fill="none"
                  stroke={color}
                  strokeMiterlimit="50"
                  strokeWidth="4"
                  d="M11.446 9.359a.54.54 0 0 0-.142.47l.854 5.144v0L7.75 12.556a.488.488 0 0 0-.47 0L2.887 15v0l.824-5.151a.545.545 0 0 0-.146-.467L0 5.747v0l4.92-.768a.503.503 0 0 0 .376-.29L7.48 0v0l2.216 4.677a.515.515 0 0 0 .38.29L15 5.704v0z"
                  clipPath="url(&quot;#sivka&quot;)"/>
            </g>
          </g>
        </svg>
      </span>
    )
  }
}