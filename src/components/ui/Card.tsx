import { setIsPhoneView } from "@/store/res/isPhoneView";
import { AppDispatch, RootState } from "@/store/store";
import { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface CardTitleProps {
    $cardTitle?: boolean;
}

interface CardListProps {
    $cardListText: boolean;
}

interface CardProps {
    _id: number;
    _title: string;
    _image: string;
    _content: string;
    _lists: Array<string>
}

const CardTitle = styled.div<CardTitleProps>`
    font-family: "Righteous", sans-serif;
    font-size: ${(props) => props.$cardTitle ? "14.5px" : "19px"};
    color: var(--color-drop-shadow);
    font-weight: 550;
`;

const CardList = styled.li<CardListProps>`
    font-size: ${(props) => props.$cardListText ? "12.5px" : "15px"};
`;

const CardButtonWrapper = styled.div`
    width: 100%;
    text-align: center;
`;

const Card: React.FC<CardProps> = ({_id, _content, _image, _lists, _title}) => {
    const isPhoneView: boolean = useSelector((state: RootState) => state.isphoneview.isPhoneView);
    const dispatch = useDispatch<AppDispatch>();

    const [isPhoneViewMedia] = useState<MediaQueryList>(window.matchMedia("(max-width: 768px)"));

    const bgColors = ["bg-card-one", "bg-card-two", "bg-card-three"];

    useEffect(() => {
        if (isPhoneViewMedia.matches) {
            dispatch(setIsPhoneView({result: true}));
        }else {
            dispatch(setIsPhoneView({result: false}));
        }
    }, [isPhoneViewMedia.matches, dispatch]);

    return(
        <div id={`${_id}`} className={`flex-1 w-full rounded-[1.2vmax] relative py-12 px-4 hover:scale-110 duration-500 ease-linear transition-all shadow-md ${bgColors[_id]}`}>
            <div className="flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-3">
                    <CardTitle $cardTitle={isPhoneView}>{_title}</CardTitle>
                    <div className="text-[13.5px] md:text-[15px] font-[500]">{_content}</div>
                    <ul className="flex flex-col gap-y-1">
                        {Array.isArray(_lists) && _lists.map((list, index) => (
                            <CardList key={index} $cardListText={isPhoneView}>{list}</CardList>
                        ))}
                    </ul>
                    <CardButtonWrapper>
                        <Link to={"#"}>
                            <button className="py-2 px-3 text-white font-[550] flex items-center rounded-[2vmax] gap-x-3 text-[16.5px] phone__gradient">
                                <span className="uppercase">Book Services</span>
                                <BsArrowRight />
                            </button>
                        </Link>
                    </CardButtonWrapper>
                </div>
            </div>
            <img className="absolute top-[-8%] right-[1.5%] w-[50px] h-[50px]" src={_image.replace("@", "/src")} alt={_image.split("/").pop()?.split(".")[0]} />
        </div>
    );
}

export default Card;