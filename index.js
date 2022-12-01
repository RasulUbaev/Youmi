tailwind.config = {
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '3rem',
                    md: "4rem",
                    xl: '4rem',
                    '2xl': '5rem',
                    '3xl': '6rem',
                },
                screens: {
                    'xsm': "370px",
                    'sm': "504px",
                    'md': "688px",
                    'lg': "864px",
                    'xl': "1088px",
                    "2xl": "1260px",
                    "3xl": "1392px"
                }
            },

            fontFamily: {
                'mono': ['Montserrat, sans-serif'],
            },

            fontSize: {
                h1: ['2.5rem', {
                    lineHeight: '3.25rem',
                    fontWeight: '800',
                }],
                t16: ['1rem', {
                    lineHeight: '1.875rem',
                    fontWeight: '600',
                }],
                bt16: ['1rem', {
                    lineHeight: '1.75rem',
                    fontWeight: '600',
                }],
                p24: ['1.5rem', {
                    lineHeight: '2.125rem',
                    fontWeight: '500',
                }],
                p700: ['1.25rem', {
                    lineHeight: '1.25rem',
                    fontWeight: '700',
                }],
                xsmh1: ['1.9rem', {
                    lineHeight: '2.25rem',
                    fontWeight: '800',
                }],
                xsmp16: ['1rem', {
                    lineHeight: '1.2rem',
                    fontWeight: '500',
                }],
                h800: ['2.5rem', {
                    lineHeight: '3.25rem',
                    fontWeight: '800',
                }],
                h2800: ['1.9rem', {
                    lineHeight: '3.25rem',
                    fontWeight: '800',
                }],
                t18: ['1.125rem', {
                    lineHeight: '1.5625rem',
                    fontWeight: '500',
                }],
                t20: ['1.25rem', {
                    lineHeight: '1.75rem',
                    fontWeight: '500',
                }],
                t600: ['1.25rem', {
                    lineHeight: '1.75rem',
                    fontWeight: '600',
                }],
                t400: ['1.25rem', {
                    lineHeight: '1.5625rem',
                    fontWeight: '400',
                }],
                t14: ['0.875rem', {
                    lineHeight: '1.25rem',
                    fontWeight: '400',
                }],
                
            },
         
            screens: {
                'xsm': "370px",
                'sm': "504px",
                'md': "688px",
                'lg': "864px",
                'xl': "1088px",
                "2xl": "1260px",
                "3xl": "1392px",
            },
            colors: {
                "bg-hero": "#F9FCFF",
                "text-primary": " #7872B9",
                "text-secondary": "#4D4D52",
                "bg-pink": "#F1E6F7",
                "bg-blue-light": "#EBF5FF",
                "shadow": "#CDE1FF",
            },

            boxShadow: {
                'shadow': '13px 24px 5px 8px rgba(205, 225, 255, 0.2)',
              },

              width: {
                '280': '70rem',
              },
              height: {
                '404': '101rem',
              },

              backgroundImage: {
                'bg-round': "url('/images/bground.png')",
              },
              
            //   keyframes: {
            //     fade: {
            //         '0%': { transform: 'rotateX(-3deg)', opacity: 0 },
            //         '100%': { transform: 'rotateX(3deg)', opacity: 1 },
            //     }
            // },
            animation: {
                'fade': 'rotate-1'
            }
        }
    }
}