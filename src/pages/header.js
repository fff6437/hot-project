import React, { useState } from 'react';

const searchKeys = [
  { name: 'All', key: 'stars:%3E1' },
  { name: 'Javascript', key: 'stars:%3E1+language:javascript' },
  { name: 'Ruby', key: 'stars:%3E1+language:ruby' },
  { name: 'Java', key: 'stars:%3E1+language:java' },
  { name: 'CSS', key: 'stars:%3E1+language:css' },
];
export default (props) => {
  const [checkedName, setCheckedName] = useState('All');
  const getKeysInfo = (v) => {
    if (v.name === checkedName) return;
    setCheckedName(v.name);
    props.getStarList(v.key);
  };
  return (
    <div className="header">
      {searchKeys.map((v, i) => <span role="button" tabIndex={0} onKeyUp={() => {}} key={i} className={`${checkedName === v.name ? 'checked' : ''} item`} onClick={() => getKeysInfo(v)}>{v.name}</span>)}
    </div>
  );
};
