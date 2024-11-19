"use client";
import React from 'react';
import Moment from 'react-moment';
function CompondMoment({ item }) {
  return (
    <Moment fromNow date={item} />
  );
}
export default CompondMoment