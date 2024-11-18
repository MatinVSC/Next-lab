

export async function logger({method, endpoint, status}) {
    try {
        await fetch(`/api/logPanel`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                timestamp: new Date().toISOString(),
                method,
                status,
                endpoint
            })
        });
    } catch (error) {
        console.error('Failed to log api call', error)
    }
};