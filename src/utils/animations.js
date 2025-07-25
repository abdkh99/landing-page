import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const heroAnimation = () => {
  // Animate hero text
  gsap.from('.card', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  });

  // Animate the card in the hero section
  gsap.from('.right-content .card', {
    x: 100,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    ease: 'elastic.out(1, 0.5)'
  });

  // Animate the email input and button
  gsap.from('.border', {
    scale: 0.9,
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: 'back.out(1.7)'
  });
};

export const navHoverAnimation = () => {
  // Select all nav items with the 'card' class
  const navItems = document.querySelectorAll('.Content .card');
  
  navItems.forEach(item => {
    // Create a span for the underline effect
    const underline = document.createElement('span');
    underline.style.display = 'block';
    underline.style.height = '2px';
    underline.style.width = '0';
    underline.style.backgroundColor = '#3b82f6';
    underline.style.position = 'absolute';
    underline.style.bottom = '-5px';
    underline.style.left = '0';
    underline.style.transition = 'width 0.3s ease';
    
    // Add the underline to the nav item
    item.style.position = 'relative';
    item.style.overflow = 'hidden';
    item.style.padding = '8px 0';
    item.appendChild(underline);
    
    // Mouse enter animation
    item.addEventListener('mouseenter', () => {
      gsap.to(underline, {
        width: '100%',
        duration: 0.3,
        ease: 'power2.out'
      });
      
      gsap.to(item, {
        y: -2,
        duration: 0.2,
        ease: 'power2.out'
      });
    });
    
    // Mouse leave animation
    item.addEventListener('mouseleave', () => {
      gsap.to(underline, {
        width: '0',
        duration: 0.3,
        ease: 'power2.in'
      });
      
      gsap.to(item, {
        y: 0,
        duration: 0.2,
        ease: 'power2.out'
      });
    });
  });
};
