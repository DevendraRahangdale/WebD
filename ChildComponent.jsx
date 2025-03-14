import React from 'react'

const ChildComponent =React.memo(
    (props) => {
    console.log("child components go re-rendered again");
  return (
    <div>
      <button>
        {props.buttonName}
      </button>
    </div>
  )
}
);
export default ChildComponent
