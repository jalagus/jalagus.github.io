import React from 'react';

function SplitBlock({component, image}) {  
  return (
    <div className="splitBlockContent">
        <div className="splitBlockLeft">
            {component}
        </div>        
        <div className="splitBlockRight"><img src={image} alt="" /></div>        
    </div>
  );
}

export default SplitBlock;