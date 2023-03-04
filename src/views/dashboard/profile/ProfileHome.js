import React, { useState } from "react";
import HealthProfile from "./HealthProfile";
import EditProfile from "./EditProfile";

export const ProfileHome = () => {
    const [isViewMode, setIsViewMode] = useState(true);
    const onModifyCallback = () => {
        setIsViewMode(false);
    }
    const onSaveCallback = () => {
        setIsViewMode(true);
    }
    return <>
    { isViewMode  && <HealthProfile onModifyCallback={onModifyCallback} />}
    { !isViewMode && <EditProfile onSaveCallback={onSaveCallback} /> }
    </>
}
