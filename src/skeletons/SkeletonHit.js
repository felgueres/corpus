import React from "react";
import SkeletonElement from "./SkeletonElement";

const Row = ({td}) => {
    return (<tr><td>{td}</td></tr>)
}

const TdSkeleton = () => {
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-hit">
                <SkeletonElement type='text'></SkeletonElement>
                <SkeletonElement type='title'></SkeletonElement>
            </div>
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