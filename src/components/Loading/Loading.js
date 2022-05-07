import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Loading(props) {

    const { isLoading } = useSelector(state => state.LoadingReducer);


    return (
        <Fragment>
            {isLoading ?
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 99 }}>
                    
                        <div style={{ width: '100%', height: 0, paddingBottom: '100%', position: 'relative' }}><iframe src="https://giphy.com/embed/hL9q5k9dk9l0wGd4e0" width="100%" height="100%" style={{ position: 'absolute' }} frameBorder={0} className="giphy-embed" allowFullScreen /></div><p><a href="https://giphy.com/gifs/loading-vera-verreschi-hL9q5k9dk9l0wGd4e0"></a></p>
                    

                </div> : ''

            }
        </Fragment>

    )
}
