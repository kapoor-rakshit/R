import React from 'react';

export default Comment = ({author, children}) => (
  <tr>
    <td>{author}</td>
    <td>{children}</td>
  </tr>
);
