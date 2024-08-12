import { useRef, useState } from "react";
import PaginationClass from "../classes/paginationClass";

const usePagination = (totalPages: number) => {
  const paginationRef = useRef(new PaginationClass(totalPages));
  const pagination = paginationRef.current;
  
  const [currentPage, setCurrentPage] = useState(pagination.getCurrentPage());
  const [isCircular, setIsCircular] = useState(pagination.getIsCircular());

  const goToNextPage = () => {
    pagination.goToNextPage();
    setCurrentPage(pagination.getCurrentPage());
  };

  const goToPreviousPage = () => {
    pagination.goToPreviousPage();
    setCurrentPage(pagination.getCurrentPage());
  };

  const goToPage = (page: number) => {
    pagination.goToPage(page);
    setCurrentPage(pagination.getCurrentPage());
  };

  const onCircularChanged = (isCircular: boolean) => {
    pagination.setIsCircular(isCircular);
    setIsCircular(isCircular);
  };

  const setTotalPages = (totalPages: number) => {
    pagination.setTotalPages(totalPages);
  };

  return {
    currentPage,
    isCircular,
    goToNextPage,
    goToPreviousPage,
    goToPage,
    onCircularChanged,
    setTotalPages,
  };
}

export default usePagination;