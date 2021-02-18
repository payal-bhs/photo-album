import React from "react";

export const Header = (title="") => {
    return (
        <h1 className="col-md-12 col-xs-12 col-xl-12 text-center">
            <span>{title}</span>
        </h1>
    );
}