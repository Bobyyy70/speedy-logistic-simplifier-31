
import type { Config } from "tailwindcss";

function addVariablesForColors(options: any) {
  const { addBase, theme } = options;
  
  // Convert colors to flat object with color-shade keys
  function flattenColorPalette(colors: Record<string, any>, prefix = ''): Record<string, string> {
    let result: Record<string, string> = {};
    
    Object.keys(colors).forEach(key => {
      const value = colors[key];
      const prefixedKey = prefix ? `${prefix}-${key}` : key;
      
      if (typeof value === 'string') {
        result[prefixedKey] = value;
      } else if (typeof value === 'object') {
        result = {
          ...result,
          ...flattenColorPalette(value, prefixedKey)
        };
      }
    });
    
    return result;
  }
  
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        speedelog: {
          50: '#EEF4FF',
          100: '#DEE9FF',
          200: '#B9D0FF',
          300: '#8FB1FF',
          400: '#6692FF',
          500: '#2F68F3', // Nouvelle couleur primaire
          600: '#1E4BD1',
          700: '#1738B0',
          800: '#162A8A',
          900: '#132254',
          glass: {
            50: '#F5F9FC',
            100: '#E6F0F9',
            200: '#D1E6F3',
          }
        },
        orange: {
          50: '#FFF9E7',
          100: '#FFF3CF',
          200: '#FFE7A0',
          300: '#FFD970',
          400: '#FFCA40',
          500: '#F3BA2F', // Nouvelle couleur secondaire
          600: '#D49B1F',
          700: '#B57E1A',
          800: '#96651A',
          900: '#78501A',
        },
        icon: {
          DEFAULT: "#F3BA2F",
          hover: "#D49B1F",
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
            opacity: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
            opacity: '1'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
            opacity: '1'
          },
          to: {
            height: '0',
            opacity: '0'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-out': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(10px)'
          }
        },
        'aurora': {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        'wave-pulse': {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.7 },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-out': 'fade-out 0.3s ease-out',
        'aurora': 'aurora 60s linear infinite',
        'wave-pulse': 'wave-pulse 4s ease-in-out infinite',
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'blue-gradient': 'linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 100%)',
      },
      boxShadow: {
        'glass-light': '0 4px 6px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.1)',
      }
    }
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;
