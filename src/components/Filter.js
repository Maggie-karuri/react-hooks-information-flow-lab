import React from "react";

function Filters ({categories, selectedCategory, onCategoryChange }) {

return (
    <div className="Filter">
        <select
        name="filter"
        value={selectedCategory}
        onChange={(event) => onCategoryChange(event.target.value)}
        >
            <option value="all">Filter by category</option>
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    </div>

); 
}
export default Filters;