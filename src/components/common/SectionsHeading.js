import React from 'react'

export default function SectionsHeading({ children, title, desc, titleClass, descClass }) {
    return (
        <>
            <div className="section-heading">
                {
                    title ? (<h2 className={'sec__title '+titleClass}>{title}</h2>) : ' '
                }
                {
                    desc ? (<p style={{color:'white'}} className={'sec__desc '+descClass}>{desc}</p>) : ' '
                }
            </div>
            {children}
        </>
    )
}
