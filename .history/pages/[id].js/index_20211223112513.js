import React from 'react'
import { useRouter } from 'next/router'
function DetailPost(context) {
    const router = useRouter()
    const { id } = router.query
    console.log(id)
    return (
        <div>
            <p>detail</p>
        </div>
    )
}

export default DetailPost
