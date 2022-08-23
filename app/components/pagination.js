import React from "react";

export function Pagination(props) {
  const {items, max, onChangePage, currentPage} = props

  const pagintanionsLength = []
  for (let i = 1; i <= Math.ceil(items.length / max); i++) {
    pagintanionsLength.push(i)
  }

  const upMax = pagintanionsLength.length > 5

  return (
    <nav>
      <ul className='pagination'>
        {(pagintanionsLength || []).map(v => (
          upMax && <li key={v}>
            <button className={'pointner ' + ((v === currentPage) ? 'currentPage' : '')}
                    onClick={() => onChangePage(v)}>{v}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination

