import { createSlice } from "@reduxjs/toolkit";

interface CoreContentProps {
    _id: number;
    core_title: string;
    core_content: string;
}

const initialState: Array<CoreContentProps> = [
    {
        _id: 1,
        core_title: "Personalized Cleaning Solutions",
        core_content: "– Every space is unique, and we tailor our services to fit your specific requirements."
    },
    {
        _id: 2,
        core_title: "Consistent & Reliable Service",
        core_content: "– Count on us to deliver exceptional results every time."
    },
    {
        _id: 3,
        core_title: "Quality-Focused Approach",
        core_content: "– We use the best tools, techniques, and products to ensure top-tier cleaning."
    }
];

const coreContentSlicer = createSlice({
    name: "core_content",
    initialState,
    reducers: {}
});

export default coreContentSlicer.reducer;