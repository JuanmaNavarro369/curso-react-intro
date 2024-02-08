import React from "react";
import { TodoIcon } from "./TodoIcon.js";

function CompleteIcon(props) {
    return (
        <TodoIcon
            type="check"
            color={props.completed ? "rgb(66, 184, 42)" : "gray"}
            onClick={props.onComplete}
        />
    );
};

export { CompleteIcon };