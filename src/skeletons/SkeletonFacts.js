import React from "react";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

const SkeletonFacts = () => {
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-facts">
                <SkeletonElement type='title'></SkeletonElement>
                <SkeletonElement type='text'></SkeletonElement>
                <SkeletonElement type='text'></SkeletonElement>
                <SkeletonElement type='text'></SkeletonElement>
                <SkeletonElement type='text'></SkeletonElement>
                <SkeletonElement type='text'></SkeletonElement>
            </div>
            <Shimmer/>
        </div>
    )
}

export default SkeletonFacts;