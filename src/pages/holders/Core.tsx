import AnimatedTitle from "@/components/ui/AnimatedTitle";
import CoreCard from "@/components/ui/CoreCard";
import Demarcator from "@/components/ui/Demarcator";
import { RootState } from "@/store/store";
import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

interface CoreProps {
    id: string;
}

const CoreFragment = styled.div``;
const CoreWrapper = styled.div``;
const CoreCardWrapper = styled.div``;
const CoreInnerShadow = styled.div``;

const Core = forwardRef<HTMLDivElement, CoreProps>(({id}, ref: React.Ref<HTMLDivElement>) => {
    const coreContents = useSelector((state: RootState) => state._coreContents);

    return(
        <CoreFragment ref={ref} id={id} className="relative w-full pt-9 pb-20 z-10 overflow-hidden">
            <Demarcator title="Core Values" reverse={false} />
            <CoreWrapper className="flex flex-col gap-y-4 px-10 md:px-30 py-2">
                <div className="text-[14.5px] font-light">Better Living, Healthy Life</div>
                <AnimatedTitle title="At Kings, We Are About;" />
                <CoreCardWrapper className="flex gap-x-20 gap-y-4 flex-col md:flex-row md:flex-wrap">
                    {coreContents?.map((contents, index) => <CoreCard key={index} {...contents} />)}
                </CoreCardWrapper>
            </CoreWrapper>
            <CoreInnerShadow className="absolute w-[70%] h-[90%] rounded-[10vmax] bg-drop-shadow/50 blur-[700px] -z-10 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
        </CoreFragment>
    );
});

export default Core;