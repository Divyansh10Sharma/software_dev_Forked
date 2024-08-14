import React, { useEffect, useState } from 'react';
import '../../App.css';
import { Placard } from '../../components/ButtonsLibrary';
import '../../index.css';
import { fetchAllBlogs } from '../../helperFunctions/MarketplaceHelper';
import { useLocation } from 'react-router-dom';
import icon from '../../assets/Icon.jpeg';

function BlogList() {
    const location = useLocation();

    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true);

    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = blogs !== null && Math.ceil(blogs.length / itemsPerPage);

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const currentItems = blogs !== null && blogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    useEffect(() => {
        setLoading(true);

        const fetchBlogs = async () => {
            const allBlogs = await fetchAllBlogs();
            setBlogs(allBlogs);
            setLoading(false);
        };
        fetchBlogs();
    }, []);

    const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    return (
        <div className="bg-tertiary flex flex-col px-2 lg:px-48 min-h-screen">
            {loading ? (
                <div className="flex justify-center items-center h-full pt-32">
                    <p className="text-secondary text-lg lg:text-2xl font-bold">Loading...</p>
                </div>
            ) : (
                blogs !== null && (
                    // changed items to center and card are justify around, not between, changed cursor to pointer to make cards look clickable
                    <div className="flex flex-col py-8 items-center">
                        <p className="flex text-secondary text-lg lg:text-4xl font-bold pl-6 lg:pl-8 pt-2 lg:pt-6 pb-6">CHECKOUT THE TRAIN REX BLOGS</p>
                        <div className="hidden lg:flex flex-row flex-wrap justify-around gap-10">
                            {chunkArray(currentItems, 1).map((column, columnIndex) => (
                                <div key={columnIndex} className="flex flex-col space-y-4 lg:space-y-8">
                                    {column.map((card, index) => (
                                        <Placard
                                            key={index}
                                            hidden={true}
                                            bg="bg-secondary w-36 lg:w-72"
                                            textColor="text-tertiary"
                                            location={`by ${card.location}`}
                                            image={card.image ? card.image : icon}
                                            name={card.name}
                                            content={card.content}
                                            time={card.time}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="lg:hidden flex flex-col pb-4 flex-wrap justify-between">
                            {chunkArray(currentItems, 2).map((column, columnIndex) => (
                                <div key={columnIndex} className="flex flex-row space-y-4">
                                    {column.map((card, index) => (
                                        <Placard
                                            key={index}
                                            hidden={true}
                                            bg="bg-secondary w-36 lg:w-72"
                                            textColor="text-tertiary"
                                            location={`by ${card.location}`}
                                            image={card.image ? card.image : icon}
                                            name={card.name}
                                            content={card.content}
                                            time={card.time}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center mt-8">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleClick(index + 1)}
                                    className={`mx-1 px-3 py-1 rounded ${index + 1 === currentPage ? 'bg-secondary text-tertiary' : 'bg-tertiary text-secondary border-2 border-secondary'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                )
            )}
        </div>
    );
}

export default BlogList;
