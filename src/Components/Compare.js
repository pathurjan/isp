import React, { Component } from "react";

export default class Compare extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Company</th>
            <th>Anytime</th>
            <th>Night Time</th>
          </tr>
          <tr>
            <td>Dialog</td>
            <td>700MB</td>
            <td>1.2GB</td>
          </tr>
          <tr>
            <td>Mobitel</td>
            <td>900MB</td>
            <td>1.5GB</td>
          </tr>
        </table>
      </div>
    );
  }
}
