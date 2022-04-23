import React from "react";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

const SkeletonProfile = () => {
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-profile">
                <SkeletonElement type='title'></SkeletonElement>
                <SkeletonElement type='subtitle'></SkeletonElement>
            </div>
            <Shimmer/>
        </div>
    )
}

export default SkeletonProfile;