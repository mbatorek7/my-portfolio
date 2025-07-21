import React from 'react';
import Typewriter from 'typewriter-effect';

const MatrixTypewriter = () => {
    return (
        <div
            style={{
                backgroundColor: 'black',
                color: '#0f0',
                fontFamily: 'Courier',
                fontSize: '40px',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Typewriter
                options={{
                    strings: ['Wake Up, Neo...'],
                    autoStart: true,
                    loop: false,
                    delay: 90
                }}
            />
        </div>
    );
};

export default MatrixTypewriter;
