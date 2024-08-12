import React, { useEffect } from "react";
import usePagination from "../hooks/usePagination";

const Pagination: React.FC<{
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ totalPages, onPageChange }) => {
  const {
    currentPage,
    isCircular,
    goToNextPage,
    goToPreviousPage,
    goToPage,
    onCircularChanged,
    setTotalPages,
  } = usePagination(totalPages);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  useEffect(() => {
    setTotalPages(totalPages);
  }, [totalPages, setTotalPages]);

  return (
    <div className="pagination-container">
      <label className="circular-checkbox">
        <span>Circular:</span>
        <input
          type="checkbox"
          checked={isCircular}
          onChange={() => onCircularChanged(!isCircular)}
        />
      </label>
      <div className="pagination">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1 && !isCircular}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages && !isCircular}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
