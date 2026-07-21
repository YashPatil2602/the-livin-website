const API_BASE_URL = (
    import.meta.env.VITE_API_BASE_URL || "/api"
).replace(/\/$/, "");

export async function submitEnquiry(
    enquiryData,
    source = "website"
) {
    const response = await fetch(
        `${API_BASE_URL}/enquiries`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...enquiryData,
                source,
            }),
        }
    );

    let responseData;

    try {
        responseData = await response.json();
    } catch {
        responseData = {};
    }

    if (!response.ok) {
        throw new Error(
            responseData.message ||
                "Unable to submit your enquiry."
        );
    }

    return responseData;
}
