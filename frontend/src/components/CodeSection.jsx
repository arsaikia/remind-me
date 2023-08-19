/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import Modal from 'react-modal';
import {
  CopyBlock, dracula,
} from 'react-code-blocks';

import {closeCodeModal, launchCodeModal} from '../actions/actions'

import FullScreenModal from './FullScreenModal/FullScreenModal';
import Loader from './Loader/Loader';


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


function CodeSection(props) {

  const [codeText, setCodeText] = useState('');

  // Get states using useSelector ( state->reducerName )
  const codeState = useSelector((state) => state.codeModal);
  const { showLoading, showCodeModal, selectedQuestionId, codes } = codeState;


  useEffect(() => {
    if (!selectedQuestionId) return;

    const codeToShow = codes.filter((code, idx) => {
      return code.questionId === selectedQuestionId
    })
    console.log(codeToShow);
    if (codeToShow.length) {
      setCodeText(codeToShow[0].code);
    }

    return () => {
      setCodeText('');
    }
  }, [codes, selectedQuestionId])
  

  console.log(codeText, showLoading);


  // Fire actions using dispatch -> fires action -> Watcher saga handles rest
  const dispatch = useDispatch();
  const closeCodeModalHandler = () => dispatch(closeCodeModal());

  const {
    language,
    lineNumbers,
    text,
    wrapLines,
  } = {
    language: 'python',
    lineNumbers: true,
    text: codeText,
    wrapLines: true,
  };

  // if (!showCodeModal) {
  //   return null;
  // }

  return (
    <Modal
      isOpen={showCodeModal}
      style={customStyles}
      contentLabel="Code Modal"
      onRequestClose={closeCodeModalHandler}
      overlayClassName="Modal__Overlay"
    >
      {showLoading && <Loader show />}
      {
        !showLoading && text &&
        <CopyBlock
          language={language}
          text={text}
          showLineNumbers={lineNumbers}
          theme={dracula}
          wrapLines
          codeBlock
        />
      }
    </Modal>
  );
}

export default CodeSection;
