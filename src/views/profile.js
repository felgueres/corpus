import React from "react";
import { Navbar } from "../components/navbar";
import { EarningsCall } from "../components/earningscall";
import { SectionsTable } from "../components/sections-table";

export const Profile = () => {
    return (
        <>
            <Navbar/>
            <SectionsTable/>
            <EarningsCall/>
        </>
    );
};
 
export default Profile;
