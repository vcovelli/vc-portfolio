import React, { useEffect, useState } from 'react';
import { database, ref, get, update, increment } from '../../firebase';

const VisitorCounter = () => {
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        // Reference to the visitor count in the database
        const countRef = ref(database, 'visitorCount');

        // Fetch and increment visitor count
        get(countRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    // Increment the visitor count
                    update(countRef, { count: increment(1) });
                    setVisitorCount(snapshot.val().count + 1);
                } else {
                    // Initialize visitor count if not present
                    update(countRef, { count: 1 });
                    setVisitorCount(1);
                }
            })
            .catch((error) => {
                console.error('Error fetching visitor count:', error);
            });
    }, []);

    return <span>Visitor Count: {visitorCount}</span>;
};

export default VisitorCounter;
