import React from 'react';
import { Link } from 'react-router-dom'

import './nav.css'
export const Menu = () => {
    return (
        <div className="navigation">
            <div className="로고"><span>NAV 메뉴바</span></div>
            <dd>
                <dl><Link to="/state">STATE</Link></dl>
                <dl><Link to="/input">INPUT</Link></dl>
                <dl><Link to="/shoping">SHOPPINGMALL</Link></dl>

            </dd>
        </div>
    )
}
