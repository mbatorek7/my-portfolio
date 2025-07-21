import React, { useEffect, useRef } from 'react'

const MatrixRainingCode = () => {
    // ref to directly access canvas DOM element
    const canvasRef = useRef(null);

    useEffect(() => {
        //get canvas and its drawing context
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        //set width and height to match window size
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        //make canvas completely black before animation starts
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, width, height)

        //create 1 column for every 20px
        let columns = Math.floor(width / 20);

        //define characters I want displayed in animation
        const characters = "10";
        const charArray = characters.split("");

        //create array to track Y positon of the character in each column
        let drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1; // start near the top
        }

        //frames per second
        let frameRate = 25;
        let lastFrameTime = Date.now();

        const draw = () => {
            //transparent black rectangle
            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(0, 0, width, height);

            //green color for the characters and sizing
            ctx.fillStyle = "#0f0";
            ctx.font = "15px monospace";

            //create a loop for each column
            for (let i = 0; i < drops.length; i++) {
                //pick a random character
                const text = charArray[Math.floor(Math.random() * charArray.length)]
                ctx.fillText(text, i * 20, drops[i] * 20);

                //reset drop to the top when reaching the bottom
                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }

        //animation loop
        const animate = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - lastFrameTime;

            if (elapsedTime > 1000 / frameRate) {
                draw();
                lastFrameTime = currentTime;
            }
            requestAnimationFrame(animate); //repeat
        }

        //start animation loop
        animate();

        //handle window resizing
        const handleResize = () => {
            //update dimensions
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;

            //recaculate num of columns and reset drops
            columns = Math.floor(width / 20)
            drops = []
            for (let i = 0; i < columns; i++) {
                drops[i] = 1;
            }
        }

        //check if user is on mobile device for performance reasons
        const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)
        if (!isMobileDevice) {
            window.addEventListener('resize', handleResize)
        }

        //cleanup to prevent bugs
        return () => {
            if (!isMobileDevice) {
                window.removeEventListener('resize', handleResize)
            }
        }
    }, []) // only run when component mounts

    //canvas covers whole screen and sits behind other content
    return <canvas className='fixed top-0 left-0 w-full h-full z-[-1]' ref={canvasRef}></canvas>;
}

export default MatrixRainingCode
