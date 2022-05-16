import React from 'react';
import {Box} from '@chakra/ui'

const Graphs = () => {
  return (
  <>
  <Box
    as='iframe'
    onLoad="var c=this;window.addEventListener('message',function({data,source}){if(c&&source===c.contentWindow&&data.widget===c.src)c.style.height=data.height+'px'},false);" 
    src="https://stellar.expert/widget/testnet/asset/supply/BEELC-GADXO2KWKQ2XIOQTX67NCB6YOX3BWVTOXZZ3MIP65UNO5RBBWAHF2T77" 
    style={{
    border:'none',
    overflow:'hidden', 
    'max-width':'100%', 
    'min-width':'300px',
    'max-height':'100%',
    'min-height':'200px', 
    width:'100%'}}
    ></Box>
    </>
  );
  
};

export default Graphs;
