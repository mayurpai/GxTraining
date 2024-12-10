import React, { memo, useEffect } from 'react'
function MemoFunChild() {
    useEffect(() => {
        console.log("Re-Rendered Child")
    })
    return (
        <div>
            Hello From Memo Child
        </div>
    )
}
export default memo(MemoFunChild)
