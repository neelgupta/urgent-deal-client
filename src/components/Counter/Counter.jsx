import React, { useState, useEffect, useRef} from 'react'; 

const formatNumber = (num) => {
    return num >= 10000 ? `${Math.floor(num / 1000)}K+` : `${num}+`;
};

const Counter = ({ target, label }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef();
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCount();
            setHasAnimated(true);
          }
        },
        { threshold: 0.5 } 
      );
  
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);
  
    const animateCount = () => {
      let start = 0;
      const duration = 2000;
      const incrementTime = 50;
      const increment = Math.ceil(target / (duration / incrementTime));
  
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
    };

  return (
    <div ref={ref}>
      <h4>{formatNumber(count)}</h4>
      <p>{label}</p>
    </div>
  )
}

export default Counter
