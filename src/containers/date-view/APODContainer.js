import { Box, Image } from 'grommet';
import React, { useState } from 'react';
import APODModal from './../../components/date-view/APODModal';

const APODContainer = ({ title, date, explanation, url, media_type }) => {
  const [isAPODModalShow, setIsAPODModalShow] = useState();

  const closeAPODModal = () => {
    setIsAPODModalShow(false);
  };

  return (
    <div style={{overflowY: "auto"}}>
      {media_type === 'image' ? (
        <Box align='center' pad='large' background='dark-2' style={{overflowY: "auto"}}>
          <h2>{title}</h2>
          <Image fit='cover' src={url} height='80%' width='80%'/>
          <p>{explanation}</p>
          <p>{date}</p>
          {isAPODModalShow && (
            <APODModal title={title} date={date} explanation={explanation} onClose={closeAPODModal} style={{overflowY: "auto"}}/>
          )}
        </Box>
      ) : (
        <Box align='center' pad='small' size='cover' overflowY="auto">
          <iframe
            title={title}
            src={url}
            frameBorder='0'
            allow='autoplay'
            width='560px'
            height='315px'
            allowFullScreen
          />
        </Box>
      )}
    </div>
  );
};

export default APODContainer;
