import React from 'react';
import PropTypes from 'prop-types';

function PillContentList({itemImage, efcyQesitm, useMethodQesitm, atpnWarnQesitm, atpnQesitm, seQesitm, depositMethodQesitm, intrcQesitm}){
    return(
    <>
        <div className="pillImage">{itemImage}</div>
            <div className="pillConentListBox">
                <div className="pillContentList">
                    <div className="contentTitle">
                    <p className="title">{efcyQesitm}</p>
                    </div>
                    <div className="contents">
                    <p className="content">{efcyQesitm}</p>
                    </div>
                </div>
                <div className="pillContentList">
                    <div className="contentTitle">
                    <p className="title">{useMethodQesitm}</p>
                    </div>
                    <div className="contents">
                    <p className="content">{useMethodQesitm}</p>
                    </div>
                </div>
            <div className="pillContentList">
                <div className="contentTitle">
                <p className="title">{atpnWarnQesitm}</p>
                </div>
                <div className="contents">
                <p className="content">{atpnWarnQesitm}</p>
                </div>
            </div>
            <div className="pillContentList">
                <div className="contentTitle">
                <p className="title">{atpnQesitm}</p>
                </div>
                <div className="contents">
                <p className="content">{atpnQesitm}</p>
                </div>
            </div>
            <div className="pillContentList">
                <div className="contentTitle">
                <p className="title">{intrcQesitm}</p>
                </div>
                <div className="contents">
                <p className="content">{intrcQesitm}</p>
                </div>
            </div>
            <div className="pillContentList">
                <div className="contentTitle">
                <p className="title">{seQesitm}</p>
                </div>
                <div className="contents">
                <p className="content">{seQesitm}</p>
                </div>
            </div>
            <div className="pillContentList">
                <div className="contentTitle">
                <p className="title">{depositMethodQesitm}</p>
                </div>
                <div className="contents">
                <p className="content">{depositMethodQesitm}</p>
                </div>
                </div>
            </div>
        </>
    );
}

PillContentList.ProtoTypes ={
    efcyQesitm: PropTypes.string.isRequired,
    useMethodQesitm: PropTypes.string.isRequired,
    atpnWarnQesitm: PropTypes.string.isRequired,
    atpnQesitm: PropTypes.string.isRequired,
    intrcQesitm: PropTypes.string.isRequired,
    seQesitm: PropTypes.string.isRequired,
    depositMethodQesitm: PropTypes.string.isRequired,
    itemImage: PropTypes.string.isRequired,
}

export default PillContentList;