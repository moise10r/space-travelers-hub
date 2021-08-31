/* eslint-disable */
import React, { useState } from 'react';
import SplitPane from '../../../common/SplitPane/SplitPane';
import SplitPaneLayout from '../../../common/SplitPane/SplitPaneLayout';
import styles from './RocketRow.module.scss';
import { reserve, cancel } from '../rocketSlice';
import { useDispatch } from 'react-redux';

const RocketRow = ({id, title, description, image, reserved}) => {

  const [ buttonText, setButtonText ] = useState(reserved ? 'Cancel' : 'Reserve');

  const dispatch = useDispatch();

  const handleClick = () => {
    if (reserved) {
      dispatch(cancel(id));
      setButtonText((state) => 'Reserve');
    } else {
      dispatch(reserve(id));
      setButtonText((state) => 'Cancel');
    }
    
  };

  return (
    <SplitPane
      layout={
        new SplitPaneLayout('row', 'col', 'col', styles)
      }
      first={
        <>
          <img src={image} />
        </>
      }
      second={
        <>
          <span>{reserved && 'Reserved'} {title}</span>
          <span>{description}</span>
          <div><button type='button' onClick={handleClick}>{buttonText}</button></div>
        </>
      }
    />
  );

}

export default RocketRow;