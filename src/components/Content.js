import React from "react";
import DietCreation from "./DietCreation";

export default function Content() {
    const todayDiet = {
        "length": 4,
        "content" : {
            "1": "Chapathi",
            "2": "Rice",
            "3": "Pakodi",
            "4": "Biryani"
        }
    }

    return (
        <React.Fragment>
            {/* change the condition to todayDiet.length > 0 */}
            {
                todayDiet.length < 0 ? 
                    "No contents to display. Please schedule your diet!" :
                    <DietCreation />
            }
        </React.Fragment>
    )
}
