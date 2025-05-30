'use client'
import TimeAgo from "react-timeago";

function TTimeAgo({date}:{date:string | number | Date | undefined}) {
  if(!date) return null;
  return ( <TimeAgo date={date} /> );
}

export default TTimeAgo;