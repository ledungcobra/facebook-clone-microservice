import './style.css';
import {left} from '../../../data/home';
import LeftLink from "./LeftLink";
import {Link} from "react-router-dom";
import ArrowDow1 from "../../../svg/arrowDow1";
import {useState} from "react";
import Shortcut from "./Shortcut";

function LeftHome({user}) {
    const [visible, setVisible] = useState(false)
    if (!user) return null;
    return (<div className='left_home scrollbar'>
        <Link to='/profile' className="left_link hover1">
            <img src={user.picture} alt=""/>
            <span>{user.first_name} {user.last_name}</span>
        </Link>
        {left.slice(0, 8).map((link, i) => (
            <LeftLink key={i} img={link.img} text={link.text} notification={link.notification}/>))}
        {!visible && <div className="left_link hover1" onClick={() => setVisible(true)}>
            <div className="small_circle">
                <ArrowDow1/>
            </div>
            <span>See More</span>
        </div>}
        {visible && <div className="more_left">
            {left.slice(8).map((link, i) => (
                <LeftLink key={i} img={link.img} text={link.text} notification={link.notification}/>))}
            <div className="left_link hover1" onClick={() => setVisible(false)}>
                <div className="small_circle rotate180">
                    <ArrowDow1/>
                </div>
                <span>Show less</span>
            </div>
        </div>}
        <div className="splitter"/>
        <div className="shortcut">
            <div className="heading">Your Shortcuts</div>
            <div className="edit_shortcut">Edit</div>
        </div>
        <div className="shortcut_list">
            <Shortcut
                link=''
                img='../../images/ytb.png'
                name='YouTube'
            />
            <Shortcut
                link=''
                img='../../images/insta.png'
                name='Instagram'
            />
        </div>
    </div>);
}

export default LeftHome;