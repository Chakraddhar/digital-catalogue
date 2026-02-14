import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">GreenPower</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/applications">Applications</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-green-700 px-6 pb-4 space-y-3">
          <Link onClick={() => setOpen(false)} to="/">Home</Link><br />
          <Link onClick={() => setOpen(false)} to="/about">About</Link><br />
          <Link onClick={() => setOpen(false)} to="/products">Products</Link><br />
          <Link onClick={() => setOpen(false)} to="/applications">Applications</Link><br />
          <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}
