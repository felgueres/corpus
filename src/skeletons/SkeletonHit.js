import React from "react";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

const Row = ({td}) => {
    return (<tr><td>{td}</td></tr>)
}

const TdSkeleton = () => {
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-hit">
                <SkeletonElement type='text'></SkeletonElement>
                {/* <SkeletonElement type='text'></SkeletonElement>
                <SkeletonElement type='text'></SkeletonElement> */}
                {/* <SkeletonElement type='subtitle'></SkeletonElement> */}
            </div>
            {/* <Shimmer /> */}
        </div>
    )
}

const SkeletonHit = () => {
    return (
        <>
            <Row td={<TdSkeleton/>} />
        </>
    )
}

export default SkeletonHit;