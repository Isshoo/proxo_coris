function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-200 bg-white px-4 py-4 transition-colors duration-200 md:px-6">
      <div className="mx-auto max-w-6xl text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} LasalleVibers. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
