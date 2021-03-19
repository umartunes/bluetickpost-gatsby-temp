import React from 'react'

import StarIcon from '../../assets/images/star-icon.png'

const VirtualClass = () => {
    return (
        <section className="solutions-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={StarIcon} alt="StarIcon" />
                        Virtual Classes
                    </span>
                    <h2>What does a virtual STEM1 class look like?</h2>
                </div>
                <div>
                    <p>STEM1 is an after-school coding academy that aims to develop your child’s interest in coding. Are you wondering what our virtual class looks like? Are you worried if your child will be able to learn something virtually? Let us answer all your queries.</p>
                    <p>Each STEM1 class comprises 6 students, 1 instructor, and a leader who is enrolled in our leadership program. It ensures that children are given sufficient attention and they can interact to come up with solutions. Our classes are conducted once a week for one hour, so your child does not get overwhelmed by the burden. </p>
                </div>
            </div>
        </section>
    )
}

export default VirtualClass;