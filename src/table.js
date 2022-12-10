import React, { Component } from 'react';
const TableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">First</th>
        <th scope="col">job</th>
        <th scope="col">action</th>
      </tr>
    </thead>
  );
};
const TableBody = (props) => {
  const { charactersData, remove } = props;
  const row = charactersData.map((characte, index) => {
    return (
      <tr key={index}>
        <td>{characte.name}</td>
        <td>{characte.job}</td>
        <td><button onClick={()=>remove(index)}>delete</button></td>
      </tr>
    );
  });
  return <tbody>{row}</tbody>;
};

class Table extends Component {
  render() {
    const { characterData, remove } = this.props;
    return (
      <table class="table">
        <TableHead />
        <TableBody remove={remove} charactersData={characterData} />
      </table>
    );
  }
}
export default Table;
