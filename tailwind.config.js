/* eslint-disable no-multi-spaces, key-spacing */

module.exports = {
    content: [
        'src/**/*.jsx',
    ],
    theme: {
        fontFamily: {
            display: ['playfair Display', 'Helvetica', 'sans-serif'],
            body: ['Poppins', 'Helvetica', 'sans-serif'],
        },
        fontSize: {
            xs: ['0.75rem',      '1.5'],
            sm: ['0.875rem',     '1.5'],
            base: ['1rem',       '1.75'],
            lg: ['1.125rem',     '1.75'],
            xl: ['1.25rem',      '1.5'],
            '2xl': ['1.5rem',    '1.5'],
            '3xl': ['2rem',  '1.5'],
            '4xl': ['3rem',   '1.21'],
            '5xl': ['3.5rem',      '1.21'],
        },
        extend: {
            colors: {
              black: '#000000',
            },
            gray: {
              200: '#B8B8B8',
              700: '#262526',
              800: '#2E2D33',
            },
            orange: {
              200: '#FFC492',
            },
            blue: {
              100: '#C4E4EA',
            },
            margin: {
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
                '-1/12': '-8.333333%',
                '-2/12': '-16.666667%',
                '-3/12': '-25%',
                '-4/12': '-33.333333%',
                '-5/12': '-41.666667%',
                '-6/12': '-50%',
                '-7/12': '-58.333333%',
                '-8/12': '-66.666667%',
                '-9/12': '-75%',
                '-10/12': '-83.333333%',
                '-11/12': '-91.666667%',
            },
            flex: {
                '1/1': '0 0 100%',
                '1/12': '0 0 8.333333%',
                '2/12': '0 0 16.666667%',
                '3/12': '0 0 25%',
                '4/12': '0 0 33.333333%',
                '5/12': '0 0 41.666667%',
                '6/12': '0 0 50%',
                '7/12': '0 0 58.333333%',
                '8/12': '0 0 66.666667%',
                '9/12': '0 0 75%',
                '10/12': '0 0 83.333333%',
                '11/12': '0 0 91.666667%',
            },
            minWidth: {
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
            },
        },
    },
    plugins: [],
};
