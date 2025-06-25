// Once UI configuration
export const style = {
  theme: 'dark',
  neutral: 'gray',
  brand: 'blue',
  accent: 'indigo',
  solid: 'contrast',
  solidStyle: 'flat',
  border: 'playful',
  surface: 'translucent',
  transition: 'all',
  scaling: '100'
};

export const display = {
  location: true,
  time: true
};

export const effects = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100
  },
  gradient: {
    display: true,
    x: 50,
    y: -25,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: 'accent-background-strong',
    colorEnd: 'static-transparent',
    opacity: 50
  },
  dots: {
    display: true,
    size: 2,
    color: 'brand-on-background-weak',
    opacity: 20
  },
  lines: {
    display: false,
    color: 'neutral-alpha-weak',
    opacity: 100
  },
  grid: {
    display: false,
    color: 'neutral-alpha-weak',
    opacity: 100,
    width: '32',
    height: '32'
  }
};

export const routes = {
  '/': true,
  '/about': true,
  '/work': true,
  '/blog': false,
  '/gallery': false
};

export const fonts = {
  heading: {
    variable: '--font-heading'
  },
  body: {
    variable: '--font-body'
  }
};

export const baseURL = process.env.NODE_ENV === 'production' 
  ? 'https://your-domain.com' 
  : 'http://localhost:3030';
