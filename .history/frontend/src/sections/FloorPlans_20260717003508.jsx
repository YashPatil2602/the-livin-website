import { useState } from "react";

const floorPlans = [
    {
        id: "1-bhk",
        tabName: "1 BHK",
        title: "1 BHK Floor Plan",
        description:
            "A thoughtfully planned one-bedroom residence with comfortable living spaces, a functional kitchen and well-designed balconies.",
        image: "/images/floor-plans/1-bhk-floor-plan.jpg",
    },
    {
        id: "2-bhk",
        tabName: "2 BHK",
        title: "2 BHK Floor Plan",
        description:
            "A spacious two-bedroom home featuring practical layouts, generous bedrooms, modern living spaces and private balconies.",
        image: "/images/floor-plans/2-bhk-floor-plan.jpg",
    },
    {
        id: "ground-floor",
        tabName: "Ground Floor",
        title: "Ground Floor Plan",
        description:
            "Explore the complete ground-floor layout, including access areas, parking zones, commercial spaces and common facilities.",
        image: "/images/floor-plans/ground-floor-plan.jpg",
    },
    {
        id: "first-floor",
        tabName: "1st Floor",
        title: "First Floor Plan",
        description:
            "View the detailed first-floor arrangement across both residential wings and their shared circulation areas.",
        image: "/images/floor-plans/first-floor-plan.jpg",
    },
    {
        id: "eighth-floor",
        tabName: "8th Floor",
        title: "Eighth Floor Plan",
        description:
            "A detailed layout showing the residences, passages and common areas available on the eighth floor.",
        image: "/images/floor-plans/eighth-floor-plan.jpg",
    },
    {
        id: "typical-floor",
        tabName: "Typical Floor",
        title: "Typical Floor Plan",
        description:
            "The standard residential layout followed from the second to seventh and ninth to twelfth floors.",
        image: "/images/floor-plans/typical-floor-plan.jpg",
    },
];

function FloorPlans() {
    const [selectedPlanId, setSelectedPlanId] = useState("1-bhk");

    const selectedPlan =
        floorPlans.find((plan) => plan.id === selectedPlanId) ||
        floorPlans[0];

    return (
        <section id="floor-plans" className="floor-plans-section">
            <div className="floor-plans-container">
                <div className="floor-plans-heading">
                    <p className="floor-plans-kicker">
                        Thoughtfully Planned Homes
                    </p>

                    <h2>Explore Our Floor Plans</h2>

                    <p>
                        Discover intelligently designed residences and building
                        layouts created for comfortable modern living.
                    </p>
                </div>

                <div
                    className="floor-plan-tabs"
                    role="tablist"
                    aria-label="Floor plan selection"
                >
                    {floorPlans.map((plan) => (
                        <button
                            key={plan.id}
                            type="button"
                            role="tab"
                            aria-selected={selectedPlanId === plan.id}
                            className={`floor-plan-tab ${
                                selectedPlanId === plan.id ? "active" : ""
                            }`}
                            onClick={() => setSelectedPlanId(plan.id)}
                        >
                            {plan.tabName}
                        </button>
                    ))}
                </div>

                <div className="floor-plan-display">
                    <div className="floor-plan-image-container">
                        <img
                            key={selectedPlan.image}
                            src={selectedPlan.image}
                            alt={selectedPlan.title}
                            className="floor-plan-image"
                        />
                    </div>

                    <div className="floor-plan-content">
                        <p className="floor-plan-label">Selected Layout</p>

                        <h3>{selectedPlan.title}</h3>

                        <p>{selectedPlan.description}</p>

                        <div className="floor-plan-features">
                            <div>
                                <span>Project</span>
                                <strong>The Livin</strong>
                            </div>

                            <div>
                                <span>Location</span>
                                <strong>Kalyan West</strong>
                            </div>

                            <div>
                                <span>Configuration</span>
                                <strong>1 &amp; 2 BHK</strong>
                            </div>
                        </div>

                        <a
                            href={selectedPlan.image}
                            target="_blank"
                            rel="noreferrer"
                            className="floor-plan-button"
                        >
                            View Full Plan
                        </a>

                        <a
                            href="/images/brochure.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="floor-plan-brochure-link"
                        >
                            Download Complete Brochure
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FloorPlans;