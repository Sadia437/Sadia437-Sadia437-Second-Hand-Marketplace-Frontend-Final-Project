import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../../assets/icons/facebook.png";
import linkedin from "../../../assets/icons/in.png";
import twitter from "../../../assets/icons/twitter.png";
import ins from "../../../assets/icons/ins.png";

const Footer = () => (
  <footer className="bg-neutral text-white py-16 px-5 md:px-10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-primary">Second Hand Marketplace</h3>
        <p>Your trusted platform for buying and selling quality second-hand products.</p>
        <div className="flex gap-4">
          <a href="https://www.facebook.com"><img src={facebook} alt="Facebook" className="w-6 h-6" /></a>
          <a href="https://www.linkedin.com"><img src={linkedin} alt="LinkedIn" className="w-6 h-6" /></a>
          <a href="https://www.instagram.com"><img src={ins} alt="Instagram" className="w-6 h-6" /></a>
          <a href="https://www.twitter.com"><img src={twitter} alt="Twitter" className="w-6 h-6" /></a>
        </div>
      </div>

      <div>
        <h4 className="font-bold">Categories</h4>
        <ul>
          <li><Link to="/category/1">Electronics</Link></li>
          <li><Link to="/category/2">Furniture</Link></li>
          <li><Link to="/category/4">Clothing</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold">Quick Links</h4>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/help-center">Help Center</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold">Support</h4>
        <ul>
          <li><Link to="/help-center">Help Center</Link></li>
          <li><Link to="/terms-of-service">Terms of Service</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/cookie-policy">Cookie Policy</Link></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-700 mt-12 pt-8 text-center">
      <p>© 2025 Second Hand Marketplace. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
