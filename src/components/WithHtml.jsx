import React from "react";
import '../componentStyles/withHtml.css'

function WithHtml({children, element, attributes, atributeValues}) {
    let attributeElements = []

    if (attributes) {
        console.log(attributes)
        for (const [key, value] of Object.entries(attributes)) {
            attributeElements.push(<span>
                <span className='code__attribute'> {key}</span>
                <span className='code__equal'>=</span>
                <span className='code__attribute-value'>"{value}"</span>
            </span>)
        }
    }
    return (
        <div className='code'>
            <code>
                <span className='code__braces'>&lt;</span>
                <span className='code__element'>{element}</span>
                {attributeElements}
                <span className='code__braces'>&gt;</span>
            </code>
            <div className='code__children'>
                {children}
            </div>
            <code>
                <span className='code__braces'>&lt;/</span>
                <span className='code__element'>{element}</span>
                <span className='code__braces'>&gt;</span>
            </code>
        </div>
    )
}

export default WithHtml