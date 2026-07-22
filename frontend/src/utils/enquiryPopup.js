export function openEnquiryPopup(action) {
    window.dispatchEvent(
        new CustomEvent("open-enquiry-popup", {
            detail: action,
        })
    );
}
