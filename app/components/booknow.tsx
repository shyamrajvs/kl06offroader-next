export default function () {
  return (
    <div>
      <a href="#_" className="relative inline-block text-base group">
        <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-full group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-4 py-2 rounded-full bg-gray-50"></span>
          <span className="absolute left-0 w-36 h-36 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-10 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span className="relative font-bold">Book Now</span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-full group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-full"
        ></span>
      </a>
    </div>
  );
}
