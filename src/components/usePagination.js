import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';

export default function usePagination(filters, pagination) {
  const pageLimit = 3
  const dataLimit = 15
  const [numPages, setNumPages] = useState(1)
  const [curPage, setCurPage] = useState(1)

  useEffect(() => {
    setNumPages(Math.max(parseInt(pagination.total_items / 10), 1))
    setCurPage(1)
  }, [filters, pagination])

  function goToNextPage() {
    setCurPage((page) => page + 1);
  }
  function goToPreviousPage() {
    setCurPage((page) => page - 1);
  }
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurPage(pageNumber);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((curPage - 1) / pageLimit) * pageLimit;
    return new Array(Math.min(pageLimit, numPages)).fill().map((_, idx) => start + idx + 1);
  };

  const getIndeces = () => {
    let startIdx = curPage * dataLimit - dataLimit
    let endIdx = startIdx + dataLimit
    return { startIdx, endIdx }
  }

  const paginator = (
    <div className='navbar-font' style={{ 'float': 'right' }}>
        You are looking at {pagination.total_items} companies, 
        page {curPage} of {numPages}.
        <span> </span>
        <a role='button' onClick={goToPreviousPage} className={`prev ${curPage === 1 ? 'disabled' : ''}`}>
        [Back</a>
        <span> | </span>
        <a role='button' onClick={goToNextPage} className={`next ${curPage === numPages ? 'disabled' : ''}`}>
          Next]
        </a>

    </div>
  );

  {/* {numPages && getPaginationGroup().map((item, index) => (
        <a role='button' key={index} onClick={changePage} className={`${curPage === item ? 'active' : null}`}>
          {item}
        </a>))} */}

  var idx = getIndeces()

  return { paginator, idx }
}