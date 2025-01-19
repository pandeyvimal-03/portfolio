
export const fadeUP = (direction , delay)=>{
    return {
        hidden :{
            y : direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x : direction === 'left' ? 40 : direction === 'right' ? -40 : 0
        },
        show : {
            y : 0,
            x : 0,
            opacity : 1,
            transition  :{
                type : 'tween',
                duration : 1.2,
                delay : delay,
                ease : [0.25 , 0.25 , 0.25 , 0.75]
            }

        }
    }
}

export const leftAnimation = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  
 export const rightAnimation = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

export const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

export const fadeUpVariant2 = {
    hidden: { opacity: 0, y: 20 }, // Start farther below
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5, // Increase duration for smoothness
            ease: "easeIn"
        }
    }
};
export const containerVariant = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2 // Add delay between children
        }
    }
};
