import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

export default function usePagination(filters, pagination) {
  const pageLimit = 5
  const dataLimit = 10
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

  const getIndeces= () => {
    let startIdx = curPage * dataLimit - dataLimit
    let endIdx = startIdx+dataLimit
    return {startIdx, endIdx}
  }

  const paginator = (
    <div>
      <Button onClick={goToPreviousPage} className={`btn-light prev ${curPage === 1 ? 'disabled' : ''}`}>
        Previous
      </Button>
      {numPages && getPaginationGroup().map((item, index) => (
        <Button key={index} onClick={changePage} className={`btn-light ${curPage === item ? 'active' : null}`}>
          {item}
        </Button>))}
      <Button onClick={goToNextPage} className={`btn-light next ${curPage === numPages ? 'disabled' : ''}`}>
        Next
      </Button>
    </div>
  );

  var idx = getIndeces()

  return { paginator, idx }
}