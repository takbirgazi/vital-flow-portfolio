import BottomFooter from "./BottomFooter/BottomFooter";
import TopFooter from "./TopFooter/TopFooter";


const Footer = () => {
    return (
        <div>
            <div className="bg-primaryBg">
                <TopFooter />
            </div>
            <BottomFooter />
        </div>
    );
};

export default Footer;