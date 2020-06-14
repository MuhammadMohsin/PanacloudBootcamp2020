import React from 'react';
import Child from './Child';
import Child2 from './Child2';

const Parent = (props) => {
    return (
        <div>
            <Child/>
            <Child2 />
        </div>
    )
}

export default Parent;