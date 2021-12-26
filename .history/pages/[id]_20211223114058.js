import React from 'react'

function DetailPost() {
    // useEffect(
    //     () =>
    //         onSnapshot(
    //             query(collection(db, "posts"), orderBy("timestamp", "desc")),
    //             (snapshot) => {
    //                 setPosts(snapshot.docs);
    //             }
    //         ),
    //     [db]
    // );
    return (
        <Post />
    )
}

export default DetailPost
