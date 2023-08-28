import React from 'react';

function SplitBlockReverse({component, image}) {  
  return (
    <div className="splitBlockContent">
        <div className="splitBlockRight"><img src={image} alt="" /></div>        
        <div className="splitBlockLeft">
            {component}
        </div>        
    </div>
  );
}

export default SplitBlockReverse;