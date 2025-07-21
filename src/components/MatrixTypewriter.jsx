import React from 'react';
import Typewriter from 'typewriter-effect';

const MatrixTypewriter = () => {
    return (
        <div
            style={{
                backgroundColor: 'black',
                color: '#0f0',            // green text
                fontFamily: 'Courier',
                fontSize: '40px',
                height: '100vh',          // full viewport height
                display: 'flex',          // center horizontally + vertically
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Typewriter
                options={{
                    strings: ['Wake Up, Neo...'],
                    autoStart: true,
                    loop: false,    // only run once
                    delay: 90
                }}
            />
        </div>
    );
};

export default MatrixTypewriter;
