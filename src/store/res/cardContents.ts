import { createSlice } from "@reduxjs/toolkit";
import { CardContentsProps } from "@/types/_cardcontents";

const initialState: Array<CardContentsProps> = [
    {
        _id: 1,
        _title: "Residential Cleaning",
        _content: "Transform your home into a pristine sanctuary with our thorough residential cleaning services. We handle everything from routine housekeeping to deep cleaning.",
        _image: "@/assets/icons/house.svg",
        _lists: [
            "Regular housekeeping",
            "Deep cleaning & sanitization",
            "Move-in/move-out cleaning",
            "Post-renovation cleanup"
        ]
    },
    {
        _id: 2,
        _title: "Commercial Cleaning",
        _content: "Keep your business space professional and welcoming with our expert commercial cleaning solutions. A clean workplace enhances productivity and maintains hygiene.",
        _image: "@/assets/icons/hotel.svg",
        _lists: [
            "Office & retail space cleaning",
            "Janitorial services",
            "Industrial cleaning solutions",
            "Post-Construction Cleanup"
        ]
    },
    {
        _id: 3,
        _title: "Special Services",
        _content: "Need custom cleaning solutions for special occasions or specific requirements? We've got you covered with our specialized services.",
        _image: "@/assets/icons/glass.svg",
        _lists: [
            "Event Cleaning (Before & After)",
            "Seasonal Deep Cleaning",
            "Airbnb & rental property cleaning",
            "Eco-friendly cleaning solutions"
        ]
    }
];

const _contents = createSlice({
    initialState,
    name: "_contents",
    reducers: {
        handleContentsData() {
            // ! I'll still add data here
        }
    }
});

export const {handleContentsData} = _contents.actions;
export default _contents.reducer;