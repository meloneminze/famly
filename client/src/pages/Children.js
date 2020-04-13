import React from 'react';
import { Link } from 'react-router-dom';

function Children() {
  return (
    <div>
      Kids <Link to="/household">Mein Haushalt</Link>
    </div>
  );
}

export default Children;
