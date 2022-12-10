import React, { Component } from 'react';
const TableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">First</th>
        <th scope="col">job</th>
      </tr>
    </thead>
  );
};
const TableBody = (props) => {
  const { characterData } = props;
  const row = characterData.map((character, index) => {
    return (
      <tr key={index}>
        <td>{character.name}</td>
        <td>{character.job}</td>
      </tr>
    );
  });
  return <tbody>{row}</tbody>;
};

class Table extends Component {
  render() {
    const { characterData } = this.props;
    return (
      <table class="table table-striped">
        <TableHead />
        <TableBody characterData={characterData} />
      </table>
    );
  }
}
export default Table;
