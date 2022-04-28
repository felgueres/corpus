import React from "react";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

const SkeletonSidebar = () => {
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-directory">
                {[1,2,3].map(e=>{return (<SkeletonElement id={e} type='sidebar-item'></SkeletonElement>)})}
            <Shimmer/>
            </div>
        </div>
    )
}

export default SkeletonSidebar;