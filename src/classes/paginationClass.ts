class PaginationClass {
  private totalPages: number;
  private isCircular: boolean;
  private currentPage: number;

  constructor(totalPages: number, isCircular: boolean = false, initialPage: number = 1) {
    this.totalPages = totalPages;
    this.isCircular = isCircular;
    this.currentPage = initialPage;
  }
  
  getCurrentPage() {
    return this.currentPage;
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage += 1;
    } else if (this.isCircular) {
      this.currentPage = 1;
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
    } else if (this.isCircular) {
      this.currentPage = this.totalPages;
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  setIsCircular(isCircular: boolean) {
    this.isCircular = isCircular;
  }

  setTotalPages(totalPages: number) {
    this.totalPages = totalPages;
  }

  getIsCircular() {
    return this.isCircular;
  }
}

export default PaginationClass;