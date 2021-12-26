import React from 'react'
import { useRouter } from 'next/router'
function DetailPost(context) {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>
            <p>detail</p>
        </div>
    )
}

export default DetailPost
