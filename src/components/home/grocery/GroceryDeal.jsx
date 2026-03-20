"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function GroceryDeal() {
  const targetDate = new Date("September 30, 2027 19:15:10").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section
      className="sp-deal padding-tb-50"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <h2 data-cursor="big" className="d-none">
        Hot Deals
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="deal-box box-1">
              <div className="sp-icon-set">
                <img className="icon-1" src="/fonts/1_1.svg" alt="icons" />
                <img className="icon-2" src="/fonts/2_1.svg" alt="icons" />
                <img className="icon-3" src="/fonts/3_1.svg" alt="icons" />
                <img className="icon-4" src="/fonts/4_1.svg" alt="icons" />
                <img className="icon-5" src="/fonts/5_1.svg" alt="icons" />
                <img className="icon-6" src="/fonts/6_1.svg" alt="icons" />
                <img className="icon-7" src="/fonts/7_1.svg" alt="icons" />
                <img className="icon-8" src="/fonts/8.svg" alt="icons" />
                <img className="icon-9" src="/fonts/9.svg" alt="icons" />
                <img className="icon-10" src="/fonts/10.svg" alt="icons" />
                <img className="icon-11" src="/fonts/11.svg" alt="icons" />
                <img className="icon-12" src="/fonts/12.svg" alt="icons" />
                <img className="icon-13" src="/fonts/13.svg" alt="icons" />
              </div>
              <div className="deal-detail">
                <p>
                  <img src="/fonts/15.svg" alt="" /> Deal of the Week
                </p>
                <h3>
                  Hurry Up! Offer ends in.
                  <span>Get UP TO 80% OFF</span>
                </h3>
                <div className="deal-timer">
                  <div className="time-block">
                    <div className="time">{timeLeft.days}</div>
                    <span className="text">Days</span>
                  </div>
                  <div className="time-block">
                    <div className="time">{timeLeft.hours}</div>
                    <span className="text">Hours</span>
                  </div>
                  <div className="time-block">
                    <div className="time">{timeLeft.minutes}</div>
                    <span className="text">Minute</span>
                  </div>
                  <div className="time-block">
                    <div className="time">{timeLeft.seconds}</div>
                    <span className="text">Second</span>
                  </div>
                </div>
                <Link href="/shop" className="sp-btn-4">
                  <i className="ri-handbag-line"></i>Shop Now
                </Link>
              </div>
              <img src="/images/1_2.png" className="character" alt="deal" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="deal-box box-2">
              <div className="deal-detail">
                <h3>
                  Fresh Fruits<span>100% Organic</span>
                </h3>
                <Link href="/shop" className="sp-btn-4">
                  <i className="ri-handbag-line"></i>Shop Now
                </Link>
                <div className="limit">
                  <svg
                    width="176"
                    height="176"
                    viewBox="0 0 176 176"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M82.3827 3.95294C84.7296 -0.623168 91.2704 -0.62317 93.6173 3.95293L101.537 19.3956C103.241 22.7184 107.441 23.8438 110.579 21.8183L125.159 12.4045C129.479 9.61488 135.144 12.8853 134.888 18.0217L134.026 35.3554C133.84 39.0851 136.915 42.1599 140.645 41.9743L157.978 41.1118C163.115 40.8562 166.385 46.5207 163.596 50.8412L154.182 65.4213C152.156 68.5585 153.282 72.7588 156.604 74.4629L172.047 82.3827C176.623 84.7296 176.623 91.2704 172.047 93.6173L156.604 101.537C153.282 103.241 152.156 107.441 154.182 110.579L163.596 125.159C166.385 129.479 163.115 135.144 157.978 134.888L140.645 134.026C136.915 133.84 133.84 136.915 134.026 140.645L134.888 157.978C135.144 163.115 129.479 166.385 125.159 163.596L110.579 154.182C107.441 152.156 103.241 153.282 101.537 156.604L93.6173 172.047C91.2704 176.623 84.7296 176.623 82.3827 172.047L74.4629 156.604C72.7588 153.282 68.5585 152.156 65.4213 154.182L50.8412 163.596C46.5207 166.385 40.8562 163.115 41.1118 157.978L41.9743 140.645C42.1599 136.915 39.0851 133.84 35.3554 134.026L18.0217 134.888C12.8853 135.144 9.61488 129.479 12.4045 125.159L21.8183 110.579C23.8438 107.441 22.7184 103.241 19.3956 101.537L3.95294 93.6173C-0.623168 91.2704 -0.62317 84.7296 3.95293 82.3827L19.3956 74.4629C22.7184 72.7588 23.8438 68.5585 21.8183 65.4213L12.4045 50.8412C9.61489 46.5207 12.8853 40.8562 18.0217 41.1118L35.3554 41.9743C39.0851 42.1599 42.1599 39.0851 41.9743 35.3554L41.1118 18.0217C40.8562 12.8853 46.5207 9.61489 50.8412 12.4045L65.4213 21.8183C68.5585 23.8438 72.7588 22.7184 74.4629 19.3956L82.3827 3.95294Z"></path>
                  </svg>
                  <p>Only</p>
                  <h3>$19.99</h3>
                </div>
              </div>
              <img src="/images/2_2.png" className="character" alt="deal" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
