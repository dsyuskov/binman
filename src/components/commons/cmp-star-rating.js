import React, { Fragment } from 'react';
import Star from 'components/commons/cmp-star';

export default function StarRating(props) {
  const colors = [
    "#ffa800",
    "#ffa800",
    "#ff5d00",
    "#dae700",
    "#abd02d",
    "#67c600",
  ];
  return (
    <Fragment>
      <Star
        className={props.className}
        fill={props.rating > 0}
        color={colors[props.rating]}
      />
      <Star
        className={props.className}
        fill={props.rating > 1}
        color={colors[props.rating]}
      />
      <Star
        className={props.className}
        fill={props.rating > 2}
        color={colors[props.rating]}
      />
      <Star
        className={props.className}
        fill={props.rating > 3}
        color={colors[props.rating]}
      />
      <Star
        className={props.className}
        fill={props.rating > 4}
        color={colors[props.rating]}
      />
    </Fragment>
  )
}
