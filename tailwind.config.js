

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/image/hero-man.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
        
        
      },
      backgroundColor:{
        'hoverColor':"#FB9912",
        'btnColor':"#355592",
        'heroBottom':"#F1F8FF",
        'bgNavbar':"#355592",
        
      },
      height:{
        'bgHeight':"80vh"
      },
      textColor:{
        'btnColor':"#355592",
        'menuColor':"#FB9912"
      },
      caretColor:{
        'caretColor':"#FB9912"
      },
      focusColor:"#FB9912",
      borderColor:{
        "border-color":"#FB9912"
      },
      ringColor:{
        'ringColor':"#355592"
      }
      
      
      
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}

