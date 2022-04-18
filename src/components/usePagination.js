import { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';

export default function usePagination(filters, pagination) {
  const pageLimit = 3
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

  const getIndeces = () => {
    let startIdx = curPage * dataLimit - dataLimit
    let endIdx = startIdx + dataLimit
    return { startIdx, endIdx }
  }

  const paginator = (
    <Col>
      <Row className='my-4 navbar-font'>
        <div className='mx-auto'>
          <a role='button' onClick={goToPreviousPage} className={`btn-light prev ${curPage === 1 ? 'disabled' : ''}`}>
            Previous
          </a>
          {numPages && getPaginationGroup().map((item, index) => (
            <a role='button' key={index} onClick={changePage} className={`btn-light ${curPage === item ? 'active' : null}`}>
              {item}
            </a>))}
          <a role='button' onClick={goToNextPage} className={`btn-light next ${curPage === numPages ? 'disabled' : ''}`}>
            Next
          </a>
        </div>
      </Row>
      <Row className='my-4'>
        <div className='mx-auto navbar-font'>
          Showing {pagination.total_items} companies, Page: {curPage} of {numPages}
        </div>
      </Row>
    </Col>
  );


  var idx = getIndeces()

  return { paginator, idx }
}
