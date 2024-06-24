import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/20/solid'

const Pagination = ({ currentPage, totalPage, totalData, setCurrentPage }) => {
    const createPagination = () => {
        let pages = [];

        if (totalPage <= 7) {
            for (let i = 1; i <= totalPage; i++) {
                pages.push(i);
            }
        } else {
            let startPage = Math.max(currentPage - 3, 1);
            let endPage = Math.min(currentPage + 3, totalPage);

            if (endPage - startPage < 6) {
                if (startPage === 1) {
                    endPage = 7;
                } else if (endPage === totalPage) {
                    startPage = totalPage - 6;
                } else if (currentPage <= 4) {
                    endPage = 7;
                } else if (currentPage >= totalPage - 3) {
                    startPage = totalPage - 6;
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
        }

        return pages;
    };

    const pages = createPagination();

    if (totalPage < 2){
        return null
    }

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{currentPage}</span> to <span
                        className="font-medium">{totalPage}</span> of{' '}
                        <span className="font-medium">{totalData}</span> results
                    </p>
                </div>
                <div>
                    <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
                        <a
                            href="#"
                            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                            className="items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                        >
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true"/>
                        </a>
                        {pages.map((page, index) => (
                            <a
                                key={index}
                                href="#"
                                onClick={() => setCurrentPage(page)}
                                aria-current={page === currentPage ? 'page' : undefined}
                                className={`items-center px-4 py-2 text-sm font-semibold ${page === currentPage ? 'bg-navy text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'} focus:z-20 focus:outline-offset-0`}
                            >
                                {page}
                            </a>
                        ))}
                        <a
                            href="#"
                            onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPage))}
                            className="items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true"/>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Pagination;
