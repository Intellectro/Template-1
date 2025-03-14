interface PageRouteProps {
    id: number;
    _path: string;
    _name: string;
}

const pageRoutes: Array<PageRouteProps> = [
    {
        id: 1,
        _path: "#services",
        _name: "Services"
    },
    {
        id: 2,
        _path: "#about",
        _name: "About Us"
    },
    {
        id: 3,
        _path: "#core",
        _name: "Contact"
    }
]

export default pageRoutes;