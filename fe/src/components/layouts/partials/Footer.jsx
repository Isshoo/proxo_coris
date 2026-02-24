function Footer() {
  return (
    <footer className="relative z-10 w-full bg-transparent px-4 py-5 transition-colors duration-200 md:px-10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center rounded-2xl bg-black px-4 py-10 md:px-6">
        <div className="mx-auto flex w-full max-w-6xl">
          <div className="flex w-full items-center text-white">
            &copy; {new Date().getFullYear()} LasalleVibers. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
