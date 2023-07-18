import React from "react";

class Cor extends React.Component {
    render() {

        const { value, handler } = this.props

        return (
          <select name='cor' value={value} onChange={handler}>
            <option>Roxo</option>
            <option>Rosa</option>
            <option>Marrom</option>
          </select>
        );
    }
}

export default Cor;