import React, { Fragment } from "react";
import { vetoAny } from "../types";
import Spinner from '../Spinner/Spinner'

interface LocalProps {
    count: () => vetoAny
    val: () => vetoAny
    updBool: boolean
}

const Resps: React.FC<LocalProps> = (props) => {

    return <Fragment>
        {
            props.updBool ? <div className="resps">
                <div className="respList">
                    {props.count()}
                </div>

                <div className="respVal">
                    {props.val()}
                </div>
            </div> :
                <div className="resps">
                    <Spinner />
                </div>
        }
    </Fragment>
}


export default Resps
