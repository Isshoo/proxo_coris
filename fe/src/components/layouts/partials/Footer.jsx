function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 md:px-6 py-4 transition-colors duration-200">
      <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} LasalleVibers. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
