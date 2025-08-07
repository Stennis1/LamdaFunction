
exports.handler = async (event) => {

    const method = event.httpMethod || 'UNKNOWN';

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello from Lambda!",
        }),
    }
}