import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { currentChange, currentLocal } = this.props;
    const { nextChange, nextLocal } = nextProps;

    if (nextChange === currentChange && nextLocal === currentLocal) {
      return false;
    }
    return true;
  }

  render() {
    console.log("Button component Called");
    const { change, local, btncopy } = this.props;
    
    return (
     <div>
          <button type="button" onClick={() => change(local)}>
            {btncopy}
        </button>
       
     </div>
    );
  }
}

export default Button;
