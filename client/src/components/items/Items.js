import React from 'react';

const Items = () => {
    return (
        <table className="ui celled table">
  <thead>
    <tr><th>Item NAme</th>
    <th>Type</th>
    <th>Count</th>
    <th>Tracked</th>
    <th>low Supply Limit</th>
  </tr></thead>
  <tbody>
    <tr>
      <td data-label="Name">James</td>
      <td data-label="Age">24</td>
      <td data-label="Job">Engineer</td>
    </tr>
    <tr>
      <td data-label="Name">Jill</td>
      <td data-label="Age">26</td>
      <td data-label="Job">Engineer</td>
    </tr>
    <tr>
      <td data-label="Name">Elyse</td>
      <td data-label="Age">24</td>
      <td data-label="Job">Designer</td>
    </tr>
  </tbody>
</table>
    );
}

export default Items;