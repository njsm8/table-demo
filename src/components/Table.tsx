import { useState, useEffect } from "react";
import useData from "./useData";
import "./Table.css";

export default function Table() {
    const { data, loading } = useData();
    const [currentPage, setCurrentPage] = useState(1);
    const [gotoPage, setGotoPage] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    const recordsPerPage = 5;
    const totalPages = data ? Math.ceil(data.length / recordsPerPage) : 1;

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);

    useEffect(() => {
        const handleKeyDown = (event: { key: string; }) => {
            console.log(event.key);
            if(event.key === '∂'){
                setDarkMode(true);
            } else if(event.key === '¬'){
                setDarkMode(false);
            }
            if (event.key === "ArrowLeft" && currentPage > 1) {
                setCurrentPage((prev) => prev - 1);
            } else if (event.key === "ArrowRight" && currentPage < totalPages) {
                setCurrentPage((prev) => prev + 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentPage, totalPages]);

    const handlePageChange = () => {
        const page = Number(gotoPage);
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
        setGotoPage("");
    };

    const startIndex = (currentPage - 1) * recordsPerPage;
    const paginatedData = data ? data.slice(startIndex, startIndex + recordsPerPage) : [];

    // Ensure 5 rows per page by filling with empty rows
    const filledData = [...paginatedData];
    while (filledData.length < recordsPerPage) {
        filledData.push({});
    }

    return (
        <div className="table-container">
            {/* Header Section */}
            <div className="header">
                <h1>Kickstarter Project Stats</h1>
                <button className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
                </button>
            </div>

            {/* Table Section */}
            <table className="project-table ">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Amount Pledged</th>
                        <th>Percentage Funded</th>
                    </tr>
                </thead>
                <tbody>
                    {loading
                        ? Array.from({ length: 5 }).map((_, index) => (
                              <tr key={index} className="skeleton-row">
                                  <td className="skeleton"></td>
                                  <td className="skeleton"></td>
                                  <td className="skeleton"></td>
                              </tr>
                          ))
                        : filledData.map((project, index) => (
                              <tr key={index} className={!project["s.no"] ? "empty-row" : ""}>
                                  <td>{project["s.no"]?.toLocaleString() || "-"}</td>
                                  <td>{project["amt.pledged"] ? `$${project["amt.pledged"].toLocaleString()}` : "-"}</td>
                                  <td>{project["percentage.funded"] ? `${project["percentage.funded"]}%` : "-"}</td>
                              </tr>
                          ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="pagination">
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                    Prev
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
                    Next
                </button>
            </div>

            {/* Go to Page Input */}
            <div className="goto-page">
                <label htmlFor="page-input">Go to page:</label>
                <input
                    id="page-input"
                    type="number"
                    min="1"
                    max={totalPages}
                    value={gotoPage}
                    onChange={(e) => setGotoPage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handlePageChange()}
                />
                <button onClick={handlePageChange}>Go</button>
            </div>
        </div>
    );
}
