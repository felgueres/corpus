import React from "react";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

const SkeletonDirectory = () => {
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-directory">
                {[1,2,3,4,5,6,7,8].map(e=>{return (<SkeletonElement id={e} type='list'></SkeletonElement>)})}
            <Shimmer/>
            </div>
        </div>
    )
}

export default SkeletonDirectory;