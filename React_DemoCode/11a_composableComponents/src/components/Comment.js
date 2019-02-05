import React from 'react';

export default Comment = ({author, srno, children}) => (
  <tr>
  	<td>{srno}</td>
    <td>{author}</td>
    <td>{children}</td>
  </tr>
);
