import React from "react";
import './style.scss'

export type ForTitleProps = {
  TITLE: any,
  left? :boolean,
};

export function ForTitle(props: ForTitleProps) {
  return (
    <div className={props.left? 'container-forTitleLeft': 'container-forTitle'}>
    <div className='forTitle'>
      <h1> {props.TITLE} </h1>
    </div>
    </div>  
  );
}
